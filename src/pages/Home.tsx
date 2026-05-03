import { Link } from 'react-router-dom';
import { ArrowRight, Music2, Phone, Sparkles, Waves } from 'lucide-react';
import { HoursCard } from '@/components/HoursCard';
import { LocalTrustBar } from '@/components/LocalTrustBar';
import { MenuCard } from '@/components/MenuCard';
import { RhineWaveDivider } from '@/components/RhineWaveDivider';
import { SEO } from '@/components/SEO';
import { SectionHeading } from '@/components/SectionHeading';
import { menuItems } from '@/data/restaurantData';
import { PHONE_HREF } from '@/config/site';

export default function Home() {
  const featured = menuItems.filter((item) => item.badges?.length).slice(0, 3);

  return (
    <>
      <SEO
        title="Tandoori Express Bonn | Indisches Restaurant in Bonn"
        description="Tandoori Express Bonn in der Friesdorfer Str. 120, 53173 Bonn: Indische und pakistanische Küche am Rhein. Frisch gekocht und telefonisch bestellbar."
      />

      <section className="rhine-paper relative overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-x-0 top-16 h-24 text-river/20" aria-hidden="true">
          <svg viewBox="0 0 1200 140" preserveAspectRatio="none" className="h-full w-full">
            <path d="M0 80 C160 20 280 130 440 70 C620 0 760 122 930 62 C1060 18 1140 42 1200 66" fill="none" stroke="currentColor" strokeWidth="18" strokeLinecap="round" />
          </svg>
        </div>
        <div className="container-page relative grid min-h-[calc(100vh-9rem)] items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/75 px-4 py-2 text-sm font-extrabold text-rhine shadow-sm backdrop-blur dark:bg-white/10 dark:text-baroque">
              <Waves className="h-4 w-4 text-river" aria-hidden="true" />
              Indische Küche am Rhein
            </div>
            <h1 className="font-display text-5xl font-bold leading-tight text-rhine dark:text-baroque sm:text-6xl lg:text-7xl">
              Südasiatische Wärme trifft Bonner Rheinruhe.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 dark:text-cream/80">
              Frisch gekocht in Bonn-Bad Godesberg. Würzig, herzlich und direkt telefonisch bestellbar.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={`tel:${PHONE_HREF}`} className="btn-primary text-base">
                <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                Jetzt anrufen
              </a>
              <Link to="/menu" className="btn-secondary text-base">
                Speisekarte ansehen <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-4 -top-4 h-28 w-28 rounded-full bg-cherry/10 blur-2xl" aria-hidden="true" />
            <div className="overflow-hidden rounded-2xl border border-gold/40 bg-white/75 shadow-glow backdrop-blur dark:bg-white/10">
              <img
                src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1300&auto=format&fit=crop"
                alt="Currygericht mit Reis bei Tandoori Express Bonn"
                className="h-80 w-full object-cover"
              />
              <div className="grid gap-4 p-6 sm:grid-cols-2">
                <div className="rounded-xl bg-cream p-4 dark:bg-white/10">
                  <Music2 className="h-6 w-6 text-gold" aria-hidden="true" />
                  <p className="mt-3 font-display text-xl font-bold text-rhine dark:text-baroque">Beethoven-Stadt</p>
                  <p className="mt-1 text-sm text-slate-600 dark:text-cream/70">Klassische Ruhe, moderne Küche.</p>
                </div>
                <div className="rounded-xl bg-cream p-4 dark:bg-white/10">
                  <Sparkles className="h-6 w-6 text-park" aria-hidden="true" />
                  <p className="mt-3 font-display text-xl font-bold text-rhine dark:text-baroque">Gewürze mit Wärme</p>
                  <p className="mt-1 text-sm text-slate-600 dark:text-cream/70">Aromatisch, frisch und unkompliziert.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page relative z-10 -mt-8">
        <LocalTrustBar />
      </section>

      <section className="container-page py-16">
        <HoursCard />
      </section>

      <RhineWaveDivider />

      <section className="container-page py-20">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <SectionHeading kicker="Beliebte Gerichte" title="Favoriten für einen Abend mit Rheinblick-Gefühl." />
          <Link to="/menu" className="btn-secondary">Ganzes Menü</Link>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {featured.map((item) => <MenuCard key={item.id} item={item} />)}
        </div>
      </section>
    </>
  );
}
