// src/i18n/routing.ts

import { createNavigation } from 'next-intl/navigation';

export const locales = ['en', 'ru', 'uz'] as const;
export const defaultLocale = 'en';

export const { Link, redirect, usePathname, useRouter } =
  createNavigation({ locales });
