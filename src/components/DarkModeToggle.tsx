import { Moon, Sun } from 'lucide-react';
import { useDarkMode } from '@/hooks/useDarkMode';

export function DarkModeToggle() {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <button
      type="button"
      onClick={toggleDarkMode}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-white/80 text-rhine transition hover:bg-beige dark:border-gold/30 dark:bg-white/10 dark:text-baroque dark:hover:bg-white/15"
      aria-label="Darstellung wechseln"
    >
      {isDark ? <Sun className="h-5 w-5" aria-hidden="true" /> : <Moon className="h-5 w-5" aria-hidden="true" />}
    </button>
  );
}
