import { Suspense } from 'react';
import type { ReactNode } from 'react';

export function PageLoader({ children }: { children: ReactNode }) {
  return <Suspense fallback={<div className="container-page py-20 font-bold">Lädt...</div>}>{children}</Suspense>;
}
