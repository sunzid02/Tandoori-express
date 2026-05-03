import { Outlet } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PhoneFab } from '@/components/PhoneFab';
import { CookieBanner } from '@/components/CookieBanner';

export function AppLayout() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <PhoneFab />
      <CookieBanner />
    </div>
  );
}
