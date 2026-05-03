import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Clock, MapPin, Phone, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { HoursCard } from '@/components/HoursCard';
import { SEO } from '@/components/SEO';
import { SectionHeading } from '@/components/SectionHeading';
import { ADDRESS, GOOGLE_MAPS_EMBED, PHONE, PHONE_HREF } from '@/config/site';

const contactSchema = z.object({
  name: z.string().trim().min(2, 'Bitte geben Sie Ihren Namen ein.'),
  phone: z.string().trim().regex(/^[+()0-9\s/-]{5,}$/, 'Bitte geben Sie eine gültige Telefonnummer ein.'),
  message: z.string().trim().min(10, 'Bitte schreiben Sie eine kurze Nachricht.')
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Kontakt() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', phone: '', message: '' }
  });

  const onSubmit = (data: ContactFormData) => {
    console.log('Kontaktformular:', data);
    setSubmitted(true);
    reset();
  };

  return (
    <>
      <SEO
        title="Kontakt | Tandoori Express Bonn"
        description="Kontakt zu Tandoori Express Bonn, Friesdorfer Str. 120, 53173 Bonn. Telefonisch bestellen und Öffnungszeiten prüfen."
        path="/kontakt"
      />
      <section className="rhine-paper py-16">
        <div className="container-page grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <SectionHeading
              kicker="Kontakt"
              title="Am schnellsten erreichen Sie uns telefonisch."
              text="Für Bestellung und kurze Rückfragen ist der direkte Anruf der wichtigste Weg."
            />
            <a href={`tel:${PHONE_HREF}`} className="mt-8 flex items-center gap-4 rounded-xl bg-rhine p-6 text-cream shadow-glow transition hover:-translate-y-1 dark:bg-baroque dark:text-ink">
              <Phone className="h-9 w-9 shrink-0" aria-hidden="true" />
              <span>
                <span className="block text-sm font-bold uppercase tracking-[0.22em]">Jetzt anrufen</span>
                <span className="text-2xl font-black">{PHONE}</span>
              </span>
            </a>
            <div className="mt-6 grid gap-4">
              <div className="flex gap-3 rounded-xl bg-white/80 p-5 shadow-soft dark:bg-white/10">
                <MapPin className="h-6 w-6 shrink-0 text-park" aria-hidden="true" />
                <p className="font-bold text-rhine dark:text-baroque">{ADDRESS}</p>
              </div>
              <div className="flex gap-3 rounded-xl bg-white/80 p-5 shadow-soft dark:bg-white/10">
                <Clock className="h-6 w-6 shrink-0 text-park" aria-hidden="true" />
                <p className="font-bold text-rhine dark:text-baroque">Öffnungszeiten siehe Übersicht unten</p>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <form onSubmit={handleSubmit(onSubmit)} className="card p-6" noValidate>
              <h2 className="font-display text-2xl font-bold text-rhine dark:text-baroque">Nachricht vorbereiten</h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-cream/75">
                Das Formular validiert lokal und loggt nur in der Browser-Konsole. Es bleibt bewusst statisch.
              </p>
              <div className="mt-6 grid gap-4">
                <label className="text-sm font-bold" htmlFor="name">Name</label>
                <input id="name" {...register('name')} autoComplete="name" className="rounded-lg border border-gold/30 bg-cream px-4 py-3 outline-none dark:bg-white/10" aria-invalid={Boolean(errors.name)} />
                {errors.name && <span className="-mt-2 text-sm text-red-700 dark:text-red-300">{errors.name.message}</span>}

                <label className="text-sm font-bold" htmlFor="phone">Telefon</label>
                <input id="phone" {...register('phone')} autoComplete="tel" inputMode="tel" className="rounded-lg border border-gold/30 bg-cream px-4 py-3 outline-none dark:bg-white/10" aria-invalid={Boolean(errors.phone)} />
                {errors.phone && <span className="-mt-2 text-sm text-red-700 dark:text-red-300">{errors.phone.message}</span>}

                <label className="text-sm font-bold" htmlFor="message">Nachricht</label>
                <textarea id="message" {...register('message')} rows={5} className="rounded-lg border border-gold/30 bg-cream px-4 py-3 outline-none dark:bg-white/10" aria-invalid={Boolean(errors.message)} />
                {errors.message && <span className="-mt-2 text-sm text-red-700 dark:text-red-300">{errors.message.message}</span>}

                <button type="submit" className="btn-primary">
                  <Send className="mr-2 h-4 w-4" aria-hidden="true" />
                  Prüfen
                </button>
                {submitted && <p className="text-sm font-bold text-park">Danke. Die Angaben sind gültig und wurden lokal verarbeitet.</p>}
              </div>
            </form>
            <iframe title="Google Maps Tandoori Express Bonn" src={GOOGLE_MAPS_EMBED} className="h-80 w-full rounded-xl border-0 shadow-soft" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>
      <section className="container-page py-14">
        <HoursCard />
      </section>
    </>
  );
}
