<template>
  <header class="header text-white body-font w-screen relative">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <NuxtLink
        :to="localePath({ path: '/' })"
        class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
      >
        <img class="w-40" src="~/assets/logo-transparent.png" alt="">
      </NuxtLink>
      <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-xl justify-center">
        <NuxtLink
          :to="localePath({ path: '/tours' })"
          class="mr-5 hover:text-gray-900"
        >
          Tours
        </NuxtLink>
        <NuxtLink
          :to="localePath({ path: '/nosotros' })"
          class="mr-5 hover:text-gray-900"
        >
          Nosotros
        </NuxtLink>
        <NuxtLink
          :to="localePath({ path: '/como-reservar' })"
          class="mr-5 hover:text-gray-900"
        >
          ¿Cómo Reservar?
        </NuxtLink>
        <NuxtLink
          :to="localePath({ path: '/blog' })"
          class="mr-5 hover:text-gray-900"
        >
          Blog
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  height: 85vh;
  background: linear-gradient(to top, rgb(255 255 255 / 0%) 0%, rgb(0 0 0 / 30%) 100%), url(https://f-mj.imgix.net/machu-picchu-main.jpg?auto=compress,enhance,format);
  background-repeat:  no-repeat;
  background-position: top;
  background-size: cover;
}
</style>
