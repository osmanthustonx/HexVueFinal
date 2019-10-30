<template>
  <div class="container itemContent">
    <div class="imgWrap">
      <img :src="product.imageUrl" alt="">
    </div>
    <ul class="itemInfo">
      <li>
        <h2>{{product.title}}</h2>
      </li>
      <li class="product-feature">
        {{product.content}}
      </li>
      <li class="origin">NT$ {{product.origin_price}}</li>
      <li class="final mb-3">NT$ {{product.price}}</li>
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
            <button class="btn btn-outline-primary item--btn" @click="addtoCart(product.id,count)">
              <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === product.id"></i>
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
      product: {},
      status: {
        loadingItem: '',
      },
    };
  },
  methods: {
    getProduct() {
      const vm = this;
      const id = this.$route.params.id;
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/product/${id}`;
      vm.status.loadingItem = id;
      this.$http.get(api).then((response) => {
        vm.product = response.data.product;
        vm.status.loadingItem = '';
      });
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
        console.log(response);
      });
    },
  },

  created() {
    this.getProduct();
  },
};
</script>
