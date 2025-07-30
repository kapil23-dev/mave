import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, ArrowLeft, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export default function PrivacyPage() {
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
            <Shield className="h-8 w-8 text-blue-600" />
            <h1 className="text-3xl font-bold">Datenschutzerklärung</h1>
          </div>
          <div className="flex items-center space-x-2 mb-4">
            <Badge variant="secondary">
              <Shield className="h-3 w-3 mr-1" />
              DSGVO-konform
            </Badge>
            <Badge variant="outline">Gültig ab: {new Date().toLocaleDateString("de-DE")}</Badge>
          </div>
          <p className="text-gray-600">
            Diese Datenschutzerklärung informiert Sie über die Art, den Umfang und Zweck der Verarbeitung von
            personenbezogenen Daten durch BuildFast GmbH gemäß der Datenschutz-Grundverordnung (DSGVO).
          </p>
        </div>

        <div className="space-y-6">
          {/* Verantwortlicher */}
          <Card>
            <CardHeader>
              <CardTitle>1. Verantwortlicher</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-3">BuildFast GmbH</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span>Musterstraße 123, 10115 Berlin, Deutschland</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-gray-500" />
                    <span>+49 30 12345678</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-gray-500" />
                    <span>privacy@buildfast.app</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t">
                  <h4 className="font-medium mb-2">Datenschutzbeauftragter:</h4>
                  <p className="text-sm text-gray-600">datenschutz@buildfast.app</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Datenverarbeitung */}
          <Card>
            <CardHeader>
              <CardTitle>2. Arten der verarbeiteten Daten</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">Wir verarbeiten folgende Kategorien personenbezogener Daten:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Bestandsdaten</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Name, Vorname</li>
                    <li>• E-Mail-Adresse</li>
                    <li>• Telefonnummer</li>
                    <li>• Anschrift</li>
                    <li>• Geburtsdatum</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Nutzungsdaten</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• IP-Adresse</li>
                    <li>• Browser-Informationen</li>
                    <li>• Besuchte Seiten</li>
                    <li>• Verweildauer</li>
                    <li>• Referrer-URL</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Vertragsdaten</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Vertragsgegenstand</li>
                    <li>• Laufzeit</li>
                    <li>• Kundenkategorie</li>
                    <li>• Zahlungsdaten</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Zahlungsdaten</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Kreditkarteninformationen</li>
                    <li>• Bankverbindung</li>
                    <li>• Rechnungsadresse</li>
                    <li>• Transaktionshistorie</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Zwecke der Verarbeitung */}
          <Card>
            <CardHeader>
              <CardTitle>3. Zwecke der Datenverarbeitung und Rechtsgrundlagen</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold mb-2">Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO)</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Bereitstellung unserer Website-Builder-Services</li>
                  <li>• Kundenbetreuung und Support</li>
                  <li>• Abwicklung von Zahlungen</li>
                  <li>• Verwaltung von Benutzerkonten</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold mb-2">Berechtigte Interessen (Art. 6 Abs. 1 lit. f DSGVO)</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Verbesserung unserer Services</li>
                  <li>• Sicherheit und Betrugsschutz</li>
                  <li>• Direktmarketing (mit Widerspruchsrecht)</li>
                  <li>• Analyse der Website-Nutzung</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold mb-2">Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Newsletter-Versand</li>
                  <li>• Cookies (nicht technisch notwendige)</li>
                  <li>• Personalisierte Werbung</li>
                  <li>• Analyse-Tools</li>
                </ul>
              </div>

              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold mb-2">Gesetzliche Verpflichtung (Art. 6 Abs. 1 lit. c DSGVO)</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Steuerrechtliche Aufbewahrungspflichten</li>
                  <li>• Handelsrechtliche Dokumentation</li>
                  <li>• Geldwäscheprävention</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Speicherdauer */}
          <Card>
            <CardHeader>
              <CardTitle>4. Speicherdauer</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Wir speichern personenbezogene Daten nur so lange, wie es für die jeweiligen Zwecke erforderlich ist:
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Vertragsdaten</span>
                  <Badge variant="outline">10 Jahre nach Vertragsende</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Rechnungsdaten</span>
                  <Badge variant="outline">10 Jahre (HGB/AO)</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Newsletter-Daten</span>
                  <Badge variant="outline">Bis zum Widerruf</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Website-Logs</span>
                  <Badge variant="outline">7 Tage</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Cookie-Daten</span>
                  <Badge variant="outline">Gemäß Cookie-Richtlinie</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Ihre Rechte */}
          <Card>
            <CardHeader>
              <CardTitle>5. Ihre Rechte als betroffene Person</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">Nach der DSGVO stehen Ihnen folgende Rechte zu:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium">Auskunftsrecht (Art. 15 DSGVO)</h4>
                      <p className="text-sm text-gray-600">Information über verarbeitete Daten</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium">Berichtigungsrecht (Art. 16 DSGVO)</h4>
                      <p className="text-sm text-gray-600">Korrektur unrichtiger Daten</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-red-50 rounded-lg">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium">Löschungsrecht (Art. 17 DSGVO)</h4>
                      <p className="text-sm text-gray-600">"Recht auf Vergessenwerden"</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3 p-3 bg-purple-50 rounded-lg">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium">Einschränkungsrecht (Art. 18 DSGVO)</h4>
                      <p className="text-sm text-gray-600">Beschränkung der Verarbeitung</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-orange-50 rounded-lg">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium">Datenübertragbarkeit (Art. 20 DSGVO)</h4>
                      <p className="text-sm text-gray-600">Export Ihrer Daten</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-gray-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium">Widerspruchsrecht (Art. 21 DSGVO)</h4>
                      <p className="text-sm text-gray-600">Widerspruch gegen Verarbeitung</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Beschwerderecht</h4>
                <p className="text-sm text-gray-600">
                  Sie haben das Recht, sich bei einer Aufsichtsbehörde zu beschweren. Zuständig ist die Berliner
                  Beauftragte für Datenschutz und Informationsfreiheit.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Drittanbieter */}
          <Card>
            <CardHeader>
              <CardTitle>6. Drittanbieter und internationale Übermittlungen</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Wir arbeiten mit folgenden Drittanbietern zusammen, die möglicherweise Zugang zu Ihren Daten haben:
              </p>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium">Stripe (Zahlungsabwicklung)</h4>
                    <Badge variant="secondary">USA</Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">Verarbeitung von Zahlungsdaten für Transaktionen</p>
                  <p className="text-xs text-gray-500">Rechtsgrundlage: Angemessenheitsbeschluss der EU-Kommission</p>
                </div>
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium">Google Analytics</h4>
                    <Badge variant="secondary">USA</Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    Website-Analyse und Nutzungsstatistiken (nur mit Einwilligung)
                  </p>
                  <p className="text-xs text-gray-500">Rechtsgrundlage: Einwilligung, Standardvertragsklauseln</p>
                </div>
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium">AWS (Hosting)</h4>
                    <Badge variant="outline">EU</Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">Hosting und technische Infrastruktur</p>
                  <p className="text-xs text-gray-500">Rechtsgrundlage: Auftragsverarbeitung nach Art. 28 DSGVO</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Kontakt */}
          <Card>
            <CardHeader>
              <CardTitle>7. Kontakt und Änderungen</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium mb-3">Datenschutz-Kontakt</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-gray-500" />
                    <span>privacy@buildfast.app</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-gray-500" />
                    <span>datenschutz@buildfast.app (Datenschutzbeauftragter)</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Wir behalten uns vor, diese Datenschutzerklärung zu aktualisieren, um sie an geänderte Rechtslage oder
                bei Änderungen unserer Services anzupassen. Die aktuelle Version finden Sie stets auf unserer Website.
              </p>
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
