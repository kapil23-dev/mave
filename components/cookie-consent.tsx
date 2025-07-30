"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { X, Cookie, Settings, Shield, BarChart3 } from "lucide-react"
import Link from "next/link"

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, can't be disabled
    analytics: false,
    marketing: false,
    functional: false,
  })

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowBanner(true)
    } else {
      const savedPreferences = JSON.parse(consent)
      setPreferences(savedPreferences)
    }
  }, [])

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    }
    setPreferences(allAccepted)
    localStorage.setItem("cookie-consent", JSON.stringify(allAccepted))
    setShowBanner(false)
    setShowSettings(false)
  }

  const acceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    }
    setPreferences(necessaryOnly)
    localStorage.setItem("cookie-consent", JSON.stringify(necessaryOnly))
    setShowBanner(false)
    setShowSettings(false)
  }

  const savePreferences = () => {
    localStorage.setItem("cookie-consent", JSON.stringify(preferences))
    setShowBanner(false)
    setShowSettings(false)
  }

  const togglePreference = (key: keyof typeof preferences) => {
    if (key === "necessary") return // Can't disable necessary cookies
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  if (!showBanner) return null

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t shadow-lg">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex items-start space-x-3 flex-1">
              <Cookie className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2">Wir verwenden Cookies</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Diese Website verwendet Cookies, um Ihnen die bestmögliche Erfahrung zu bieten. Gemäß der DSGVO
                  benötigen wir Ihre Einwilligung für die Verwendung von Cookies, die nicht technisch notwendig sind.
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="secondary" className="text-xs">
                    <Shield className="h-3 w-3 mr-1" />
                    DSGVO-konform
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Datenschutz
                  </Badge>
                </div>
                <p className="text-xs text-gray-500">
                  Weitere Informationen finden Sie in unserer{" "}
                  <Link href="/privacy" className="text-blue-600 hover:underline">
                    Datenschutzerklärung
                  </Link>{" "}
                  und{" "}
                  <Link href="/cookies" className="text-blue-600 hover:underline">
                    Cookie-Richtlinie
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 lg:ml-4">
              <Button variant="outline" size="sm" onClick={() => setShowSettings(true)}>
                <Settings className="h-4 w-4 mr-2" />
                Einstellungen
              </Button>
              <Button variant="outline" size="sm" onClick={acceptNecessary}>
                Nur notwendige
              </Button>
              <Button size="sm" onClick={acceptAll}>
                Alle akzeptieren
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Cookie Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center space-x-2">
                    <Cookie className="h-5 w-5" />
                    <span>Cookie-Einstellungen</span>
                  </CardTitle>
                  <CardDescription>Verwalten Sie Ihre Cookie-Präferenzen gemäß der DSGVO</CardDescription>
                </div>
                <Button variant="ghost" size="sm" onClick={() => setShowSettings(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Necessary Cookies */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-green-600" />
                    <div>
                      <h4 className="font-medium">Notwendige Cookies</h4>
                      <p className="text-sm text-gray-600">Erforderlich für die Grundfunktionen der Website</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary">Immer aktiv</Badge>
                    <div className="w-10 h-6 bg-green-600 rounded-full flex items-center justify-end px-1">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-500 ml-7">
                  Diese Cookies sind für das Funktionieren der Website unerlässlich und können nicht deaktiviert werden.
                  Sie speichern keine persönlich identifizierbaren Informationen.
                </p>
              </div>

              {/* Analytics Cookies */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <BarChart3 className="h-5 w-5 text-blue-600" />
                    <div>
                      <h4 className="font-medium">Analyse-Cookies</h4>
                      <p className="text-sm text-gray-600">Helfen uns, die Website-Nutzung zu verstehen</p>
                    </div>
                  </div>
                  <button
                    onClick={() => togglePreference("analytics")}
                    className={`w-10 h-6 rounded-full flex items-center px-1 transition-colors ${
                      preferences.analytics ? "bg-blue-600 justify-end" : "bg-gray-300 justify-start"
                    }`}
                  >
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </button>
                </div>
                <p className="text-xs text-gray-500 ml-7">
                  Diese Cookies sammeln anonyme Informationen über die Nutzung unserer Website, um die Leistung zu
                  verbessern.
                </p>
              </div>

              {/* Marketing Cookies */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 bg-purple-100 rounded flex items-center justify-center">
                      <span className="text-purple-600 text-xs">📢</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Marketing-Cookies</h4>
                      <p className="text-sm text-gray-600">Für personalisierte Werbung und Inhalte</p>
                    </div>
                  </div>
                  <button
                    onClick={() => togglePreference("marketing")}
                    className={`w-10 h-6 rounded-full flex items-center px-1 transition-colors ${
                      preferences.marketing ? "bg-purple-600 justify-end" : "bg-gray-300 justify-start"
                    }`}
                  >
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </button>
                </div>
                <p className="text-xs text-gray-500 ml-7">
                  Diese Cookies werden verwendet, um Ihnen relevante Werbung und personalisierte Inhalte zu zeigen.
                </p>
              </div>

              {/* Functional Cookies */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 bg-orange-100 rounded flex items-center justify-center">
                      <span className="text-orange-600 text-xs">⚙️</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Funktionale Cookies</h4>
                      <p className="text-sm text-gray-600">Erweiterte Website-Funktionen</p>
                    </div>
                  </div>
                  <button
                    onClick={() => togglePreference("functional")}
                    className={`w-10 h-6 rounded-full flex items-center px-1 transition-colors ${
                      preferences.functional ? "bg-orange-600 justify-end" : "bg-gray-300 justify-start"
                    }`}
                  >
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </button>
                </div>
                <p className="text-xs text-gray-500 ml-7">
                  Diese Cookies ermöglichen erweiterte Funktionen und Personalisierung der Website.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 pt-4">
                <Button variant="outline" onClick={acceptNecessary} className="flex-1 bg-transparent">
                  Nur notwendige
                </Button>
                <Button onClick={savePreferences} className="flex-1">
                  Einstellungen speichern
                </Button>
                <Button onClick={acceptAll} className="flex-1">
                  Alle akzeptieren
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
