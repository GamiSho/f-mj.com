<template>
  <div class="container py-20 bg-white px-2">
    <div>
      <h2 class="text-3xl my-4">Nosotros</h2>
      <p class="mb-4 text-lg">
        Nuestro lema es "los clientes son como familia". Por lo tanto, le
        pedimos que nos considere como sus parientes que viven en Perú y no dude
        en consultarnos de manera informal. Estamos comprometidos en estar
        atentos y hacer todo lo posible para cumplir cualquier solicitud que
        tenga.
      </p>
      <p class="mb-4 text-lg">
        Hace 8 años, llegué a Perú como un empleado enviado desde Japón por una
        agencia de viajes. En ese momento, trabajaba en la gestión de horarios
        de viajeros y supervisaba servicios en nombre de una agencia de viajes
        líder.
      </p>
      <p class="mb-4 text-lg">
        Un día, unos amigos cercanos planeaban visitar Perú y me hicieron varias
        preguntas y solicitudes. A partir de esa experiencia, me di cuenta de
        que, a pesar de trabajar en una agencia de viajes, faltaba un
        asesoramiento personalizado. Había muchas intermediaciones y proveedores
        entre los empleados locales y los viajeros.
      </p>
      <p class="mb-4 text-lg">
        Debido a los efectos de la pandemia, en 2021, la empresa me pidió
        regresar a Japón. En respuesta, renuncié a mi empleo anterior y fundé mi
        propia agencia de viajes y tours.
      </p>
      <p class="mb-4 text-lg">
        Nuestro objetivo es hacer que su viaje a Perú, que tal vez sea único en
        la vida, sea inolvidable. Tratamos a nuestros clientes como si fueran
        familia y brindamos un apoyo total hasta su regreso.
      </p>
      <p class="mb-4 text-lg">
        Atentamente, <br />
        Hiko
      </p>
    </div>
    <div class="flex">
      <div class="lg:w-1/4 md:1/2">
        <a
          href="https://f-mj.imgix.net/1-Declaracion.pdf"
          download="Declaracion.pdf"
        >
          <img
            src="https://f-mj.imgix.net/declaracion.png?auto=compress,enhance,forma&w=256&h=363"
            alt=""
          />
        </a>
      </div>
      <div class="lg:w-1/4 md:1/2">
        <a href="https://f-mj.imgix.net/2-Licencia.pdf" download="Licencia.pdf">
          <img
            src="https://f-mj.imgix.net/licencia-1.png?auto=compress,enhance,format&w=256&h=363"
            alt=""
          />
        </a>
      </div>
      <div class="lg:w-1/4 md:1/2">
        <a href="https://f-mj.imgix.net/2-Licencia.pdf" download="Licencia.pdf">
          <img
            src="https://f-mj.imgix.net/licencia-2.png?auto=compress,enhance,format&w=256&h=363"
            alt=""
          />
        </a>
      </div>
      <div class="lg:w-1/4 md:1/2">
        <a
          href="https://f-mj.imgix.net/3-Constancia-de-Gercetur.pdf"
          download="Constancia-de-Gercetur.pdf"
        >
          <img
            src="https://f-mj.imgix.net/constancia-de-gercetur.png?auto=compress,enhance,format&w=256&h=363"
            alt=""
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, useContext, useMeta } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'NosotrosPage',
  setup() {
    const { title } = useMeta()
    const { app } = useContext()
    const localMessages = app.i18n.messages[app.i18n.locale]
    title.value = localMessages['title.about-us'].toString()
  },
  head() {
    return {
      title: 'Nosotros',
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
