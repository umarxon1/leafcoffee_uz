import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'ru', 'uz'],
  defaultLocale: 'en',
  localePrefix: 'as-needed', // URL’da til segmenti bo‘lmasa ham ishlaydi
  localeDetection: true
});

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)']
};
