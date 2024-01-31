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
          <div class="text-3xl font-bold">Dezvoltare spirituala</div>
        </div>

        <!-- Section 1 -->
        <div class="flex flex-row bg-gray-400 h-60 items-center justify-center">
          <div class="flex flex-col items-center sm:w-1/3 mr-5 ml-5">
            <div class="text-sm font-bold">Femeia implinita</div>
            <div>Te ajutăm să îți descoperi misiunea personală pentru care ai fost creată, astfel încât să poți duce o viață cu impact.</div>
          </div>

          <div class="flex flex-col items-center sm:w-1/3 mr-5">
            <div class="text-sm font-bold">Grupuri Alpha</div>
            <div>Discuții, pe baza unor filmulețe atractive. Ne propunem să explorăm împreună întrebări despre viață, credință, dragoste, suferință și multe altele.</div>
          </div>

          <div class="flex flex-col items-center sm:w-1/3 mr-5">
            <div class="text-sm font-bold">Proiecte umanitare</div>
            <div>Un proiect de ajutorare materială și oferirea unui seminar educațional în Ucraina. Beneficiari: școli, profesori și elevi din Ternopil, Kamianets.</div>
          </div>
        </div>

        <!-- Section 2 -->
        <div class="flex flex-row bg-gray-400 h-80">
          <div :style="{ backgroundImage: 'url(\'../images/img1-develops.jpg\')' }" class="w-1/3 bg-center bg-cover rounded-md m-6 flip-horizontal-bottom"></div>
          <div :style="{ backgroundImage: 'url(\'../images/img2-develops.jpg\')' }" class="w-1/3 bg-center bg-cover rounded-md m-6 flip-horizontal-bottom"></div>
          <div :style="{ backgroundImage: 'url(\'../images/img3-develops.jpg\')' }" class="w-1/3 bg-center bg-cover rounded-md m-6 flip-horizontal-bottom"></div>
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
