import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="container-page py-20 text-center">
      <h1 className="text-5xl font-black">404</h1>
      <p className="mt-4 text-slate-600 dark:text-cream/75">Diese Seite wurde nicht gefunden.</p>
      <Link to="/" className="btn-primary mt-8">Zur Startseite</Link>
    </section>
  );
}
