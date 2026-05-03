import type { MenuItem } from '@/data/restaurantData';
import { LazyImage } from '@/components/LazyImage';
import { useLanguage } from '@/i18n/LanguageContext';

type MenuCardProps = {
  item: MenuItem;
  variant?: 'horizontal' | 'vertical';
};

export function MenuCard({ item, variant = 'horizontal' }: MenuCardProps) {
  const { language } = useLanguage();
  const name = language === 'en' && item.nameEn ? item.nameEn : item.name;
  const desc = language === 'en' && item.descEn ? item.descEn : item.desc;
  const badgeLabels: Record<string, string> = {
    Beliebt: language === 'de' ? 'Beliebt' : 'Popular',
    Bestseller: language === 'de' ? 'Bestseller' : 'Bestseller',
    Frisch: language === 'de' ? 'Frisch' : 'Fresh',
    Vegetarisch: language === 'de' ? 'Vegetarisch' : 'Vegetarian'
  };

  const isVertical = variant === 'vertical';

  return (
    <article className="group h-full overflow-hidden rounded-xl border border-gold/30 bg-white/90 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-rhine/40 dark:bg-white/10">
      <div className={isVertical ? 'flex h-full min-w-0 flex-col' : 'grid min-w-0 gap-0 sm:grid-cols-[10rem_minmax(0,1fr)]'}>
        <div className={isVertical ? 'relative h-56 shrink-0 overflow-hidden' : 'relative h-44 overflow-hidden sm:h-full'}>
          <LazyImage src={item.image} alt={`${name} bei Tandoori Express Bonn`} className="block h-full w-full transition duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-rhine/30 to-transparent" />
        </div>
        <div className="min-w-0 p-4 sm:p-5">
          <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
            <h3 className="min-w-0 break-words font-display text-xl font-bold leading-tight text-rhine dark:text-baroque">{name}</h3>
            <span className="w-fit shrink-0 rounded-lg border border-gold/40 bg-beige px-3 py-1 text-sm font-extrabold text-rhine dark:bg-white/10 dark:text-baroque">
              {item.price}
            </span>
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-cream/75">{desc}</p>
          {item.badges?.length ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {item.badges.map((badge) => (
                <span key={badge} className="rounded-full bg-park/10 px-3 py-1 text-xs font-bold text-park dark:bg-park/20">
                  {badgeLabels[badge] ?? badge}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}
