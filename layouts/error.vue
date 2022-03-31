<template>
  <div>
    <h1 class="text-3xl text-center font-medium my-20">
      {{ title }}
    </h1>
    <div class="text-center">{{ description }}</div>
    <div class="flex flex-col items-center my-20">
      <ButtonGhost>
        <NuxtLink
          :to="localePath({ path: '/' })"
          class="bg-white text-base font-light uppercase"
          >Go to Home</NuxtLink
        >
      </ButtonGhost>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'ErrorLayout',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  setup(props) {
    if (props.error.statusCode === 404) {
      return {
        title: 'The page cannot be found',
        description: "Sorry, we couldn't find the page requested.",
      }
    } else {
      return {
        title: "The page isn't working",
        description: 'Sorry, we might have a technical problems.',
      }
    }
  },
  head: {
    meta: [{ name: 'robots', content: 'noindex' }],
  },
})
</script>
