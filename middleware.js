import { NextResponse } from 'next/server';

const locales = ['it', 'en'];
const defaultLocale = 'it';

// Get the preferred locale
function getLocale(request) {
  // Check if locale is in pathname
  const pathname = request.nextUrl.pathname;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Check Accept-Language header
  const acceptLanguage = request.headers.get('Accept-Language');
  if (acceptLanguage) {
    for (const locale of locales) {
      if (acceptLanguage.includes(locale)) {
        return locale;
      }
    }
  }

  return defaultLocale;
}

export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  // Skip if it's a file or API route
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('/assets/') ||
    pathname.includes('/favicon') ||
    pathname.includes('.')
  ) {
    return;
  }

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request) || defaultLocale;
    
    // Don't redirect if it's already the default locale and we're on the home page
    if (locale === defaultLocale && pathname === '/') {
      return;
    }
    
    // Redirect to the locale-specific path only if it's not the default locale
    if (locale !== defaultLocale) {
      return NextResponse.redirect(
        new URL(`/${locale}${pathname === '/' ? '' : pathname}`, request.url)
      );
    }
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|favicon.ico).*)',
  ],
};
