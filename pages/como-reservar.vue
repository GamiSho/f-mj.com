<template>
  <div class="container py-20">
    <div>
      <h1 class="text-3xl mt-4">
        Pasos sencillos
      </h1>
      <h2 class="text-lg mb-20">
        Desde que encuentre tu tour hasta participar al tour.
      </h2>
      <div class="mb-10">
        <h3 class="text-xl font-medium mb-2">
          Paso１. Contáctate con nosotros
        </h3>
        <p class="text-lg">
          Dejar un mensaje por Facebook, Instagram, Whatsapp, Email o desde la plataforma de nuestra página Web.
          Indíquenos lo siguiente para asesorar mejor tu viaje. 
          <br />
          ¿Qué actividad? ¿Para Cuándo?
          <br />
          ¿Cuántas personas? ¿Cuál es su nombre?
        </p>
      </div>
      <div class="mb-10">
        <h3 class="text-xl font-medium mb-2">
          Paso 2. El adelanto de pago
        </h3>
        <p class="text-lg">
          El pago se realiza en dos partes, para asegurar su reserva es necesario pagar un primer pago del 50% del paquete turístico.
          <br />
          Te enviaremos un enlace para que realices el adelanto de pago.
          <br />
          El adelanto pago adelanto es el 50% de la tarifa.
        </p>
      </div>
      <div class="mb-10">
        <h3 class="text-xl font-medium mb-2">
          Paso 3. Confirmación de Reserva
        </h3>
        <p class="text-lg">
          Después de realizar el adelanto, te llegará la confirmación de la reserva con el itinerario y las indicaciones de los servicios incluidos.
        </p>
      </div>
      <div class="mb-10">
        <h3 class="text-xl font-medium mb-2">
          Paso 4. El pago final
        </h3>
        <p class="text-lg">
          Este pago se debe realizar hasta 35 días antes de la llegada.
          <br />
          Si tu realizas tu reserva de los 35 días antes del servicio, el pago sería único, 100% del precio.
          <br />
          Si tu reservas dentro de los 35 días antes del inicio de tu viaje el pago debe ser el total del paquete.
        </p>
        <p class="text-base">
          Si no se realiza el pago hasta 35 días antes, existe un riesgo de que tus reservas quedan anuladas
        </p>
      </div>
      <div class="mb-10">
        <h3 class="text-xl font-medium mb-2">
          Paso１. Contáctate con nosotros
        </h3>
        <p class="text-lg">
          Dejar un mensaje por Facebook, Instagram, Whatsapp, Email o desde la plataforma de nuestra página Web.
          Indíquenos lo siguiente para asesorar mejor tu viaje. 
          <br />
          ¿Qué actividad? ¿Para Cuándo?
          <br />
          ¿Cuántas personas? ¿Cuál es su nombre?
        </p>
        <div class="pt-4">
          <NuxtLink
            class="bg-blue text-white font-bold w-28 py-3 px-4 rounded-full flex justify-between items-center"
            :to="localePath({ path: '/tours' })"
          >
            <span class="mr-4">Tours</span>
            <img class="transform -rotate-90" src="~/assets/arrow-down.svg" alt="" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'ComoReservarPage',
  head() {
    return {
      title: 'Como reservar',
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
