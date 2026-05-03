import { Link, NavLink } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { BrandMark } from '@/components/BrandMark';
import { DarkModeToggle } from '@/components/DarkModeToggle';
import { PHONE_HREF, RESTAURANT_NAME } from '@/config/site';

const links = [
  { to: '/', label: 'Home' },
  { to: '/menu', label: 'Menü' },
  { to: '/about', label: 'Über uns' },
  { to: '/kontakt', label: 'Kontakt' },
  { to: '/lieferando', label: 'Bestellen' }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-gold/25 bg-cream/90 backdrop-blur-xl dark:border-gold/20 dark:bg-[#0f1c33]/90">
      <nav className="container-page flex h-20 items-center justify-between gap-3">
        <Link to="/" className="flex shrink-0 items-center gap-3" aria-label="Tandoori Express Bonn Startseite">
          <BrandMark />
          <span className="hidden min-w-0 leading-tight sm:block">
            <span className="block whitespace-nowrap font-display text-xl font-bold text-rhine dark:text-baroque">{RESTAURANT_NAME}</span>
            <span className="block text-xs font-bold uppercase tracking-[0.22em] text-park">Bonn am Rhein</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-lg px-4 py-2 text-sm font-bold transition ${
                  isActive
                    ? 'bg-white text-rhine shadow-sm ring-1 ring-gold/30 dark:bg-white/10 dark:text-baroque'
                    : 'text-slate-700 hover:bg-white/75 hover:text-rhine dark:text-cream/80 dark:hover:bg-white/10 dark:hover:text-cream'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <DarkModeToggle />
          <a href={`tel:${PHONE_HREF}`} className="hidden sm:inline-flex btn-primary py-2.5">
            <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
            Jetzt anrufen
          </a>
        </div>
      </nav>

      <div className="container-page flex gap-2 overflow-x-auto pb-3 lg:hidden" aria-label="Mobile Navigation">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `shrink-0 rounded-lg px-4 py-2 text-sm font-bold transition ${
                isActive
                  ? 'bg-rhine text-white dark:bg-baroque dark:text-ink'
                  : 'bg-white/80 text-slate-700 shadow-sm dark:bg-white/10 dark:text-cream'
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </header>
  );
}
