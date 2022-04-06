<template>
  <NuxtLink
    :to="localePath({ path: `/blog/${slug}` })"
    class="flex flex-col"
  >
    <img class="object-cover object-center" :src="image" alt="">
    <h2 class="font-light text-gray-600">{{ category }}</h2>
    <h1>{{ title }}</h1>
    <span>{{ postedAt }}</span>
  </NuxtLink>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'BlogCard',
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
    postedAt: {
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
