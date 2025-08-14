import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "Vutrium - Rocket League AI",
  description:
    "Advanced Rocket League tool with AI that can play for you, visual enhancements, and more.",
  generator: "NeedlessPage819",
  icons: {
    icon: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/vutrium-logo.png`,
    shortcut: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/vutrium-logo.png`,
    apple: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/vutrium-logo.png`,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/vutrium-logo.png`} />
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
