<template>
  <NuxtLink
    :to="localePath({ path: `/blog/${slug}` })"
    class="container flex flex-col-reverse md:flex-row"
  >
    <div class="w-full md:w-2/5 bg-white flex flex-col pt-4 md:pt-10 pb-4 px-4">
      <h2 class="font-light text-gray-600">{{ category }}</h2>
      <h1 class="font-serif font-bold text-lg md:text-2xl">{{ title }}</h1>
    </div>
    <div class="w-full md:w-3/5">
      <img class="object-cover object-center" :src="image" alt="">
    </div>
  </NuxtLink>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'BlogCardTop',
  props: {
    slug: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      required: true,
    },
  },
  setup() {},
})
</script>

