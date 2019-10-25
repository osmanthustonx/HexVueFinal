import Vue from 'vue';
import Router from 'vue-router';
import ContentPage from '@/components/ContentPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ContentPage',
      component: ContentPage,
    },
  ],
});
