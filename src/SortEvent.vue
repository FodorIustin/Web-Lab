<template>
  <div class="flex items-center space-x-2">
    <span class="font-semibold">Sort By:</span>
    <button @click="sortAsc" class="underline cursor-pointer">Date Asc</button>
    <button @click="sortDesc" class="underline cursor-pointer">Date Desc</button>
    <!-- Add more sorting options if needed -->
  </div>
</template>

<script>
export default {
  methods: {
    // Emit events for ascending and descending sorting
    sortAsc() {
      this.$emit('sortDate', 'asc');
    },
    sortDesc() {
      this.$emit('sortDate', 'desc');
    },
    // Add more sorting methods if needed
  },
};
</script>

<style scoped>
/* Your component-specific styles go here */
</style>
