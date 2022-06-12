<template>
  <div>
    <TBHeaderDefault />
    <Nuxt />
    <FooterNav />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'BlogLayout',
})
</script>
