"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Zap, Palette, CreditCard, Globe, Star } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"
import { AuthSignInButton, AuthSignUpButton } from "@/components/auth-buttons"
import { useLanguage } from "@/hooks/use-language"
import { useAuth } from "@/components/auth-wrapper"

export default function HomePage() {
  const { t } = useLanguage()
  const { isSignedIn } = useAuth()

  const businessTypes = [
    {
      name: t("business.restaurant"),
      icon: "🍽️",
      color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
    },
    {
      name: t("business.cafe"),
      icon: "☕",
      color: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
    },
    {
      name: t("business.clothing"),
      icon: "👕",
      color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    },
    { name: t("business.hotel"), icon: "🏨", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" },
    { name: t("business.salon"), icon: "💄", color: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200" },
    {
      name: t("business.fitness"),
      icon: "💪",
      color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    },
  ]

  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: t("features.fast.title"),
      description: t("features.fast.desc"),
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: t("features.customizable.title"),
      description: t("features.customizable.desc"),
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: t("features.payments.title"),
      description: t("features.payments.desc"),
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: t("features.mobile.title"),
      description: t("features.mobile.desc"),
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="border-b bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <span className="font-bold text-xl">BuildFast</span>
          </div>
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <ThemeToggle />
            {isSignedIn ? (
              <Link href="/dashboard">
                <Button>{t("nav.dashboard")}</Button>
              </Link>
            ) : (
              <>
                <AuthSignInButton />
                <AuthSignUpButton />
              </>
            )}
          </div>
        </div>
      </header>

      {/* Development Notice */}
      {!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY && (
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-b border-yellow-200 dark:border-yellow-800">
          <div className="container mx-auto px-4 py-2">
            <p className="text-sm text-yellow-800 dark:text-yellow-200 text-center">
              🚧 <strong>Development Mode:</strong> Authentication is simulated. Set up Clerk keys for production.{" "}
              <a
                href="https://dashboard.clerk.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:no-underline"
              >
                Get Clerk Keys →
              </a>
            </p>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-4">
            ✨ {t("hero.trusted")}
          </Badge>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
            {t("hero.title")}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">{t("hero.subtitle")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {isSignedIn ? (
              <Link href="/dashboard">
                <Button size="lg" className="text-lg px-8 py-6">
                  {t("nav.dashboard")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            ) : (
              <AuthSignUpButton />
            )}
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent">
              {t("hero.viewExamples")}
            </Button>
          </div>
        </div>
      </section>

      {/* Business Types */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t("business.title")}</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">{t("business.subtitle")}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {businessTypes.map((type, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="text-3xl mb-3">{type.icon}</div>
                <Badge variant="secondary" className={type.color}>
                  {type.name}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t("features.title")}</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">{t("features.subtitle")}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-white dark:bg-slate-800 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Loved by Business Owners</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    "BuildFast helped me get my restaurant online in just 10 minutes. The ordering system works
                    perfectly and my customers love it!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full mr-3"></div>
                    <div>
                      <p className="font-semibold">Maria Schmidt</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Bella Vista Restaurant</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Your Dream Website?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of business owners who chose BuildFast to grow their business online
          </p>
          {isSignedIn ? (
            <Link href="/dashboard">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                {t("nav.dashboard")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          ) : (
            <AuthSignUpButton />
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-slate-950 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">B</span>
                </div>
                <span className="font-bold text-xl">BuildFast</span>
              </div>
              <p className="text-gray-400">The easiest way to build professional websites for your business.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Templates
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Status
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 BuildFast. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
