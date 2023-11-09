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
          :to="localePath({ path: `/${$t('route.tours')}` })"
          class="mr-5 hover:text-gray-900"
        >
          {{ $t('title.tours') }}
        </NuxtLink>
        <NuxtLink
          :to="localeRoute({ path: `/${$t('route.about-us')}` })"
          class="mr-5 hover:text-gray-900"
        >
          {{ $t('title.about-us') }}
        </NuxtLink>
        <NuxtLink
          :to="localePath({ path: `/${$t('route.booking')}` })"
          class="mr-5 hover:text-gray-900"
        >
          {{ $t('title.booking') }}
        </NuxtLink>
        <NuxtLink
          :to="localePath({ path: '/blog' })"
          class="mr-5 hover:text-gray-900"
        >
          {{ $t('title.blog') }}
        </NuxtLink>
      </nav>
      <div class="lang-select">
        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
          @click="toggleLocaleSelect"
        >
          {{ localeName }}
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
import { defineComponent, ref, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const { app } = useContext()
    const localeName = ref('Español')
    const isLocaleSelectOpen = ref(false)

    // @ts-ignore
    localeName.value =
      // @ts-ignore
      app.i18n.locales?.find(
        (l: any | undefined) => l?.code === app.i18n.locale
        // @ts-ignore
      )?.name || 'Español'

    // update localeName variable on load
    const toggleLocaleSelect = () => {
      isLocaleSelectOpen.value = !isLocaleSelectOpen.value
    }

    return {
      isLocaleSelectOpen,
      toggleLocaleSelect,
      localeName,
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
    url(https://f-mj.imgix.net/machu-picchu-main.jpg?fit=clip&h=1080);
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
