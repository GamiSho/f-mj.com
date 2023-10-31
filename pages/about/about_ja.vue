<template>
  <div class="container py-20 bg-white px-2">
    <div>
      <h2 class="text-3xl my-4">Japon con jamon</h2>
      <p class="mb-4 text-lg">
        This is in Japaneese
        como Machu Picchu un día, Montaña de colores, Lago Humantay, etc.
      </p>
      <p class="mb-4 text-lg">
        Cada viaje es único. Somos conscientes de que nunca se vuelve a repetir
        el mismo tiempo, Por eso Find My Journey.. Encuentra "Mi viaje".
      </p>
      <p class="mb-4 text-lg">
        Nosotros te recibiremos como nuestra familia. Si mi hermana quiere un
        viaje económico, pues buscaré una forma de que el costo baje y pueda
        recibir buen servicio.
      </p>
      <p class="mb-4 text-lg">
        Por eso nuestro lema es "Cliente es Familia" Aquí en Find My Journey,
        encuentra un único viaje para tí. Te ayudamos para que tu viaje sea
        super bonito.
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
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'NosotrosPage',
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
