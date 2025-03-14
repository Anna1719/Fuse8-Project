import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from '@/shared/services/routes';
import { MainLayout } from '@/layouts';
import { Home } from '@/pages/home';
import { RandomPost } from '@/pages/random-post';

export const routes = [
  {
    path: ROUTES.MAIN.getLink(),
    element: <MainLayout />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        path: ROUTES.POST.getLink(),
        element: <RandomPost />,
      },
      {
        path: '*',
        element: <div>404 Not Found</div>,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
