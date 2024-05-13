<script setup>
import ProductCard from '../components/ProductCard.vue'

// const newProduct = {
//   id: 1,
//   name: 'New Product',
//   stars: 0,
//   reviews: 0,
//   sales: 0,
// }
import { ref } from 'vue'
const productName= ref('')
const productStars= ref(0)
const productReviews= ref(0)
const productSales= ref(0)
const productPrice= ref(0)
import {useProductsStore} from '../stores/productsStore'
const productsStore = useProductsStore()

import {v4 as uuidv4} from 'uuid'

function submitForm() {
  console.log(ProductName.value, productStars.value, productReviews.value, productSales.value, productPrice.value)
 productsStore.addProduct(uuidv4(), productName.value, productStars.value, productReviews.value, productSales.value, productPrice.value)
  productName.value = ''
  productStars.value = 0
  productReviews.value = 0

  productSales.value = 0
  productPrice.value = 0
}
function deleteProduct(productId){
  productsStore.deleteProduct(productId)

}
</script>
<template>
  <ProductCard :product=newProduct/>
  <form @submit.prevent="submitForm">
    <div>
      <label for="productName"></label>
      <input type="nummber" id="productName" class="border" v-model="productName">
    </div>
    <div>
      <label for="productStars"></label>
      <input type="nummber" id="productStars" class="border" v-model="productStars">
    </div>
    <div>
      <label for="productReviews"></label>
      <input type="nummber" id="productReviews" class="border" v-model="productReviews">
    </div>
    <div>
      <label for="productSales"></label>
      <input type="nummber" id="productSales" class="border" v-model="productSales">
    </div>
    <div>
      <label for="productPrice"></label>
      <input type="nummber" id="productPrice" class="border" v-model="productPrice">
    </div>

    <div>
      <button type="submit">Submit form</button>
    </div>
  </form>

  <div v-if="productsStore.product.length > 0">
  <ProductCard v-for="product in productsStore.products" :key="product.id" :product="product"  @deleteProduct = "deleteProduct"></ProductCard>
  </div>
  <div v-else class="mt-16">
    No products
  </div>
</template>