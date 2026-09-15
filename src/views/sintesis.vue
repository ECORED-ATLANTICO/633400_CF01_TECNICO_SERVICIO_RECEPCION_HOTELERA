<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-3.col-md-8.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/intro/img03.png", data-aos="zoom-in")
      .col-lg-9.col-md-12
        p.mb-3 El componente formativo Introducción a la industria hotelera aborda los conceptos fundamentales del sector de alojamiento y hospedaje, permitiendo al aprendiz comprender la evolución, la estructura y las características de los establecimientos hoteleros dentro del contexto turístico. A través del estudio de la clasificación de los hoteles, el portafolio de servicios, los tipos de habitaciones y los servicios complementarios, se proporciona una base teórica orientada a la identificación de las necesidades del cliente y a la correcta oferta de servicios de acuerdo con el tipo de establecimiento y los protocolos establecidos.

        .bg-fondo-3.px-lg-5.py-lg-4.px-4.py-3.br-15.mb-0
          .col-lg-11.col-md-12
            p.mb-0 Asimismo, el componente enfatiza la importancia de los procedimientos operativos y del uso de convenciones y terminología propia del sector hotelero como herramientas para la gestión eficiente de la información en áreas como recepción y reservas. Estos conocimientos fortalecen las competencias del aprendiz para interactuar de manera organizada y precisa en el entorno laboral, favoreciendo la atención al cliente, la aplicación de protocolos de servicio y el cumplimiento de los procedimientos técnicos que sustentan la prestación del servicio de alojamiento en un contexto técnico profesional.

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="El componente formativo Introducción a la industria hotelera aborda los conceptos fundamentales del sector de alojamiento y hospedaje, permitiendo al aprendiz comprender la evolución, la estructura y las características de los establecimientos hoteleros dentro del contexto turístico. A través del estudio de la clasificación de los hoteles, el portafolio de servicios, los tipos de habitaciones y los servicios complementarios, se proporciona una base teórica orientada a la identificación de las necesidades del cliente y a la correcta oferta de servicios de acuerdo con el tipo de establecimiento y los protocolos establecidos. Asimismo, el componente enfatiza la importancia de los procedimientos operativos y del uso de convenciones y terminología propia del sector hotelero como herramientas para la gestión eficiente de la información en áreas como recepción y reservas. Estos conocimientos fortalecen las competencias del aprendiz para interactuar de manera organizada y precisa en el entorno laboral, favoreciendo la atención al cliente, la aplicación de protocolos de servicio y el cumplimiento de los procedimientos técnicos que sustentan la prestación del servicio de alojamiento en un contexto técnico profesional.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
