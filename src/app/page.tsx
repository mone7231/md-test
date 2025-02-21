
import { getTranslations } from 'next-intl/server';
import Image from "next/image";
import Link from "next/link";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default async function HomePage(){
    // Enable static rendering
  //setRequestLocale(locale);
  const t = await getTranslations('HomePage');

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <Image
                className="dark:invert"
                src={`${basePath}/next.svg`}
                alt="Next.js logo"
                width={180}
                height={38}
                priority
              />

            <div className="gap-4 items-center flex-col sm:flex-row">
              <h1>{t('welcome.title')}</h1>

              <br/>

              <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
                <li className="mb-2">
                  Get started by editing{" "}
                  <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                    src/app/page.tsx with develop-lai-1.0
                  </code>
                  .
                </li>
                <li>Save and see your changes instantly.</li>
              </ol>

              <br/>
                <Link href="/login">{t('login')}</Link>
                <Link href="/dashboard">{t('contact')}</Link>
            </div>
        </main>
    </div>
  );
}