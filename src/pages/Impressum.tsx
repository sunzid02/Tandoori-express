import { SEO } from '@/components/SEO';
import { ADDRESS, PHONE, RESTAURANT_NAME } from '@/config/site';

export default function Impressum() {
  return (
    <>
      <SEO title="Impressum | Tandoori Express Bonn" description="Impressum von Tandoori Express Bonn, Friesdorfer Str. 120, 53173 Bonn." path="/impressum" />
      <section className="rhine-paper py-16">
        <div className="container-page max-w-3xl">
          <h1 className="section-title">Impressum</h1>
          <div className="mt-8 space-y-5 rounded-xl border border-gold/25 bg-white/80 p-6 leading-7 text-slate-700 shadow-soft dark:bg-white/10 dark:text-cream/75">
            <p><strong>{RESTAURANT_NAME}</strong><br />{ADDRESS}</p>
            <p>Telefon: {PHONE}<br />E-Mail: [IHRE_EMAIL]</p>
            <p>Vertreten durch: [INHABER_NAME]</p>
            <p>Umsatzsteuer-ID: [UST_ID]</p>
            <p>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV: [NAME, ADRESSE]</p>
            <p>Hinweis: Diese Angaben sind Platzhalter und müssen vor Veröffentlichung rechtlich geprüft und vollständig ersetzt werden.</p>
          </div>
        </div>
      </section>
    </>
  );
}
