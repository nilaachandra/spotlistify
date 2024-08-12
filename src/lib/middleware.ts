import { auth } from "@/lib/auth"
import { NextResponse } from "next/server"

export default auth((req) => {
  const { nextUrl } = req
  const isLoggedIn = !!req.auth

  // Define routes that require authentication
  const protectedRoutes = ["/profile", "/dashboard", "/settings", ]
  
  // Define routes that are only accessible for non-authenticated users
  const authRoutes = ["/auth/login", "/auth/signin", "/forgot-password"]

  const isProtectedRoute = protectedRoutes.some((route) => 
    nextUrl.pathname.startsWith(route)
  )

  const isAuthRoute = authRoutes.some((route) => 
    nextUrl.pathname.startsWith(route)
  )

  // Redirect authenticated users away from auth routes
  if (isLoggedIn && isAuthRoute) {
    return NextResponse.redirect(new URL("/profile", nextUrl))
  }

  // Redirect unauthenticated users to login if they try to access protected routes
  if (!isLoggedIn && isProtectedRoute) {
    return NextResponse.redirect(
      new URL(`/auth/login?callbackUrl=${encodeURIComponent(nextUrl.pathname)}`, nextUrl)
    )
  }

  // Allow the request to proceed for all other cases
  return NextResponse.next()
})

// Specify which routes should be processed by this middleware
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}