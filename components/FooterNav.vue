<template>
  <footer class="pt-7 lg:pt-12 px-8 text-white bg-blue">
    <div
      class="md:container flex flex-col md:flex-row justify-center gap-5 md:gap-10 font-medium text-md"
    >
      <NuxtLink
        class="block px-1 h-6 hover:opacity-60"
        :to="localePath({ path: '/tours' })"
        >Tours</NuxtLink
      >
      <NuxtLink
        class="block px-1 h-6 hover:opacity-60"
        :to="localePath({ path: '/nosotros' })"
        >Nosotros</NuxtLink
      >
      <NuxtLink
        class="block px-1 h-6 hover:opacity-60"
        :to="localePath({ path: 'como-reservar' })"
        >¿Cómo Reservar?</NuxtLink
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
    <div v-if="false" class="p-8 lg:hidden">
      <ul
        class="lang-select relative w-24 m-auto flex flex-col items-center justify-evenly font-light text-ml bg-black border border-white"
        :class="{ open: isLocaleSelectOpen === true }"
        @click="toggleLocaleSelect"
      >
        <li
          v-for="locale in $i18n.locales"
          :key="locale.code"
          :class="{ 'is-active': locale.code === $i18n.locale }"
          class="border-solid pl-4 py-2 w-full"
        >
          <a :href="switchLocalePath(locale.code)">
            {{ locale.name }}
          </a>
        </li>
        <svg
          class="absolute top-3.5 right-4"
          width="16"
          height="9"
          viewBox="0 0 16 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 1L8 8L1 1"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </ul>
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
