<template>
  <div>
    <TBHeader />
    <Nuxt />
    <FooterNav />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'LpLayout',
})
</script>
