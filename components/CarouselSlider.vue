<template>
  <div v-swiper="swiperdDrectiveOption" class="swiper w-full">
    <div class="swiper-wrapper">
      <div v-for="(asset, index) in assets" :key="index" class="swiper-slide">
        <img :src="asset.url" alt="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType } from '@nuxtjs/composition-api'
import { SwiperOptions } from 'swiper'
import { Asset } from '~/types/@types'

export default defineComponent({
  props: {
    assets: {
      type: Array as PropType<Asset[]>,
      required: true,
    },
  },
  setup() {
    const calculateWindowWidth = () => {
      return window.innerWidth * 0.004
    }

    onMounted(() => {
      window.addEventListener('resize', calculateWindowWidth)
    })

    const swiperdDrectiveOption = {
      loop: true,
      speed: 700,
      centeredSlides: true,
      slidesPerView: 1.79,
      breakpoints: {
        768: {
          slidesPerView: 4.5,
        },
        1024: {
          slidesPerView: 5.2,
        },
      },
    } as SwiperOptions

    return {
      swiperdDrectiveOption,
    }
  },
})
</script>
