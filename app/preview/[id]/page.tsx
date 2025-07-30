"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Edit, Share } from "lucide-react"
import Link from "next/link"

export default function PreviewPage({ params }: { params: { id: string } }) {
  // This would normally fetch the website data based on the ID
  const websiteData = {
    id: params.id,
    name: "Bella Vista Restaurant",
    domain: "bellavista.buildfast.app",
    status: "Published",
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Preview Header */}
      <div className="bg-white border-b p-4 sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/dashboard" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Dashboard</span>
            </Link>
            <div>
              <h1 className="font-semibold">{websiteData.name}</h1>
              <p className="text-sm text-gray-600">{websiteData.domain}</p>
            </div>
            <Badge variant={websiteData.status === "Published" ? "default" : "secondary"}>{websiteData.status}</Badge>
          </div>
          <div className="flex items-center space-x-2">
            <Button size="sm" variant="outline">
              <Share className="h-4 w-4 mr-2" />
              Share
            </Button>
            <Link href={`/editor/${params.id}`}>
              <Button size="sm">
                <Edit className="h-4 w-4 mr-2" />
                Edit
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Website Preview */}
      <div className="container mx-auto p-6">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Hero Section */}
          <div
            className="relative min-h-[400px] flex items-center justify-center text-center text-white"
            style={{
              backgroundImage: "url('/placeholder.svg?height=400&width=800&text=Restaurant+Hero')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="bg-black/50 p-8 rounded-lg">
              <h1 className="text-5xl font-bold mb-4">Welcome to Bella Vista</h1>
              <p className="text-xl mb-6">Authentic Italian cuisine in the heart of the city</p>
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                View Our Menu
              </Button>
            </div>
          </div>

          {/* About Section */}
          <div className="p-12">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-8">
                For over 30 years, Bella Vista has been serving authentic Italian cuisine made with the finest
                ingredients imported directly from Italy. Our family recipes have been passed down through generations,
                ensuring every dish tells a story of tradition and passion.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🍝</span>
                  </div>
                  <h3 className="font-semibold mb-2">Fresh Pasta</h3>
                  <p className="text-sm text-gray-600">Made daily with traditional Italian techniques</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🍕</span>
                  </div>
                  <h3 className="font-semibold mb-2">Wood-Fired Pizza</h3>
                  <p className="text-sm text-gray-600">Authentic Neapolitan style pizza from our brick oven</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🍷</span>
                  </div>
                  <h3 className="font-semibold mb-2">Fine Wines</h3>
                  <p className="text-sm text-gray-600">Carefully selected Italian wines to complement your meal</p>
                </div>
              </div>
            </div>
          </div>

          {/* Menu Section */}
          <div className="bg-gray-50 p-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Featured Menu</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-red-600">Antipasti</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">Bruschetta Classica</h4>
                        <p className="text-sm text-gray-600">Fresh tomatoes, basil, garlic on toasted bread</p>
                      </div>
                      <span className="font-semibold">€8.50</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">Antipasto Misto</h4>
                        <p className="text-sm text-gray-600">Selection of cured meats, cheeses, and olives</p>
                      </div>
                      <span className="font-semibold">€14.00</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-red-600">Pasta</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">Spaghetti Carbonara</h4>
                        <p className="text-sm text-gray-600">Classic Roman pasta with eggs, cheese, and pancetta</p>
                      </div>
                      <span className="font-semibold">€12.50</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">Lasagna della Casa</h4>
                        <p className="text-sm text-gray-600">Homemade lasagna with meat sauce and béchamel</p>
                      </div>
                      <span className="font-semibold">€15.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-8">
                <Button variant="outline" size="lg">
                  View Full Menu
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="p-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Visit Us</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-3 text-gray-600">
                    <p>📍 Musterstraße 123, 10115 Berlin, Germany</p>
                    <p>📞 +49 30 12345678</p>
                    <p>✉️ info@bellavista-berlin.de</p>
                  </div>
                  <h3 className="font-semibold mt-6 mb-4">Opening Hours</h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>Monday - Thursday</span>
                      <span>17:00 - 23:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Friday - Saturday</span>
                      <span>17:00 - 24:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>12:00 - 22:00</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Make a Reservation</h3>
                  <div className="space-y-4">
                    <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg" />
                    <input type="email" placeholder="Email Address" className="w-full p-3 border rounded-lg" />
                    <input type="tel" placeholder="Phone Number" className="w-full p-3 border rounded-lg" />
                    <div className="grid grid-cols-2 gap-4">
                      <input type="date" className="w-full p-3 border rounded-lg" />
                      <input type="time" className="w-full p-3 border rounded-lg" />
                    </div>
                    <select className="w-full p-3 border rounded-lg">
                      <option>Number of Guests</option>
                      <option>1 Guest</option>
                      <option>2 Guests</option>
                      <option>3 Guests</option>
                      <option>4 Guests</option>
                      <option>5+ Guests</option>
                    </select>
                    <Button className="w-full bg-red-600 hover:bg-red-700">Make Reservation</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="bg-gray-900 text-white p-8">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-xl font-bold mb-4">Bella Vista Restaurant</h3>
              <p className="text-gray-400 mb-4">Authentic Italian cuisine since 1990</p>
              <div className="flex justify-center space-x-6 text-sm">
                <Link href="#" className="hover:text-red-400">
                  Privacy Policy
                </Link>
                <Link href="#" className="hover:text-red-400">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="hover:text-red-400">
                  Cookie Policy
                </Link>
              </div>
              <p className="text-gray-500 text-sm mt-4">© 2024 Bella Vista Restaurant. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}
