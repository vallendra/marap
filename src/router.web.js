import { lazy } from 'react';

const Home = lazy(() => import('pages/home'));

export default [
  {
    path: '/',
    exact: true,
    component: Home
  }
];
