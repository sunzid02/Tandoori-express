import { MapPin, Phone, Sparkles, Waves } from 'lucide-react';

const items = [
  { icon: MapPin, label: 'Bonn-Bad Godesberg' },
  { icon: Waves, label: 'Nähe Rhein' },
  { icon: Sparkles, label: 'Frisch gekocht' },
  { icon: Phone, label: 'Telefonische Bestellung' }
];

export function LocalTrustBar() {
  return (
    <div className="grid gap-3 rounded-xl border border-gold/25 bg-white/80 p-3 shadow-soft backdrop-blur dark:bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
      {items.map(({ icon: Icon, label }) => (
        <div key={label} className="flex items-center gap-3 rounded-lg bg-cream/75 px-4 py-3 dark:bg-white/10">
          <Icon className="h-5 w-5 text-park" aria-hidden="true" />
          <span className="text-sm font-bold text-rhine dark:text-cream">{label}</span>
        </div>
      ))}
    </div>
  );
}
