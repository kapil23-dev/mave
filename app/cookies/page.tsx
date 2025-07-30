import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, Cookie, BarChart3, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
              <ArrowLeft className="h-4 w-4" />
              <span>Zurück zur Startseite</span>
            </Link>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="font-bold text-xl">BuildFast</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <Cookie className="h-8 w-8 text-blue-600" />
            <h1 className="text-3xl font-bold">Cookie-Richtlinie</h1>
          </div>
          <div className="flex items-center space-x-2 mb-4">
            <Badge variant="secondary">
              <Shield className="h-3 w-3 mr-1" />
              DSGVO-konform
            </Badge>
            <Badge variant="outline">Letzte Aktualisierung: {new Date().toLocaleDateString("de-DE")}</Badge>
          </div>
          <p className="text-gray-600">
            Diese Cookie-Richtlinie erklärt, wie BuildFast ("wir", "uns", "unser") Cookies und ähnliche Technologien
            verwendet, wenn Sie unsere Website besuchen.
          </p>
        </div>

        <div className="space-y-6">
          {/* Was sind Cookies */}
          <Card>
            <CardHeader>
              <CardTitle>Was sind Cookies?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden, wenn Sie eine Website besuchen.
                Sie helfen der Website, sich an Ihre Aktionen und Präferenzen zu erinnern, sodass Sie diese nicht bei
                jedem Besuch erneut eingeben müssen.
              </p>
              <p className="text-gray-600">
                Gemäß der Datenschutz-Grundverordnung (DSGVO) und dem Telekommunikation-Telemedien-Datenschutz-Gesetz
                (TTDSG) benötigen wir Ihre Einwilligung für die Verwendung bestimmter Cookies.
              </p>
            </CardContent>
          </Card>

          {/* Arten von Cookies */}
          <Card>
            <CardHeader>
              <CardTitle>Arten von Cookies, die wir verwenden</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Notwendige Cookies */}
              <div className="border-l-4 border-green-500 pl-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  <h3 className="font-semibold text-lg">Notwendige Cookies</h3>
                  <Badge variant="secondary">Immer aktiv</Badge>
                </div>
                <p className="text-gray-600 mb-3">
                  Diese Cookies sind für das ordnungsgemäße Funktionieren unserer Website unerlässlich und können nicht
                  deaktiviert werden.
                </p>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <h4 className="font-medium mb-2">Beispiele:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Sitzungs-Cookies für die Anmeldung</li>
                    <li>• Sicherheits-Cookies zum Schutz vor Angriffen</li>
                    <li>• Cookie-Einstellungen speichern</li>
                    <li>• Warenkorb-Funktionalität</li>
                  </ul>
                </div>
              </div>

              {/* Analyse-Cookies */}
              <div className="border-l-4 border-blue-500 pl-4">
                <div className="flex items-center space-x-2 mb-2">
                  <BarChart3 className="h-5 w-5 text-blue-600" />
                  <h3 className="font-semibold text-lg">Analyse-Cookies</h3>
                  <Badge variant="outline">Einwilligung erforderlich</Badge>
                </div>
                <p className="text-gray-600 mb-3">
                  Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren, indem sie
                  anonyme Informationen sammeln und melden.
                </p>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <h4 className="font-medium mb-2">Zweck:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Besucherzahlen und Traffic-Quellen analysieren</li>
                    <li>• Beliebte Seiten und Inhalte identifizieren</li>
                    <li>• Website-Performance verbessern</li>
                    <li>• Benutzerfreundlichkeit optimieren</li>
                  </ul>
                </div>
              </div>

              {/* Marketing-Cookies */}
              <div className="border-l-4 border-purple-500 pl-4">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-5 h-5 bg-purple-100 rounded flex items-center justify-center">
                    <span className="text-purple-600 text-xs">📢</span>
                  </div>
                  <h3 className="font-semibold text-lg">Marketing-Cookies</h3>
                  <Badge variant="outline">Einwilligung erforderlich</Badge>
                </div>
                <p className="text-gray-600 mb-3">
                  Diese Cookies werden verwendet, um Ihnen relevante Werbung zu zeigen und die Effektivität unserer
                  Werbekampagnen zu messen.
                </p>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <h4 className="font-medium mb-2">Verwendung:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Personalisierte Werbung anzeigen</li>
                    <li>• Werbekampagnen-Leistung messen</li>
                    <li>• Retargeting-Kampagnen durchführen</li>
                    <li>• Social Media Integration</li>
                  </ul>
                </div>
              </div>

              {/* Funktionale Cookies */}
              <div className="border-l-4 border-orange-500 pl-4">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-5 h-5 bg-orange-100 rounded flex items-center justify-center">
                    <span className="text-orange-600 text-xs">⚙️</span>
                  </div>
                  <h3 className="font-semibold text-lg">Funktionale Cookies</h3>
                  <Badge variant="outline">Einwilligung erforderlich</Badge>
                </div>
                <p className="text-gray-600 mb-3">
                  Diese Cookies ermöglichen erweiterte Funktionen und Personalisierung der Website basierend auf Ihren
                  Präferenzen.
                </p>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <h4 className="font-medium mb-2">Funktionen:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Spracheinstellungen speichern</li>
                    <li>• Benutzerdefinierte Layouts merken</li>
                    <li>• Chat-Widget-Einstellungen</li>
                    <li>• Präferenzen für Benachrichtigungen</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Drittanbieter-Services */}
          <Card>
            <CardHeader>
              <CardTitle>Drittanbieter-Services</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Wir verwenden möglicherweise Services von Drittanbietern, die ihre eigenen Cookies setzen:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Google Analytics</h4>
                  <p className="text-sm text-gray-600 mb-2">Zur Analyse des Website-Traffics und Benutzerverhalten</p>
                  <Link
                    href="https://policies.google.com/privacy"
                    className="text-blue-600 text-sm hover:underline"
                    target="_blank"
                  >
                    Datenschutzerklärung →
                  </Link>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Stripe</h4>
                  <p className="text-sm text-gray-600 mb-2">Für sichere Zahlungsabwicklung</p>
                  <Link
                    href="https://stripe.com/privacy"
                    className="text-blue-600 text-sm hover:underline"
                    target="_blank"
                  >
                    Datenschutzerklärung →
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Ihre Rechte */}
          <Card>
            <CardHeader>
              <CardTitle>Ihre Rechte und Wahlmöglichkeiten</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">Gemäß der DSGVO haben Sie folgende Rechte:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium">Einwilligung widerrufen</h4>
                      <p className="text-sm text-gray-600">
                        Sie können Ihre Einwilligung jederzeit über die Cookie-Einstellungen widerrufen
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium">Cookies löschen</h4>
                      <p className="text-sm text-gray-600">Sie können Cookies in Ihren Browser-Einstellungen löschen</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium">Auskunft verlangen</h4>
                      <p className="text-sm text-gray-600">Sie können Auskunft über gespeicherte Daten verlangen</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium">Daten löschen</h4>
                      <p className="text-sm text-gray-600">Sie können die Löschung Ihrer Daten beantragen</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Kontakt */}
          <Card>
            <CardHeader>
              <CardTitle>Kontakt</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Bei Fragen zu unserer Cookie-Richtlinie oder Ihren Datenschutzrechten kontaktieren Sie uns:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>E-Mail:</strong> privacy@buildfast.app
                  </p>
                  <p>
                    <strong>Datenschutzbeauftragter:</strong> datenschutz@buildfast.app
                  </p>
                  <p>
                    <strong>Postanschrift:</strong> BuildFast GmbH, Musterstraße 123, 10115 Berlin, Deutschland
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <Link href="/">
            <Button>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Zurück zur Startseite
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
