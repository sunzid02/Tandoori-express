export const restaurant = {
  name: 'Tandoori Express',
  city: 'Bonn',
  phone: {
    display: '+49 228 0000000',
    href: '+492280000000'
  },
  address: {
    street: 'Friesdorfer Str. 120',
    postalCode: '53173',
    city: 'Bonn',
    countryCode: 'DE',
    display: 'Friesdorfer Str. 120, 53173 Bonn'
  },
  googleMapsEmbed:
    'https://www.google.com/maps?q=Friesdorfer%20Str.%20120%2C%2053173%20Bonn&output=embed',
  orderLinks: {
    lieferando: '#',
    uberEats: '#'
  }
} as const;

export const openingHours = [
  { day: 'Montag', time: '15:00 - 21:30', schema: 'Mo 15:00-21:30' },
  { day: 'Dienstag', time: '15:00 - 21:30', schema: 'Tu 15:00-21:30' },
  { day: 'Mittwoch', time: 'Geschlossen', schema: '' },
  { day: 'Donnerstag', time: '15:00 - 21:30', schema: 'Th 15:00-21:30' },
  { day: 'Freitag', time: '15:00 - 21:30', schema: 'Fr 15:00-21:30' },
  { day: 'Samstag', time: '15:00 - 21:30', schema: 'Sa 15:00-21:30' },
  { day: 'Sonntag', time: '15:00 - 21:30', schema: 'Su 15:00-21:30' }
] as const;

export const PHONE = restaurant.phone.display;
export const PHONE_HREF = restaurant.phone.href;
export const RESTAURANT_NAME = restaurant.name;
export const ADDRESS = restaurant.address.display;
export const GOOGLE_MAPS_EMBED = restaurant.googleMapsEmbed;
export const LIEFERANDO_URL = restaurant.orderLinks.lieferando;
export const UBER_EATS_URL = restaurant.orderLinks.uberEats;
