<template>
  <section class="text-gray-600 body-font relative h-screen">
    <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
      <div class="w-full p-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3879.2752204910835!2d-71.9787864850509!3d-13.518694274702803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916dd674c799bbdf%3A0x3536a23a532e5d81!2s102a%2C%20C.%20Maruri%20265%2C%20Cusco%2008002%2C%20Peru!5e0!3m2!1sen!2sjp!4v1648109595957!5m2!1sen!2sjp"
          class="absolute inset-0"
          width="100%"
          height="100%"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          scrolling="no"
          loading="lazy"
        >
        </iframe>
        <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
          <div class="lg:w-1/2 px-6">
            <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">住所</h2>
            <p class="mt-1">Calle Maruri #265 Ofi.102A, Cusco - Perú</p>
          </div>
          <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
            <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">メールアドレス</h2>
            <a href="mailto:info@f-mj.com" class="block text-blue leading-relaxed">info@f-mj.com</a>
            <a href="mailto:reserva@f-mj.com" class="block text-blue leading-relaxed">reserva@f-mj.com</a>
            <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">番号</h2>
            <div class="flex items-center">
              <a href="https://api.whatsapp.com/message/RFCYBG2FTNDFH1" target="_blank">
                <img class="w-10" src="~/assets/whatsapp-2.png" alt="">
              </a>
              <p class="leading-relaxed">+51-927-964-595 / +51-955797-889</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'ContactarPage',
  head() {
    return {
      title: 'Contactar',
      titleTemplate: '',
      meta: [
        {
          hid: 'og:type',
          name: 'og:type',
          content: 'website',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'Find my journey',
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
