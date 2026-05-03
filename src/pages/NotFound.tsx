import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <section className="container-page py-20 text-center">
      <h1 className="text-5xl font-black">404</h1>
      <p className="mt-4 text-slate-600 dark:text-cream/75">{t('notFound.text')}</p>
      <Link to="/" className="btn-primary mt-8">{t('notFound.home')}</Link>
    </section>
  );
}
