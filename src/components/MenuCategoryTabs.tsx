import type { MenuFilter } from '@/data/restaurantData';
import { useLanguage } from '@/i18n/LanguageContext';

type MenuCategoryTabsProps = {
  categories: readonly MenuFilter[];
  activeCategory: MenuFilter;
  onChange: (category: MenuFilter) => void;
};

export function MenuCategoryTabs({ categories, activeCategory, onChange }: MenuCategoryTabsProps) {
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

  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:flex lg:flex-col" role="tablist" aria-label="Menükategorien">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          role="tab"
          aria-selected={activeCategory === category}
          onClick={() => onChange(category)}
          className={`relative min-h-12 rounded-lg px-3 py-3 text-left text-sm font-bold leading-snug transition sm:px-4 ${
            activeCategory === category
              ? 'bg-rhine/8 text-rhine dark:bg-white/10 dark:text-baroque'
              : 'text-slate-600 hover:bg-white/70 hover:text-rhine dark:text-cream/70 dark:hover:bg-white/10 dark:hover:text-cream'
          }`}
        >
          <span className="block break-words">{categoryLabels[category]}</span>
          {activeCategory === category && <span className="absolute inset-x-3 bottom-0 h-1 rounded-full bg-gold lg:inset-y-3 lg:left-0 lg:right-auto lg:h-auto lg:w-1" />}
        </button>
      ))}
    </div>
  );
}
