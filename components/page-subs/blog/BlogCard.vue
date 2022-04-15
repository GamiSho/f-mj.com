<template>
  <NuxtLink
    :to="localePath({ path: `/blog/${slug}` })"
    class="flex flex-col"
  >
    <img class="object-cover object-center" :src="image" alt="">
    <h1>{{ title }}</h1>
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
