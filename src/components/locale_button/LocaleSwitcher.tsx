import {useLocale, useTranslations} from 'next-intl';
import LocaleSwitcherSelect from '@/src/components/locale_button/LocaleSwitcherSelect';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();
  return (
    <LocaleSwitcherSelect
      defaultValue={locale}
      items={[
        {
          value: 'en',
          label: t('en')
        },
        {
          value: 'cn',
          label: t('cn')
        }
      ]}
      label={t('label')}
    />
  );
}