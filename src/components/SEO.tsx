import { Helmet } from 'react-helmet-async';
import { buildRestaurantSchema } from '@/utils/seo';

type SEOProps = {
  title: string;
  description: string;
  path?: string;
};

export function SEO({ title, description, path = '/' }: SEOProps) {
  const origin = typeof window === 'undefined' ? '' : window.location.origin;
  const canonical = `${origin}${path}`;

  return (
    <Helmet>
      <html lang="de" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="de_DE" />
      <meta property="og:url" content={canonical} />
      <script type="application/ld+json">{JSON.stringify(buildRestaurantSchema())}</script>
    </Helmet>
  );
}
