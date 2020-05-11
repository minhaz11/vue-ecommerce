<template>
  <div class="home">
     <NavBar></NavBar>
      <Carousel></Carousel>
      <Categories></Categories>
      <Products></Products>
      <Login></Login>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import Categories from '@/components/Categories.vue';
import Products from '@/components/Products.vue';
import Login from '@/components/Login.vue';

export default {
  name: 'Home',
  components:{
    Carousel,
    Categories,
    Products,
    Login
  }
  
}
</script>

<style scoped>

</style>
