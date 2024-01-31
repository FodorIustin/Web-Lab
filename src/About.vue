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
          <div class="text-3xl font-bold">Despre noi</div>
          <div class="lg:hidden flex items-center text-xl mr-3">
            <i class="bi bi-list"></i>
          </div>
        </div>

        <!-- Section 1 -->
        <div class="flex flex-row sm:flex-row bg-gray-400 h-80">
          <div class="w-1/2 flex items-center justify-center m-4 text-pop-up-top">
            <div>Am format o comunitate în care profesorii învață unii de la alții, fac schimb de experiențe şi se încurajează reciproc, pentru a deveni astfel cei mai buni profesori care pot fi.</div>
          </div>
          <div :style="{ backgroundImage: 'url(\'../images/img2-gallery.jpg\')' }" class="w-1/2 bg-casa2 bg-cover rounded-[20%] m-6"></div>
        </div>

        <!-- Section 2 -->
        <div class="flex flex-row bg-gray-400 h-80">
          <div :style="{ backgroundImage: 'url(\'../images/img1-about.jpg\')' }" class="w-1/2 bg-casa3 bg-center bg-cover rounded-full m-6"></div>
          <div class="w-1/2 flex items-center justify-center m-4 text-pop-up-top">
            <div>Mai mult de 30 profesoare au participat în primăvara anului 2022 la cursuri săptămânale de dezvoltare personală, profesională și spirituală.</div>
          </div>
        </div>
        <!-- You can add more sections if needed -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // Your Vue.js logic goes here
};
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
