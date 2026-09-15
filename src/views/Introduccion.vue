<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .container
      .row.mb-5.bg-color-1.p-0.justify-content-center.align-items-center(data-aos="fade-right")
        .col-lg-5.col-md-8.mb-0.mb-lg-0.p-4.p-lg-2.p-xl-0
          figure.mb-0
            img(src="@/assets/curso/intro/img01.png" alt="Descripción de la imagen")
        .col-lg-7.p-4.p-lg-2.p-xl-4
          p.mb-0 La industria hotelera forma parte esencial del sector turístico y desempeña un papel clave en la atención, permanencia y satisfacción de los viajeros. Su desarrollo está estrechamente ligado a la evolución del turismo, a las dinámicas del mercado y a las expectativas cambiantes de los clientes, lo que exige a los establecimientos de alojamiento una gestión organizada, estandarizada y orientada a la calidad del servicio. En este contexto, resulta fundamental que el talento humano del sector conozca las características de la industria hotelera, sus tipologías, servicios y protocolos, como base para una adecuada interacción con el cliente.

    .row.align-items-center(data-aos="fade-left")
      .col-lg-auto
        img.d-none.d-lg-flex(src="@/assets/curso/intro/img02.svg").mx-auto
      .col-lg
        p.mb-0 El componente formativo Introducción a la industria hotelera brinda al aprendiz una visión general del sector, abordando los conceptos básicos de hotelería, la clasificación de los establecimientos de alojamiento, el portafolio de servicios y la estructura organizacional del hotel. A partir de este conocimiento, el aprendiz fortalece competencias para ofrecer servicios del establecimiento de acuerdo con el tipo de hotel, los protocolos de atención y los procedimientos técnicos, sentando las bases para el desarrollo eficiente de los procesos de recepción y reservaciones en el entorno laboral.

</template>

<script>
export default {
  name: 'Introduccion',
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
