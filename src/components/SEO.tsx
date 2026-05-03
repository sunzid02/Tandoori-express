import { Helmet } from 'react-helmet-async';
import { buildRestaurantSchema } from '@/utils/seo';
import { useLanguage } from '@/i18n/LanguageContext';

type SEOProps = {
  title: string;
  description: string;
  path?: string;
};

export function SEO({ title, description, path = '/' }: SEOProps) {
  const { language } = useLanguage();
  const origin = typeof window === 'undefined' ? '' : window.location.origin;
  const canonical = `${origin}${path}`;

  return (
    <Helmet>
      <html lang={language} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={language === 'de' ? 'de_DE' : 'en_US'} />
      <meta property="og:url" content={canonical} />
      <script type="application/ld+json">{JSON.stringify(buildRestaurantSchema())}</script>
    </Helmet>
  );
}
