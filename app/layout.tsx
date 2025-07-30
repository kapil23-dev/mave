import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/hooks/use-language"
import { AuthWrapper } from "@/components/auth-wrapper"
import { CookieConsent } from "@/components/cookie-consent"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BuildFast - Create Professional Websites in Minutes",
  description:
    "Build stunning, customizable websites for your business without any technical skills. Perfect for restaurants, hotels, clothing stores, and more.",
  keywords: "website builder, business website, restaurant website, hotel booking, online store",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AuthWrapper>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <LanguageProvider>
              {children}
              <CookieConsent />
            </LanguageProvider>
          </ThemeProvider>
        </AuthWrapper>
      </body>
    </html>
  )
}
