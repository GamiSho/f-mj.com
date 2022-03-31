<template>
  <div class="text-center">
    <h2 class="text-2xl md:text-3xl font-normal">
      {{ title }}
    </h2>
    <div class="bg-black h-3/4 w-8 mx-auto mt-8"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'SectionHeader',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
})
</script>
