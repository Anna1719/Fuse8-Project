import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from '@/shared/services/routes';
import { MainLayout } from '@/layouts';
import {
  HomePage,
  RandomPostPage,
  LandingPage,
  NavigationPage,
  ArticleListPage,
  CreateArticlePage,
} from '@/pages';

export const routes = [
  {
    path: ROUTES.MAIN.pathname,
    element: <MainLayout />,
    children: [
      {
        element: <HomePage />,
        index: true,
      },
      {
        path: ROUTES.POST.pathname,
        element: <RandomPostPage />,
      },
      {
        path: ROUTES.LANDING.pathname,
        element: <LandingPage />,
      },
      {
        path: ROUTES.NAVIGATION.pathname,
        element: <NavigationPage />,
      },
      {
        path: ROUTES.ARTICLES.pathname,
        element: <ArticleListPage />,
      },
      {
        path: ROUTES.CREATE_ARTICLE.pathname,
        element: <CreateArticlePage />,
      },
      {
        path: '*',
        element: <div>Page is empty</div>,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
