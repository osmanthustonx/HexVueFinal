<template>
  <div class="d-flex content container">
    <div class="paymentWrap">
      <div class="paymentBorder">
        <div class="container mt-5">
          <table class="table">
            <thead>
              <th></th>
              <th>品名</th>
              <th>數量</th>
              <th>單價</th>
            </thead>
            <tbody>
              <tr v-for="item in cart.carts" :key="item.id">
                <td class="align-middle">
                  <button type="button" class="btn btn-outline-danger btn-sm"
                    @click="removeCartItem(item.id)">
                    <i class="far fa-trash-alt"></i>
                  </button>
                </td>
                <td class="align-middle">
                  {{ item.product.title }}
                  <div class="text-success" v-if="item.coupon">
                    已套用優惠券
                  </div>
                </td>
                <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
                <td class="align-middle text-right">{{ item.final_total }}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="3" class="text-right">總計</td>
                <td class="text-right">{{ cart.total }}</td>
              </tr>

              <!-- 小技巧：讓優惠價錢隱藏/顯示方法 -->
              <tr v-if="cart.final_total !== cart.total">
                <td colspan="3" class="text-right text-success">折扣價</td>
                <td class="text-right text-success">{{ cart.final_total }}</td>
              </tr>
            </tfoot>
          </table>
          <div class="input-group mb-3 input-group-sm">
            <input type="text" class="form-control" v-model="coupon_code" placeholder="請輸入優惠碼">
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button"
                @click="addCouponCode">
                套用優惠碼
              </button>
            </div>
          </div>
          <button class="btn btn-outline-secondary" type="button">
            下一步
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      coupon_code: '',
      cart: {
        carts: {},
      },
    };
  },

  methods: {
    getCart() {
      const vm = this;
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      vm.isLoading = true;
      this.$http.get(api).then((response) => {
        vm.cart = response.data.data;
        console.log(vm.cart);
        vm.isLoading = false;
      });
    },
    removeCartItem(id) {
      const vm = this;
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart/${id}`;
      vm.isLoading = true;
      this.$http.delete(api).then(() => {
        vm.getCart();
        vm.isLoading = false;
      });
    },
    addCouponCode() {
      const vm = this;
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/coupon `;
      const coupon = {
        code: vm.coupon_code,
      };
      vm.isLoading = true;
      this.$http.post(api, { data: coupon }).then((response) => {
        console.log(response);
        vm.getCart();
        vm.isLoading = false;
      });
    },
  },

  created() {
    this.getCart();
  },
};
</script>
