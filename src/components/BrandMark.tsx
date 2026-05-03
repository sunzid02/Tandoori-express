import { Flame } from 'lucide-react';

export function BrandMark() {
  return (
    <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-cream shadow-glow dark:bg-[#12264a]">
      <span className="absolute bottom-3 h-2 w-7 rounded-full border-b-2 border-river" />
      <Flame className="relative h-6 w-6 text-rhine dark:text-baroque" aria-hidden="true" />
    </span>
  );
}
