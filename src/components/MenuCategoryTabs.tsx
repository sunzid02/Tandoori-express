import type { MenuFilter } from '@/data/restaurantData';
import { useLanguage } from '@/i18n/LanguageContext';

type MenuCategoryTabsProps = {
  categories: readonly MenuFilter[];
  activeCategory: MenuFilter;
  onChange: (category: MenuFilter) => void;
  variant?: 'mobile' | 'sidebar';
};

export function MenuCategoryTabs({ categories, activeCategory, onChange, variant = 'sidebar' }: MenuCategoryTabsProps) {
  const { language } = useLanguage();
  const categoryLabels: Record<MenuFilter, string> = {
    Alle: language === 'de' ? 'Alle' : 'All',
    Vorspeisen: language === 'de' ? 'Vorspeisen' : 'Starters',
    Suppen: language === 'de' ? 'Suppen' : 'Soups',
    Salate: language === 'de' ? 'Salate' : 'Salads',
    'Tandoori Spezialitäten': language === 'de' ? 'Tandoori Spezialitäten' : 'Tandoori Specials',
    'Lamm Spezialitäten': language === 'de' ? 'Lamm Spezialitäten' : 'Lamb Specials',
    Vegetarisch: language === 'de' ? 'Vegetarisch' : 'Vegetarian'
  };

  const wrapperClass = variant === 'mobile'
    ? 'flex gap-3 overflow-x-auto pb-2'
    : 'flex flex-col gap-2';

  return (
    <div className={wrapperClass} role="tablist" aria-label="Menükategorien">
      {categories.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(category)}
            className={`relative rounded-xl text-sm font-bold leading-snug transition ${
              variant === 'mobile'
                ? 'shrink-0 whitespace-nowrap px-4 py-3'
                : 'px-4 py-3 text-left'
            } ${
              isActive
                ? 'bg-rhine text-white shadow-sm dark:bg-baroque dark:text-ink'
                : 'bg-white/70 text-slate-700 hover:bg-white hover:text-rhine dark:bg-white/5 dark:text-cream/75 dark:hover:bg-white/10 dark:hover:text-cream'
            }`}
          >
            {categoryLabels[category]}
            {isActive && variant === 'sidebar' && <span className="absolute inset-y-3 left-0 w-1 rounded-full bg-gold" />}
          </button>
        );
      })}
    </div>
  );
}
