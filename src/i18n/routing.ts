import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en','cn'],
 
  // Used when no locale matches
  defaultLocale: 'en',
  pathnames:{
    "/contact" : {
      en:"/contact",
      cn:"/contact-cn"
    },
    "/api" : {
      en:"/api",
      cn:"/api-cn"
    }
  }
});
 
// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export type Locale = (typeof routing.locales)[number];

export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);