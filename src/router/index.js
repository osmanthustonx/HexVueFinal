import Vue from 'vue';
import Router from 'vue-router';
import ContentPage from '@/components/ContentPage';
import Products from '@/components/shop/Products';
import All from '@/components/shop/Products/product_all';
import ItemInfo from '@/components/shop/itemInfo';
import Checkout from '@/components/shop/Checkout';
import BillCheck from '@/components/shop/BillCheck';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ContentPage',
      component: ContentPage,
      children: [
        {
          path: '/shop/:select',
          name: 'Products',
          component: Products,
          children: [
            {
              path: '',
              name: 'All',
              component: All,
            },
          ],
        },
        {
          path: 'itemInfo',
          name: 'ItemInfo',
          component: ItemInfo,
        },
        {
          path: 'checkout',
          name: 'Checkout',
          component: Checkout,
        },
        {
          path: 'billcheck',
          name: 'BillCheck',
          component: BillCheck,
        },
      ],
    },
  ],
});
