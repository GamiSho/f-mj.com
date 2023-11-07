<template>
  <div class="w-3/5 py-24 px-10 mx-auto bg-white">
    <h2 class="text-3xl my-4">En primer lugar</h2>
    <p>Primeramente queremos agradecerle por elegir Find My Journey.</p>
    <p>
      Somos una empresa local en Perú, por lo tanto, se aplican las leyes y
      prácticas comerciales de viajes de Perú. En caso de que ocurra un
      accidente o retraso que resulte en daños, nos ajustaremos a la ley de
      viajes de Perú. Tenga en cuenta que no se aplican las leyes y términos de
      viaje de otros países. Le recomendamos encarecidamente que contrate un
      seguro de viaje internacional como precaución.
    </p>
    <p>
      Le pedimos que lea detenidamente nuestros términos y condiciones antes de
      utilizar los servicios que ofrecemos a través de nuestro sitio web
      <a href="https://www.f-mj.com/">www.f-mj.com</a>. Cualquier persona que
      utilice nuestros servicios a través de nuestra página web se considerará
      que ha leído, entendido y aceptado los términos y condiciones, por lo que
      la reserva estará sujeta a lo que se expone a continuación.
    </p>
    <br />
    <br />
    <h2 class="text-3xl my-4">Proceso de Reserva / Notas Importantes</h2>
    <p>
      Primero, por favor contáctenos por correo electrónico, Line, WhatsApp, u
      otros medios para discutir sus planes de viaje de manera general. Si nos
      proporciona detalles sobre el destino, la duración del viaje y cualquier
      pregunta sobre nuestros servicios, estaremos encantados de ofrecerle
      sugerencias y explicaciones.
      <br />
      Una vez que se haya confirmado los detalles de su reserva (su itinerario),
      le informaremos por correo electrónico. Para mantener un registro de la
      correspondencia, le pedimos que finalice su solicitud por correo
      electrónico.

      <br />
      Le solicitamos que realice el pago al menos 30 días antes de la fecha de
      partida. (Si está realizando una reserva después de que hayan pasado los
      30 días previos a la fecha de partida, le pedimos que realice el pago de
      inmediato). Al realizar el pago, también le solicitaremos que nos envíe su
      información de pasaporte y detalles del vuelo. Sin esta información, no
      podremos confirmar los arreglos.
      <br />

      Tenga en cuenta que si el pago y la información del vuelo o el pasaporte
      se retrasan, esto también retrasará la confirmación de los arreglos. Si la
      confirmación de los arreglos se retrasa, podría ser necesario realizar
      cambios en la disponibilidad de las fechas, lo que podría resultar en
      costos adicionales. Le agradecemos su comprensión.
      <br />
      Si solicita reservas dentro de los 30 días previos a la fecha de partida,
      comenzaremos los arreglos después de recibir su pago y la información de
      su pasaporte y vuelo.
      <br />

      Antes de realizar el pago, asegúrese de revisar nuestros términos y
      condiciones.
      <br />
      Aproximadamente 15 días antes de la fecha de salida, le enviaremos el
      itinerario final y los boletos por correo electrónico.
    </p>

    <br />
    <br />
    <h2 class="text-3xl my-4">Métodos de Pago</h2>
    <h3 class="text-xl my-4">Tarjeta de Crédito</h3>
    <p>
      Para pagos con tarjeta de crédito, le enviaremos un enlace de pago para
      que realice la transacción usted mismo.
    </p>
    <h3 class="text-xl my-4">Transferencia internacional</h3>
    <p>
      Para pagos mediante transferencia bancaria, el destino de la transferencia
      será una cuenta en dólares estadounidenses en un banco en Perú. A
      continuación, le proporcionamos la información bancaria. Los cargos de
      transferencia y una tarifa local de recepción (25 USD) correrán por cuenta
      del cliente.
      <br />
      <br />
      Banco: BBVA PERU
      <br />
      Dirección: Av. República de Panamá 3055, San Isidro, Lima, Perú
      <br />
      Código SWIFT: BCONPEPL
      <br />
      Número de cuenta: 011-083-000100013331-32
      <br />
    </p>
    <br />
    <h2 class="text-3xl my-4">Política de cancelación y Reembolsos</h2>
    <p>
      Hasta 30 días antes de la fecha de inicio del tour: Se aplicará un cargo
      de cancelación del 50% del costo del tour.
      <br />
      Hasta 15 días antes de la fecha de inicio del tour: Se aplicará un cargo
      de cancelación del 75% del costo del tour.
      <br />
      Hasta 6 días antes de la fecha de inicio del tour: Se aplicará un cargo de
      cancelación del 100% del costo del tour.
      <br />
      El método de reembolso se discutirá y se confirmará en consulta con el
      cliente. Sin embargo, los cargos de transferencia y recepción en el
      proceso de reembolso correrán por cuenta del cliente. Tenga en cuenta que
      para ciertos tickets, como los de Machu Picchu o la escalada a Wayna
      Picchu, la disponibilidad puede agotarse rápidamente dependiendo de la
      temporada, lo que podría requerir un pago anticipado por parte del
      cliente. Asimismo, tenga en cuenta que algunos tickets con disponibilidad
      limitada, una vez adquiridos, se consideran entradas de uso inmediato. En
      este caso, los fondos transferidos para la compra de los tickets no podrán
      ser reembolsados. Agradecemos su comprensión anticipada.

      <br />
    </p>
    <br />
    <h2 class="text-3xl my-4">Sobre el impuesto al consumo en Perú</h2>
    <p>
      Nuestra tarifa indicada es sin impuestos. Esto se debe a que algunos
      servicios de viaje proporcionados a viajeros extranjeros en el territorio
      peruano están exentos de impuestos.
      <br />
      Sin embargo, esto se aplica únicamente a aquellos que ingresan al país con
      una visa de turista. En otras palabras, los extranjeros que residen en
      Perú o que tienen residencia permanente en el extranjero y viajan como
      ciudadanos peruanos con un DNI (Documento Nacional de Identidad) no son
      elegibles para la exención de impuestos. Si se descubre después de
      realizar la transferencia que no cumple con los requisitos de exención de
      impuestos, se requerirá un pago adicional del 18%. Si no está seguro de si
      cumple con los requisitos de exención de impuestos, le recomendamos que se
      comunique con nosotros con anticipación.
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'PoliticaPage',
  head() {
    return {
      title: 'Politica',
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
