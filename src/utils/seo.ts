import { PHONE, RESTAURANT_NAME, openingHours, restaurant } from '@/config/site';

export const buildRestaurantSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: RESTAURANT_NAME,
  address: {
    '@type': 'PostalAddress',
    streetAddress: restaurant.address.street,
    postalCode: restaurant.address.postalCode,
    addressLocality: restaurant.address.city,
    addressCountry: restaurant.address.countryCode
  },
  telephone: PHONE,
  servesCuisine: ['Indisch', 'Pakistanisch'],
  priceRange: '€€',
  openingHours: openingHours.map((item) => item.schema).filter(Boolean),
  url: typeof window !== 'undefined' ? window.location.origin : undefined,
  image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1600&auto=format&fit=crop'
});
