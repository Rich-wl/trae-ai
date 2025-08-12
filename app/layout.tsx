import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
title: 'Download | TRAE - Collaborate with Intelligence',
description: 'Download TRAE for your desired operating system.',
keywords: 'TRAE,Builder,AI,IDE,automatic,collaboration,Multimodality,efficiency,Fast,Accurate,Precise,Context,free,Deploy, editor,code,coding,Autocomplete',
openGraph: {
  type: 'website',
  title: 'Download | TRAE - Collaborate with Intelligence',
  description: 'Download TRAE for your desired operating system.',
},
twitter: {
  card: 'summary',
  title: 'Download | TRAE - Collaborate with Intelligence',
  description: 'Download TRAE for your desired operating system.',
},
    generator: 'v0.dev'
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
      <link rel="icon" href="https://lf-cdn.trae.ai/obj/trae-ai-sg/trae_website_prod/favicon.png" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="renderer" content="webkit" />
      <meta name="layoutmode" content="standard" />
      <meta name="imagemode" content="force" />
      <meta name="wap-font-scale" content="no" />
      <meta name="format-detection" content="telephone=no" />
      <link rel="alternate" href="https://trae.ai/rss.xml" type="application/rss+xml" title="Trae Blog | RSS Feed" />
      <link rel="alternate" href="https://trae.ai/atom.xml" type="application/rss+xml" title="Trae Blog | RSS Feed" />
      <link rel="alternate" href="https://trae.ai/rss.json" type="application/json" title="Trae Blog | RSS Feed" />
      <link rel="alternate" href="https://www.trae.ai" hrefLang="en" />
      <link rel="alternate" href="https://www.trae.ai/ja" hrefLang="ja" />
      <style>{`
html {
font-family: ${GeistSans.style.fontFamily};
--font-sans: ${GeistSans.variable};
--font-mono: ${GeistMono.variable};
}
      `}</style>
    </head>
    <body>{children}</body>
  </html>
)
}
