<template>
  <div class="container itemContent">
    <div class="imgWrap">
      <img src="https://cdn.shopify.com/s/files/1/0062/4918/5349/products/pnycomp27473_1_900x.jpg?v=1555479975" alt="">
    </div>
    <ul class="itemInfo">
      <li>
        <h2>我是滑板抬頭額</h2>
      </li>
      <li class="product-feature">
        THE ARTIST HIMSELF

        DRAWN AS A CAMEL

        PROBABLY BECAUSE EVERYTHING HE EVER WORE

        HAS BEEN CAMEL TONED

        THE IDENTIFICATION IS REAL

        GENERATOR WOOD AS ALWAYS

        FREE GRIPTAPE
      </li>
      <li class="origin">NT$ 5000</li>
      <li class="final mb-3">NT$ 1000</li>
      <li>
        <div class="row item--btns">
          <div class="col-7">
            <div class="input-group mb-3">

              <div id="button-addon3" class="input-group-prepend">
                <button type="button" class="btn btn-outline-primary" @click="count--">-</button>
              </div>

              <input type="number"
                v-model="count"
                placeholder=""
                aria-label="Example text with two button addons"
                aria-describedby="button-addon3"
                min="0"
                class="form-control text-center item--num">

              <div id="button-addon4" class="input-group-append">
                <button type="button" class="btn btn-outline-primary" @click="count++">+</button>
              </div>
            </div>
          </div>
          <div class="col-5">
            <button class="btn btn-outline-primary item--btn">
              <i class="fas fa-spinner fa-spin"></i>
              加入購物車
            </button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  data() {
    return {
      count: 1,
      cart: {},
      status: {
        loadingItem: '',
      },
    };
  },
  methods: {
    getProduct() {

    },
    addtoCart(id, qty = 1) {
      const vm = this;
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      vm.status.loadingItem = id;
      const cart = {
        product_id: id,
        qty,
      };
      this.$http.post(api, { data: cart }).then((response) => {
        vm.status.loadingItem = '';
        // vm.getCart();
        // eslint-disable-next-line no-console
        console.log(response);
      });
    },
  },
};
</script>
