<template>
  <div v-if="tour">
    <TBTourFirstView
      :nombre-del-tour="tour.nombreDelTour"
      :caracter-de-tour="tour.caracterDeTour"
      :precio-aproximado="tour.precioAproximado"
      :image="tour.image.url"
    />
    <div class="text-center">
      <h1 class="sm:text-lg text-2xl font-medium text-center title-font text-gray-900 mt-20">Itinerario:</h1>
    </div>
    <TBItinerario :itinerario="tour.itinerario" />
    <div class="lg:w-4/6 w-full mx-auto">
      <TBFeature
        :servicios-incluidos="tour.serviciosIncluidos"
        :no-incluidos="tour.noIncluidos"
      />
      <div v-if="tour.informacionUtil.length > 0">
        <div class="text-center">
          <h1 class="sm:text-lg text-2xl font-medium text-center title-font text-gray-900 mt-20">INFORMACIÓN ÚTIL:</h1>
        </div>
        <div class="p-4 w-full">
          <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
            <div class="flex-grow">
              <ul class="leading-relaxed text-md">
                <li v-for="(iu, index) in tour.informacionUtil" :key="index">{{ iu }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div v-if="tour.recomendaciones.length > 0">
        <div class="text-center">
          <h1 class="sm:text-lg text-2xl font-medium text-center title-font text-gray-900 mt-20">RECOMENDACIONES:</h1>
        </div>
        <div class="p-4 w-full">
          <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
            <div class="flex-grow">
              <ul class="leading-relaxed text-md">
                <li v-for="(r, index) in tour.recomendaciones" :key="index">{{ r }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sticky bottom-10 w-32 sm:text-sm ml-auto">
      <a
        class="border border-green text-gray-800 font-bold py-2 px-4 sm:px-2 bg-white rounded-full inline-flex items-center"
        href="https://api.whatsapp.com/message/RFCYBG2FTNDFH1" target="_blank"
      >
        <img class="fill-current w-4 h-4 mr-2" src="~/assets/whatsapp-logo.svg" alt="">
        <span>reservar</span>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, useRoute } from '@nuxtjs/composition-api'
import { useResult, useQuery } from '@vue/apollo-composable'
import TourQ from '~/apollo/queries/Tour.gql'
import { Tour } from '~/types/@types'

export default defineComponent({
  name: 'TourDetailPage',
  setup() {
    const route = useRoute()
    const slug = route.value.params.slug
    const { result } = useQuery(TourQ, { slug })
    const tour = useResult(result, undefined, (data) => data?.tour as Tour)

    return {
      tour
    }
  }
})
</script>
