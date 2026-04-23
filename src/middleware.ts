import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);
const userRoutes = ['/dashboard', '/favourites', '/enquiries', '/profile'];
const schoolAdminRoutes = ['/manage-school'];
const adminRoutes = ['/admin'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get('next-auth.session-token')?.value ||
                request.cookies.get('__Secure-next-auth.session-token')?.value;

 
  const isUserRoute = userRoutes.some(route => pathname.includes(route));
  const isSchoolAdminRoute = schoolAdminRoutes.some(route => pathname.includes(route));
  const isAdminRoute = adminRoutes.some(route => pathname.includes(route));

  
  if ((isUserRoute || isSchoolAdminRoute || isAdminRoute) && !token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};