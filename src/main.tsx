import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { router } from '@/router';
import { LanguageProvider } from '@/i18n/LanguageContext';
import '@/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <LanguageProvider>
        <RouterProvider router={router} />
      </LanguageProvider>
    </HelmetProvider>
  </React.StrictMode>
);
