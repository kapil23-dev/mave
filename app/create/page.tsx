"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"
import { AuthUserButton } from "@/components/auth-buttons"
import { useLanguage } from "@/hooks/use-language"

export default function CreateWebsite() {
  const { t } = useLanguage()
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedType, setSelectedType] = useState("")
  const [businessName, setBusinessName] = useState("")
  const [selectedTemplate, setSelectedTemplate] = useState("")

  const businessTypes = [
    {
      id: "restaurant",
      name: t("business.restaurant"),
      icon: "🍽️",
      description: "Perfect for restaurants, cafes, and food delivery",
      features: ["Online Menu", "Table Booking", "Order Management", "Reviews"],
    },
    {
      id: "clothing",
      name: t("business.clothing"),
      icon: "👕",
      description: "Ideal for fashion brands and clothing retailers",
      features: ["Product Catalog", "Size Guide", "Wishlist", "Style Blog"],
    },
    {
      id: "hotel",
      name: t("business.hotel"),
      icon: "🏨",
      description: "Great for hotels, B&Bs, and vacation rentals",
      features: ["Room Booking", "Gallery", "Amenities", "Guest Reviews"],
    },
    {
      id: "salon",
      name: t("business.salon"),
      icon: "💄",
      description: "Perfect for salons, spas, and beauty services",
      features: ["Service Booking", "Staff Profiles", "Before/After", "Packages"],
    },
    {
      id: "fitness",
      name: t("business.fitness"),
      icon: "💪",
      description: "Ideal for gyms, personal trainers, and fitness studios",
      features: ["Class Schedule", "Membership Plans", "Trainer Profiles", "Progress Tracking"],
    },
    {
      id: "general",
      name: "General Business",
      icon: "🏢",
      description: "Flexible template for any type of business",
      features: ["About Page", "Services", "Contact Form", "Testimonials"],
    },
  ]

  const templates = [
    {
      id: "modern",
      name: "Modern",
      description: "Clean and contemporary design",
      preview: "/placeholder.svg?height=200&width=300&text=Modern+Template",
    },
    {
      id: "classic",
      name: "Classic",
      description: "Timeless and professional look",
      preview: "/placeholder.svg?height=200&width=300&text=Classic+Template",
    },
    {
      id: "minimal",
      name: "Minimal",
      description: "Simple and elegant design",
      preview: "/placeholder.svg?height=200&width=300&text=Minimal+Template",
    },
  ]

  const steps = [
    { number: 1, title: t("create.businessType"), description: t("create.chooseCategory") },
    { number: 2, title: t("create.businessInfo"), description: t("create.tellUs") },
    { number: 3, title: t("create.design"), description: t("create.pickTemplate") },
    { number: 4, title: t("create.customize"), description: t("create.makeYours") },
  ]

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return selectedType !== ""
      case 2:
        return businessName.trim() !== ""
      case 3:
        return selectedTemplate !== ""
      default:
        return true
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      {/* Header */}
      <header className="bg-white dark:bg-slate-800 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/dashboard"
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Dashboard</span>
            </Link>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">B</span>
                </div>
                <span className="font-bold text-xl">BuildFast</span>
              </div>
              <LanguageSwitcher />
              <ThemeToggle />
              <AuthUserButton />
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4 mb-6">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                    currentStep >= step.number
                      ? "bg-blue-600 border-blue-600 text-white"
                      : "border-gray-300 dark:border-gray-600 text-gray-400"
                  }`}
                >
                  {currentStep > step.number ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    <span className="text-sm font-semibold">{step.number}</span>
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`w-16 h-0.5 mx-2 ${currentStep > step.number ? "bg-blue-600" : "bg-gray-300 dark:bg-gray-600"}`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-2">{steps[currentStep - 1].title}</h1>
            <p className="text-gray-600 dark:text-gray-300">{steps[currentStep - 1].description}</p>
          </div>
        </div>

        {/* Step Content */}
        <div className="max-w-4xl mx-auto">
          {/* Step 1: Business Type */}
          {currentStep === 1 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {businessTypes.map((type) => (
                <Card
                  key={type.id}
                  className={`cursor-pointer transition-all hover:shadow-lg ${
                    selectedType === type.id ? "ring-2 ring-blue-600 bg-blue-50 dark:bg-blue-950" : ""
                  }`}
                  onClick={() => setSelectedType(type.id)}
                >
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{type.icon}</span>
                      <div>
                        <CardTitle className="text-lg">{type.name}</CardTitle>
                        <CardDescription className="text-sm">{type.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Includes:</p>
                      <div className="flex flex-wrap gap-1">
                        {type.features.map((feature, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Step 2: Business Info */}
          {currentStep === 2 && (
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle>{t("create.tellUs")}</CardTitle>
                <CardDescription>This information will help us customize your website</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="business-name">{t("create.businessName")} *</Label>
                  <Input
                    id="business-name"
                    placeholder="Enter your business name"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">{t("create.businessDesc")}</Label>
                  <Input id="description" placeholder="Brief description of what you do" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">{t("create.location")}</Label>
                  <Input id="location" placeholder="City, Country" />
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Template Selection */}
          {currentStep === 3 && (
            <div>
              <div className="text-center mb-8">
                <p className="text-gray-600 dark:text-gray-300">{t("create.pickTemplate")}</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {templates.map((template) => (
                  <Card
                    key={template.id}
                    className={`cursor-pointer transition-all hover:shadow-lg ${
                      selectedTemplate === template.id ? "ring-2 ring-blue-600" : ""
                    }`}
                    onClick={() => setSelectedTemplate(template.id)}
                  >
                    <CardContent className="p-0">
                      <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-t-lg mb-4">
                        <img
                          src={template.preview || "/placeholder.svg"}
                          alt={template.name}
                          className="w-full h-full object-cover rounded-t-lg"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold mb-2">{template.name}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{template.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Customize */}
          {currentStep === 4 && (
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle>{t("create.almostReady")}</CardTitle>
                <CardDescription>
                  Your website is being created. You can customize colors, fonts, and content next.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg p-4">
                  <div className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-green-600" />
                    <span className="font-medium text-green-800 dark:text-green-200">{t("create.websiteCreated")}</span>
                  </div>
                  <p className="text-green-700 dark:text-green-300 text-sm mt-1">
                    Your {businessName} website is ready for customization
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium">What's included:</h4>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>Professional {selectedTemplate} template</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>Mobile-responsive design</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>Integrated payment system</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>SEO optimization</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8 max-w-4xl mx-auto">
          <Button variant="outline" onClick={handleBack} disabled={currentStep === 1}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            {t("create.back")}
          </Button>

          {currentStep < 4 ? (
            <Button onClick={handleNext} disabled={!canProceed()}>
              {t("create.next")}
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          ) : (
            <div className="flex space-x-2">
              <Link href="/dashboard">
                <Button variant="outline">Go to Dashboard</Button>
              </Link>
              <Link href={`/editor/new-${selectedType}-${Date.now()}`}>
                <Button>
                  {t("create.startEditing")}
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
