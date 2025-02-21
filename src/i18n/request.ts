import { getUserLocale } from '@/services/locale';
import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.

  //const res = await fetch("http://localhost:3000/api/get-locale", {
  //  cache: "no-store", // 确保不会缓存
  //});
  //const { locale2 } = await res.json();
  //console.log("res");
  //console.log(res.json());
  //console.log(locale2);

  const locale = await getUserLocale();
  
  return {
    locale,
    messages: (await import(`@/messages/${locale}.json`)).default
  };
});