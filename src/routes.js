import Login from './views/auth/Login.vue';
import Page404 from './views/errors/Page404.vue';

export const routes = [
  {
    path: '/auth',
    children: [
      {
        path: 'login',
        component: Login
      }
    ],
  },
  {
    path: '/:patchMatch(.*)*',
    component: Page404
  }
];