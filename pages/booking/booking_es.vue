<template>
  <div class="container py-20 bg-white px-2">
    <div>
      <h1 class="text-3xl mt-4">Pasos sencillos</h1>
      <h2 class="text-lg mb-20">
        Desde que encuentre su tour hasta participar al tour.
      </h2>
      <div class="mb-10">
        <h3 class="text-xl font-medium mb-2">Paso １</h3>
        <p class="text-lg">
          Primero, confirmaremos sus planes de viaje a través de correo
          electrónico, Line o WhatsApp. <br />
          También le haremos sugerencias. Por favor, póngase en contacto con
          nosotros para discutir qué tipo de plan le gustaría. Proporciónenos su
          fecha de salida, la duración del viaje, los lugares de interés que le
          gustaría visitar y cualquier otra información relevante. Estamos aquí
          para ayudarle como si fuera un familiar que vive en Perú. No dude en
          consultarnos.
        </p>
      </div>
      <div class="mb-10">
        <h3 class="text-xl font-medium mb-2">Paso 2</h3>
        <p class="text-lg">
          En el siguiente paso, revisaremos y finalizaremos los planes, y
          comenzaremos las reservas.
          <br />
          Le enviaremos un correo electrónico para informarle una vez que
          hayamos completado los preparativos.
        </p>
      </div>
      <div class="mb-10">
        <h3 class="text-xl font-medium mb-2">Paso 3</h3>
        <p class="text-lg">
          Entre 30 y 35 días antes de la fecha de salida, el cliente debe
          realizar el pago y proporcionar los detalles del pasaporte y vuelos.
          Si solicita las reservaciones dentro de los 30 días previos a la fecha
          de salida, comenzaremos la reserva una vez que hayamos recibido el
          pago y la información del pasaporte. Por favor, asegúrese de leer
          nuestras condiciones generales antes de efectuar el pago.
        </p>
      </div>
      <div class="mb-10">
        <h3 class="text-xl font-medium mb-2">Paso 4</h3>
        <p class="text-lg">
          Unos 15 días antes de la salida, se enviarán por correo electrónico el
          itinerario definitivo y los boletos.
        </p>
      </div>
      <div class="mb-10">
        <h3 class="text-xl font-medium mb-2">Forma de pago</h3>
        <ul>
          <li>
            <p class="text-lg">
              Si prefiere pagar con tarjeta de crédito, le enviaremos un enlace
              de pago para que pueda realizar la transacción usted mismo.
            </p>
          </li>
          <li>
            <p class="text-lg">
              Para transferencias bancarias, los detalles del beneficiario son:
              Perú/USD. La información bancaria se encuentra a continuación.
              Tenga en cuenta que los gastos de transferencia bancaria son
              responsabilidad del cliente. Además, en el caso de transferencias
              bancarias, hay un cargo adicional de 25 USD."
            </p>
          </li>
        </ul>
      </div>
      <div class="mb-10">
        <h3 class="text-xl font-medium mb-2">
          Dirección de la transferencia bancaria:
        </h3>
        <p class="text-lg">
          Nombre del banco: BBVA PERU <br />
          Dirección: Av. República de Panamá 3055, San Isidro, Lima, Perú <br />
          Código Swift: BCONPEPL <br />
          Número de cuenta: 011-083-000100013331-32
        </p>

        <div class="pt-4">
          <NuxtLink
            class="bg-blue text-white font-bold w-28 py-3 px-4 rounded-full flex justify-between items-center"
            :to="localePath({ path: '/tours' })"
          >
            <span class="mr-4">Tours</span>
            <img
              class="transform -rotate-90"
              src="~/assets/arrow-down.svg"
              alt=""
            />
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
