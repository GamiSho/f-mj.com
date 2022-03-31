<template>
  <section :id="destino" class="text-gray-600 body-font">
    <div class="container mx-auto flex px-5 pt-24 md:flex-row flex-col items-center">
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <img class="object-cover object-center rounded" alt="hero" :src="image">
      </div>
      <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          {{ destino }}
        </h1>
        <p class="mb-8 leading-relaxed">{{ text }}</p>
      </div>
    </div>
    <div class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
          <TBCard
            v-for="t in tours"
            :key="t.id"
            :slug="t.slug"
            :destino="destino"
            :nombreDelTour="t.nombreDelTour"
            :caracterDeTour="t.caracterDeTour"
            :precioAproximado="t.precioAproximado"
            :image="t.image.url"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { Tour } from '~/types/@types'

export default defineComponent({
  props: {
    destino: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      requied: true,
    },
    tours: {
      type: Array as PropType<Tour[]>,
      required: true,
    }
  },
})
</script>
