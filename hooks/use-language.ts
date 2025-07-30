"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "de" | "en-US" | "en-GB"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  de: {
    // Navigation
    "nav.home": "Startseite",
    "nav.dashboard": "Dashboard",
    "nav.signIn": "Anmelden",
    "nav.signUp": "Registrieren",
    "nav.getStarted": "Loslegen",
    "nav.settings": "Einstellungen",

    // Hero Section
    "hero.title": "Erstellen Sie Ihre Business-Website in Minuten",
    "hero.subtitle":
      "Erstellen Sie eine beeindruckende, professionelle Website für Ihr Unternehmen ohne technische Kenntnisse. Schritt für Schritt, vollständig anpassbar, mit integrierten Zahlungen.",
    "hero.cta": "Kostenlos starten",
    "hero.viewExamples": "Beispiele ansehen",
    "hero.trusted": "Vertraut von 10.000+ Unternehmen",

    // Business Types
    "business.title": "Perfekt für jedes Unternehmen",
    "business.subtitle": "Wählen Sie aus professionell gestalteten Vorlagen für Ihre Branche",
    "business.restaurant": "Restaurant",
    "business.cafe": "Café",
    "business.clothing": "Bekleidung",
    "business.hotel": "Hotel",
    "business.salon": "Salon",
    "business.fitness": "Fitness",

    // Features
    "features.title": "Alles was Sie zum Erfolg brauchen",
    "features.subtitle":
      "Integrierte Funktionen, die Ihrem Unternehmen beim Wachstum helfen, keine zusätzlichen Plugins erforderlich",
    "features.fast.title": "Blitzschnelle Einrichtung",
    "features.fast.desc": "Bringen Sie Ihr Unternehmen in unter 5 Minuten online mit unserer geführten Einrichtung",
    "features.customizable.title": "Vollständig anpassbar",
    "features.customizable.desc": "Passen Sie jeden Aspekt Ihrer Website perfekt an Ihre Marke an",
    "features.payments.title": "Integrierte Zahlungen",
    "features.payments.desc": "Akzeptieren Sie sofort Zahlungen mit Stripe und anderen deutschen Zahlungsmethoden",
    "features.mobile.title": "Mobil optimiert",
    "features.mobile.desc": "Ihre Website sieht auf jedem Gerät automatisch perfekt aus",

    // Dashboard
    "dashboard.welcome": "Willkommen zurück! 👋",
    "dashboard.subtitle": "Verwalten Sie Ihre Websites und lassen Sie Ihr Unternehmen wachsen",
    "dashboard.totalWebsites": "Websites gesamt",
    "dashboard.monthlyVisitors": "Monatliche Besucher",
    "dashboard.totalOrders": "Bestellungen gesamt",
    "dashboard.revenue": "Umsatz",
    "dashboard.yourWebsites": "Ihre Websites",
    "dashboard.createNew": "Neue Website erstellen",
    "dashboard.search": "Websites durchsuchen...",
    "dashboard.edit": "Bearbeiten",
    "dashboard.view": "Ansehen",
    "dashboard.published": "Veröffentlicht",
    "dashboard.draft": "Entwurf",

    // Create Website
    "create.businessType": "Unternehmenstyp",
    "create.businessInfo": "Unternehmensinformationen",
    "create.design": "Design",
    "create.customize": "Anpassen",
    "create.chooseCategory": "Wählen Sie Ihre Unternehmenskategorie",
    "create.tellUs": "Erzählen Sie uns von Ihrem Unternehmen",
    "create.pickTemplate": "Wählen Sie ein Design, das zu Ihrem Stil passt",
    "create.makeYours": "Machen Sie es zu Ihrem",
    "create.businessName": "Unternehmensname",
    "create.businessDesc": "Unternehmensbeschreibung (Optional)",
    "create.location": "Standort (Optional)",
    "create.back": "Zurück",
    "create.next": "Weiter",
    "create.almostReady": "🎉 Fast fertig!",
    "create.websiteCreated": "Website erfolgreich erstellt!",
    "create.startEditing": "Bearbeitung starten",

    // Auth
    "auth.signIn": "Anmelden",
    "auth.signUp": "Konto erstellen",
    "auth.welcomeBack": "Willkommen zurück",
    "auth.createAccount": "Erstellen Sie Ihr Konto",
    "auth.signInDesc": "Melden Sie sich in Ihrem Konto an, um weiterzumachen",
    "auth.signUpDesc": "Beginnen Sie noch heute mit dem Erstellen Ihrer professionellen Website",
    "auth.email": "E-Mail",
    "auth.password": "Passwort",
    "auth.firstName": "Vorname",
    "auth.lastName": "Nachname",
    "auth.rememberMe": "Angemeldet bleiben",
    "auth.forgotPassword": "Passwort vergessen?",
    "auth.continueWith": "Weiter mit",
    "auth.alreadyHaveAccount": "Haben Sie bereits ein Konto?",
    "auth.dontHaveAccount": "Haben Sie noch kein Konto?",
    "auth.agreeToTerms":
      "Mit der Erstellung eines Kontos stimmen Sie unseren Nutzungsbedingungen und Datenschutzrichtlinien zu",

    // Payment
    "payment.title": "Wählen Sie Ihren Plan",
    "payment.subtitle": "Beginnen Sie kostenlos und upgraden Sie jederzeit",
    "payment.free": "Kostenlos",
    "payment.pro": "Pro",
    "payment.business": "Business",
    "payment.monthly": "Monatlich",
    "payment.yearly": "Jährlich",
    "payment.save": "Sparen Sie",
    "payment.currentPlan": "Aktueller Plan",
    "payment.upgrade": "Upgraden",
    "payment.getStarted": "Loslegen",

    // Common
    "common.loading": "Laden...",
    "common.save": "Speichern",
    "common.cancel": "Abbrechen",
    "common.delete": "Löschen",
    "common.edit": "Bearbeiten",
    "common.preview": "Vorschau",
    "common.publish": "Veröffentlichen",
    "common.unpublish": "Veröffentlichung aufheben",
    "common.duplicate": "Duplizieren",
    "common.settings": "Einstellungen",
    "common.help": "Hilfe",
    "common.support": "Support",
    "common.documentation": "Dokumentation",
    "common.contact": "Kontakt",
    "common.about": "Über uns",
    "common.privacy": "Datenschutz",
    "common.terms": "Nutzungsbedingungen",
    "common.cookies": "Cookie-Richtlinie",
  },
  "en-US": {
    // Navigation
    "nav.home": "Home",
    "nav.dashboard": "Dashboard",
    "nav.signIn": "Sign In",
    "nav.signUp": "Sign Up",
    "nav.getStarted": "Get Started",
    "nav.settings": "Settings",

    // Hero Section
    "hero.title": "Build Your Business Website in Minutes",
    "hero.subtitle":
      "Create a stunning, professional website for your business without any technical skills. One step at a time, fully customizable, with payments built-in.",
    "hero.cta": "Start Building Free",
    "hero.viewExamples": "View Examples",
    "hero.trusted": "Trusted by 10,000+ businesses",

    // Business Types
    "business.title": "Perfect for Any Business",
    "business.subtitle": "Choose from professionally designed templates tailored for your industry",
    "business.restaurant": "Restaurant",
    "business.cafe": "Cafe",
    "business.clothing": "Clothing",
    "business.hotel": "Hotel",
    "business.salon": "Salon",
    "business.fitness": "Fitness",

    // Features
    "features.title": "Everything You Need to Succeed",
    "features.subtitle": "Built-in features that help your business grow, no additional plugins needed",
    "features.fast.title": "Lightning Fast Setup",
    "features.fast.desc": "Get your business online in under 5 minutes with our guided setup",
    "features.customizable.title": "Fully Customizable",
    "features.customizable.desc": "Tailor every aspect of your site to match your brand perfectly",
    "features.payments.title": "Integrated Payments",
    "features.payments.desc": "Accept payments instantly with Stripe and other payment methods",
    "features.mobile.title": "Mobile Optimized",
    "features.mobile.desc": "Your site looks perfect on every device, automatically",

    // Dashboard
    "dashboard.welcome": "Welcome back! 👋",
    "dashboard.subtitle": "Manage your websites and grow your business",
    "dashboard.totalWebsites": "Total Websites",
    "dashboard.monthlyVisitors": "Monthly Visitors",
    "dashboard.totalOrders": "Total Orders",
    "dashboard.revenue": "Revenue",
    "dashboard.yourWebsites": "Your Websites",
    "dashboard.createNew": "Create New Website",
    "dashboard.search": "Search websites...",
    "dashboard.edit": "Edit",
    "dashboard.view": "View",
    "dashboard.published": "Published",
    "dashboard.draft": "Draft",

    // Create Website
    "create.businessType": "Business Type",
    "create.businessInfo": "Business Info",
    "create.design": "Design",
    "create.customize": "Customize",
    "create.chooseCategory": "Choose your business category",
    "create.tellUs": "Tell us about your business",
    "create.pickTemplate": "Pick your template style",
    "create.makeYours": "Make it yours",
    "create.businessName": "Business Name",
    "create.businessDesc": "Business Description (Optional)",
    "create.location": "Location (Optional)",
    "create.back": "Back",
    "create.next": "Next",
    "create.almostReady": "🎉 Almost Ready!",
    "create.websiteCreated": "Website Created Successfully!",
    "create.startEditing": "Start Editing",

    // Auth
    "auth.signIn": "Sign In",
    "auth.signUp": "Sign Up",
    "auth.welcomeBack": "Welcome back",
    "auth.createAccount": "Create your account",
    "auth.signInDesc": "Sign in to your account to continue building",
    "auth.signUpDesc": "Start building your professional website today",
    "auth.email": "Email",
    "auth.password": "Password",
    "auth.firstName": "First name",
    "auth.lastName": "Last name",
    "auth.rememberMe": "Remember me",
    "auth.forgotPassword": "Forgot password?",
    "auth.continueWith": "Continue with",
    "auth.alreadyHaveAccount": "Already have an account?",
    "auth.dontHaveAccount": "Don't have an account?",
    "auth.agreeToTerms": "By creating an account, you agree to our Terms of Service and Privacy Policy",

    // Payment
    "payment.title": "Choose Your Plan",
    "payment.subtitle": "Start free and upgrade anytime",
    "payment.free": "Free",
    "payment.pro": "Pro",
    "payment.business": "Business",
    "payment.monthly": "Monthly",
    "payment.yearly": "Yearly",
    "payment.save": "Save",
    "payment.currentPlan": "Current Plan",
    "payment.upgrade": "Upgrade",
    "payment.getStarted": "Get Started",

    // Common
    "common.loading": "Loading...",
    "common.save": "Save",
    "common.cancel": "Cancel",
    "common.delete": "Delete",
    "common.edit": "Edit",
    "common.preview": "Preview",
    "common.publish": "Publish",
    "common.unpublish": "Unpublish",
    "common.duplicate": "Duplicate",
    "common.settings": "Settings",
    "common.help": "Help",
    "common.support": "Support",
    "common.documentation": "Documentation",
    "common.contact": "Contact",
    "common.about": "About",
    "common.privacy": "Privacy",
    "common.terms": "Terms",
    "common.cookies": "Cookies",
  },
  "en-GB": {
    // Navigation
    "nav.home": "Home",
    "nav.dashboard": "Dashboard",
    "nav.signIn": "Sign In",
    "nav.signUp": "Sign Up",
    "nav.getStarted": "Get Started",
    "nav.settings": "Settings",

    // Hero Section
    "hero.title": "Build Your Business Website in Minutes",
    "hero.subtitle":
      "Create a stunning, professional website for your business without any technical skills. One step at a time, fully customisable, with payments built-in.",
    "hero.cta": "Start Building Free",
    "hero.viewExamples": "View Examples",
    "hero.trusted": "Trusted by 10,000+ businesses",

    // Business Types
    "business.title": "Perfect for Any Business",
    "business.subtitle": "Choose from professionally designed templates tailored for your industry",
    "business.restaurant": "Restaurant",
    "business.cafe": "Café",
    "business.clothing": "Clothing",
    "business.hotel": "Hotel",
    "business.salon": "Salon",
    "business.fitness": "Fitness",

    // Features
    "features.title": "Everything You Need to Succeed",
    "features.subtitle": "Built-in features that help your business grow, no additional plugins needed",
    "features.fast.title": "Lightning Fast Setup",
    "features.fast.desc": "Get your business online in under 5 minutes with our guided setup",
    "features.customizable.title": "Fully Customisable",
    "features.customizable.desc": "Tailor every aspect of your site to match your brand perfectly",
    "features.payments.title": "Integrated Payments",
    "features.payments.desc": "Accept payments instantly with Stripe and other European payment methods",
    "features.mobile.title": "Mobile Optimised",
    "features.mobile.desc": "Your site looks perfect on every device, automatically",

    // Dashboard
    "dashboard.welcome": "Welcome back! 👋",
    "dashboard.subtitle": "Manage your websites and grow your business",
    "dashboard.totalWebsites": "Total Websites",
    "dashboard.monthlyVisitors": "Monthly Visitors",
    "dashboard.totalOrders": "Total Orders",
    "dashboard.revenue": "Revenue",
    "dashboard.yourWebsites": "Your Websites",
    "dashboard.createNew": "Create New Website",
    "dashboard.search": "Search websites...",
    "dashboard.edit": "Edit",
    "dashboard.view": "View",
    "dashboard.published": "Published",
    "dashboard.draft": "Draft",

    // Create Website
    "create.businessType": "Business Type",
    "create.businessInfo": "Business Info",
    "create.design": "Design",
    "create.customize": "Customise",
    "create.chooseCategory": "Choose your business category",
    "create.tellUs": "Tell us about your business",
    "create.pickTemplate": "Pick your template style",
    "create.makeYours": "Make it yours",
    "create.businessName": "Business Name",
    "create.businessDesc": "Business Description (Optional)",
    "create.location": "Location (Optional)",
    "create.back": "Back",
    "create.next": "Next",
    "create.almostReady": "🎉 Almost Ready!",
    "create.websiteCreated": "Website Created Successfully!",
    "create.startEditing": "Start Editing",

    // Auth
    "auth.signIn": "Sign In",
    "auth.signUp": "Sign Up",
    "auth.welcomeBack": "Welcome back",
    "auth.createAccount": "Create your account",
    "auth.signInDesc": "Sign in to your account to continue building",
    "auth.signUpDesc": "Start building your professional website today",
    "auth.email": "Email",
    "auth.password": "Password",
    "auth.firstName": "First name",
    "auth.lastName": "Surname",
    "auth.rememberMe": "Remember me",
    "auth.forgotPassword": "Forgot password?",
    "auth.continueWith": "Continue with",
    "auth.alreadyHaveAccount": "Already have an account?",
    "auth.dontHaveAccount": "Don't have an account?",
    "auth.agreeToTerms": "By creating an account, you agree to our Terms of Service and Privacy Policy",

    // Payment
    "payment.title": "Choose Your Plan",
    "payment.subtitle": "Start free and upgrade anytime",
    "payment.free": "Free",
    "payment.pro": "Pro",
    "payment.business": "Business",
    "payment.monthly": "Monthly",
    "payment.yearly": "Yearly",
    "payment.save": "Save",
    "payment.currentPlan": "Current Plan",
    "payment.upgrade": "Upgrade",
    "payment.getStarted": "Get Started",

    // Common
    "common.loading": "Loading...",
    "common.save": "Save",
    "common.cancel": "Cancel",
    "common.delete": "Delete",
    "common.edit": "Edit",
    "common.preview": "Preview",
    "common.publish": "Publish",
    "common.unpublish": "Unpublish",
    "common.duplicate": "Duplicate",
    "common.settings": "Settings",
    "common.help": "Help",
    "common.support": "Support",
    "common.documentation": "Documentation",
    "common.contact": "Contact",
    "common.about": "About",
    "common.privacy": "Privacy",
    "common.terms": "Terms",
    "common.cookies": "Cookies",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en-US")

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language
    if (saved && translations[saved]) {
      setLanguageState(saved)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language]?.[key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
