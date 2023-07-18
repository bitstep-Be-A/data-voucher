import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const authToken = request.cookies.get('auth/token');
  const currPath = request.nextUrl.pathname;

  if (currPath === '/') {
    return NextResponse.redirect(new URL('/start-now', request.url));
  }
  if (/^\/service\b/.test(currPath)) {
    if (!authToken)
      return NextResponse.redirect(new URL('/service/login', request.url));
    
    if (currPath === '/service')
      return NextResponse.redirect(new URL('/service/page', request.url));
      
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/',
    '/about',
    '/client',
    '/service',
    '/start-now'
  ]
};
