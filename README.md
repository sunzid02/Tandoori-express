# Tandoori Express Bonn SPA

Static Vite + React + TypeScript website for Tandoori Express, an Indian/Pakistani restaurant in Bonn.

## Commands

```bash
npm install
npm run dev
npm run build
```

Optional production preview:

```bash
npm run preview
```

## Where To Edit Content

- Restaurant phone, `tel:` link, address, Google Maps iframe, opening hours, Lieferando and Uber Eats links: `src/config/site.ts`
- Menu categories and menu items: `src/data/restaurantData.ts`
- Legal placeholder pages: `src/pages/Impressum.tsx` and `src/pages/Datenschutz.tsx`
- Shared SEO and JSON-LD schema: `src/components/SEO.tsx` and `src/utils/seo.ts`

The app is intentionally static. There is no backend, database, auth, or API server.

## Routes

- `/`
- `/menu`
- `/about`
- `/kontakt`
- `/lieferando`
- `/impressum`
- `/datenschutz`

## Future AI Continuation Prompt

We are working on a premium, mobile-first Vite + React + TypeScript SPA for Tandoori Express Bonn, a German Indian/Pakistani restaurant website. Keep the app static and German-language. Stack: React Router v6, Tailwind CSS, Lucide React, Heroicons, React Hook Form, Zod, React Helmet Async, react-cookie-consent. Do not remove routes `/`, `/menu`, `/about`, `/kontakt`, `/lieferando`, `/impressum`, `/datenschutz`. Editable restaurant data is in `src/config/site.ts`; menu data is in `src/data/restaurantData.ts`; legal pages are editable placeholders. Prioritize production build health, accessibility basics, premium restaurant UI polish, strong phone CTA, dark mode, responsive layout, and no unnecessary dependencies.
