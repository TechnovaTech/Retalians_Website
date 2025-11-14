import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { CartProvider } from "@/contexts/CartContext"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Retalians-website",
  description:
    "A 360° Retail Solution by the Retailers, for the Retailers. Manage multiple operations of your business using our ERP Software.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <CartProvider>
          {children}
          <Analytics />
        </CartProvider>
      </body>
    </html>
  )
}
