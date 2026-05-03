import { Languages } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="inline-flex items-center rounded-full border border-gold/40 bg-white/80 p-1 text-xs font-extrabold text-rhine dark:bg-white/10 dark:text-cream" aria-label="Language selection">
      <Languages className="ml-2 mr-1 h-4 w-4 text-park" aria-hidden="true" />
      {(['de', 'en'] as const).map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => setLanguage(item)}
          className={`rounded-full px-2.5 py-1 uppercase transition ${
            language === item ? 'bg-rhine text-white dark:bg-baroque dark:text-ink' : 'hover:bg-beige dark:hover:bg-white/10'
          }`}
          aria-pressed={language === item}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
