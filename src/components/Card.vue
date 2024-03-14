<template>
  <div class="card">
    <div class="details">
      <h2 class="text-xl font-bold mb-2">ID: {{ product.ID }}</h2>
      <p>Prenume: {{ product.Prenume }}</p>
      <p>Nume: {{ product.Nume }}</p>
      <p>City: {{ product.City }}</p>
      <p>Postal Code: {{ product["Postal Code"] }}</p>
      <p>Country: {{ product.Country }}</p>
    </div>
  </div>
</template>

<script setup>
const { product } = defineProps(['product']);
</script>

<style scoped>
.card {
  @apply border p-4 m-4;
}

.details {
  @apply text-center;
}
</style>
