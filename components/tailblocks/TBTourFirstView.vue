<template>
  <section class="text-gray-600 body-font overflow-hidden">
    <div class="px-5 pt-20 mx-auto">
      <div class="lg:w-4/5 mx-auto flex flex-wrap">
        <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" :src="image">
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h2 class="text-sm title-font text-gray-500 tracking-widest">Nombre del tour</h2>
          <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{{ nombreDelTour }}</h1>
          <div v-if="false" class="flex mb-4"><!-- Implement review -->
            <span class="flex items-center">
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-blue" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-blue" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-blue" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-blue" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-blue" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <span class="ml-3">4 Reviews</span>
            </span>
          </div>
          <h2 class="text-sm title-font tracking-widest">Caracter de tour</h2>
          <p class="leading-relaxed">{{ caracterDeTour }}</p>
          <h2 class="text-sm title-font tracking-widest">Correo</h2>
          <div class="text-blue">
            <ul>
              <li>
                <a href="mailto:info@f-mj.com">info@f-mj.com</a>
              </li>
              <li>
                <a href="mailto:reserva@f-mj.com">reserva@f-mj.com</a>
              </li>
            </ul>
          </div>
          <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
            <div class="flex ml-6 items-center">
              <div class="relative">
                <span class="absolute right-0 top-0 h-full w-10 text-center pointer-events-none flex items-center justify-center">
                </span>
              </div>
            </div>
          </div>
          <div class="flex">
            <span class="title-font font-medium text-2xl">{{ precioAproximado }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'TourFirstView',
  props: {
    nombreDelTour: {
      type: String,
      required: true,
    },
    caracterDeTour: {
      type: String,
      required: true,
    },
    precioAproximado: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    }
  },
  setup() {},
})
</script>
