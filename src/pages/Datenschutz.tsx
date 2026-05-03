import { SEO } from '@/components/SEO';

export default function Datenschutz() {
  return (
    <>
      <SEO title="Datenschutz | Tandoori Express Bonn" description="Datenschutzerklärung von Tandoori Express Bonn." path="/datenschutz" />
      <section className="rhine-paper py-16">
        <div className="container-page max-w-3xl">
          <h1 className="section-title">Datenschutzerklärung</h1>
          <div className="mt-8 space-y-6 rounded-xl border border-gold/25 bg-white/80 p-6 leading-7 text-slate-700 shadow-soft dark:bg-white/10 dark:text-cream/75">
            <p>Diese Datenschutzerklärung ist ein editierbarer Platzhalter für eine DSGVO-konforme Restaurantwebsite.</p>
            <div>
              <h2 className="font-display text-xl font-bold text-rhine dark:text-baroque">1. Verantwortlicher</h2>
              <p className="mt-2">[NAME / FIRMA], [ADRESSE], [E-MAIL]</p>
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-rhine dark:text-baroque">2. Zugriffsdaten</h2>
              <p className="mt-2">Beim Besuch der Website können technisch notwendige Daten wie IP-Adresse, Datum, Uhrzeit und Browserinformationen verarbeitet werden.</p>
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-rhine dark:text-baroque">3. Cookies</h2>
              <p className="mt-2">Die Website nutzt einen Cookie-Hinweis. Weitere Tracking-Dienste sollten erst nach Zustimmung eingebunden werden.</p>
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-rhine dark:text-baroque">4. Kontaktformular</h2>
              <p className="mt-2">Das Kontaktformular ist aktuell statisch und sendet keine Daten an einen Server. Bei späterer Backend-Anbindung muss dieser Abschnitt angepasst werden.</p>
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-rhine dark:text-baroque">5. Google Maps</h2>
              <p className="mt-2">Eine Kartenansicht kann Daten an Google übertragen. Prüfen Sie vor Veröffentlichung die konkrete Einbindung und Rechtsgrundlage.</p>
            </div>
            <p><strong>Wichtig:</strong> Vor Livegang durch einen Rechtsdienstleister prüfen lassen.</p>
          </div>
        </div>
      </section>
    </>
  );
}
