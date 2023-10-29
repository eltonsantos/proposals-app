import { NextResponse, NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
  const token = request.cookies.get("auth_token")?.value

  const signInURL = new URL('/', request.url)
  const dashboardURL = new URL('/dashboard', request.url)

  if(!token) {
    if (request.nextUrl.pathname === '/') {
      return NextResponse.next()
    }

    return NextResponse.redirect(signInURL)
  }

  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(dashboardURL)
  }
}

//Add your protected routes
export const config = {
  matcher: ["/", "/dashboard/:path*", "/users"],
};