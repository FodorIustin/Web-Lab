<script setup>
import ProductCard from '@/components/ProductCard.vue';

import { ref } from 'vue'
import axios from 'axios'

let welcomeJSON = ref()

async function displayPostAPIWelcome() {
  welcomeJSON.value = await axios.get("http://localhost:3000/products",)
}

const productName = ref('')
const productStars = ref(0)
const productReviews = ref(0)
const productSale = ref(0)
const productPrice = ref(0)

import { v4 as uuidv4 } from 'uuid';

async function submitForm() {
  await axios.post("http://localhost:3000/products", {
    id: uuidv4(),
    name: productName.value,
    stars: productStars.value,
    reviews: productReviews.value,
    sale: productSale.value,
    price: productPrice.value
  },
    {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  productName.value = ''
  productPrice.value = 0
  productStars.value = 0
  productReviews.value = 0
  productSale.value = 0
}

import { onMounted } from 'vue'

onMounted(async () => {
  welcomeJSON.value = await axios.get("http://localhost:3000/products",)
})

function deleteProduct(productId) {
  axios.delete("http://localhost:3000/products", {
    headers: {
      "Content-Type": "application/json",
    },
    data: { productId },
  });
}

</script>
<template>
  <button @click="displayPostAPIWelcome" type="button"
    class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-1.5 text-center me-2 mb-2 m-5">Display
    Products</button>
  <div>
    <form @submit.prevent="submitForm" class="mx-5">
      <label for="productName">Product Name:</label>
      <input type="text" id="productName" class="border mx-3" v-model="productName">

      <label for="productStars">Product Stars:</label>
      <input type="number" id="productStars" class="border mx-3" v-model="productStars">

      <label for="productReviews">Product Reviews:</label>
      <input type="number" id="productReviews" class="border mx-3" v-model="productReviews">

      <label for="productSale">Product Sale:</label>
      <input type="number" id="productSale" class="border mx-3" v-model="productSale">

      <label for="productPrice">Product Price:</label>
      <input type="text" id="productPrice" class="border mx-3" v-model="productPrice">

      <button type="submit"
        class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-1.5 text-center mt-2">Submit
        Form</button>
    </form>
  </div>
  <div>
    <p class="m-5">Products in Database:</p>
    <div class="grid grid-cols-4 gap-5">
      <ProductCard v-for="product in welcomeJSON?.data" :key="product.id" :product="product"
        @deleteProduct="deleteProduct" />
    </div>
  </div>
</template>
<style scoped></style>