<template>
  <div class="productContainer">
    <loading :active.sync="isLoading"></loading>
    <ul>
      <li v-for="item in products" :key="item.id">
        <div>
            <img :src="item.imageUrl" alt="">
        </div>
        <h3>{{item.title}}</h3>
        <p>NT$ {{item.price}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      produts: [],
      isLoading: false,
    };
  },

  methods: {
    getProducts() {
      const vm = this;
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products`;
      vm.isLoading = true;
      this.$http.get(api).then((response) => {
        vm.products = response.data.products;
        vm.isLoading = false;
      });
    },
  },

  created() {
    this.getProducts();
  },
};
</script>
