import { PhoneIcon } from '@heroicons/react/24/solid';
import { PHONE_HREF } from '@/config/site';

export function PhoneFab() {
  return (
    <a
      href={`tel:${PHONE_HREF}`}
      className="fixed bottom-5 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-rhine text-white shadow-glow ring-8 ring-river/25 transition hover:scale-105 focus:outline-none focus:ring-river/50 dark:bg-baroque dark:text-ink sm:hidden"
      aria-label="Jetzt anrufen"
    >
      <PhoneIcon className="h-7 w-7" aria-hidden="true" />
    </a>
  );
}
