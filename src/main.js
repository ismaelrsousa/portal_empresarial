import { createApp } from 'vue';
import { createRouter, createWebHistory} from 'vue-router';

import App from './App.vue';

import { routes } from './routes';

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faPeopleGroup, faClipboardList, faBullseye, faClock, faSun, faMoon, faAngleDown } from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret, faPeopleGroup, faClipboardList, faBullseye, faClock, faSun, faMoon, faAngleDown)

createApp(App)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount("#app");