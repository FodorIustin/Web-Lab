<template>
  <div class="font-sans bg-gray-100 flex flex-row">

    <!-- Sidebar -->
    <div class="bg-gray-800 text-white p-4 h-100% flex flex-col sm:block hidden">
      <!-- Navigation links -->
      <div class="flex items-center">
        <router-link to="/" class="hover:text-gray-300 flex mb-2 text-sm">Acasa</router-link>
        <div class="flex items-center ml-auto">
          <i class="bi bi-list"></i>
        </div>
      </div>
      <div><router-link to="/about-us" class="hover:text-gray-300 flex mb-2 text-sm">Despre noi</router-link></div>
      <div><router-link to="/events" class="hover:text-gray-300 flex mb-2 text-sm">Evenimente</router-link></div>
      <div><router-link to="/offers" class="hover:text-gray-300 flex mb-2 text-sm">Ce oferim</router-link></div>
      <div><router-link to="/develop" class="hover:text-gray-300 flex mb-2 text-sm">Dezvoltare personala</router-link></div>
      <div><router-link to="/develops" class="hover:text-gray-300 flex mb-2 text-sm">Dezvoltare spirituala</router-link></div>
      <div><router-link to="/projects" class="hover:text-gray-300 flex mb-2 text-sm">Proiecte</router-link></div>
      <div><router-link to="/resources" class="hover:text-gray-300 flex mb-2 text-sm">Resurse</router-link></div>
      <div><router-link to="/join" class="hover:text-gray-300 flex mb-2 text-sm">Alatura-te</router-link></div>
      <div><router-link to="/gallery" class="hover:text-gray-300 flex mb-2 text-sm">Galerie</router-link></div>
      <div><router-link to="/contact" class="hover:text-gray-300 flex mb-2 text-sm">Contact</router-link></div>
    </div>

    <!-- Main content -->
    <div class="bg-gray-200 flex-1 flex-col flex">

      <!-- Header -->
      <div class="bg-casa1 bg-center bg-cover h-60 flex items-center justify-center">
        <div class="text-3xl font-bold">Contact</div>
      </div>

      <!-- Content -->
      <div class="flex flex-col bg-gray-700 h-80">
        <div class="bg-gray-700 rounded-lg text-white w-4/5 mx-auto p-4">
          <!-- Black container with rounded corners and 80% of the width -->
          <div class="h-33 flex">
            <!-- Container with medium height and divided into two columns -->
            <div class="w-2/3 p-4 ml-6">
              <div class="w-1/2 text-blue-500">Email:</div>
              <div class="font-medium text-xl">int.teachers.community@gmail.com</div>
            </div>
            <div class="w-1/3 flex items-center">
              <Button btn-text="Facebook"/>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col bg-gray-700 h-80"></div>

    </div>

  </div>
</template>

<script>
import Button from './Button.vue'; // Import the Button component

export default {
  components: {
    Button // Register the Button component
  }
};
</script>

<style>
/* Add any component-specific styles here */
</style>
