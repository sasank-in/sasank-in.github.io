import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com"),
  title: "Sasank Nukala — Backend & ML Engineer",
  description:
    "Backend and machine learning engineer building computer vision systems, ML pipelines, and inference APIs.",
  openGraph: {
    title: "Sasank Nukala — Backend & ML Engineer",
    description:
      "Backend and machine learning engineer building computer vision systems, ML pipelines, and inference APIs.",
    type: "profile",
  },
  twitter: {
    card: "summary",
    title: "Sasank Nukala — Backend & ML Engineer",
    description:
      "Backend and machine learning engineer building computer vision systems, ML pipelines, and inference APIs.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} antialiased`}>
      <body className="font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  )
}
