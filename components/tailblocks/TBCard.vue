<template>
  <div class="p-4 md:w-1/3">
    <div class="h-full border-2 border-black rounded-lg overflow-hidden">
      <img class="lg:h-48 md:h-36 w-full object-contain object-center" :src="image" alt="blog">
      <div class="p-6">
        <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{{ destino }}</h2>
        <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{{ nombreDelTour }}</h1>
        <p class="leading-relaxed mb-3">{{ caracterDeTour }}</p>
        <p class="leading-relaxed mb-3">{{ precioAproximado }}</p>
        <div class="flex items-center flex-wrap ">
          <NuxtLink
            class="text-red inline-flex items-center md:mb-2 lg:mb-0"
            :to="localePath({ path: `/tours/${slug}` })"
          >
            Learn More
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'TourCard',
  props: {
    destino: {
      type: String,
      required: true,
    },
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
    slug: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
})
</script>
