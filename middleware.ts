import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const isProtectedRoute = createRouteMatcher(["/dashboard(.*)", "/create(.*)", "/editor(.*)", "/settings(.*)"])

// Check if Clerk is configured
const isClerkConfigured = () => {
  return !!(
    process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY &&
    process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY !== "pk_test_your_publishable_key_here"
  )
}

export default function middleware(req: NextRequest) {
  // If Clerk is not configured, allow all requests (development mode)
  if (!isClerkConfigured()) {
    return NextResponse.next()
  }

  // Use Clerk middleware if configured
  return clerkMiddleware((auth, req) => {
    if (isProtectedRoute(req)) auth().protect()
  })(req)
}

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
}
