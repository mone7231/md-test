import Link from 'next/link';
import { useTranslations } from "next-intl";

export function IndexNavBar() {
    const t = useTranslations('HomePage');

  return (
    <div className='flex justify-between items-center p-4 m-auto w-[50%]'>
        <Link href="/">{t('home')}</Link>
    </div>
  );
}