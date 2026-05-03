import { ExternalLink, Phone, ShoppingBag } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { SectionHeading } from '@/components/SectionHeading';
import { LIEFERANDO_URL, PHONE, PHONE_HREF, UBER_EATS_URL } from '@/config/site';

const hasExternalLink = (url: string) => url.trim() !== '' && url !== '#';

export default function Lieferando() {
  const cards = [
    {
      title: 'Telefonisch bestellen',
      text: 'Am schnellsten erreichen Sie uns telefonisch.',
      href: `tel:${PHONE_HREF}`,
      label: PHONE,
      primary: true
    },
    {
      title: 'Lieferando',
      text: 'Partnerlink für Online-Bestellungen, sobald konfiguriert.',
      href: LIEFERANDO_URL,
      label: 'Lieferando öffnen',
      primary: false
    },
    ...(hasExternalLink(UBER_EATS_URL)
      ? [{
          title: 'Uber Eats',
          text: 'Zusätzlicher Partnerlink, wenn verfügbar.',
          href: UBER_EATS_URL,
          label: 'Uber Eats öffnen',
          primary: false
        }]
      : [])
  ];

  return (
    <>
      <SEO
        title="Bestellen | Tandoori Express Bonn"
        description="Bestellen bei Tandoori Express Bonn: telefonisch oder über konfigurierte Partnerlinks. Indisches Restaurant in Bonn-Bad Godesberg."
        path="/lieferando"
      />
      <section className="rhine-paper py-16">
        <div className="container-page">
          <SectionHeading
            kicker="Bestellen"
            title="Direkt, persönlich und rheinisch unkompliziert."
            text="Am schnellsten erreichen Sie uns telefonisch. Partnerlinks sind als Ergänzung vorbereitet."
            align="center"
          />

          <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-3">
            {cards.map((card) => (
              <a
                key={card.title}
                href={card.href}
                target={card.href.startsWith('http') ? '_blank' : undefined}
                rel={card.href.startsWith('http') ? 'noreferrer' : undefined}
                className={`rounded-xl border p-6 shadow-soft transition hover:-translate-y-1 ${
                  card.primary
                    ? 'border-rhine bg-rhine text-cream dark:border-baroque dark:bg-baroque dark:text-ink'
                    : 'border-gold/30 bg-white/80 text-rhine dark:bg-white/10 dark:text-cream'
                }`}
              >
                {card.primary ? <Phone className="h-7 w-7" aria-hidden="true" /> : <ShoppingBag className="h-7 w-7" aria-hidden="true" />}
                <h2 className="mt-5 font-display text-2xl font-bold">{card.title}</h2>
                <p className={`mt-3 text-sm leading-6 ${card.primary ? 'text-cream/75 dark:text-ink/75' : 'text-slate-600 dark:text-cream/75'}`}>{card.text}</p>
                <span className="mt-6 inline-flex items-center text-sm font-extrabold uppercase tracking-wide">
                  {card.label} {!card.primary && <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
