<template>
  <div
    class="border-solid border border-black text-black bg-white w-40 font-light text-md text-center p-2 uppercase cursor-pointer hover:bg-gray-100"
    @click="click"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'ButtonGhost',
  setup(_, { emit }) {
    return {
      click: () => emit('click'),
    }
  },
})
</script>
