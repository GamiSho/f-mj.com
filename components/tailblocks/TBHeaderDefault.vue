<template>
  <header
    class="header text-white body-font w-screen p-4 flex justiy-between items-center"
  >
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
        class="lg:block sm:hidden md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-xl justify-center"
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
      <div class="lang-select sm:hidden md:flex">
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
    <div
      class="block lg:hidden border-2 border-white rounded-full p-4 w-16 h-16"
    >
      <label for="menu-toggle" class="block cursor-pointer">
        <svg
          width="28"
          height="26"
          viewBox="0 0 28 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.14286 0.5H12.8571C13.4255 0.5 13.9705 0.658036 14.3724 0.93934C14.7742 1.22064 15 1.60218 15 2C15 2.39782 14.7742 2.77936 14.3724 3.06066C13.9705 3.34196 13.4255 3.5 12.8571 3.5H2.14286C1.57454 3.5 1.02949 3.34196 0.627629 3.06066C0.225765 2.77936 0 2.39782 0 2C0 1.60218 0.225765 1.22064 0.627629 0.93934C1.02949 0.658036 1.57454 0.5 2.14286 0.5ZM15.1429 22.5H25.8571C26.4255 22.5 26.9705 22.658 27.3724 22.9393C27.7742 23.2206 28 23.6022 28 24C28 24.3978 27.7742 24.7794 27.3724 25.0607C26.9705 25.342 26.4255 25.5 25.8571 25.5H15.1429C14.5745 25.5 14.0295 25.342 13.6276 25.0607C13.2258 24.7794 13 24.3978 13 24C13 23.6022 13.2258 23.2206 13.6276 22.9393C14.0295 22.658 14.5745 22.5 15.1429 22.5ZM2.14286 11.5H25.8571C26.4255 11.5 26.9705 11.658 27.3724 11.9393C27.7742 12.2206 28 12.6022 28 13C28 13.3978 27.7742 13.7794 27.3724 14.0607C26.9705 14.342 26.4255 14.5 25.8571 14.5H2.14286C1.57454 14.5 1.02949 14.342 0.627629 14.0607C0.225765 13.7794 0 13.3978 0 13C0 12.6022 0.225765 12.2206 0.627629 11.9393C1.02949 11.658 1.57454 11.5 2.14286 11.5Z"
            fill="white"
          />
        </svg>
      </label>
      <input
        id="menu-toggle"
        v-model="menuChecked"
        type="checkbox"
        class="hidden"
      />
      <transition name="slide">
        <nav
          v-show="menuChecked"
          class="z-index-50 fixed top-0 right-0 flex flex-col pt-12 justify-start items-center bg-blue text-lg font-bold text-white h-screen w-60"
        >
          <div
            class="border-2 border-white rounded-full p-4 w-16 h-16 mb-10 cursor-pointer"
            @click="closeMenu"
          >
            <svg
              width="28"
              height="26"
              viewBox="0 0 28 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.14286 0.5H12.8571C13.4255 0.5 13.9705 0.658036 14.3724 0.93934C14.7742 1.22064 15 1.60218 15 2C15 2.39782 14.7742 2.77936 14.3724 3.06066C13.9705 3.34196 13.4255 3.5 12.8571 3.5H2.14286C1.57454 3.5 1.02949 3.34196 0.627629 3.06066C0.225765 2.77936 0 2.39782 0 2C0 1.60218 0.225765 1.22064 0.627629 0.93934C1.02949 0.658036 1.57454 0.5 2.14286 0.5ZM15.1429 22.5H25.8571C26.4255 22.5 26.9705 22.658 27.3724 22.9393C27.7742 23.2206 28 23.6022 28 24C28 24.3978 27.7742 24.7794 27.3724 25.0607C26.9705 25.342 26.4255 25.5 25.8571 25.5H15.1429C14.5745 25.5 14.0295 25.342 13.6276 25.0607C13.2258 24.7794 13 24.3978 13 24C13 23.6022 13.2258 23.2206 13.6276 22.9393C14.0295 22.658 14.5745 22.5 15.1429 22.5ZM2.14286 11.5H25.8571C26.4255 11.5 26.9705 11.658 27.3724 11.9393C27.7742 12.2206 28 12.6022 28 13C28 13.3978 27.7742 13.7794 27.3724 14.0607C26.9705 14.342 26.4255 14.5 25.8571 14.5H2.14286C1.57454 14.5 1.02949 14.342 0.627629 14.0607C0.225765 13.7794 0 13.3978 0 13C0 12.6022 0.225765 12.2206 0.627629 11.9393C1.02949 11.658 1.57454 11.5 2.14286 11.5Z"
                fill="white"
              />
            </svg>
          </div>
          <div class="mb-4">
            <NuxtLink
              :to="localePath({ path: '/tours' })"
              @click.native="closeMenu"
              >Tours</NuxtLink
            >
          </div>
          <div class="mb-4">
            <NuxtLink
              :to="localePath({ path: '/nosotros' })"
              @click.native="closeMenu"
              >Nosotros</NuxtLink
            >
          </div>
          <div>
            <NuxtLink
              :to="localePath({ path: '/como-reservar' })"
              @click.native="closeMenu"
              >¿Cómo Reservar?</NuxtLink
            >
          </div>
          <div>
            <NuxtLink
              :to="localePath({ path: '/blog' })"
              @click.native="closeMenu"
              >Blog</NuxtLink
            >
          </div>
        </nav>
      </transition>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const menuChecked = ref(false)
    const closeMenu = () => (menuChecked.value = false)
    const isLocaleSelectOpen = ref(false)
    const toggleLocaleSelect = () => {
      isLocaleSelectOpen.value = !isLocaleSelectOpen.value
    }

    return {
      isLocaleSelectOpen,
      toggleLocaleSelect,
      menuChecked,
      closeMenu,
    }
  },
})
</script>

<style lang="scss" scoped>
.header {
  background-image: url(https://f-mj.imgix.net/machu-picchu-head.jpg?auto=compress,enhance,format);
  background-repeat: no-repeat;
  background-position: center;
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

#menu-toggle:checked + #menu {
  display: flex;
}

.slide-enter-active,
.slide-leave-active {
  transform: translate(0px, 0px);
  transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
}
.slide-enter,
.slide-leave-to {
  transform: translateX(100vw) translateX(0px);
}
</style>
