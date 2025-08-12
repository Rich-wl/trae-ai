export const traeDownloadData = {
"lastUpdate": "2025-08-07T03:38:54.423Z",
"versions": [
  {
    "timestamp": "2025-08-07T03:38:54.423Z",
    "win32": {
      "version": "1.0.16872",
      "uploadDate": 1754334883700,
      "uploadDateFormatted": "2025-08-04T19:14:43.700Z",
      "downloads": [
        {
          "region": "cn",
          "x64": "https://lf-cdn.trae.com.cn/obj/trae-com-cn/pkg/app/releases/stable/1.0.16872/win32/Trae-Setup-x64.exe"
        },
        {
          "region": "sg",
          "x64": "https://lf-cdn.trae.ai/obj/trae-ai-sg/pkg/app/releases/stable/1.0.16872/win32/Trae-Setup-x64.exe"
        },
        {
          "region": "va",
          "x64": "https://lf-cdn.trae.ai/obj/trae-ai-us/pkg/app/releases/stable/1.0.16872/win32/Trae-Setup-x64.exe"
        }
      ]
    },
    "darwin": {
      "version": "1.0.16871",
      "uploadDate": 1754325554646,
      "uploadDateFormatted": "2025-08-04T16:39:14.646Z",
      "downloads": [
        {
          "apple": "https://lf-cdn.trae.com.cn/obj/trae-com-cn/pkg/app/releases/stable/1.0.16871/darwin/Trae-darwin-arm64.dmg",
          "intel": "https://lf-cdn.trae.com.cn/obj/trae-com-cn/pkg/app/releases/stable/1.0.16871/darwin/Trae-darwin-x64.dmg",
          "region": "cn"
        },
        {
          "apple": "https://lf-cdn.trae.ai/obj/trae-ai-sg/pkg/app/releases/stable/1.0.16871/darwin/Trae-darwin-arm64.dmg",
          "intel": "https://lf-cdn.trae.ai/obj/trae-ai-sg/pkg/app/releases/stable/1.0.16871/darwin/Trae-darwin-x64.dmg",
          "region": "sg"
        },
        {
          "apple": "https://lf-cdn.trae.ai/obj/trae-ai-us/pkg/app/releases/stable/1.0.16871/darwin/Trae-darwin-arm64.dmg",
          "intel": "https://lf-cdn.trae.ai/obj/trae-ai-us/pkg/app/releases/stable/1.0.16871/darwin/Trae-darwin-x64.dmg",
          "region": "va"
        }
      ]
    },
    "logId": "202508071136033158F2F0B5221DDA6A81"
  }
]
};

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
