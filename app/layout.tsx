import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "MyceliumLink - The Decentralized Data Layer",
  description:
    "Connecting datacenters, enterprises, and individuals into one intelligent, secure, and autonomous data mesh.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "MyceliumLink - The Decentralized Data Layer",
    description:
      "Connecting datacenters, enterprises, and individuals into one intelligent, secure, and autonomous data mesh.",
    url: "https://myceliumlink.com",
    siteName: "MyceliumLink",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "MyceliumLink - Decentralized Data Infrastructure Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MyceliumLink - The Decentralized Data Layer",
    description:
      "Connecting datacenters, enterprises, and individuals into one intelligent, secure, and autonomous data mesh.",
    images: ["/api/og"],
  },
  metadataBase: new URL("https://myceliumlink.com"),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
