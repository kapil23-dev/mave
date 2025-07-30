"use client"

import { Button } from "@/components/ui/button"
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"
import { useAuth } from "./auth-wrapper"
import { useLanguage } from "@/hooks/use-language"

// Check if Clerk is configured
const isClerkConfigured = () => {
  return !!(
    process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY &&
    process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY !== "pk_test_your_publishable_key_here"
  )
}

export function AuthSignInButton() {
  const { t } = useLanguage()
  const auth = useAuth()
  const clerkConfigured = isClerkConfigured()

  if (clerkConfigured) {
    return (
      <SignInButton mode="modal">
        <Button variant="ghost">{t("nav.signIn")}</Button>
      </SignInButton>
    )
  }

  // Mock auth button
  return (
    <Button variant="ghost" onClick={auth.signIn}>
      {t("nav.signIn")} (Demo)
    </Button>
  )
}

export function AuthSignUpButton() {
  const { t } = useLanguage()
  const auth = useAuth()
  const clerkConfigured = isClerkConfigured()

  if (clerkConfigured) {
    return (
      <SignUpButton mode="modal">
        <Button>{t("nav.getStarted")}</Button>
      </SignUpButton>
    )
  }

  // Mock auth button
  return <Button onClick={auth.signIn}>{t("nav.getStarted")} (Demo)</Button>
}

export function AuthUserButton() {
  const auth = useAuth()
  const clerkConfigured = isClerkConfigured()

  if (clerkConfigured) {
    return <UserButton afterSignOutUrl="/" />
  }

  // Mock user button
  return (
    <Button variant="ghost" size="sm" onClick={auth.signOut}>
      Demo User
    </Button>
  )
}
