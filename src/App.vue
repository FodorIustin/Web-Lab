<template>
  <div class="container mx-auto">
    <Card v-for="product in products" :key="product.name" :product="product" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Card from './components/Card.vue';

const products = ref([
  {
    name: "Montes Scelerisque",
    stars: "4.9",
    reviews: "807",
    sale: "65",
    price: "332",
    image: "https://via.placeholder.com/150",
  },
 
]);
</script>

<style scoped>

</style>
