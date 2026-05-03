import type { MenuFilter } from '@/data/restaurantData';

type MenuCategoryTabsProps = {
  categories: readonly MenuFilter[];
  activeCategory: MenuFilter;
  onChange: (category: MenuFilter) => void;
};

export function MenuCategoryTabs({ categories, activeCategory, onChange }: MenuCategoryTabsProps) {
  return (
    <div className="flex gap-1 overflow-x-auto border-b border-gold/30 lg:flex-col lg:overflow-visible lg:border-b-0" role="tablist" aria-label="Menükategorien">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          role="tab"
          aria-selected={activeCategory === category}
          onClick={() => onChange(category)}
          className={`relative shrink-0 px-4 py-4 text-left text-sm font-bold transition lg:rounded-lg ${
            activeCategory === category
              ? 'bg-rhine/8 text-rhine dark:bg-white/10 dark:text-baroque'
              : 'text-slate-600 hover:bg-white/70 hover:text-rhine dark:text-cream/70 dark:hover:bg-white/10 dark:hover:text-cream'
          }`}
        >
          {category}
          {activeCategory === category && <span className="absolute inset-x-3 bottom-0 h-1 rounded-full bg-gold lg:inset-y-3 lg:left-0 lg:right-auto lg:h-auto lg:w-1" />}
        </button>
      ))}
    </div>
  );
}
