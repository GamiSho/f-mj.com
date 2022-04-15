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
    @apply block mb-6 text-md leading-loose;
  }
}
</style>