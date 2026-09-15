<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Hotelería
  
    .bg-full-width.bg-fondo-1.px-4.py-4
      img(src="@/assets/curso/tema1/img01.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-11(data-aos="fade-right")
        p.banner-text La hotelería es una actividad económica perteneciente al sector de los servicios, orientada a la prestación organizada, sistemática y temporal de alojamiento, y en muchos casos de alimentación y otros servicios complementarios, dirigida a personas que se encuentran fuera de su lugar de residencia habitual. Esta actividad se articula principalmente con el turismo, pero también con otros fines como los negocios, los eventos corporativos, las actividades académicas, culturales y de salud, lo que amplía su campo de acción y exige una gestión profesional basada en estándares técnicos, operativos y de calidad. En este sentido, la hotelería no se limita a ofrecer un espacio físico para pernoctar, sino que integra procesos de atención al cliente, gestión de la información, administración de recursos y aplicación de protocolos que garantizan una experiencia de servicio acorde con las expectativas del usuario y con la normativa vigente.


    .row.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-auto
        img.d-none.d-lg-flex(src="@/assets/curso/tema1/img02.svg").mx-auto
      .col-lg
        p.mb-0 Los establecimientos de alojamiento y hospedaje que conforman la industria hotelera reciben diversas denominaciones —como hoteles, hostales, apartahoteles, posadas o centros vacacionales— según su categoría, capacidad, tipología de servicios y mercado objetivo. No obstante, dichas denominaciones no son arbitrarias, ya que responden a marcos normativos definidos por la legislación de cada país o territorio. Estas regulaciones establecen criterios específicos de orden urbanístico, condiciones sanitarias, requisitos de seguridad, obligaciones impositivas y estándares de calidad, los cuales determinan la clasificación oficial del establecimiento y su autorización para operar. Para el técnico profesional en servicios hoteleros, comprender esta diversidad y su fundamento normativo resulta esencial, ya que permite interpretar correctamente el contexto en el que se presta el servicio, aplicar los procedimientos técnicos de acuerdo con el tipo de establecimiento y garantizar una operación alineada con las exigencias legales y organizacionales del sector.

        
    separador
    
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Historia de la hotelería y su evolución

    .row.justify-content-center.mb-4
      .col-lg-12(data-aos="fade-down")
        .bloque-texto-g.bloque-texto-g--inverso.bg-color-2.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/img03.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La historia de la hotelería tiene sus orígenes en las primeras civilizaciones, cuando el desplazamiento de comerciantes, peregrinos y viajeros generó la necesidad de contar con espacios de descanso y protección. En contextos como Mesopotamia, Grecia y Roma, surgieron formas primitivas de hospedaje que ofrecían refugio básico, alimentación y seguridad, sentando las bases de la hospitalidad como práctica social. Estas primeras manifestaciones no respondían aún a una lógica empresarial, sino a una necesidad funcional del viajero, lo que evidencia que la hotelería nace como respuesta directa a la movilidad humana y al intercambio cultural y económico (Campus Training, s. f.).


    .bg-full-width.bg-fondo-2.tarjeta.mb-5
      .px-1.py-4.py-md-4.p-lg-4.px-lg-2
        SlyderA(tipo="b").bg-color-white.p-0.p-lg-4.tarjeta
          .row.justify-content-center.align-items-center.p-4.p-lg-2
            .col-lg-8.mb-4.mb-lg-0.mb-3.mb-lg-0
              p.mb-0(data-aos="fade-right") <b>Durante la Edad Media y la Edad Moderna</b>, la hotelería experimentó un proceso de transformación impulsado por el crecimiento del comercio, las peregrinaciones religiosas y el desarrollo de rutas de viaje. Las posadas y hospederías, muchas veces administradas por monasterios o familias, ofrecían servicios más estructurados, aunque aún con limitaciones en <i>confort</i> y seguridad. Posteriormente, con el surgimiento de los primeros establecimientos que comenzaron a denominarse “hoteles”, se consolidó la idea de un servicio organizado de alojamiento, incorporando progresivamente alimentación, establos y atención al viajero, lo que marcó una transición hacia una actividad más especializada.              
            .col-md-8.col-lg-4
              figure
                img(src="@/assets/curso/tema1/img05.png", alt="").mx-auto

          .row.justify-content-center.align-items-center.p-4.p-lg-2
            .col-lg-8.mb-4.mb-lg-0.mb-3.mb-lg-0
              p.mb-0(data-aos="fade-right") <b>La Revolución Industrial</b>, a finales del siglo XVIII y durante el siglo XIX, significó un punto de inflexión en la historia de la hotelería. El aumento de la movilidad, el crecimiento de las ciudades y el desarrollo de nuevos medios de transporte, como el ferrocarril y posteriormente, el transporte marítimo y aéreo, impulsaron la expansión de los establecimientos hoteleros. En este periodo surgen los primeros grandes hoteles urbanos, caracterizados por una infraestructura más compleja, la clasificación de habitaciones, la especialización del personal y la incorporación de estándares de calidad en el servicio. La hotelería comienza a adoptar una estructura organizacional definida y a reconocer el valor del talento humano en la prestación del servicio.
            .col-md-8.col-lg-4
              figure
                img(src="@/assets/curso/tema1/img06.png", alt="").mx-auto

          .row.justify-content-center.align-items-center.p-4.p-lg-2
            .col-lg-8.mb-4.mb-lg-0.mb-3.mb-lg-0
              p.mb-0(data-aos="fade-right") <b>Durante el siglo XX</b>, la hotelería experimentó un proceso de expansión y profesionalización sin precedentes. El crecimiento del turismo internacional, el surgimiento de las cadenas hoteleras y la estandarización de los procesos operativos transformaron la industria en un sector altamente competitivo. Se introdujeron sistemas de categorización, modelos de gestión, manuales de funciones y procedimientos técnicos que permitieron homogenizar la calidad del servicio en distintos contextos geográficos. Asimismo, se consolidó la figura del hotel como una empresa de servicios, en la que la satisfacción del cliente se convierte en el eje central de la operación.
            .col-md-8.col-lg-4
              figure
                img(src="@/assets/curso/tema1/img07.png", alt="").mx-auto

          .row.justify-content-center.align-items-center.p-4.p-lg-2
            .col-lg-8.mb-4.mb-lg-0.mb-3.mb-lg-0
              p.mb-0(data-aos="fade-right") <b>En la actualidad</b>, la hotelería moderna se caracteriza por su enfoque en la experiencia del huésped, la personalización del servicio y el uso intensivo de herramientas tecnológicas para la gestión de reservas, tarifas y atención al cliente. La industria hotelera responde a las dinámicas del mercado turístico, a las exigencias normativas y a las expectativas de calidad, sostenibilidad e innovación. En este contexto, el técnico profesional en servicios hoteleros desempeña un papel clave, ya que debe comprender la evolución histórica del sector para interpretar los procesos actuales, aplicar correctamente los protocolos de servicio y adaptarse a los constantes cambios de la industria.
            .col-md-8.col-lg-4
              figure
                img(src="@/assets/curso/tema1/img08.png", alt="").mx-auto

    .row.justify-content-center.mb-5
      //- .col-md-12.col-lg-12
      //-   .titulo-sexto.color-acento-contenido
      //-     h5 
      //-       b Video 1.
      //-     span Historia de la industria hotelera 
      .col-md-12.col-lg-12
        figure
          .video.mb-2
            iframe(width="560" height="315" src="https://www.youtube.com/embed/UYsNuXu_99A?si=Sq_Lr0zovhMZ_gAB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video: Historia de la industria hotelera


    separador
    
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Normativa de formalización


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.mb-3
        p.mb-3 La formalización hotelera constituye un eje fundamental para el desarrollo ordenado, seguro y competitivo de la industria de alojamiento. Hace referencia al conjunto de disposiciones legales, técnicas y administrativas que regulan la creación, operación y control de los establecimientos de alojamiento y hospedaje, con el propósito de garantizar la calidad del servicio, la protección del usuario y el cumplimiento de las obligaciones del prestador frente al Estado. En este sentido, la formalización no debe entenderse únicamente como un requisito legal, sino como un elemento estratégico que fortalece la sostenibilidad y la credibilidad del sector hotelero.
        .bg-fondo-3.px-lg-5.py-lg-4.px-4.py-3
          .col-12.col-md-12
            .row.justify-content-center.align-items-center
              .col-auto.d-none.d-lg-block
                figure
                  img(src="@/assets/curso/tema1/img10.svg", alt="").mx-auto
              .col-lg.col-md-12
                p.mb-0 Desde una perspectiva técnico profesional, la normativa hotelera proporciona el marco de actuación dentro del cual se desarrollan los procesos operativos, administrativos y de servicio. El conocimiento y la correcta aplicación de estas disposiciones permiten al talento humano comprender las condiciones bajo las cuales opera el establecimiento, identificar responsabilidades y participar activamente en el cumplimiento de los procedimientos técnicos y los protocolos establecidos. Asimismo, la normativa orienta la estandarización de los servicios y contribuye a la mejora continua de la calidad en la atención al huésped.

      .col-lg-3.col-md-8
        figure
          img(src="@/assets/curso/tema1/img12.png", alt="").mx-auto


    .row.justify-content-center.mb-5
      .col-lg-12(data-aos="fade-right")
        .row.justify-content-center.align-items-center
          .col-auto.d-none.d-lg-block
            figure
              img(src="@/assets/curso/tema1/img13.png", alt="").mx-auto
          .col-lg
            p.mb-0 La Ley 300 de 1996 expide la ley general de turismo, la cual estableció que los consejos distritales o municipales, determinarán las zonas de desarrollo turístico prioritario, así mismo autoriza a las corporaciones de aquellos municipios con menos de cien mil habitantes, que posean gran valor histórico, artístico y cultural, para que puedan establecer un peaje turístico, sin que la tarifa supere un salario mínimo diario legal por vehículo de uso público o comercial y medio salario mínimo diario legal por vehículo de uso particular. Esta Ley es importante porque también dicta disposiciones sobre:


    .row.justify-content-center.mb-5
      .col-md-12.col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 
            b Figura 1.
          span Disposiciones Ley 300 de 1996 
      .col-md-10.col-lg-12
        figure.mb-0
          img.mb-3(src="@/assets/curso/tema1/img14.png", alt="La figura 1 enuncia los aspectos sobre los cuales dicta disposiciones la Ley 300 de 1996.").d-none.d-lg-block
          img.mb-3(src="@/assets/curso/tema1/img15.png", alt="La figura 1 enuncia los aspectos sobre los cuales dicta disposiciones la Ley 300 de 1996.").d-block.d-lg-none
        figcaption <strong>Nota.</strong> SENA, (2026).

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-right")
        .cajon.bg-color-9.p-4
          p.mb-0 La Ley 300 de 1996 (Ley General de Turismo en Colombia) es amplia y no se limita solo a hotelería; regula todo el sector turístico.    


    .row.justify-content-center.mb-5
      .col-lg-3.mb-3.mb-lg-0.col-md-8
        figure
          img(src="@/assets/curso/tema1/img16.png", alt="").mx-auto
      .col-lg-9
        p Además, crea la división de Policía de Turismo, dentro de la Dirección de Protección y Servicios Especiales de la Policía Nacional, prestadores de servicios turísticos en particular, establecimientos hoteleros o de hospedaje, agencias de viajes y de turismo, transportadores de pasajeros, establecimientos de gastronomía, bares y negocios similares, establecimientos de arrendamiento de vehículos, empresas captadoras de ahorro para viajes, guías de turismo, sistema de tiempo compartido, operadores profesionales de congresos, ferias, convenciones y círculos metropolitanos turísticos.
        p.mb-0 Estos son los aspectos más relevantes y aplicables de esta ley con relación al contexto de servicios de alojamiento.
    

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 
            b Tabla 1.
          span Aspectos principales de la Ley 300 de 1996
        .tabla-a.color-acento-contenido 
          table
            caption Nota. <span style="font-weight: normal">SENA, (2026).</span>
            thead
              tr
                th Aspecto
                th Descripción
                th Aplicación en servicios de alojamiento
            tbody
              tr
                td Objeto de la ley
                td Establece el marco legal para el desarrollo y regulación del turismo en Colombia.
                td Define el entorno normativo en el que operan los establecimientos de alojamiento.
              tr
                td Principios del turismo
                td Promueve el desarrollo sostenible, la calidad del servicio, la protección al usuario y la competitividad.
                td Orienta la prestación del servicio hotelero hacia la calidad y la satisfacción del cliente.
              tr
                td Organización del sector turístico
                td Define las entidades responsables del turismo (Ministerio de Comercio, Industria y Turismo, entre otros).
                td Los hoteles deben alinearse con las políticas y lineamientos institucionales del sector.
              tr
                td Registro Nacional de Turismo (RNT)
                td Obliga a los prestadores de servicios turísticos a inscribirse y actualizar su registro.
                td Todo establecimiento de alojamiento debe estar inscrito en el RNT para operar legalmente.
              tr
                td Prestadores de servicios turísticos
                td Clasifica los actores del sector (hoteles, agencias de viajes, operadores, etc.).
                td Identifica a los establecimientos de alojamiento como prestadores formales del servicio.
              tr
                td Derechos y deberes de los usuarios
                td Garantiza información clara, calidad en el servicio y protección al consumidor.
                td El hotel debe brindar información veraz sobre tarifas, servicios y condiciones.
              tr
                td Calidad del servicio turístico
                td Promueve estándares de calidad y certificaciones para mejorar la competitividad.
                td Impulsa la implementación de normas de calidad en los servicios de alojamiento.
              tr
                td Inspección, vigilancia y control
                td Establece mecanismos para supervisar el cumplimiento de la normativa.
                td Los hoteles pueden ser inspeccionados para verificar cumplimiento legal y de calidad.
              tr
                td Incentivos al turismo
                td Define beneficios para fomentar el desarrollo del sector turístico.
                td Puede favorecer inversiones y mejora de infraestructura hotelera.
              tr
                td Sanciones
                td Establece sanciones por incumplimiento de la normativa turística.
                td Un hotel puede ser sancionado por operar sin registro o incumplir normas.


    .row.justify-content-center.mb-5
      .col-12.col-lg-10.mb-0.col-md-12
        .cita-decorada
          blockquote.cita-decorada__caja.cita-decorada__caja--fondo-4.p-3.bg-color-1-degrade.br-15
            .row.justify-content-center.align-items-center
              .col-12.col-lg-3.mb-3.mb-lg-0
                img(src="@/assets/curso/tema1/img17.svg", class="img-fluid cita-decorada__imagen-flotante-3")
              .col-12.col-lg-6.cita-decorada__texto.mb-4.mb-lg-0
                p.mb-0 Lo invitamos a leer las demás disposiciones que realiza la ley 300 de 1996 en Colombia, a través del enlace que se encuentra a continuación:
              .col-lg-3.col-md-3.col-12.d-flex.justify-content-center
                a.boton.color-acento-botones(href="http://www.secretariasenado.gov.co/senado/basedoc/ley_0300_1996.html" target="_blank")
                  span Abrir enlace
                  i.fas.fa-external-link-alt

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.mb-4.mb-lg-0
        .row.align-items-center
          .col-auto.d-none.d-lg-block
            figure
              img(src="@/assets/curso/tema1/img18.svg", alt="")
          .col-lg
            p.mb-0 Por su parte, la Resolución 657 de 2005 del Ministerio de Comercio, Industria y Turismo, reglamenta la categorización por estrellas de los establecimientos hoteleros o de hospedaje que prestan sus servicios en Colombia, disponiendo que sólo podrán ser categorizados por estrellas los establecimientos hoteleros o de hospedaje que en los términos del artículo 78 de la Ley 300 de 1996, se consideren como hoteles, según la definición de la norma técnica sectorial NTSH 006, para lo cual deben obtener el certificado de calidad turística, expedido por un organismo certificador debidamente acreditado por la Superintendencia de Industria y Comercio, que cuente con visto bueno de la Dirección de Turismo del Ministerio de Comercio, Industria y Turismo, sin cuya certificación no podrán utilizar en su publicidad la categorización por estrellas, so pena de ser sancionados.

      .col-lg-2.col-md-8
        figure
          img(src="@/assets/curso/tema1/img19.png", alt="").mx-auto


    .row.justify-content-center.mb-5
      .col-12.col-lg-10.mb-0
        .cita-decorada
          blockquote.cita-decorada__caja.cita-decorada__caja--fondo-4.p-3.bg-color-1-degrade.br-15
            .row.justify-content-center.align-items-center
              .col-12.col-lg-3.mb-3.mb-lg-0
                img(src="@/assets/curso/tema1/img20.svg", class="img-fluid cita-decorada__imagen-flotante-3")
              .col-12.col-lg-6.cita-decorada__texto.mb-4.mb-lg-0
                p.mb-0 Para profundizar sobre las disposiciones que realiza la Resolución 657 de 2005 en Colombia, lo invitamos a ingresar al enlace a continuación:
              .col-lg-3.col-md-3.col-12.d-flex.justify-content-center
                a.boton.color-acento-botones(href="https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=16635" target="_blank")
                  span Abrir enlace
                  i.fas.fa-external-link-alt

    
    separador
    
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Normas técnicas sectoriales hoteleras para establecimientos de alojamiento y hospedaje
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-md-10.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/img21.png", alt="").mx-auto
        
      .col-lg-9.col-md-12.mb-4.mb-lg-0
        p.mb-3 En Colombia, las normas técnicas sectoriales hoteleras constituyen un conjunto de lineamientos orientados a garantizar la calidad, la seguridad y la estandarización en la prestación del servicio de alojamiento. Estas normas, desarrolladas en el marco del Sistema de Normalización, Certificación y Metrología, lideradas por entidades como el Ministerio de Comercio, Industria y Turismo y el ICONTEC, establecen criterios claros sobre infraestructura, operación, atención al cliente y sostenibilidad. Su aplicación permite a los establecimientos de alojamiento y hospedaje mejorar sus procesos, fortalecer la confianza del usuario y elevar su competitividad en el mercado turístico nacional e internacional.
        p.mb-0 A continuación, se encuentran las normas que proporcionan los requisitos necesarios para cumplir los procedimientos definidos en los establecimientos de alojamiento y hospedaje.

    .row.mb-5.justify-content-center.align-items-center
      .col-md-8.col-lg-3.mb-4.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema1/img22.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-lg-1
        TabsA.color-acento-botones()
          .tarjeta.color-acento-botones--borde.p-4(titulo="NORMA TÉCNICA NTSH SECTORIAL COLOMBIANA 001")
            ul.lista-ul
              li 
                i.lista-ul__vineta
                | Establecimientos de alojamiento y hospedaje. Norma de competencia laboral.
              li
                i.lista-ul__vineta
                | Realización de actividades básicas para la prestación del servicio.

          .tarjeta.color-acento-botones--borde.p-4(titulo="NORMA TÉCNICA NTSH SECTORIAL COLOMBIANA 002")
            ul.lista-ul
              li 
                i.lista-ul__vineta
                | Establecimientos de alojamiento y hospedaje. Norma de competencia laboral.
              li
                i.lista-ul__vineta
                | Información a clientes, atención de sugerencias y reclamaciones de acuerdo a políticas de servicio.

          .tarjeta.color-acento-botones--borde.p-4(titulo="NORMA TÉCNICA NTSH SECTORIAL COLOMBIANA 003")
            ul.lista-ul
              li 
                i.lista-ul__vineta
                | Establecimientos de alojamiento y hospedaje. Norma de competencia laboral. 
              li
                i.lista-ul__vineta
                | Prestación de servicio de recepción y reservas conforme a manuales existentes.

          .tarjeta.color-acento-botones--borde.p-4(titulo="NORMA TÉCNICA NTSH SECTORIAL COLOMBIANA 004")
            ul.lista-ul
              li 
                i.lista-ul__vineta
                | Establecimientos de alojamiento y hospedaje. Norma de competencia laboral. 
              li
                i.lista-ul__vineta
                | Atención del área de conserjería de acuerdo al manual de procedimientos.

          .tarjeta.color-acento-botones--borde.p-4(titulo="NORMA TÉCNICA NTSH SECTORIAL COLOMBIANA 005")
            ul.lista-ul
              li 
                i.lista-ul__vineta
                | Establecimientos de alojamiento y hospedaje. Norma de competencia laboral. 
              li
                i.lista-ul__vineta
                | Manejo de valores e ingresos relacionados con la operación del establecimiento.

          .tarjeta.color-acento-botones--borde.p-4(titulo="NORMA TÉCNICA NTSH SECTORIAL COLOMBIANA 006")
            ul.lista-ul
              li 
                i.lista-ul__vineta
                | Clasificación de establecimientos de alojamiento y hospedaje. 
              li
                i.lista-ul__vineta
                | Categorización por estrellas de hoteles, requisitos normativos.


    .row.justify-content-center.mb-0
      .col-12.col-lg-10.mb-0
        .cita-decorada
          blockquote.cita-decorada__caja.cita-decorada__caja--fondo-4.p-3.bg-color-1-degrade.br-15
            .row.justify-content-center.align-items-center
              .col-12.col-lg-3.mb-3.mb-lg-0
                img(src="@/assets/curso/tema1/img17.svg", class="img-fluid cita-decorada__imagen-flotante-3")
              .col-12.col-lg-6.cita-decorada__texto.mb-4.mb-lg-0
                p.mb-0 Lo invitamos a consultar en la sección de Anexos, el contenido completo de cada una de estas normas.
              .col-lg-3.col-md-3.col-12.d-flex.justify-content-center
                a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexos/NTSH.zip')" target="_blank")
                  span Abrir enlace
                  i.fas.fa-external-link-alt
    
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
