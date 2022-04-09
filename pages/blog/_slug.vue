<template>
  <article>{{ content }}</article>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    content: {
      type: String,
      default: '',
    },
  },
  setup() {},
})
</script>
