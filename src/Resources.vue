<template>
  <div class="font-sans bg-gray-100">
    <div class="flex flex-row">
      <!-- Sidebar -->
      <div class="bg-gray-800 text-white p-4 h-100% flex flex-col">
        <!-- Navigation Links -->
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
          <div class="text-3xl font-bold">Resurse</div>
        </div>

        <!-- Section 1 -->
        <div class="flex flex-col bg-gray-400 items-center justify-center">
          <div class="text-xl font-bold mb-8">Ce resurse vă punem la dispoziție</div>
          <div class="flex flex-row bg-gray-400" style="height:30rem">
            <div class="w-1/2 flex items-center justify-center m-4">
              <div> Materiale gratuite astfel încât profesorii să devină educatori mai eficienți în sălile de clasă, în relația cu elevii lor
                Resurse de parenting pentru sprijinirea părinților elevilor
                Manualul Tinerii în pragul vieții despre imagine de sine, importanța relațiilor, sistem de valori, caracter, boli cu transmitere sexuală etc.
              </div>
            </div>
            <div :style="{ backgroundImage: 'url(\'../images/img1-resources.jpg\')' }" class="w-1/2 bg-cover rounded-md m-6 max-h-full"></div>
          </div>
        </div>

        <!-- Section 2 -->
        <div class="flex flex-col bg-gray-400 items-center justify-center">
          <div class="flex flex-row bg-gray-400 h-96">
            <div :style="{ backgroundImage: 'url(\'../images/img2-resources.jpg\')' }" class="w-1/2 bg-cover rounded-md m-6"></div>
            <div class="w-1/2 flex items-center justify-center m-4">
              <div>AGENDA PROFESORULUI
                • o resursă pe care am pus-o la dispoziția a sute de profesori
                • conține citate și articole personalizate pentru cadrele didactice
                • o unealtă de folos în a fi mai organizat și în a-ți planifica activitățile
                • găsești în ea tot ce ai nevoie: calendare, pagini pentru zilele săptămânii, inclusiv o evaluare finală
              </div>
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
