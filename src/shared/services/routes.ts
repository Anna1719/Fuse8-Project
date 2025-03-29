import { Route } from '@/utils/navigation-types';

export const ROUTES = {
  MAIN: {
    name: 'main',
    pathname: '/',
    getLink: () => '/',
    text: 'Главная',
  },
  POST: {
    name: 'post',
    pathname: '/random-post',
    getLink: () => '/random-post',
    text: 'Рандомный пост',
  },
  LANDING: {
    name: 'landing',
    pathname: '/landing',
    getLink: () => '/landing',
    text: 'Лендинг',
  },
  NAVIGATION: {
    name: 'navigation',
    pathname: '/navigation',
    getLink: () => '/navigation',
    text: 'Навигация',
  },
} satisfies Record<string, Route>;
