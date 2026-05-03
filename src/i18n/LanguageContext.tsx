import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';

export type Language = 'de' | 'en';

type TranslationKey =
  | 'nav.menu'
  | 'nav.about'
  | 'nav.contact'
  | 'nav.order'
  | 'nav.call'
  | 'brand.local'
  | 'home.seoTitle'
  | 'home.seoDescription'
  | 'home.kicker'
  | 'home.title'
  | 'home.text'
  | 'home.call'
  | 'home.menu'
  | 'home.beethovenTitle'
  | 'home.beethovenText'
  | 'home.spiceTitle'
  | 'home.spiceText'
  | 'home.featuredKicker'
  | 'home.featuredTitle'
  | 'home.fullMenu'
  | 'menu.seoTitle'
  | 'menu.seoDescription'
  | 'menu.kicker'
  | 'menu.title'
  | 'menu.text'
  | 'menu.ctaTitle'
  | 'menu.ctaText'
  | 'menu.ctaButton'
  | 'about.seoTitle'
  | 'about.seoDescription'
  | 'about.kicker'
  | 'about.title'
  | 'about.text'
  | 'about.body'
  | 'contact.seoTitle'
  | 'contact.seoDescription'
  | 'contact.kicker'
  | 'contact.title'
  | 'contact.text'
  | 'contact.hoursHint'
  | 'contact.formTitle'
  | 'contact.formText'
  | 'contact.name'
  | 'contact.phone'
  | 'contact.message'
  | 'contact.submit'
  | 'contact.success'
  | 'order.seoTitle'
  | 'order.seoDescription'
  | 'order.kicker'
  | 'order.title'
  | 'order.text'
  | 'order.phoneTitle'
  | 'order.phoneText'
  | 'footer.local'
  | 'footer.text'
  | 'footer.contact'
  | 'footer.legal'
  | 'hours.phone'
  | 'hours.address'
  | 'hours.hours'
  | 'hours.today'
  | 'cookie.text'
  | 'notFound.text'
  | 'notFound.home';

const translations: Record<Language, Record<TranslationKey, string>> = {
  de: {
    'nav.menu': 'Menü',
    'nav.about': 'Über uns',
    'nav.contact': 'Kontakt',
    'nav.order': 'Bestellen',
    'nav.call': 'Jetzt anrufen',
    'brand.local': 'Bonn am Rhein',
    'home.seoTitle': 'Tandoori Express Bonn | Indisches Restaurant in Bonn',
    'home.seoDescription': 'Tandoori Express Bonn in der Friesdorfer Str. 120, 53173 Bonn: Indische und pakistanische Küche am Rhein. Frisch gekocht und telefonisch bestellbar.',
    'home.kicker': 'Indische Küche am Rhein',
    'home.title': 'Südasiatische Wärme trifft Bonner Rheinruhe.',
    'home.text': 'Frisch gekocht in Bonn-Bad Godesberg. Würzig, herzlich und direkt telefonisch bestellbar.',
    'home.call': 'Jetzt anrufen',
    'home.menu': 'Speisekarte ansehen',
    'home.beethovenTitle': 'Beethoven-Stadt',
    'home.beethovenText': 'Klassische Ruhe, moderne Küche.',
    'home.spiceTitle': 'Gewürze mit Wärme',
    'home.spiceText': 'Aromatisch, frisch und unkompliziert.',
    'home.featuredKicker': 'Beliebte Gerichte',
    'home.featuredTitle': 'Favoriten für einen Abend mit Rheinblick-Gefühl.',
    'home.fullMenu': 'Ganzes Menü',
    'menu.seoTitle': 'Speisekarte | Tandoori Express Bonn',
    'menu.seoDescription': 'Speisekarte von Tandoori Express Bonn: Vorspeisen, Suppen, Tandoori Spezialitäten, Lammgerichte und vegetarische indische Küche.',
    'menu.kicker': 'Speisekarte',
    'menu.title': 'Eine ruhige Restaurantkarte mit klarer Auswahl.',
    'menu.text': 'Wählen Sie eine Kategorie und bestellen Sie Ihr Lieblingsgericht direkt telefonisch in Bonn-Bad Godesberg.',
    'menu.ctaTitle': 'Lieblingsgericht gefunden?',
    'menu.ctaText': 'Rufen Sie uns direkt an. Am Telefon geht es am schnellsten.',
    'menu.ctaButton': 'Jetzt anrufen',
    'about.seoTitle': 'Über uns | Tandoori Express Bonn',
    'about.seoDescription': 'Tandoori Express Bonn: Inspiriert von der Vielfalt Bonns und der Wärme südasiatischer Küche in Bonn-Bad Godesberg.',
    'about.kicker': 'Über uns',
    'about.title': 'Inspiriert von Bonn und südasiatischer Küche.',
    'about.text': 'Tandoori Express verbindet die internationale Food-Kultur Bonns mit der Wärme indischer und pakistanischer Gerichte. Der Auftritt bleibt bewusst ruhig, lokal und direkt.',
    'about.body': 'Bonn-Bad Godesberg, Rheinseite, Parks und Nachbarschaft: Diese Website nimmt diese Atmosphäre auf, ohne erfundene Restaurantgeschichte zu behaupten.',
    'contact.seoTitle': 'Kontakt | Tandoori Express Bonn',
    'contact.seoDescription': 'Kontakt zu Tandoori Express Bonn, Friesdorfer Str. 120, 53173 Bonn. Telefonisch bestellen und Öffnungszeiten prüfen.',
    'contact.kicker': 'Kontakt',
    'contact.title': 'Am schnellsten erreichen Sie uns telefonisch.',
    'contact.text': 'Für Bestellung und kurze Rückfragen ist der direkte Anruf der wichtigste Weg.',
    'contact.hoursHint': 'Öffnungszeiten siehe Übersicht unten',
    'contact.formTitle': 'Nachricht vorbereiten',
    'contact.formText': 'Das Formular validiert lokal und loggt nur in der Browser-Konsole. Es bleibt bewusst statisch.',
    'contact.name': 'Name',
    'contact.phone': 'Telefon',
    'contact.message': 'Nachricht',
    'contact.submit': 'Prüfen',
    'contact.success': 'Danke. Die Angaben sind gültig und wurden lokal verarbeitet.',
    'order.seoTitle': 'Bestellen | Tandoori Express Bonn',
    'order.seoDescription': 'Bestellen bei Tandoori Express Bonn: telefonisch oder über konfigurierte Partnerlinks. Indisches Restaurant in Bonn-Bad Godesberg.',
    'order.kicker': 'Bestellen',
    'order.title': 'Direkt, persönlich und rheinisch unkompliziert.',
    'order.text': 'Am schnellsten erreichen Sie uns telefonisch. Partnerlinks sind als Ergänzung vorbereitet.',
    'order.phoneTitle': 'Telefonisch bestellen',
    'order.phoneText': 'Am schnellsten erreichen Sie uns telefonisch.',
    'footer.local': 'Indische Küche in Bonn-Bad Godesberg',
    'footer.text': 'Würzige südasiatische Küche, Rhein-Gelassenheit und direkte telefonische Bestellung an der Friesdorfer Straße.',
    'footer.contact': 'Kontakt',
    'footer.legal': 'Rechtliches',
    'hours.phone': 'Telefon',
    'hours.address': 'Adresse',
    'hours.hours': 'Öffnungszeiten',
    'hours.today': 'Heute',
    'cookie.text': 'Wir verwenden notwendige Cookies, um diese Website zuverlässig bereitzustellen. Details finden Sie in der Datenschutzerklärung.',
    'notFound.text': 'Diese Seite wurde nicht gefunden.',
    'notFound.home': 'Zur Startseite'
  },
  en: {
    'nav.menu': 'Menu',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.order': 'Order',
    'nav.call': 'Call now',
    'brand.local': 'Bonn on the Rhine',
    'home.seoTitle': 'Tandoori Express Bonn | Indian Restaurant in Bonn',
    'home.seoDescription': 'Tandoori Express Bonn at Friesdorfer Str. 120, 53173 Bonn: Indian and Pakistani food by the Rhine. Freshly cooked and easy to order by phone.',
    'home.kicker': 'Indian food by the Rhine',
    'home.title': 'South Asian warmth meets calm Bonn Rhine elegance.',
    'home.text': 'Freshly cooked in Bonn-Bad Godesberg. Spiced, welcoming, and ready to order directly by phone.',
    'home.call': 'Call now',
    'home.menu': 'View menu',
    'home.beethovenTitle': 'Beethoven city',
    'home.beethovenText': 'Classical calm, modern cooking.',
    'home.spiceTitle': 'Warm spices',
    'home.spiceText': 'Aromatic, fresh, and uncomplicated.',
    'home.featuredKicker': 'Popular dishes',
    'home.featuredTitle': 'Favorites for an evening with a Rhine-side feeling.',
    'home.fullMenu': 'Full menu',
    'menu.seoTitle': 'Menu | Tandoori Express Bonn',
    'menu.seoDescription': 'Menu at Tandoori Express Bonn: starters, soups, tandoori specials, lamb dishes, and vegetarian Indian food.',
    'menu.kicker': 'Menu',
    'menu.title': 'A calm restaurant menu with a clear selection.',
    'menu.text': 'Choose a category and order your favorite dish directly by phone in Bonn-Bad Godesberg.',
    'menu.ctaTitle': 'Found your favorite dish?',
    'menu.ctaText': 'Call us directly. By phone is the fastest way.',
    'menu.ctaButton': 'Call now',
    'about.seoTitle': 'About | Tandoori Express Bonn',
    'about.seoDescription': 'Tandoori Express Bonn: inspired by Bonn’s diversity and the warmth of South Asian cuisine in Bonn-Bad Godesberg.',
    'about.kicker': 'About',
    'about.title': 'Inspired by Bonn and South Asian cooking.',
    'about.text': 'Tandoori Express connects Bonn’s international food culture with the warmth of Indian and Pakistani dishes. The website stays calm, local, and direct.',
    'about.body': 'Bonn-Bad Godesberg, the Rhine side, parks, and neighborhood life shape the atmosphere here without claiming invented restaurant history.',
    'contact.seoTitle': 'Contact | Tandoori Express Bonn',
    'contact.seoDescription': 'Contact Tandoori Express Bonn, Friesdorfer Str. 120, 53173 Bonn. Order by phone and check opening hours.',
    'contact.kicker': 'Contact',
    'contact.title': 'The fastest way to reach us is by phone.',
    'contact.text': 'For orders and quick questions, a direct call is the best way.',
    'contact.hoursHint': 'Opening hours are listed below',
    'contact.formTitle': 'Prepare a message',
    'contact.formText': 'This form validates locally and only logs to the browser console. The site remains static.',
    'contact.name': 'Name',
    'contact.phone': 'Phone',
    'contact.message': 'Message',
    'contact.submit': 'Check',
    'contact.success': 'Thank you. The details are valid and were processed locally.',
    'order.seoTitle': 'Order | Tandoori Express Bonn',
    'order.seoDescription': 'Order from Tandoori Express Bonn by phone or configured partner links. Indian restaurant in Bonn-Bad Godesberg.',
    'order.kicker': 'Order',
    'order.title': 'Direct, personal, and easygoing.',
    'order.text': 'The fastest way to reach us is by phone. Partner links are prepared as an additional option.',
    'order.phoneTitle': 'Order by phone',
    'order.phoneText': 'The fastest way to reach us is by phone.',
    'footer.local': 'Indian food in Bonn-Bad Godesberg',
    'footer.text': 'Spiced South Asian cooking, Rhine calm, and direct phone ordering on Friesdorfer Straße.',
    'footer.contact': 'Contact',
    'footer.legal': 'Legal',
    'hours.phone': 'Phone',
    'hours.address': 'Address',
    'hours.hours': 'Opening hours',
    'hours.today': 'Today',
    'cookie.text': 'We use necessary cookies to provide this website reliably. Details are available in the privacy policy.',
    'notFound.text': 'This page was not found.',
    'notFound.home': 'Back to home'
  }
};

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const stored = localStorage.getItem('language');
    return stored === 'en' || stored === 'de' ? stored : 'de';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo<LanguageContextValue>(() => ({
    language,
    setLanguage,
    t: (key) => translations[language][key]
  }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used inside LanguageProvider');
  }
  return context;
}
