import { useMemo, useState } from 'react';
import { type MenuFilter, menuItems } from '@/data/restaurantData';

export function useMenu() {
  const [activeCategory, setActiveCategory] = useState<MenuFilter>('Alle');

  const filteredItems = useMemo(() => {
    if (activeCategory === 'Alle') return menuItems;
    return menuItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return { activeCategory, setActiveCategory, filteredItems };
}
