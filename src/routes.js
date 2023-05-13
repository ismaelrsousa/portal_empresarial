//  AUTH
import Login from './views/auth/Login.vue';

//  INTERNAL
import Home from './views/internal/Home.vue';

//  ERRORS
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
  },
  {
    path: '/',
    component: Home
  },
];