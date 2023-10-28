<template>
  <footer class="pt-7 lg:pt-12 px-8 text-white bg-blue">
    <div
      class="md:container flex flex-col md:flex-row justify-center gap-5 md:gap-10 font-medium text-md"
    >
      <NuxtLink
        class="block px-1 h-6 hover:opacity-60"
        :to="localePath({ path: '/tours' })"
        >{{ $t('title.tours') }}</NuxtLink
      >
      <NuxtLink
        class="block px-1 h-6 hover:opacity-60"
        :to="localePath({ path: '/nosotros' })"
        >{{ $t('title.about-us') }}</NuxtLink
      >
      <NuxtLink
        class="block px-1 h-6 hover:opacity-60"
        :to="localePath({ path: 'como-reservar' })"
        >{{ $t('title.booking') }}</NuxtLink
      >
    </div>
    <div class="md:w-80 h-px mx-auto my-6 bg-white"></div>
    <div
      class="md:container flex flex-col md:flex-row justify-center gap-5 md:gap-10 font-light text-base"
    >
      <NuxtLink class="hover:opacity-60" :to="localePath({ path: '/politica' })">
        {{ $t('title.privacy') }}
      </NuxtLink>
      <NuxtLink class="hover:opacity-60" :to="localePath({ path: '/contactar' })">
        {{ $t('title.contact') }}
      </NuxtLink>
    </div>
    <div class="mt-4 pb-10 text-center">
      <span class="text-sm font-light">© Find my journey</span>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const isLocaleSelectOpen = ref(false)
    const toggleLocaleSelect = () => {
      isLocaleSelectOpen.value = !isLocaleSelectOpen.value
    }

    return {
      isLocaleSelectOpen,
      toggleLocaleSelect,
    }
  },
})
</script>

<style lang="scss" scoped>
.lang-select {
  li {
    display: none;
    &.is-active {
      display: block;
    }
  }
  &.open {
    & > li {
      display: block;
    }
    & > .is-active {
      text-decoration: underline;
    }
  }
}
</style>
