import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Home.vue';
import Begin from './views/Begin.vue';
import Bye from './views/Bye.vue';
import Courtship from './views/Courtship.vue';
import Gift from './views/Gift.vue';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/begin",
      name: "begin",
      component: Begin,
      props: {
        next: "/bye",
        reverse: false
      }
    },
    {
      path: "/bye",
      name: "Bye",
      component: Bye,
      props: {
        next: "/courtship",
        reverse: true
      }
    },
    {
      path: "/courtship",
      name: "Courtship",
      component: Courtship,
      props: {
        next: "/gift",
        reverse: false
      }
    },
    {
      path: "/gift",
      name: "Gift",
      component: Gift,
      props: {
        next: "/",
        reverse: true
      }
    },
  ]
});