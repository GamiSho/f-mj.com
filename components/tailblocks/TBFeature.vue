<template>
  <section class="body-font">
    <div class="px-5 mx-auto">
      <div class="text-center">
        <h1 class="sm:text-lg text-2xl font-medium text-center title-font text-gray-900 mb-4">Servicios Incluidos: </h1>
      </div>
      <div v-for="si in serviciosIncluidos" :key="si" class="flex flex-col lg:w-full sm:mx-auto sm:mb-2">
        <div class="p-2 w-full">
          <div class="bg-gray-100 rounded flex p-4 h-full items-center">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-blue w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span class="title-font font-medium">{{ si }}</span>
          </div>
        </div>
      </div>
      <div class="text-center mt-10">
        <h1 class="sm:text-lg text-2xl font-medium text-center title-font text-gray-900 mb-4">No Incluidos: </h1>
      </div>
      <div v-for="ni in noIncluidos" :key="ni" class="flex flex-col lg:w-full sm:mx-auto sm:mb-2">
        <div class="p-2 w-full">
          <div class="bg-gray-100 rounded flex p-4 h-full items-center">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-red w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span class="title-font font-medium">{{ ni }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'TourCardPage',
  props: {
    serviciosIncluidos: {
      type: Array,
      required: true,
    },
    noIncluidos: {
      type: Array,
      required: true,
    },
  },
})
</script>
