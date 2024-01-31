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
          <div class="text-3xl font-bold">Dezvoltare personala</div>
        </div>

        <!-- Section 1 -->
        <div class="flex flex-row bg-gray-400 h-96">
          <div :style="{ backgroundImage: 'url(\'../images/img1-develop.jpg\')' }" class="w-1/2 bg-center bg-cover rounded-full m-6 rotate-in-2-cw"></div>
          <div class="w-1/2 flex items-center justify-center m-4">
            <div>Dacă dorești să te întâlnești cu un consilier de dezvoltare personală, contactează-ne. Diana este un specialist acreditat, care te poate însoți într-un proces de explorare a unor alternative de evoluție în viitor, pornind de la potențialul tău propriu și aspirațiile exprimate.</div>
          </div>
        </div>

        <!-- Section 2 -->
        <div class="flex-row bg-gray-400 h-40 flex items-center justify-center">
          <div class="m-5">Consiliere psihologică - Oferim suport emoțional gratuit pentru diminuarea anxietății provocate de circumstanțele actuale în context de pandemie.</div>
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
