import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

import {
  authPermissionRoutes,
  routes
} from '@/routes';
import { AUTH_TOKEN_COOKIE_KEY } from '@/constants/auth.constant';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  let response;

  const currPath = request.nextUrl.pathname;

  const authToken = request.cookies.get(AUTH_TOKEN_COOKIE_KEY);

  for (let route of Object.values(authPermissionRoutes)) {
    if (route.re.test(currPath)) {
      if (!authToken)
        response = NextResponse.redirect(new URL(routes.login.path, request.url));
        break;
    }
  }

  return response;
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    ...Object.values(routes).map((route) => route.path)
  ]
};
