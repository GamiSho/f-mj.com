<template>
  <div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'IndexPage',
  layout: 'lp',
  setup() {},
  head() {
    return {
      title: 'Find my journey',
      titleTemplate: '',
      meta: [
        {
          hid: 'og:type',
          name: 'og:type',
          content: 'website',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'Find my journey',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: window.location.origin + window.location.pathname,
        },
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
.triangle {
  border-top: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 50px solid #6aa7cd;
  border-left: 50px solid #6aa7cd;
}
</style>
