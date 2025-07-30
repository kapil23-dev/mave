"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Plus, Globe, Edit, BarChart3, Settings, Search, CreditCard } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"
import { AuthUserButton } from "@/components/auth-buttons"
import { PaymentModal } from "@/components/payment-modal"
import { useLanguage } from "@/hooks/use-language"

export default function Dashboard() {
  const { t } = useLanguage()
  const [searchTerm, setSearchTerm] = useState("")
  const [showPaymentModal, setShowPaymentModal] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<"free" | "pro" | "business">("pro")

  const websites = [
    {
      id: 1,
      name: "Bella Vista Restaurant",
      domain: "bellavista.buildfast.app",
      type: "Restaurant",
      status: "Published",
      visitors: "2.4k",
      orders: "156",
      revenue: "€3,240",
    },
    {
      id: 2,
      name: "Urban Threads",
      domain: "urbanthreads.buildfast.app",
      type: "Clothing",
      status: "Draft",
      visitors: "0",
      orders: "0",
      revenue: "€0",
    },
  ]

  const filteredWebsites = websites.filter((site) => site.name.toLowerCase().includes(searchTerm.toLowerCase()))

  const handleUpgrade = (plan: "free" | "pro" | "business") => {
    setSelectedPlan(plan)
    setShowPaymentModal(true)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      {/* Header */}
      <header className="bg-white dark:bg-slate-800 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="font-bold text-xl">BuildFast</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" onClick={() => handleUpgrade("pro")}>
                <CreditCard className="h-4 w-4 mr-2" />
                {t("payment.upgrade")}
              </Button>
              <LanguageSwitcher />
              <ThemeToggle />
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                {t("nav.settings")}
              </Button>
              <AuthUserButton />
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{t("dashboard.welcome")}</h1>
          <p className="text-gray-600 dark:text-gray-300">{t("dashboard.subtitle")}</p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{t("dashboard.totalWebsites")}</p>
                  <p className="text-2xl font-bold">2</p>
                </div>
                <Globe className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{t("dashboard.monthlyVisitors")}</p>
                  <p className="text-2xl font-bold">2.4k</p>
                </div>
                <BarChart3 className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{t("dashboard.totalOrders")}</p>
                  <p className="text-2xl font-bold">156</p>
                </div>
                <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
                  <span className="text-orange-600 font-bold">📦</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{t("dashboard.revenue")}</p>
                  <p className="text-2xl font-bold">€3,240</p>
                </div>
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                  <span className="text-green-600 font-bold">💰</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Upgrade Banner */}
        <Card className="mb-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-blue-200 dark:border-blue-800">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-lg mb-2">Unlock Premium Features</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Upgrade to Pro and get unlimited websites, custom domains, and priority support.
                </p>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" onClick={() => handleUpgrade("pro")}>
                  View Plans
                </Button>
                <Button onClick={() => handleUpgrade("pro")}>{t("payment.upgrade")} to Pro</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Websites Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">{t("dashboard.yourWebsites")}</h2>
            <Link href="/create">
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                {t("dashboard.createNew")}
              </Button>
            </Link>
          </div>

          {/* Search */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder={t("dashboard.search")}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Website Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWebsites.map((website) => (
              <Card key={website.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{website.name}</CardTitle>
                    <Badge variant={website.status === "Published" ? "default" : "secondary"}>
                      {website.status === "Published" ? t("dashboard.published") : t("dashboard.draft")}
                    </Badge>
                  </div>
                  <CardDescription>{website.domain}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Type:</span>
                      <Badge variant="outline">{website.type}</Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600 dark:text-gray-400">Visitors</p>
                        <p className="font-semibold">{website.visitors}</p>
                      </div>
                      <div>
                        <p className="text-gray-600 dark:text-gray-400">Orders</p>
                        <p className="font-semibold">{website.orders}</p>
                      </div>
                      <div>
                        <p className="text-gray-600 dark:text-gray-400">Revenue</p>
                        <p className="font-semibold">{website.revenue}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2 pt-2">
                      <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
                        <Link href={`/editor/${website.id}`}>
                          <Edit className="h-4 w-4 mr-1" />
                          {t("dashboard.edit")}
                        </Link>
                      </Button>
                      <Button size="sm" className="flex-1" asChild>
                        <Link href={`/preview/${website.id}`} target="_blank">
                          <Globe className="h-4 w-4 mr-1" />
                          {t("dashboard.view")}
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredWebsites.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">No websites found</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {searchTerm ? "Try adjusting your search terms" : "Create your first website to get started"}
              </p>
              {!searchTerm && (
                <Link href="/create">
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Create Your First Website
                  </Button>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>

      <PaymentModal isOpen={showPaymentModal} onClose={() => setShowPaymentModal(false)} selectedPlan={selectedPlan} />
    </div>
  )
}
