import { Link } from 'react-router-dom';
import { BrandMark } from '@/components/BrandMark';
import { RhineWaveDivider } from '@/components/RhineWaveDivider';
import { ADDRESS, PHONE, PHONE_HREF, RESTAURANT_NAME, openingHours } from '@/config/site';

export function Footer() {
  return (
    <footer className="border-t border-gold/25 bg-rhine text-cream dark:bg-[#0b1830]">
      <RhineWaveDivider />
      <div className="container-page grid gap-8 py-10 md:grid-cols-[1.2fr_.9fr_.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <BrandMark />
            <div>
              <h2 className="font-display text-2xl font-bold text-baroque">{RESTAURANT_NAME} Bonn</h2>
              <p className="text-sm font-semibold text-cream/75">Indische Küche in Bonn-Bad Godesberg</p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-6 text-cream/75">
            Würzige südasiatische Küche, Rhein-Gelassenheit und direkte telefonische Bestellung an der Friesdorfer Straße.
          </p>
        </div>

        <div>
          <h3 className="font-display text-lg font-bold text-baroque">Kontakt</h3>
          <p className="mt-3 text-sm text-cream/80">{ADDRESS}</p>
          <a href={`tel:${PHONE_HREF}`} className="mt-2 inline-block text-sm font-bold text-baroque">
            {PHONE}
          </a>
          <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-cream/75">
            {openingHours.map((item) => (
              <span key={item.day}>{item.day}: {item.time}</span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-lg font-bold text-baroque">Rechtliches</h3>
          <div className="mt-3 flex flex-col gap-2 text-sm text-cream/80">
            <Link to="/impressum" className="hover:text-baroque">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-baroque">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
