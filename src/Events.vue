<template>
  <div class="font-sans bg-gray-100">
    <div class="flex flex-row">
      <!-- Sidebar -->
      <div class="bg-gray-800 text-white p-4 h-100% flex flex-col sm:block hidden">
        <router-link to="/" class="hover:text-gray-300 flex mb-2 text-sm">Acasa</router-link>
        <router-link to="/about" class="hover:text-gray-300 flex mb-2 text-sm">Despre noi</router-link>
        <router-link to="/events" class="hover:text-gray-300 flex mb-2 text-sm">Evenimente</router-link>
        <router-link to="/offers" class="hover:text-gray-300 flex mb-2 text-sm">Ce oferim</router-link>
        <router-link to="/develop" class="hover:text-gray-300 flex mb-2 text-sm">Dezvoltare personala</router-link>
        <router-link to="/develops" class="hover:text-gray-300 flex mb-2 text-sm">Dezvoltare spirituala</router-link>
        <router-link to="/projects" class="hover:text-gray-300 flex mb-2 text-sm">Proiecte</router-link>
        <router-link to="/resources" class="hover:text-gray-300 flex mb-2 text-sm">Resurse</router-link>
        <router-link to="/join" class="hover:text-gray-300 flex mb-2 text-sm">Alatura-te</router-link>
        <router-link to="/gallery" class="hover:text-gray-300 flex mb-2 text-sm">Galerie</router-link>
        <router-link to="/contact" class="hover:text-gray-300 flex mb-2 text-sm">Contact</router-link>
      </div>

      <!-- Main content -->
      <div class="bg-gray-200 flex-1 flex-col flex">
        <!-- Header -->
        <div :style="{ backgroundImage: 'url(\'../images/header2.jpg\')' }" class="bg-center bg-cover h-60 flex items-center justify-center">
          <div class="text-3xl font-bold text-black">Evenimente</div>
        </div>

        <!-- Section 1 -->
        <div class="flex flex-col items-center justify-center bg-gray-400 p-4">
          <SortEvent @sortDate="sortDate" />
  <div class="flex flex-row justify-center">
    <div v-for="event in sortedEvents" :key="event.date" class="flex flex-col bg-gray-500 p-12 m-2 rounded-md">
      <div class="font-bold">{{ event.name }}</div>
      <div :style="{ backgroundImage: 'url(\'../images/' + event.img + '\')' }" class="w-full h-60 bg-cover rounded-md mb-2"></div>
      <div>Date: {{ event.dateFormatted }}</div>
    </div>
  </div>
        </div>

        <!-- Section 2 -->
        <div class="flex flex-row bg-gray-400 h-96 justify-center">
         <!-- ... your existing template code ... -->
  
        </div>
      </div>
    </div>
  </div>
</template>





  

<script>
import SortEvent from './SortEvent.vue';

export default {
  data() {
    return {
      events: [
        { name: "Rolul Profesorului", img: "image3-events.png", date: "2022-10-05", dateFormatted: "5 octombrie 2022" },
        { name: "Mentoratul", img: "image4-events.png", date: "2022-10-17", dateFormatted: "17 octombrie 2022" },
        // Add more events with date information
      ],
      sortedEvents: [],
    };
  },
  methods: {
    sortDate(sortOrder) {
      this.sortedEvents = [...this.events].sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
      });
    },
  },
  components: {
    SortEvent,
  },
};
</script>

<style scoped>
/* Your component-specific styles go here */
</style>
