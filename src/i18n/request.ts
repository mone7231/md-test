import { getUserLocale } from '@/src/i18n/locale';
import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const locale = await getUserLocale();
  
  return {
    locale,
    messages: (await import(`@/src/i18n/translation/${locale}.json`)).default
  };
});