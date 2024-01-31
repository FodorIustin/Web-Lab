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
          <div class="text-3xl font-bold">Proiecte</div>
        </div>

        <!-- Section 1 -->
        <div class="flex flex-row bg-gray-400 h-80">
          <div :style="{ backgroundImage: 'url(\'../images/img1-projects.jpeg\')' }" class="sm:w-1/2 bg-center bg-cover rounded-full m-6 text-pop-up-top"></div>
          <div class="sm:w-1/2 flex items-center justify-center m-4">
            <div>În anul școlar 2020-2021 am distribuit gratuit în mai multe școli din Cluj-Napoca, Huedin și Zalău:
              1.300 pachete pentru elevi, conținând măști din bumbac, dulciuri și geluri dezinfectante
              200 pachete pentru profesori, conținând măști din bumbac, dulciuri, geluri dezinfectante, pixuri și semne de carte
              Elevii și profesorii beneficiari au fost impresionați că cineva s-a gândit la ei în aceste vremuri de nesiguranță
            </div>
          </div>
        </div>

        <!-- Section 2 -->
        <div class="flex flex-row bg-gray-400 h-80">
          <div :style="{ backgroundImage: 'url(\'../images/img2-projects.png\')' }" class="w-1/2 bg-center bg-cover rounded-md m-6 text-pop-up-top"></div>
          <div class="w-1/2 flex items-center justify-center m-4">
            <div>În ultimii doi ani am organizat mai multe instruiri, seminare și webinare în beneficiul profesorilor. Iată câteva teme abordate:
              Cum să fii un profesor cu influență?
              Elevul căruia îi predai este mai mult decât o notă!
              Cum să crești un copil rezilient și organizat? (parenting în școala online)
              Cum să faci față anxietății în perioada de pandemie?
            </div>
          </div>
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
