<template>
  <header class="header text-white body-font w-screen relative">
    <div
      class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
    >
      <NuxtLink
        :to="localePath({ path: '/' })"
        class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
      >
        <img class="w-40" src="~/assets/logo-transparent.png" alt="" />
      </NuxtLink>
      <nav
        class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-xl justify-center"
      >
        <NuxtLink
          :to="localePath({ path: 'tours' })"
          class="mr-5 hover:text-gray-900"
        >
          {{ $t('title.tours') }}
        </NuxtLink>
        <NuxtLink
          :to="localePath({ path: $t('route:about-us') })"
          class="mr-5 hover:text-gray-900"
        >
          {{ $t('title.about-us') }}
        </NuxtLink>
        <NuxtLink
          :to="localePath({ path: $t('route:booking') })"
          class="mr-5 hover:text-gray-900"
        >
          {{ $t('title.booking') }}
        </NuxtLink>
        <NuxtLink
          :to="localePath({ path: 'blog' })"
          class="mr-5 hover:text-gray-900"
        >
          Blog
        </NuxtLink>
      </nav>
      <!-- <ul
        v-if="true"
        class="lang-select relative w-20 m-auto flex flex-col font-light text-md bg-white text-black border border-black rounded-lg"
        :class="{ open: isLocaleSelectOpen === true }"
        @click="toggleLocaleSelect"
      >
        <li
          v-for="locale in $i18n.locales"
          :key="locale.code"
          :class="{ 'is-active': locale.code === $i18n.locale }"
          class="border-solid h-8 w-full pl-3 py-1"
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
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </ul> -->
      <div class="lang-select">
        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
          @click="toggleLocaleSelect"
        >
          {{ $i18n.locale }}
          <svg
            class="w-2.5 h-2.5 ml-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        <!-- Dropdown menu -->
        <div
          :class="{ open: isLocaleSelectOpen === true }"
          class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 fixed general"
        >
          <ul
            class="py-2 text-sm text-gray-700 dark:text-gray-900"
            aria-labelledby="dropdownDefaultButton"
          >
            <li
              v-for="locale in $i18n.locales"
              :key="locale.code"
              :class="{ 'is-active': locale.code === $i18n.locale }"
            >
              <a
                :href="switchLocalePath(locale.code)"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-gray-900 text-gray-900"
              >
                {{ locale.name }}</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
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
.header {
  height: 85vh;
  background: linear-gradient(
      to top,
      rgb(255 255 255 / 0%) 0%,
      rgb(0 0 0 / 30%) 100%
    ),
    url(https://f-mj.imgix.net/machu-picchu-main.jpg?auto=compress,enhance,format);
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;

  .lang-select {
    & > .general {
      display: none;
    }

    li {
      &.is-active {
        display: block;
        text-decoration: underline;
      }
    }

    & > .open {
      display: block;
    }
  }
}
</style>
