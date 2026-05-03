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
  descEn?: string;
  nameEn?: string;
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
    descEn: 'Filled pastry pockets with chicken, potatoes, and mint sauce.',
    price: '5,00 €',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=900&auto=format&fit=crop',
    badges: ['Beliebt']
  },
  {
    id: 'samosa',
    category: 'Vorspeisen',
    name: 'Samosas',
    desc: 'Gefüllte Teigtaschen mit Kartoffeln, Erbsen und Minzsauce.',
    descEn: 'Filled pastry pockets with potatoes, peas, and mint sauce.',
    price: '4,50 €',
    image: 'https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?q=80&w=900&auto=format&fit=crop'
  },
  {
    id: 'onion-bhaji',
    category: 'Vorspeisen',
    name: 'Onion Bhaji',
    desc: 'Knusprige Zwiebelstreifen mit hausgemachter Minzsauce.',
    descEn: 'Crispy onion fritters with homemade mint sauce.',
    price: '4,50 €',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=900&auto=format&fit=crop'
  },
  {
    id: 'linsensuppe',
    category: 'Suppen',
    name: 'Linsensuppe',
    nameEn: 'Lentil Soup',
    desc: 'Nach köstlicher südindischer Art, warm und aromatisch.',
    descEn: 'Warm, aromatic lentil soup inspired by South Indian flavors.',
    price: '5,00 €',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=900&auto=format&fit=crop'
  },
  {
    id: 'chicken-soup',
    category: 'Suppen',
    name: 'Hähnchen Suppe',
    nameEn: 'Chicken Soup',
    desc: 'Typisch indische Currysuppe mit zartem Hühnerfleisch.',
    descEn: 'Indian curry soup with tender chicken.',
    price: '5,50 €',
    image: 'https://images.unsplash.com/photo-1604152135912-04a022e23696?q=80&w=900&auto=format&fit=crop'
  },
  {
    id: 'raita',
    category: 'Salate',
    name: 'Raita Joghurt',
    desc: 'Frischer Joghurt mit Gurken, Tomaten und Radieschen.',
    descEn: 'Fresh yogurt with cucumber, tomatoes, and radish.',
    price: '3,00 €',
    image: 'https://images.unsplash.com/photo-1543353071-10c8ba85a904?q=80&w=900&auto=format&fit=crop',
    badges: ['Frisch']
  },
  {
    id: 'chicken-tikka-masala',
    category: 'Tandoori Spezialitäten',
    name: 'Chicken Tikka Masala',
    desc: 'Gegrillte Hähnchenfiletstücke in spezieller Joghurt-Tomatensauce mit Paprika, Zwiebeln und Tomaten.',
    descEn: 'Grilled chicken fillet pieces in a special yogurt-tomato sauce with peppers, onions, and tomatoes.',
    price: '14,50 €',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=900&auto=format&fit=crop',
    badges: ['Bestseller']
  },
  {
    id: 'paneer-tikka-masala',
    category: 'Tandoori Spezialitäten',
    name: 'Paneer Tikka Masala',
    desc: 'Hausgemachter Rahmkäse in Joghurt-Tomatensauce mit Paprika, Zwiebeln, Tomaten und Ingwer.',
    descEn: 'Homemade paneer in yogurt-tomato sauce with peppers, onions, tomatoes, and ginger.',
    price: '14,50 €',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=900&auto=format&fit=crop',
    badges: ['Vegetarisch']
  },
  {
    id: 'scampi-tandoori',
    category: 'Tandoori Spezialitäten',
    name: 'Scampi Tandoori',
    desc: 'Marinierte Großgarnelen mit Joghurt-Tomatensauce und feinen Gewürzen.',
    descEn: 'Marinated king prawns with yogurt-tomato sauce and fine spices.',
    price: '16,50 €',
    image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?q=80&w=900&auto=format&fit=crop'
  },
  {
    id: 'lamm-curry',
    category: 'Lamm Spezialitäten',
    name: 'Lamm Curry',
    nameEn: 'Lamb Curry',
    desc: 'Zartes Lammfleisch in einer Currysauce nach indischer Art.',
    descEn: 'Tender lamb in an Indian-style curry sauce.',
    price: '14,50 €',
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=900&auto=format&fit=crop'
  },
  {
    id: 'lamm-korma',
    category: 'Lamm Spezialitäten',
    name: 'Lamm Korma',
    nameEn: 'Lamb Korma',
    desc: 'Sahnesauce mit Gewürzen, Rahmkäse, Cashewnüssen und Rosinen.',
    descEn: 'Cream sauce with spices, paneer, cashews, and raisins.',
    price: '15,00 €',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=900&auto=format&fit=crop'
  },
  {
    id: 'sabji-curry',
    category: 'Vegetarisch',
    name: 'Sabji Curry',
    nameEn: 'Vegetable Curry',
    desc: 'Verschiedenes Gemüse in aromatischer Currysauce.',
    descEn: 'Mixed vegetables in an aromatic curry sauce.',
    price: '12,50 €',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=900&auto=format&fit=crop',
    badges: ['Vegetarisch']
  }
];
