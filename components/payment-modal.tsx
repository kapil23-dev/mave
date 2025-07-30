"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Check, CreditCard, Building2, Smartphone, Euro, X } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

interface PaymentModalProps {
  isOpen: boolean
  onClose: () => void
  selectedPlan?: "free" | "pro" | "business"
}

export function PaymentModal({ isOpen, onClose, selectedPlan = "pro" }: PaymentModalProps) {
  const { t } = useLanguage()
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")
  const [paymentMethod, setPaymentMethod] = useState<"card" | "sepa" | "sofort" | "giropay">("card")
  const [isProcessing, setIsProcessing] = useState(false)

  const plans = {
    free: {
      name: t("payment.free"),
      price: { monthly: 0, yearly: 0 },
      features: ["1 Website", "Basic Templates", "5GB Storage", "BuildFast Branding", "Community Support"],
    },
    pro: {
      name: t("payment.pro"),
      price: { monthly: 19, yearly: 190 },
      features: [
        "5 Websites",
        "Premium Templates",
        "50GB Storage",
        "Custom Domain",
        "Remove Branding",
        "Priority Support",
        "Analytics Dashboard",
        "SEO Tools",
      ],
    },
    business: {
      name: t("payment.business"),
      price: { monthly: 49, yearly: 490 },
      features: [
        "Unlimited Websites",
        "All Templates",
        "500GB Storage",
        "Multiple Custom Domains",
        "White Label",
        "24/7 Phone Support",
        "Advanced Analytics",
        "E-commerce Features",
        "Team Collaboration",
        "API Access",
      ],
    },
  }

  const currentPlan = plans[selectedPlan]
  const price = currentPlan.price[billingCycle]
  const yearlyDiscount =
    billingCycle === "yearly"
      ? Math.round(
          ((currentPlan.price.monthly * 12 - currentPlan.price.yearly) / (currentPlan.price.monthly * 12)) * 100,
        )
      : 0

  const paymentMethods = [
    {
      id: "card",
      name: "Credit/Debit Card",
      icon: <CreditCard className="h-5 w-5" />,
      description: "Visa, Mastercard, American Express",
    },
    {
      id: "sepa",
      name: "SEPA Direct Debit",
      icon: <Building2 className="h-5 w-5" />,
      description: "European bank transfer",
    },
    {
      id: "sofort",
      name: "Sofort",
      icon: <Smartphone className="h-5 w-5" />,
      description: "Instant bank transfer",
    },
    {
      id: "giropay",
      name: "Giropay",
      icon: <Euro className="h-5 w-5" />,
      description: "German online banking",
    },
  ]

  const handlePayment = async () => {
    setIsProcessing(true)

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Here you would integrate with Stripe or other payment processor
    console.log("Processing payment:", {
      plan: selectedPlan,
      billingCycle,
      paymentMethod,
      amount: price,
    })

    setIsProcessing(false)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>{t("payment.title")}</span>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </DialogTitle>
          <DialogDescription>{t("payment.subtitle")}</DialogDescription>
        </DialogHeader>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Plan Details */}
          <div className="space-y-6">
            <Card className="border-2 border-blue-200 bg-blue-50/50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{currentPlan.name}</CardTitle>
                  <Badge variant="secondary">{t("payment.currentPlan")}</Badge>
                </div>
                <div className="flex items-baseline space-x-2">
                  <span className="text-3xl font-bold">€{price}</span>
                  <span className="text-gray-600">
                    /{billingCycle === "monthly" ? t("payment.monthly") : t("payment.yearly")}
                  </span>
                </div>
                {billingCycle === "yearly" && yearlyDiscount > 0 && (
                  <Badge variant="default" className="w-fit">
                    {t("payment.save")} {yearlyDiscount}%
                  </Badge>
                )}
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {currentPlan.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Billing Cycle */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Billing Cycle</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    variant={billingCycle === "monthly" ? "default" : "outline"}
                    onClick={() => setBillingCycle("monthly")}
                    className="h-auto p-4 flex flex-col items-center"
                  >
                    <span className="font-semibold">{t("payment.monthly")}</span>
                    <span className="text-sm text-gray-600">€{currentPlan.price.monthly}/mo</span>
                  </Button>
                  <Button
                    variant={billingCycle === "yearly" ? "default" : "outline"}
                    onClick={() => setBillingCycle("yearly")}
                    className="h-auto p-4 flex flex-col items-center relative"
                  >
                    <span className="font-semibold">{t("payment.yearly")}</span>
                    <span className="text-sm text-gray-600">€{Math.round(currentPlan.price.yearly / 12)}/mo</span>
                    {yearlyDiscount > 0 && (
                      <Badge variant="destructive" className="absolute -top-2 -right-2 text-xs">
                        -{yearlyDiscount}%
                      </Badge>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Payment Form */}
          <div className="space-y-6">
            {/* Payment Method Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Payment Method</CardTitle>
                <CardDescription>Choose your preferred payment method</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {paymentMethods.map((method) => (
                  <div
                    key={method.id}
                    className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                      paymentMethod === method.id
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => setPaymentMethod(method.id as any)}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded ${paymentMethod === method.id ? "bg-blue-100" : "bg-gray-100"}`}>
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">{method.name}</h4>
                        <p className="text-sm text-gray-600">{method.description}</p>
                      </div>
                      {paymentMethod === method.id && <Check className="h-5 w-5 text-blue-600" />}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Payment Details Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Payment Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {paymentMethod === "card" && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input id="expiry" placeholder="MM/YY" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvc">CVC</Label>
                        <Input id="cvc" placeholder="123" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cardName">Name on Card</Label>
                      <Input id="cardName" placeholder="John Doe" />
                    </div>
                  </>
                )}

                {paymentMethod === "sepa" && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="iban">IBAN</Label>
                      <Input id="iban" placeholder="DE89 3704 0044 0532 0130 00" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="accountName">Account Holder Name</Label>
                      <Input id="accountName" placeholder="John Doe" />
                    </div>
                  </>
                )}

                {(paymentMethod === "sofort" || paymentMethod === "giropay") && (
                  <div className="p-4 bg-gray-50 rounded-lg text-center">
                    <p className="text-sm text-gray-600">
                      You will be redirected to your bank to complete the payment securely.
                    </p>
                  </div>
                )}

                <Separator />

                {/* Billing Address */}
                <div className="space-y-4">
                  <h4 className="font-medium">Billing Address</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="postal">Postal Code</Label>
                      <Input id="postal" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country">Country</Label>
                      <Input id="country" defaultValue="Germany" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Order Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span>{currentPlan.name} Plan</span>
                  <span>€{price}</span>
                </div>
                {billingCycle === "yearly" && yearlyDiscount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Yearly Discount ({yearlyDiscount}%)</span>
                    <span>-€{(currentPlan.price.monthly * 12 - currentPlan.price.yearly).toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm text-gray-600">
                  <span>VAT (19%)</span>
                  <span>€{(price * 0.19).toFixed(2)}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>€{(price * 1.19).toFixed(2)}</span>
                </div>
              </CardContent>
            </Card>

            <Button onClick={handlePayment} disabled={isProcessing} className="w-full h-12 text-lg">
              {isProcessing ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Processing...</span>
                </div>
              ) : (
                `Complete Payment - €${(price * 1.19).toFixed(2)}`
              )}
            </Button>

            <p className="text-xs text-gray-500 text-center">
              By completing this purchase, you agree to our Terms of Service and Privacy Policy. Your payment is secured
              with 256-bit SSL encryption.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
