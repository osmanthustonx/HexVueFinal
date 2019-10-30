<template>
  <div>
    <Navbar/>
    <hr>
    <Search></Search>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from './Navbar';
import Search from './Search';
import Products from './shop/Products';
import Footer from './Footer';


export default {
  components: {
    Navbar,
    Search,
    Products,
    Footer,
  },
};
</script>
