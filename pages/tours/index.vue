<i18n>
{
  "en": {},
  "es": {}
}
</i18n>

<template>
  <div>
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
      :destino="cuscoData[0].name"
      :text="cuscoData[0].description"
      :image="cuscoData[0].image.url"
    />
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
          <TBCard
            v-for="(t, index) in cuscoData[0].tours"
            :key="index"
            :slug="t.slug"
            :destino="t.destino"
            :nombreDelTour="t.nombreDelTour"
            :caracterDeTour="t.caracterDeTour"
            :precioAproximado="t.precioAproximado"
            :image="t.image"
          />
        </div>
      </div>
    </section>
    <TBHeroLeft
      :destino="punoData[0].name"
      :text="punoData[0].description"
      :image="punoData[0].image.url"
    />
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
          <TBCard
            v-for="t in punoData[0].tours"
            :key="t.id"
            :slug="t.slug"
            :destino="t.destino"
            :nombreDelTour="t.nombreDelTour"
            :caracterDeTour="t.caracterDeTour"
            :precioAproximado="t.precioAproximado"
            :image="t.image"
          />
        </div>
      </div>
    </section>
    <TBHeroLeft
      :destino="limaData[0].name"
      :text="limaData[0].description"
      :image="limaData[0].image.url"
    />
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
          <TBCard
            v-for="t in limaData[0].tours"
            :key="t.id"
            :slug="t.slug"
            :destino="t.destino"
            :nombreDelTour="t.nombreDelTour"
            :caracterDeTour="t.caracterDeTour"
            :precioAproximado="t.precioAproximado"
            :image="t.image"
          />
        </div>
      </div>
    </section>
    <div class="container">
      <h1 id="PAQUETE" class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        PAQUETE
      </h1>
    </div>
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
          <TBCard
            v-for="t in paqueteData[0].tours"
            :key="t.id"
            :slug="t.slug"
            :destino="t.destino"
            :nombreDelTour="t.nombreDelTour"
            :caracterDeTour="t.caracterDeTour"
            :precioAproximado="t.precioAproximado"
            :image="t.image"
          />
        </div>
      </div>
    </section>
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
    const cuscoData = destinos.value.filter((d) => d.name === 'Cusco')
    const punoData = destinos.value.filter((d) => d.name === 'Puno')
    const limaData = destinos.value.filter((d) => d.name === 'Lima')
    const paqueteData = destinos.value.filter((d) => d.name === 'PAQUETE')

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
      cuscoData,
      punoData,
      limaData,
      paqueteData,
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
