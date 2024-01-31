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
      <div  :style="{ backgroundImage: 'url(\'../images/header2.jpg\')' }" class="bg-casa9 bg-center bg-cover h-60 flex items-center justify-center">
        <div class="text-3xl font-bold">Galerie</div>
      </div>

      <!-- Gallery Images -->
      <div class="flex flex-row bg-gray-400 h-96">
        <div class="w-1/2 flex flex-col">
          <div class="flex sm:h-1/2">
            <div :style="{ backgroundImage: 'url(\'../images/img1-gallery.jpg\')' }" class="w-1/2 bg-casa3 bg-cover bg-center rounded-md m-6 flip-horizontal-bottom"></div>
            <div :style="{ backgroundImage: 'url(\'../images/img2-gallery.jpg\')' }" class="w-1/2 bg-casa4 bg-cover bg-center rounded-md m-6 flip-horizontal-bottom"></div>
          </div>
          <div class="flex sm:h-1/2">
            <div :style="{ backgroundImage: 'url(\'../images/img7-gallery.jpg\')' }" class="w-1/2 bg-casa5 bg-cover bg-center rounded-md m-6 flip-horizontal-bottom"></div>
            <div :style="{ backgroundImage: 'url(\'../images/img4-gallery.jpg\')' }" class="w-1/2 bg-casa6 bg-cover bg-center rounded-md m-6 flip-horizontal-bottom"></div>
          </div>
        </div>
        <div class="w-1/2 flex items-center justify-center flex-row">
          <div :style="{ backgroundImage: 'url(\'../images/img5-gallery.jpg\')' }" class="w-1/2 h-1/2 bg-casa7 bg-cover bg-center rounded-md m-6 text-pop-up-top"></div>
          <div :style="{ backgroundImage: 'url(\'../images/img6-gallery.jpg\')' }" class="w-1/2 h-1/2 bg-casa8 bg-cover bg-center rounded-md m-6 text-pop-up-top"></div>
        </div>
      </div>

      <div class="flex flex-row bg-gray-400 h-80">
        <div :style="{ backgroundImage: 'url(\'../images/img7-gallery.jpg\')' }" class="w-1/2 bg-casa1 bg-cover bg-center rounded-md m-6 text-pop-up-top"></div>
        <div :style="{ backgroundImage: 'url(\'../images/img8-gallery.png\')' }" class="w-1/2 bg-casa2 bg-cover bg-center rounded-md m-6 text-pop-up-top"></div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  // Add any component-specific logic or data here
}
</script>

<style>
/* Add any component-specific styles here */
</style>
