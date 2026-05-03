import { Phone } from 'lucide-react';
import { MenuCategoryTabs } from '@/components/MenuCategoryTabs';
import { MenuCard } from '@/components/MenuCard';
import { SEO } from '@/components/SEO';
import { SectionHeading } from '@/components/SectionHeading';
import { categories } from '@/data/restaurantData';
import { useMenu } from '@/hooks/useMenu';
import { PHONE_HREF } from '@/config/site';

export default function Menu() {
  const { activeCategory, setActiveCategory, filteredItems } = useMenu();

  return (
    <>
      <SEO
        title="Speisekarte | Tandoori Express Bonn"
        description="Speisekarte von Tandoori Express Bonn: Vorspeisen, Suppen, Tandoori Spezialitäten, Lammgerichte und vegetarische indische Küche."
        path="/menu"
      />
      <section className="rhine-paper overflow-hidden py-12 sm:py-20">
        <div className="container-page min-w-0">
          <SectionHeading
            kicker="Speisekarte"
            title="Eine ruhige Restaurantkarte mit klarer Auswahl."
            text="Wählen Sie eine Kategorie und bestellen Sie Ihr Lieblingsgericht direkt telefonisch in Bonn-Bad Godesberg."
          />

          <div className="mt-8 grid min-w-0 gap-6 lg:mt-10 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-8">
            <aside className="min-w-0 lg:sticky lg:top-28 lg:self-start">
              <div className="card min-w-0 p-2">
                <MenuCategoryTabs categories={categories} activeCategory={activeCategory} onChange={setActiveCategory} />
              </div>
              <div className="mt-4 rounded-xl bg-rhine p-4 text-cream shadow-soft sm:p-5 lg:mt-6">
                <p className="font-display text-xl font-bold text-baroque sm:text-2xl">Lieblingsgericht gefunden?</p>
                <p className="mt-2 text-sm leading-6 text-cream/75">Rufen Sie uns direkt an. Am Telefon geht es am schnellsten.</p>
                <a href={`tel:${PHONE_HREF}`} className="mt-5 inline-flex items-center rounded-lg bg-baroque px-5 py-3 text-sm font-extrabold uppercase tracking-wide text-ink transition hover:bg-gold">
                  <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                  Jetzt anrufen
                </a>
              </div>
            </aside>

            <div className="grid min-w-0 gap-5">
              {filteredItems.map((item, index) => (
                <div key={item.id} className="min-w-0">
                  {index === 3 && (
                    <div className="mb-5 rounded-xl border border-gold/30 bg-white/80 p-4 shadow-soft dark:bg-white/10 sm:p-5">
                      <p className="font-display text-xl font-bold leading-tight text-rhine dark:text-baroque sm:text-2xl">Lieblingsgericht gefunden? Rufen Sie uns direkt an.</p>
                    </div>
                  )}
                  <MenuCard item={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
