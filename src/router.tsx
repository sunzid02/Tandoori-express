import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { PageLoader } from '@/components/PageLoader';
import { AppLayout } from '@/layouts/AppLayout';

const Home = lazy(() => import('@/pages/Home'));
const Menu = lazy(() => import('@/pages/Menu'));
const About = lazy(() => import('@/pages/About'));
const Kontakt = lazy(() => import('@/pages/Kontakt'));
const Lieferando = lazy(() => import('@/pages/Lieferando'));
const Impressum = lazy(() => import('@/pages/Impressum'));
const Datenschutz = lazy(() => import('@/pages/Datenschutz'));
const NotFound = lazy(() => import('@/pages/NotFound'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <PageLoader><Home /></PageLoader> },
      { path: 'menu', element: <PageLoader><Menu /></PageLoader> },
      { path: 'about', element: <PageLoader><About /></PageLoader> },
      { path: 'kontakt', element: <PageLoader><Kontakt /></PageLoader> },
      { path: 'lieferando', element: <PageLoader><Lieferando /></PageLoader> },
      { path: 'impressum', element: <PageLoader><Impressum /></PageLoader> },
      { path: 'datenschutz', element: <PageLoader><Datenschutz /></PageLoader> },
      { path: '*', element: <PageLoader><NotFound /></PageLoader> }
    ]
  }
]);
