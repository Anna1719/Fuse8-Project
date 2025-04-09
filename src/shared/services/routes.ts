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
  ARTICLES: {
    name: 'articles',
    pathname: '/articles',
    getLink: () => '/articles',
    text: 'Статьи',
  },
  CREATE_ARTICLE: {
    name: 'create_article',
    pathname: '/articles/create',
    getLink: () => '/articles/create',
    text: 'Создать статью',
  },
} satisfies Record<string, Route>;
