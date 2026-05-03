import { Phone } from 'lucide-react';
import { MenuCategoryTabs } from '@/components/MenuCategoryTabs';
import { MenuCard } from '@/components/MenuCard';
import { SEO } from '@/components/SEO';
import { SectionHeading } from '@/components/SectionHeading';
import { categories } from '@/data/restaurantData';
import { useMenu } from '@/hooks/useMenu';
import { PHONE_HREF } from '@/config/site';
import { useLanguage } from '@/i18n/LanguageContext';

export default function Menu() {
  const { activeCategory, setActiveCategory, filteredItems } = useMenu();
  const { t } = useLanguage();

  return (
    <>
      <SEO title={t('menu.seoTitle')} description={t('menu.seoDescription')} path="/menu" />
      <section className="rhine-paper overflow-hidden py-12 sm:py-16">
        <div className="container-page">
          <SectionHeading kicker={t('menu.kicker')} title={t('menu.title')} text={t('menu.text')} />

          <div className="mt-8 lg:hidden">
            <MenuCategoryTabs categories={categories} activeCategory={activeCategory} onChange={setActiveCategory} variant="mobile" />
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)]">
            <aside className="hidden lg:block lg:self-start lg:sticky lg:top-24">
              <div className="rounded-2xl border border-gold/25 bg-white/80 p-3 shadow-soft dark:bg-white/10">
                <MenuCategoryTabs categories={categories} activeCategory={activeCategory} onChange={setActiveCategory} />
              </div>
              <div className="mt-5 rounded-2xl bg-rhine p-5 text-cream shadow-soft">
                <p className="font-display text-2xl font-bold text-baroque">{t('menu.ctaTitle')}</p>
                <p className="mt-2 text-sm leading-6 text-cream/75">{t('menu.ctaText')}</p>
                <a href={`tel:${PHONE_HREF}`} className="mt-5 inline-flex items-center rounded-lg bg-baroque px-5 py-3 text-sm font-extrabold uppercase tracking-wide text-ink transition hover:bg-gold">
                  <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                  {t('menu.ctaButton')}
                </a>
              </div>
            </aside>

            <div className="min-w-0">
              <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-2 xl:gap-6">
                {filteredItems.map((item, index) => (
                  <div key={item.id} className="min-w-0">
                    {index === 4 && (
                      <div className="mb-5 rounded-2xl border border-gold/30 bg-rhine p-5 text-cream shadow-soft md:col-span-2 lg:hidden">
                        <p className="font-display text-xl font-bold text-baroque">{t('menu.ctaTitle')}</p>
                        <p className="mt-2 text-sm leading-6 text-cream/75">{t('menu.ctaText')}</p>
                        <a href={`tel:${PHONE_HREF}`} className="mt-4 inline-flex items-center rounded-lg bg-baroque px-5 py-3 text-sm font-extrabold uppercase tracking-wide text-ink">
                          <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                          {t('menu.ctaButton')}
                        </a>
                      </div>
                    )}
                    <MenuCard item={item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
