<template>
  <NuxtLink
    :to="localePath({ path: `/blog/${slug}` })"
    class="flex flex-col bg-white"
  >
    <img class="object-cover object-center" :src="image" alt="">
    <div class="p-2">
      <h1 class="text-md">{{ title }}</h1>
    </div>
  </NuxtLink>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    slug: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  setup() {},
})
</script>
