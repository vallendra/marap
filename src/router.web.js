import { lazy } from 'react';

const Home = lazy(() => import('pages/home'));
const Example = lazy(() => import('pages/example'));

export default [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/example',
    exact: true,
    component: Example
  }
];
