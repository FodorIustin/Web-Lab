<!-- Button.vue -->
<template>
  <div>
    <button @click="redirectToFacebook" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      {{ btnText }}
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    redirectToFacebook() {
      // Redirect the user to the specified Facebook link
      window.location.href = 'https://www.facebook.com/itcromania/';
    }
  },
  props: ['btnText']
}
</script>

<style>
/* Your styles go here */
</style>
