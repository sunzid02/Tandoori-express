export const categories = [
  'Alle',
  'Vorspeisen',
  'Suppen',
  'Salate',
  'Tandoori Spezialitäten',
  'Lamm Spezialitäten',
  'Vegetarisch'
] as const;

export type MenuFilter = (typeof categories)[number];
export type MenuCategory = Exclude<MenuFilter, 'Alle'>;

export type MenuItem = {
  id: string;
  category: MenuCategory;
  name: string;
  desc: string;
  price: string;
  image: string;
  badges?: string[];
};

export const menuItems: MenuItem[] = [
  {
    id: 'chicken-samosa',
    category: 'Vorspeisen',
    name: 'Chicken Samosa',
    desc: 'Gefüllte Teigtaschen mit Chicken, Kartoffeln und Minzsauce.',
    price: '5,00 €',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=900&auto=format&fit=crop',
    badges: ['Beliebt']
  },
  {
    id: 'samosa',
    category: 'Vorspeisen',
    name: 'Samosas',
    desc: 'Gefüllte Teigtaschen mit Kartoffeln, Erbsen und Minzsauce.',
    price: '4,50 €',
    image: 'https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?q=80&w=900&auto=format&fit=crop'
  },
  {
    id: 'onion-bhaji',
    category: 'Vorspeisen',
    name: 'Onion Bhaji',
    desc: 'Knusprige Zwiebelstreifen mit hausgemachter Minzsauce.',
    price: '4,50 €',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=900&auto=format&fit=crop'
  },
  {
    id: 'linsensuppe',
    category: 'Suppen',
    name: 'Linsensuppe',
    desc: 'Nach köstlicher südindischer Art, warm und aromatisch.',
    price: '5,00 €',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=900&auto=format&fit=crop'
  },
  {
    id: 'chicken-soup',
    category: 'Suppen',
    name: 'Hähnchen Suppe',
    desc: 'Typisch indische Currysuppe mit zartem Hühnerfleisch.',
    price: '5,50 €',
    image: 'https://images.unsplash.com/photo-1604152135912-04a022e23696?q=80&w=900&auto=format&fit=crop'
  },
  {
    id: 'raita',
    category: 'Salate',
    name: 'Raita Joghurt',
    desc: 'Frischer Joghurt mit Gurken, Tomaten und Radieschen.',
    price: '3,00 €',
    image: 'https://images.unsplash.com/photo-1543353071-10c8ba85a904?q=80&w=900&auto=format&fit=crop',
    badges: ['Frisch']
  },
  {
    id: 'chicken-tikka-masala',
    category: 'Tandoori Spezialitäten',
    name: 'Chicken Tikka Masala',
    desc: 'Gegrillte Hähnchenfiletstücke in spezieller Joghurt-Tomatensauce mit Paprika, Zwiebeln und Tomaten.',
    price: '14,50 €',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=900&auto=format&fit=crop',
    badges: ['Bestseller']
  },
  {
    id: 'paneer-tikka-masala',
    category: 'Tandoori Spezialitäten',
    name: 'Paneer Tikka Masala',
    desc: 'Hausgemachter Rahmkäse in Joghurt-Tomatensauce mit Paprika, Zwiebeln, Tomaten und Ingwer.',
    price: '14,50 €',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=900&auto=format&fit=crop',
    badges: ['Vegetarisch']
  },
  {
    id: 'scampi-tandoori',
    category: 'Tandoori Spezialitäten',
    name: 'Scampi Tandoori',
    desc: 'Marinierte Großgarnelen mit Joghurt-Tomatensauce und feinen Gewürzen.',
    price: '16,50 €',
    image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?q=80&w=900&auto=format&fit=crop'
  },
  {
    id: 'lamm-curry',
    category: 'Lamm Spezialitäten',
    name: 'Lamm Curry',
    desc: 'Zartes Lammfleisch in einer Currysauce nach indischer Art.',
    price: '14,50 €',
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=900&auto=format&fit=crop'
  },
  {
    id: 'lamm-korma',
    category: 'Lamm Spezialitäten',
    name: 'Lamm Korma',
    desc: 'Sahnesauce mit Gewürzen, Rahmkäse, Cashewnüssen und Rosinen.',
    price: '15,00 €',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=900&auto=format&fit=crop'
  },
  {
    id: 'sabji-curry',
    category: 'Vegetarisch',
    name: 'Sabji Curry',
    desc: 'Verschiedenes Gemüse in aromatischer Currysauce.',
    price: '12,50 €',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=900&auto=format&fit=crop',
    badges: ['Vegetarisch']
  }
];
