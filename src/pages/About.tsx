import { HandHeart, Music2, Sparkles, Trees, Waves } from 'lucide-react';
import { LazyImage } from '@/components/LazyImage';
import { SEO } from '@/components/SEO';
import { SectionHeading } from '@/components/SectionHeading';

const cards = [
  { icon: Waves, title: 'Rhein', text: 'Ruhig, klar und lokal verwurzelt in Bonn-Bad Godesberg.' },
  { icon: Music2, title: 'Beethoven-Stadt', text: 'Klassische Eleganz als leiser Akzent im visuellen Auftritt.' },
  { icon: Sparkles, title: 'Frische Gewürze', text: 'Südasiatische Aromen, warm und direkt verständlich.' },
  { icon: HandHeart, title: 'Gastfreundschaft', text: 'Persönlich erreichbar, unkompliziert und herzlich.' }
];

export default function About() {
  return (
    <>
      <SEO
        title="Über uns | Tandoori Express Bonn"
        description="Tandoori Express Bonn: Inspiriert von der Vielfalt Bonns und der Wärme südasiatischer Küche in Bonn-Bad Godesberg."
        path="/about"
      />
      <section className="rhine-paper py-16">
        <div className="container-page grid gap-12 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
          <div>
            <SectionHeading
              kicker="Über uns"
              title="Inspiriert von Bonn und südasiatischer Küche."
              text="Tandoori Express verbindet die internationale Food-Kultur Bonns mit der Wärme indischer und pakistanischer Gerichte. Der Auftritt bleibt bewusst ruhig, lokal und direkt."
            />
            <p className="mt-5 leading-7 text-slate-700 dark:text-cream/75">
              Bonn-Bad Godesberg, Rheinseite, Parks und Nachbarschaft: Diese Website nimmt diese Atmosphäre auf, ohne erfundene Restaurantgeschichte zu behaupten.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <LazyImage src="https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=900&auto=format&fit=crop" alt="Frisches Currygericht mit Gewürzen" className="h-72 w-full rounded-xl shadow-soft" />
            <LazyImage src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=900&auto=format&fit=crop" alt="Indisches Gericht mit Reis und Sauce" className="h-72 w-full rounded-xl shadow-soft sm:mt-12" />
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid gap-4 md:grid-cols-4">
          {cards.map(({ icon: Icon, title, text }) => (
            <article key={title} className="card p-5">
              <Icon className="h-7 w-7 text-park" aria-hidden="true" />
              <h2 className="mt-4 font-display text-xl font-bold text-rhine dark:text-baroque">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-cream/75">{text}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 rounded-xl border border-gold/25 bg-beige/80 p-6 dark:bg-white/10">
          <Trees className="h-6 w-6 text-park" aria-hidden="true" />
          <p className="mt-3 text-lg leading-8 text-slate-700 dark:text-cream/80">
            Inspiriert von der Vielfalt Bonns und der Wärme südasiatischer Küche.
          </p>
        </div>
      </section>
    </>
  );
}
