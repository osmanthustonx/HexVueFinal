<template>
  <div  class="container d-flex content">
    <Sidebar></Sidebar>
    <router-view></router-view>
  </div>
</template>


<script>
import Sidebar from '../Sidebar';

export default {
  components: {
    Sidebar,
  },
};
</script>
