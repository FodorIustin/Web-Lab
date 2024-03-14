<template>
  <div>
    <input v-model="searchQuery" placeholder="Caută după nume" />
    <div v-for="member in filteredMembers" :key="member.id">
      <TeamMemberCard :member="member" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import TeamMemberCard from 'TeamMemberCard.vue'

const searchQuery = ref('')
const teamMembers = ref([
  {
    id: 1,
    name: 'Duran Clayton',
    title: 'UI/UX Designer',
    avatar: 'url_avatar1'
  },
  {
    id: 2,
    name: 'Ana Trujillo',
    title: 'Product Manager',
    avatar: 'url_avatar2'
  }
])

const filteredMembers = computed(() => {
  const query = searchQuery.value.toLowerCase()
  return teamMembers.value.filter((member) => member.name.toLowerCase().includes(query))
})
</script>

<style scoped></style>
