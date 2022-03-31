<i18n>
{
  "en": {},
  "es": {}
}
</i18n>

<template>
  <div v-if="destinos">
    <div class="flex pt-10 justify-center">
      <NuxtLink
        class="font-bold sm:font-medium text-lg sm:text-sm py-2 sm:py-2 px-4 sm:px-2 sm:mx-2 mx-4 sm:mx-2 rounded bg-blue text-white inline-flex items-center"
        :to="localePath({ path: 'tours#Cusco' })"
      >
        <img class="fill-current w-4 h-4 mr-2" src="~/assets/arrow-down.svg" alt="">
        <span>Cusco</span>
      </NuxtLink>
      <NuxtLink
        class="font-bold sm:font-medium text-lg sm:text-sm py-2 sm:py-2 px-4 sm:px-2 sm:mx-2 mx-4 sm:mx-2 rounded bg-blue text-white inline-flex items-center"
        :to="localePath({ path: 'tours#Puno' })"
      >
        <img class="fill-current w-4 h-4 mr-2" src="~/assets/arrow-down.svg" alt="">
        <span>Puno</span>
      </NuxtLink>
      <NuxtLink
        class="font-bold sm:font-medium text-lg sm:text-sm py-2 sm:py-2 px-4 sm:px-2 sm:mx-2 mx-4 sm:mx-2 rounded bg-blue text-white inline-flex items-center"
        :to="localePath({ path: 'tours#Lima' })"
      >
        <img class="fill-current w-4 h-4 mr-2" src="~/assets/arrow-down.svg" alt="">
        <span>Lima</span>
      </NuxtLink>
      <NuxtLink
        class="font-bold sm:font-medium text-lg sm:text-sm py-2 sm:py-2 px-4 sm:px-2 sm:mx-2 mx-4 sm:mx-2 rounded bg-blue text-white inline-flex items-center"
        :to="localePath({ path: 'tours#PAQUETE' })"
      >
        <img class="fill-current w-4 h-4 mr-2" src="~/assets/arrow-down.svg" alt="">
        <span>PAQUETE</span>
      </NuxtLink>
    </div>
    <TBHeroLeft
      v-for="d in destinos"
      :key="d.name"
      :destino="d.name"
      :text="d.description"
      :image="d.image.url"
      :tours="d.tours"
    />
    <div class="sticky bottom-10 w-10 ml-auto mr-4">
      <transition name="fade">
        <button
          type="button"
          class="bg-blue text-white font-bold w-10 h-10 p-3 rounded-full flex justify-center"
          v-show="visible"
          @click="scrollTop"
        >
          <img class="transform rotate-180" src="~/assets/arrow-down.svg" alt="" />
        </button>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import { useResult, useQuery } from '@vue/apollo-composable'
import DestinosQ from '~/apollo/queries/Destinos.gql'
import { Destino } from '~/types/@types'

export default defineComponent({
  name: 'ToursPage',
  setup() {
    const { result } = useQuery(DestinosQ)
    const destinos = useResult(result, [], (data) => data?.destinos as Destino[])

    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (!visible.value) {
        visible.value = scrollY > 100;
      } else if (scrollY < 90) {
        visible.value = !visible.value;
      }
    }
    window.addEventListener('scroll', handleScroll);
    const visible = ref(false)
    const scrollTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }

    return {
      destinos,
      visible,
      scrollTop,
    }
  },
  head() {
    return {
      title: this.$i18n.t('title.adventure').toString(),
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.$i18n.t('title.adventure').toString(),
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
.fade-enter-active, .fade-leave-active {
  transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}
.fade-enter, .fade-leave-to {
  opacity: 0
}
</style>
