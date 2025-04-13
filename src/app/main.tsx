import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { router } from './router';
import { RouterProvider } from 'react-router-dom';
import { AppProviders } from './providers';
import '@/styles/index.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProviders>
      <RouterProvider router={router} />
    </AppProviders>
  </StrictMode>,
);
