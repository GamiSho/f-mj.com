<template>
  <header class="lg:w-full lg:pt-4 bg-blue">
    <label for="menu-toggle" class="lg:hidden block fixed top-5 right-5">
      <svg
        width="28"
        height="26"
        viewBox="0 0 28 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.14286 0.5H12.8571C13.4255 0.5 13.9705 0.658036 14.3724 0.93934C14.7742 1.22064 15 1.60218 15 2C15 2.39782 14.7742 2.77936 14.3724 3.06066C13.9705 3.34196 13.4255 3.5 12.8571 3.5H2.14286C1.57454 3.5 1.02949 3.34196 0.627629 3.06066C0.225765 2.77936 0 2.39782 0 2C0 1.60218 0.225765 1.22064 0.627629 0.93934C1.02949 0.658036 1.57454 0.5 2.14286 0.5ZM15.1429 22.5H25.8571C26.4255 22.5 26.9705 22.658 27.3724 22.9393C27.7742 23.2206 28 23.6022 28 24C28 24.3978 27.7742 24.7794 27.3724 25.0607C26.9705 25.342 26.4255 25.5 25.8571 25.5H15.1429C14.5745 25.5 14.0295 25.342 13.6276 25.0607C13.2258 24.7794 13 24.3978 13 24C13 23.6022 13.2258 23.2206 13.6276 22.9393C14.0295 22.658 14.5745 22.5 15.1429 22.5ZM2.14286 11.5H25.8571C26.4255 11.5 26.9705 11.658 27.3724 11.9393C27.7742 12.2206 28 12.6022 28 13C28 13.3978 27.7742 13.7794 27.3724 14.0607C26.9705 14.342 26.4255 14.5 25.8571 14.5H2.14286C1.57454 14.5 1.02949 14.342 0.627629 14.0607C0.225765 13.7794 0 13.3978 0 13C0 12.6022 0.225765 12.2206 0.627629 11.9393C1.02949 11.658 1.57454 11.5 2.14286 11.5Z"
          fill="black"
        />
      </svg>
    </label>
    <input
      id="menu-toggle"
      v-model="menuChecked"
      type="checkbox"
      class="hidden"
    />
    <div
      id="menu"
      class="fixed lg:static hidden lg:flex flex-col lg:flex-row justify-start lg:justify-around mx-auto inset-y-0 right-0 w-72 max-w-full lg:w-full pb-2 pt-20 lg:pt-0 bg-black lg:bg-blue text-white font-medium lg:text-ml"
    >
      <div>
        <NuxtLink :to="localePath({ path: '/' })">
          <img class="h-10" src="~assets/logo-transparent.png" alt="">
        </NuxtLink>
      </div>
      <NuxtLink
        :to="localePath({ path: '/destino' })"
        class="block border-transparent hover:border-white border-b-2 mb-4 lg:mb-0 px-14 lg:px-8 h-8 leading-8"
        @click.native="menuChecked = false"
      >
        Destino
      </NuxtLink>
      <NuxtLink
        :to="localePath({ path: '/nosotros' })"
        class="block border-transparent hover:border-white border-b-2 mb-4 lg:mb-0 px-14 lg:px-8 h-8 leading-8"
        @click.native="menuChecked = false"
      >
        Nosotros
      </NuxtLink>
      <NuxtLink
        :to="localePath({ path: 'como-reservar' })"
        class="block border-transparent hover:border-white border-b-2 mb-4 lg:mb-0 px-14 lg:px-8 h-8 leading-8"
        @click.native="menuChecked = false"
      >
        ¿Cómo Reservar?
      </NuxtLink>
      <template v-if="false">
        <div class="relative text-ml right-16">
          <div
            class="absolute w-18 p-2 z-0"
            @click="isLocaleSelectOpen = !isLocaleSelectOpen"
          >
            <div class="mr-8 text-white">
              {{ $i18n.locales.filter((l) => l.code === $i18n.locale)[0].name }}
            </div>
            <img
              src="~assets/arrow-down.svg"
              class="absolute top-4 right-4"
              alt=""
            />
          </div>

          <ul
            v-if="isLocaleSelectOpen"
            class="p-2 absolute z-10 w-16 bg-white shadow-2xl"
          >
            <li class="mb-1">
              <a
                :href="switchLocalePath($i18n.locale)"
                @click="isLocaleSelectOpen = false"
              >
                {{
                  $i18n.locales.filter((l) => l.code === $i18n.locale)[0].name
                }}
              </a>
            </li>

            <li v-for="locale in $i18n.locales" :key="locale.code" class="mb-1">
              <a
                v-if="$i18n.locale !== locale.code"
                :href="switchLocalePath(locale.code)"
                @click="isLocaleSelectOpen = false"
                >{{ locale.name }}</a
              >
            </li>
          </ul>
        </div>
      </template>
      <svg
        class="fixed lg:hidden top-5 right-5"
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        @click="menuChecked = false"
      >
        <path
          d="M15.8648 12.5012L24.2738 4.08981C24.501 3.87038 24.6822 3.60789 24.8069 3.31767C24.9315 3.02745 24.9972 2.71531 24.9999 2.39945C25.0027 2.0836 24.9425 1.77036 24.8229 1.47802C24.7033 1.18568 24.5266 0.920079 24.3033 0.696729C24.0799 0.473379 23.8143 0.296746 23.522 0.177139C23.2296 0.0575319 22.9164 -0.00265486 22.6005 8.98158e-05C22.2847 0.00283449 21.9726 0.0684563 21.6823 0.193126C21.3921 0.317796 21.1296 0.499016 20.9102 0.726214L12.4988 9.13521L4.08981 0.726214C3.87038 0.499016 3.60789 0.317796 3.31767 0.193126C3.02745 0.0684563 2.71531 0.00283449 2.39945 8.98158e-05C2.0836 -0.00265486 1.77036 0.0575319 1.47802 0.177139C1.18568 0.296746 0.920079 0.473379 0.696729 0.696729C0.473379 0.920079 0.296746 1.18568 0.177139 1.47802C0.0575319 1.77036 -0.00265486 2.0836 8.98158e-05 2.39945C0.00283449 2.71531 0.0684563 3.02745 0.193126 3.31767C0.317796 3.60789 0.499016 3.87038 0.726214 4.08981L9.13521 12.4988L0.726214 20.9102C0.499016 21.1296 0.317796 21.3921 0.193126 21.6823C0.0684563 21.9726 0.00283449 22.2847 8.98158e-05 22.6005C-0.00265486 22.9164 0.0575319 23.2296 0.177139 23.522C0.296746 23.8143 0.473379 24.0799 0.696729 24.3033C0.920079 24.5266 1.18568 24.7033 1.47802 24.8229C1.77036 24.9425 2.0836 25.0027 2.39945 24.9999C2.71531 24.9972 3.02745 24.9315 3.31767 24.8069C3.60789 24.6822 3.87038 24.501 4.08981 24.2738L12.4988 15.8648L20.9102 24.2738C21.1296 24.501 21.3921 24.6822 21.6823 24.8069C21.9726 24.9315 22.2847 24.9972 22.6005 24.9999C22.9164 25.0027 23.2296 24.9425 23.522 24.8229C23.8143 24.7033 24.0799 24.5266 24.3033 24.3033C24.5266 24.0799 24.7033 23.8143 24.8229 23.522C24.9425 23.2296 25.0027 22.9164 24.9999 22.6005C24.9972 22.2847 24.9315 21.9726 24.8069 21.6823C24.6822 21.3921 24.501 21.1296 24.2738 20.9102L15.8648 12.4988V12.5012Z"
          fill="white"
        />
      </svg>
    </div>
  </header>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  useContext,
  useRouter,
} from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const menuChecked = ref(false)
    const isLocaleSelectOpen = ref(false)

    const { app } = useContext()
    const router = useRouter()

    const changeLocale = (e: Event) => {
      const target = e.target as HTMLInputElement
      router.push({ path: app.switchLocalePath(target.value) })
    }

    return {
      menuChecked,
      changeLocale,
      isLocaleSelectOpen,
    }
  },
})
</script>

<style lang="scss" scoped>
#menu-toggle:checked + #menu {
  display: flex;
}
.nuxt-link-active {
  @apply border-white;
}
</style>
