"use client"

import { useEffect, useState } from "react"
import { ClerkProvider, useUser } from "@clerk/nextjs"
import React from "react"

// Check if Clerk keys are available
const isClerkConfigured = () => {
  return !!(
    process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY &&
    process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY !== "pk_test_your_publishable_key_here"
  )
}

// Mock auth context for development
interface MockAuthContextType {
  isSignedIn: boolean
  user: any
  signIn: () => void
  signOut: () => void
}

const MockAuthContext = React.createContext<MockAuthContextType | null>(null)

function MockAuthProvider({ children }: { children: React.ReactNode }) {
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    // Check localStorage for mock auth state
    const mockAuth = localStorage.getItem("mock-auth")
    if (mockAuth === "true") {
      setIsSignedIn(true)
      setUser({
        id: "mock-user",
        firstName: "Demo",
        lastName: "User",
        emailAddresses: [{ emailAddress: "demo@buildfast.app" }],
      })
    }
  }, [])

  const signIn = () => {
    setIsSignedIn(true)
    setUser({
      id: "mock-user",
      firstName: "Demo",
      lastName: "User",
      emailAddresses: [{ emailAddress: "demo@buildfast.app" }],
    })
    localStorage.setItem("mock-auth", "true")
  }

  const signOut = () => {
    setIsSignedIn(false)
    setUser(null)
    localStorage.removeItem("mock-auth")
  }

  return <MockAuthContext.Provider value={{ isSignedIn, user, signIn, signOut }}>{children}</MockAuthContext.Provider>
}

export function useMockAuth() {
  const context = React.useContext(MockAuthContext)
  if (!context) {
    throw new Error("useMockAuth must be used within MockAuthProvider")
  }
  return context
}

export function AuthWrapper({ children }: { children: React.ReactNode }) {
  const clerkConfigured = isClerkConfigured()
  const context = React.useContext(MockAuthContext)
  const userHook = useUser()

  if (clerkConfigured) {
    return (
      <ClerkProvider
        publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}
        appearance={{
          baseTheme: undefined,
          variables: {
            colorPrimary: "#3b82f6",
          },
        }}
      >
        {children}
      </ClerkProvider>
    )
  }

  // Use mock auth in development - wrap children in MockAuthProvider
  return <MockAuthProvider>{children}</MockAuthProvider>
}

// Custom hook that works with both Clerk and mock auth
export function useAuth() {
  const clerkConfigured = isClerkConfigured()
  const context = React.useContext(MockAuthContext)
  const userHook = useUser()

  if (clerkConfigured) {
    return userHook
  } else {
    return context
  }
}
