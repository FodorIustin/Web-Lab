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
        <div :style="{ backgroundImage: 'url(\'../images/img1-offers.jpg\')' }" class="bg-center bg-cover h-60 flex items-center justify-center">
          <div class="text-3xl font-bold">Ce oferim</div>
        </div>

        <!-- Section 1 -->
        <div class="flex flex-col bg-gray-400 items-center justify-center h-96">
          <div class="text-xl font-bold mb-4">Ce oferim:</div>
          <div class="m-3 text-shadow-drop-center">În calitate de profesori, aveţi o ocazie deosebită de a infuența pozitiv nu doar elevii dumneavoastră, ci și părinții lor. Probabil aţi experimentat situaţia în care un părinte a venit să vă ceară sfaturi cu privire la creşterea copilului său. Adevărul este că unii părinţi îi consideră pe profesori „experți” în acest domeniu. Însă majoritatea profesorilor nu au primit vreo instruire formală pe tema creșterii copiilor şi nici nu ştiu cum să înveţe pe alții să fe părinți excelenți.</div>
          <div class="m-3 text-shadow-drop-center">Curriculumul de parenting pe care vi-l putem oferi este un prim pas în calea rezolvării acestei dileme. Prin predarea lui, îi veţi putea ajuta pe părinți să înțeleagă care este stilul lor parental şi să dezvolte abilitățile necesare pentru a adopta un stil cât mai efcient și echilibrat.</div>
        </div>

        <!-- Section 2 -->
        <div class="flex flex-row bg-gray-400 h-80">
          <div :style="{ backgroundImage: 'url(\'../images/img1-offers.jpg\')' }" class="w-1/3 bg-cover bg-center rounded-md m-6"></div>
          <div :style="{ backgroundImage: 'url(\'../images/img2-offers.jpg\')' }" class="w-1/3 bg-cover bg-center rounded-md m-6"></div>
          <div :style="{ backgroundImage: 'url(\'../images/img3-offers.jpg\')' }" class="w-1/3 bg-cover bg-center rounded-md m-6"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // Your Vue.js logic goes here
};
</script>

<style scoped>
/* Your component-specific styles go here */
</style>
