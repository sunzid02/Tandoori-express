import { Clock, MapPin, Phone } from 'lucide-react';
import { ADDRESS, PHONE, PHONE_HREF, openingHours } from '@/config/site';
import { useLanguage } from '@/i18n/LanguageContext';

const dayNamesEn: Record<string, string> = {
  Montag: 'Monday',
  Dienstag: 'Tuesday',
  Mittwoch: 'Wednesday',
  Donnerstag: 'Thursday',
  Freitag: 'Friday',
  Samstag: 'Saturday',
  Sonntag: 'Sunday'
};

export function HoursCard() {
  const { language, t } = useLanguage();
  const weekday = new Intl.DateTimeFormat('de-DE', { weekday: 'long' }).format(new Date());
  const today = openingHours.find((item) => item.day === weekday) ?? openingHours[0];

  return (
    <div className="card p-5 sm:p-6">
      <div className="grid gap-5 sm:grid-cols-3">
        <div className="flex gap-3">
          <Phone className="h-6 w-6 shrink-0 text-park" aria-hidden="true" />
          <div>
            <p className="text-sm font-bold uppercase text-slate-500 dark:text-cream/60">{t('hours.phone')}</p>
            <a href={`tel:${PHONE_HREF}`} className="font-extrabold text-rhine dark:text-baroque">{PHONE}</a>
          </div>
        </div>
        <div className="flex gap-3">
          <MapPin className="h-6 w-6 shrink-0 text-park" aria-hidden="true" />
          <div>
            <p className="text-sm font-bold uppercase text-slate-500 dark:text-cream/60">{t('hours.address')}</p>
            <p className="font-extrabold text-rhine dark:text-baroque">{ADDRESS}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <Clock className="h-6 w-6 shrink-0 text-park" aria-hidden="true" />
          <div>
            <p className="text-sm font-bold uppercase text-slate-500 dark:text-cream/60">{t('hours.hours')}</p>
            <p className="font-extrabold text-rhine dark:text-baroque">{t('hours.today')} {today.time}</p>
          </div>
        </div>
      </div>
      <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {openingHours.map((item) => (
          <div key={item.day} className="rounded-lg border border-gold/20 bg-cream/80 p-3 text-sm dark:bg-white/10">
            <span className="font-bold">{language === 'en' ? dayNamesEn[item.day] : item.day}</span>
            <span className="block text-slate-600 dark:text-cream/75">{item.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
