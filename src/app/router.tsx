import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from '@/shared/services/routes';
import { MainLayout } from '@/layouts';
import { HomePage, RandomPostPage, LandingPage, NavigationPage } from '@/pages';

export const routes = [
  {
    path: ROUTES.MAIN.getLink(),
    element: <MainLayout />,
    children: [
      {
        element: <HomePage />,
        index: true,
      },
      {
        path: ROUTES.POST.getLink(),
        element: <RandomPostPage />,
      },
      {
        path: ROUTES.LANDING.getLink(),
        element: <LandingPage />,
      },
      {
        path: ROUTES.NAVIGATION.getLink(),
        element: <NavigationPage />,
      },
      {
        path: '*',
        element: <div>Page is empty</div>,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
