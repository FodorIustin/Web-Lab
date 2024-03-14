<template>
  <div class="card">
    <img :src="member.avatar" alt="Avatar" />
    <div>{{ member.name }}</div>
    <div>{{ member.title }}</div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  member: Object
})
</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  padding: 16px;
  margin: 8px;
  text-align: center;
}

img {
  max-width: 100px;
  border-radius: 50%;
}
</style>
