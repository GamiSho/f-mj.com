<template>
  <section class="body-font">
    <div class="px-5 pb-10 mx-auto flex flex-wrap">
      <div v-for="(i, index) in itinerario" :key="index" class="flex relative pt-10 pb-20 sm:items-center w-2/3 lg:mx-auto">
        <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
          <div class="h-full w-1 bg-blue pointer-events-none"></div>
        </div>
        <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-blue text-white relative z-10 title-font font-medium text-sm">{{ index + 1 }}</div>
        <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
          <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
            <h2 class="font-medium title-font text-blue mb-1 text-xl">{{ i.title }}</h2>
            <p class="leading-relaxed">{{ i.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { Itinerario } from 'types/@types'

export default defineComponent({
  props: {
    itinerario: {
      type: Array as PropType<Itinerario[]>,
      required: true,
    },
  },
})
</script>
