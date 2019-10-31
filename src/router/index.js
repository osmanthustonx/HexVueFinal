import Vue from 'vue';
import Router from 'vue-router';
import ContentPage from '@/components/ContentPage';
import Products from '@/components/shop/Products';
import All from '@/components/shop/Products/product_all';
import ItemInfo from '@/components/shop/itemInfo';
import Checkout from '@/components/shop/Checkout';
import BillCheck from '@/components/shop/BillCheck';
import Coupon from '@/components/shop/useCoupon';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ContentPage',
      component: ContentPage,
      children: [
        {
          path: '/shop',
          name: 'Products',
          component: Products,
          children: [
            {
              path: ':select',
              name: 'All',
              component: All,
            },
          ],
        },
        {
          path: '/shop/iteminfo/:id',
          name: 'ItemInfo',
          component: ItemInfo,
        },
        {
          path: 'coupon',
          name: 'Coupon',
          component: Coupon,
        },
        {
          path: 'checkout',
          name: 'Checkout',
          component: Checkout,
        },
        {
          path: 'billcheck/:orderId',
          name: 'BillCheck',
          component: BillCheck,
        },
      ],
    },
  ],
});
