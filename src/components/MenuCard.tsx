import type { MenuItem } from '@/data/restaurantData';
import { LazyImage } from '@/components/LazyImage';
import { useLanguage } from '@/i18n/LanguageContext';

type MenuCardProps = {
  item: MenuItem;
};

export function MenuCard({ item }: MenuCardProps) {
  const { language } = useLanguage();
  const name = language === 'en' && item.nameEn ? item.nameEn : item.name;
  const desc = language === 'en' && item.descEn ? item.descEn : item.desc;
  const badgeLabels: Record<string, string> = {
    Beliebt: language === 'de' ? 'Beliebt' : 'Popular',
    Bestseller: language === 'de' ? 'Bestseller' : 'Bestseller',
    Frisch: language === 'de' ? 'Frisch' : 'Fresh',
    Vegetarisch: language === 'de' ? 'Vegetarisch' : 'Vegetarian'
  };

  return (
    <article className="overflow-hidden rounded-2xl border border-gold/25 bg-white/90 shadow-soft transition duration-300 hover:-translate-y-0.5 hover:border-gold/50 dark:bg-slate-900/70">
      <div className="relative h-44 overflow-hidden">
        <LazyImage src={item.image} alt={`${name} bei Tandoori Express Bonn`} className="h-full w-full transition duration-500 hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-rhine/25 to-transparent" />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="min-w-0 font-display text-xl font-bold leading-tight text-rhine dark:text-baroque">{name}</h3>
          <span className="shrink-0 rounded-lg border border-gold/40 bg-beige px-3 py-1 text-sm font-extrabold text-rhine dark:bg-white/10 dark:text-baroque">
            {item.price}
          </span>
        </div>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600 dark:text-cream/75">{desc}</p>
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
    </article>
  );
}
