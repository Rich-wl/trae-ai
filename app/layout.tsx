import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'TRAE - Collaborate with Intelligence',
  description: 'TRAE历史版本下载中心，提供所有TRAE下载版本。体验最新的AI编程工具：Trae AI, Trae Idea, Trae 2.0, Trae Solo和Trae国际版，支持智能代码生成和AI协作开发。',
  keywords: 'TRAE,trae ai,trae idea,trae 2.0,trae solo,trae国际版,trae 历史版本,trae下载,trae历史版本下载,AI programming,intelligent code,AI development tool,code generation,programming assistant',
  openGraph: {
    type: 'website',
    title: 'TRAE历史版本下载 - AI Programming Assistant | Trae AI, Trae Idea, Trae 2.0, Trae Solo',
    description: 'TRAE历史版本下载中心，提供所有TRAE下载版本。体验最新的AI编程工具：Trae AI, Trae Idea, Trae 2.0, Trae Solo和Trae国际版。',
  },
  twitter: {
    card: 'summary',
    title: 'TRAE历史版本下载 - AI Programming Assistant | Trae AI, Trae Idea, Trae 2.0, Trae Solo',
    description: 'TRAE历史版本下载中心，提供所有TRAE下载版本。体验最新的AI编程工具：Trae AI, Trae Idea, Trae 2.0, Trae Solo和Trae国际版。',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://lf-cdn.trae.ai/" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://lf-cdn.trae.ai/" />
        <link rel="icon" href="/favicon.ico" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="renderer" content="webkit" />
        <meta name="layoutmode" content="standard" />
        <meta name="imagemode" content="force" />
        <meta name="wap-font-scale" content="no" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="alternate" href="https://trae.ai/rss.xml" type="application/rss+xml" title="Trae Blog | RSS Feed" />
        <link rel="alternate" href="https://trae.ai/atom.xml" type="application/rss+xml" title="Trae Blog | RSS Feed" />
        <link rel="alternate" href="https://trae.ai/rss.json" type="application/json" title="Trae Blog | RSS Feed" />
        {/* Google AdSense 验证元标签 */}
        <meta name="google-adsense-account" content="ca-pub-4633597437741439" />
        <style>{`
html {
font-family: ${GeistSans.style.fontFamily};
--font-sans: ${GeistSans.variable};
--font-mono: ${GeistMono.variable};
}
      `}</style>

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Q0WF4ENWBS"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Q0WF4ENWBS');
          `}
        </Script>
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4633597437741439"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />

      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
