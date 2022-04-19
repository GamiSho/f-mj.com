<template>
  <div class="rich-text" v-html="html" />
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    html: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss">
.rich-text {
  > * {
    @apply block mb-6 text-md leading-normal;
  }
  > h1 {
    @apply text-6xl my-10;
  }
  > h2 {
    @apply text-4xl my-10;
  }
  > h3 {
    @apply text-2xl my-6;
  }
  > h4 {
    @apply text-xl my-6;
  }
  > h5 {
    @apply text-base my-4;
  }
  > h6 {
    @apply text-sm my-4;
  }
  > table {
    @apply table-auto border-collapse border border-gray-400 my-4;
    thead {
      @apply font-bold;
    }
    th, td {
      @apply border border-gray-400;
    }
  }
}
</style>