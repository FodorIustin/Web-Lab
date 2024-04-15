<script setup>
import { verseStore } from '@/stores/verseStore'
import axios from 'axios'

const piniaStore = verseStore();

const randomVerse = async () => {
  axios({
    method: 'GET',
    url: "http://localhost:3000"
  }).then((response) => {
    piniaStore.verse = response.data.text;
    piniaStore.reference = response.data.reference;


    piniaStore.previousVerses.unshift({
      verse: piniaStore.verse,
      reference: piniaStore.reference
    })

    if (piniaStore.previousVerses.length > 5) {
      piniaStore.previousVerses.pop();
    }
  })
}
</script>
<template>
  <div class="flex space-x-64 m-16">
    <div>
      <button @click="randomVerse" class="px-4 py-2 bg-blue-500 text-white rounded">Random</button>
    </div>
    <div class="flex flex-col">
      <span>
        {{ piniaStore.reference }}
      </span>
      <span> {{ piniaStore.verse }}
      </span>
    </div>
    <div class="flex flex-col space-y-3 ">
      <div v-for="randomVerse in piniaStore.previousVerses" class="flex flex-col">
        <span>{{ randomVerse.reference }}</span>
        <span>{{ randomVerse.verse }}</span>
      </div>
    </div>
  </div>
</template>
<style scoped></style>