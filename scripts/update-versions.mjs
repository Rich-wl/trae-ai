#!/usr/bin/env node

import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import axios from 'axios';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class VersionCrawler {
  constructor() {
    this.apiUrl = 'https://api.trae.ai/icube/api/v1/native/version/trae/latest';
    this.maxRetries = 3;
    this.retryDelay = 1000;
  }

  async fetchVersionData() {
    let lastError;

    for (let attempt = 1; attempt <= this.maxRetries; attempt++) {
      try {
        console.log(`正在请求Trae版本API (尝试 ${attempt}/${this.maxRetries})`);

        const response = await axios.get(this.apiUrl, {
          timeout: 10000,
          headers: {
            'User-Agent': 'TraeVersionCrawler/1.0.0',
            'Accept': 'application/json'
          }
        });

        const data = response.data;

        if (!this.validateVersionData(data)) {
          throw new Error('API响应数据格式无效');
        }

        console.log('成功获取版本数据');
        return data;

      } catch (error) {
        lastError = error;

        if (error.response) {
          console.error(`API请求失败: ${error.response.status} - ${error.response.statusText}`);
        } else if (error.request) {
          console.error(`网络请求失败: ${error.message}`);
        } else {
          console.error(`请求配置错误: ${error.message}`);
        }

        if (attempt < this.maxRetries) {
          console.log(`等待 ${this.retryDelay}ms 后重试...`);
          await this.sleep(this.retryDelay);
          this.retryDelay *= 2;
        }
      }
    }

    throw new Error(`API请求失败，已重试 ${this.maxRetries} 次: ${lastError.message}`);
  }

  validateVersionData(data) {
    return !!(
      data &&
      data.data &&
      data.data.manifest &&
      data.data.manifest.win32 &&
      data.data.manifest.darwin &&
      data.logId
    );
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  formatTimestamp(timestamp) {
    return new Date(timestamp).toISOString();
  }

  getCurrentTimestamp() {
    return new Date().toISOString();
  }

  checkForNewVersions(currentData, newVersionData) {
    const latestVersion = currentData.versions[currentData.versions.length - 1];
    
    if (!latestVersion) {
      return {
        hasNewVersion: true,
        win32: { hasNew: true, oldVersion: null, newVersion: newVersionData.data.manifest.win32.version },
        darwin: { hasNew: true, oldVersion: null, newVersion: newVersionData.data.manifest.darwin.version }
      };
    }

    const win32HasNew = latestVersion.win32?.version !== newVersionData.data.manifest.win32.version;
    const darwinHasNew = latestVersion.darwin?.version !== newVersionData.data.manifest.darwin.version;

    return {
      hasNewVersion: win32HasNew || darwinHasNew,
      win32: {
        hasNew: win32HasNew,
        oldVersion: latestVersion.win32?.version || null,
        newVersion: newVersionData.data.manifest.win32.version
      },
      darwin: {
        hasNew: darwinHasNew,
        oldVersion: latestVersion.darwin?.version || null,
        newVersion: newVersionData.data.manifest.darwin.version
      }
    };
  }
}

class VersionManager {
  constructor() {
    this.dataFilePath = path.join(__dirname, '../data/versions.json');
    this.projectDataPath = path.join(__dirname, '../lib/data.ts');
    this.crawler = new VersionCrawler();
  }

  async ensureDataDir() {
    const dataDir = path.dirname(this.dataFilePath);
    await fs.ensureDir(dataDir);
  }

  async loadVersionData() {
    await this.ensureDataDir();

    if (!await fs.pathExists(this.dataFilePath)) {
      console.log('版本数据文件不存在，创建初始数据结构');
      const initialData = {
        lastUpdate: this.crawler.getCurrentTimestamp(),
        versions: []
      };
      await this.saveVersionData(initialData);
      return initialData;
    }

    const data = await fs.readJson(this.dataFilePath);
    console.log(`成功读取版本数据，共 ${data.versions.length} 条记录`);
    return data;
  }

  async saveVersionData(data) {
    await this.ensureDataDir();
    await fs.writeJson(this.dataFilePath, data, { spaces: 2 });
    console.log(`版本数据已保存到: ${this.dataFilePath}`);
  }

  async addNewVersion(newVersionData) {
    const currentData = await this.loadVersionData();
    const versionComparison = this.crawler.checkForNewVersions(currentData, newVersionData);

    if (!versionComparison.hasNewVersion) {
      console.log('没有发现新版本');
      return {
        hasNewVersion: false,
        message: '没有发现新版本'
      };
    }

    // 创建新的版本记录
    const newVersionRecord = {
      timestamp: this.crawler.getCurrentTimestamp(),
      win32: {
        version: newVersionData.data.manifest.win32.version,
        uploadDate: newVersionData.data.manifest.win32.extra.uploadDate,
        uploadDateFormatted: this.crawler.formatTimestamp(newVersionData.data.manifest.win32.extra.uploadDate),
        downloads: newVersionData.data.manifest.win32.download
      },
      darwin: {
        version: newVersionData.data.manifest.darwin.version,
        uploadDate: newVersionData.data.manifest.darwin.extra.uploadDate,
        uploadDateFormatted: this.crawler.formatTimestamp(newVersionData.data.manifest.darwin.extra.uploadDate),
        downloads: newVersionData.data.manifest.darwin.download
      },
      logId: newVersionData.logId
    };

    // 添加新版本到历史记录
    currentData.versions.push(newVersionRecord);
    currentData.lastUpdate = this.crawler.getCurrentTimestamp();

    // 保存更新后的数据
    await this.saveVersionData(currentData);

    // 生成更新消息
    const updateMessage = this.generateUpdateMessage(versionComparison);
    console.log(updateMessage);

    return {
      hasNewVersion: true,
      message: updateMessage,
      newVersion: newVersionRecord,
      comparison: versionComparison
    };
  }

  generateUpdateMessage(comparison) {
    const messages = [];

    if (comparison.win32.hasNew) {
      messages.push(`Win32: ${comparison.win32.oldVersion} → ${comparison.win32.newVersion}`);
    }

    if (comparison.darwin.hasNew) {
      messages.push(`Darwin: ${comparison.darwin.oldVersion} → ${comparison.darwin.newVersion}`);
    }

    return `发现新版本: ${messages.join(', ')}`;
  }

  async syncToProject() {
    const crawlerData = await this.loadVersionData();
    
    // 读取现有的项目数据文件内容
    let existingProjectData;
    try {
      const projectContent = await fs.readFile(this.projectDataPath, 'utf8');
      // 提取现有的数据对象（去除export和类型定义）
      const dataMatch = projectContent.match(/export const traeDownloadData = ({[\s\S]*?});/);
      if (dataMatch) {
        existingProjectData = JSON.parse(dataMatch[1]);
      }
    } catch (error) {
      console.log('无法读取现有项目数据，将创建新文件');
      existingProjectData = null;
    }

    // 合并数据：保留项目中的现有版本，并添加新版本
    let mergedData;
    if (existingProjectData && existingProjectData.versions) {
      // 获取项目中现有版本和爬虫数据中的新版本
      const existingVersions = existingProjectData.versions;
      const crawlerVersions = crawlerData.versions;
      
      // 创建已存在版本的映射（基于timestamp和logId）
      const existingVersionMap = new Map();
      existingVersions.forEach(version => {
        const key = version.logId || version.timestamp;
        existingVersionMap.set(key, version);
      });
      
      // 合并版本：先添加现有版本，再添加新版本（去重）
      const allVersions = [...existingVersions];
      crawlerVersions.forEach(newVersion => {
        const key = newVersion.logId || newVersion.timestamp;
        if (!existingVersionMap.has(key)) {
          allVersions.push(newVersion);
          console.log(`📝 添加新版本记录: ${newVersion.win32?.version || 'N/A'} / ${newVersion.darwin?.version || 'N/A'}`);
        }
      });
      
      // 按时间戳排序（最新的在最后）
      allVersions.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
      
      mergedData = {
        lastUpdate: crawlerData.lastUpdate,
        versions: allVersions
      };
      
      console.log(`🔀 合并完成: 项目现有 ${existingVersions.length} 条记录，爬虫 ${crawlerVersions.length} 条记录，合并后 ${allVersions.length} 条记录`);
    } else {
      // 如果项目中没有现有数据，直接使用爬虫数据
      mergedData = crawlerData;
      console.log('📝 项目中无现有数据，使用爬虫数据初始化');
    }

    const tsContent = this.generateTypeScriptContent(mergedData);
    await fs.writeFile(this.projectDataPath, tsContent, 'utf8');
    console.log(`✅ 成功同步数据到项目文件: ${this.projectDataPath}`);
  }

  generateTypeScriptContent(versionData) {
    const formattedData = JSON.stringify(versionData, null, 2);
    
    return `export const traeDownloadData = ${formattedData};

export type DownloadLink = {
  region: string;
  x64?: string;
  apple?: string;
  intel?: string;
};

export type PlatformVersion = {
  version: string;
  uploadDate: number;
  uploadDateFormatted: string;
  downloads: DownloadLink[];
};

export type VersionEntry = {
  timestamp: string;
  win32?: PlatformVersion;
  darwin?: PlatformVersion;
  logId: string;
};

export type TraeData = {
  lastUpdate: string;
  versions: VersionEntry[];
};
`;
  }

  async cleanupOldVersions(keepCount = 50) {
    const data = await this.loadVersionData();

    if (data.versions.length <= keepCount) {
      console.log(`版本记录数量 (${data.versions.length}) 未超过限制 (${keepCount})，无需清理`);
      return;
    }

    const removedCount = data.versions.length - keepCount;
    data.versions = data.versions.slice(-keepCount);
    data.lastUpdate = this.crawler.getCurrentTimestamp();

    await this.saveVersionData(data);
    console.log(`已清理 ${removedCount} 条旧版本记录，保留 ${keepCount} 条最新记录`);
  }
}

async function main() {
  try {
    console.log('=== 🚀 Trae版本爬虫启动 ===');

    const versionManager = new VersionManager();
    const crawler = new VersionCrawler();

    // 执行爬虫任务
    console.log('📡 正在获取版本数据...');
    const versionData = await crawler.fetchVersionData();

    // 处理版本更新
    console.log('🔍 检查版本更新...');
    const updateResult = await versionManager.addNewVersion(versionData);

    let hasChanges = false;

    if (updateResult.hasNewVersion) {
      console.log(`✅ ${updateResult.message}`);
      hasChanges = true;

      // 清理旧版本记录
      await versionManager.cleanupOldVersions(50);
    } else {
      console.log('ℹ️ 没有发现新版本');
    }

    // 同步数据到项目
    console.log('🔄 同步数据到项目文件...');
    await versionManager.syncToProject();
    
    // 只有在有新版本时才设置hasChanges为true（同步不算更改）
    // hasChanges在前面的updateResult.hasNewVersion中已经设置

    console.log('=== ✅ Trae版本爬虫完成 ===');

    // 为GitHub Actions输出结果
    if (hasChanges) {
      console.log('::set-output name=has_changes::true');
    } else {
      console.log('::set-output name=has_changes::false');
    }

    process.exit(0);

  } catch (error) {
    console.error(`❌ 程序执行失败: ${error.message}`);
    process.exit(1);
  }
}

main();