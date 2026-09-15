<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Habitaciones hoteleras

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-3.col-md-8.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/img01.png", alt="").mx-auto
      .col-lg-9.mb-3.mb-lg-0
        .bg-fondo-4.px-lg-5.py-lg-4.px-4.py-3
          .col-lg-11.col-md-12
            p.mb-0 Dentro de la Norma Técnica Sectorial Colombiana NTSH006, se deben considerar los siguientes aspectos en las habitaciones: seguridad, dimensiones en donde se incluye el baño y closet, muebles, conexiones eléctricas, ropa de cama, piso, ventanas, iluminación, baños y sus componentes, entre otros, ducha, toallas y presión del agua, esto define la clasificación que se le da a cada una de las habitaciones y permite la siguiente tipología:

    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Tipos de habitaciones y acomodación
    
    p.mb-4 A continuación, se describen cuáles son los diferentes tipos de habitaciones y acomodación.
    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12.col-xl-9.order-1.order-lg-2.order-xl-1.order-md-2
        TabsA.tabs_x3.color-acento-botones()
          .tarjeta.color-acento-botones--borde.p-4(titulo="Individual")
            .row.justify-content-center.align-items-center
              .col-lg-8.col-md-12.mb-4.mb-lg-0
                p.mb-3 Una habitación asignada a una persona. Las medidas de las camas individuales pueden ser: 90 centímetros de ancho por 190 de largo.
                p.mb-0 
                  b Acomodación: 
                  | puede tener una o más camas, pero solo es ocupada por una persona.
              .col-lg-4.col-md-8
                img(src="@/assets/curso/tema3/img03.png", alt="").mx-auto

          .tarjeta.color-acento-botones--borde.p-4(titulo="Doble")
            .row.justify-content-center.align-items-center
              .col-lg-8.col-md-12.mb-4.mb-lg-0
                p.mb-3 Una habitación asignada a dos personas. Las medidas de las camas dobles pueden ser: 140 centímetros de ancho por 190 de largo.
                p.mb-0 
                  b Acomodación: 
                  | puede tener una o más camas.
              .col-lg-4.col-md-8
                img(src="@/assets/curso/tema3/img04.png", alt="").mx-auto

          .tarjeta.color-acento-botones--borde.p-4(titulo="Triple")
            .row.justify-content-center.align-items-center
              .col-lg-8.col-md-12.mb-4.mb-lg-0
                p.mb-3 Una habitación asignada a tres personas.
                p.mb-0 
                  b Acomodación: 
                  |  puede tener dos o más camas.
              .col-lg-4.col-md-8
                img(src="@/assets/curso/tema3/img05.png", alt="").mx-auto

          .tarjeta.color-acento-botones--borde.p-4(titulo="<i>Queen</i>")
            .row.justify-content-center.align-items-center
              .col-lg-8.col-md-12.mb-4.mb-lg-0
                p.mb-3 Una habitación con una cama de matrimonio. Las medidas de las camas <i>Queen Size</i> son 1,5 metros de ancho por 2 metros de largo.
                p.mb-0
                  b Acomodación: 
                  |  puede ser ocupado por una o más personas.
              .col-lg-4.col-md-8
                img(src="@/assets/curso/tema3/img06.png", alt="").mx-auto

          .tarjeta.color-acento-botones--borde.p-4(titulo="<i>King</i>")
            .row.justify-content-center.align-items-center
              .col-lg-8.col-md-12.mb-4.mb-lg-0
                p.mb-3 Una habitación con una cama <i>King Size</i>. Las medidas de las camas <i>King Size</i> son de 2 metros de ancho x 2 metros de largo.
                p.mb-0
                  b Acomodación: 
                  |  puede ser ocupado por una o más personas.
              .col-lg-4.col-md-8
                img(src="@/assets/curso/tema3/img07.png", alt="").mx-auto
            
      .col-md-8.col-lg-6.col-xl-3.mb-4.mb-lg-3.mb-xl-0.order-2.order-lg-1.order-xl-2.order-md-1
        figure
          img(src="@/assets/curso/tema3/img08.png").mx-auto    

    .row.justify-content-center.mb-5.align-items-center
      .col-lg-4.col-md-6.col-8.mb-4.mb-lg-0.order-1.order-md-2.order-lg-1.order-xl-1
        figure
          img(src="@/assets/curso/tema3/img09.png", alt="").mx-auto
      .col-md-12.col-lg-8.order-2.order-md-1.mb-4.mb-lg-0.order-lg-2.order-xl-2
        SlyderF(columnas="col-lg-6 col-xl-6")
          .tarjeta.bg01.p-4
            .row.justify-content-center.mb-3
              .col-12
                img(src="@/assets/curso/tema3/img12.svg", data-aos="zoom-in", style="width: 90px;").mx-auto
            .col-12.mx-auto
              h4.text-center.mb2 <i>Twin</i>
              p.text-center Una habitación con dos camas iguales. 
              p.text-center.mb-0 <b> Acomodación:</b> puede ser ocupado por una o más personas.
          .tarjeta.bg01.p-4
            .row.justify-content-center.mb-3
              .col-12
                img(src="@/assets/curso/tema3/img12.svg", data-aos="zoom-in", style="width: 90px;").mx-auto
            .col-12.mx-auto
              h4.text-center.mb2 <i>Suite</i>
              p.text-center Un salón o sala de estar conectada a uno o más dormitorios. 
              p.text-center.mb-0 <b>Acomodación</b>: de acuerdo al número de camas, puede ser asignada a una persona o más.
          .tarjeta.bg01.p-4
            .row.justify-content-center.mb-3
              .col-12
                img(src="@/assets/curso/tema3/img12.svg", data-aos="zoom-in", style="width: 90px;").mx-auto
            .col-12.mx-auto
              h4.text-center.mb2 <i>Junior suite</i>
              p.text-center Una habitación individual con una cama y una sala de estar. A veces, el área para dormir está en un dormitorio separado del salón o la sala de estar.
              p.text-center.mb-0 <b>Acomodación</b>: por su tamaño generalmente puede ser ocupada por dos, máximo tres personas.

    .container
      .row.mb-5.bg-fondo-4.br-15.justify-content-center.p-3.p-lg-2
        .p-4
          h4.mb-2 Otros tipos de habitaciones pueden incluir: 
        .col-lg-5.col-12.mb-4.mb-lg-4
          .row
            .col-12.col-lg-12.col-xl-auto.mx-auto
              figure
                img(src="@/assets/curso/tema3/img13.png", alt="" style="width: 110px;").mx-auto
            .col-lg
              p.mb-0 <b>Habitaciones comunicadas:</b> habitaciones con puertas de entrada individuales desde el exterior y una puerta de conexión entre ellas. Los huéspedes pueden moverse entre habitaciones sin pasar por el pasillo. 
        .col-lg-4.col-12.mb-4.mb-lg-4
          .row
            .col-12.col-lg-12.col-xl-auto.mx-auto
              figure
                img(src="@/assets/curso/tema3/img14.png", alt="" style="width: 110px;").mx-auto
            .col-lg
              p.mb-0 <b>Habitaciones contiguas</b>: habitaciones con una pared común, pero sin puerta de conexión.
        .col-lg-3.col-12.mb-4.mb-lg-4
          .row
            .col-12.col-lg-12.col-xl-auto.mx-auto
              figure
                img(src="@/assets/curso/tema3/img15.png", alt="", style="width: 110px;").mx-auto
            .col-lg
              p.mb-0 <b>Habitaciones adyacentes</b>: habitaciones cercanas, tal vez al otro lado del pasillo. 

    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Servicios complementarios

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-9.mb-4.mb-lg-0
        p.mb-3(data-aos="fade-right") Los servicios complementarios en los establecimientos hoteleros hacen referencia al conjunto de prestaciones adicionales que acompañan el servicio básico de alojamiento y que tienen como propósito mejorar la experiencia del huésped, incrementar el valor percibido del servicio y fortalecer la competitividad del establecimiento. Estos servicios no constituyen el núcleo principal de la actividad hotelera, pero sí representan un elemento estratégico en la diferenciación del producto, la satisfacción del cliente y la fidelización, especialmente en un contexto de alta competencia dentro del sector turístico.
        p.mb-3(data-aos="fade-right") Desde un enfoque técnico profesional, los servicios complementarios deben entenderse como parte integral del portafolio de servicios del hotel, ya que su adecuada gestión implica planificación, coordinación interdepartamental, aplicación de protocolos y control de calidad. No se trata únicamente de ofrecer servicios adicionales, sino de garantizar que estos se presten conforme a estándares definidos, en coherencia con la categoría del hotel, el perfil del cliente y la normativa vigente. En este sentido, el desempeño del talento humano resulta determinante para asegurar que los servicios complementarios aporten valor real a la experiencia del huésped.
        p.mb-0 Se consideran servicios complementarios los siguientes:

      .col-lg-3.col-md-8
        figure
          img(src="@/assets/curso/tema3/img16.png", data-aos="zoom-in")


    .row.mb-5.justify-content-center
      .col-xl-3.col-lg-4.col-md-6.col-sm-12.mb-3.mb-lg-3
        .tarjeta-avatar-b(data-aos="zoom-in").h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img17.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.align-content-center
            .p-3
              p.mb-0.text-bold Recepción y atención permanente.
      .col-xl-3.col-lg-4.col-md-6.col-sm-12.mb-3.mb-lg-3
        .tarjeta-avatar-b(data-aos="zoom-in").h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img18.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.align-content-center
            .p-3
              p.mb-0.text-bold Limpieza periódica del alojamiento.
      .col-xl-3.col-lg-4.col-md-6.col-sm-12.mb-3.mb-lg-3
        .tarjeta-avatar-b(data-aos="zoom-in").h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img19.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.align-content-center
            .p-3
              p.mb-0.text-bold Cambio periódico de ropa de cama.
      .col-xl-3.col-lg-4.col-md-6.col-sm-12.mb-3.mb-lg-3
        .tarjeta-avatar-b(data-aos="zoom-in").h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img20.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.align-content-center
            .p-3
              p.mb-0.text-bold Cambio periódico de toallas.
      .col-xl-3.col-lg-4.col-md-6.col-sm-12.mb-3.mb-lg-3
        .tarjeta-avatar-b(data-aos="zoom-in").h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img21.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.align-content-center
            .p-3
              p.mb-0.text-bold Cajilla de seguridad.
      .col-xl-3.col-lg-4.col-md-6.col-sm-12.mb-3.mb-lg-3
        .tarjeta-avatar-b(data-aos="zoom-in").h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img22.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.align-content-center
            .p-3
              p.mb-0.text-bold Servicios de restaurante y <i>room service</i>.
      .col-xl-3.col-lg-4.col-md-6.col-sm-12.mb-3.mb-lg-3
        .tarjeta-avatar-b(data-aos="zoom-in").h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img23.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.align-content-center
            .p-3
              p.mb-0.text-bold Salones de eventos.
      .col-xl-3.col-lg-4.col-md-6.col-sm-12.mb-3.mb-lg-3
        .tarjeta-avatar-b(data-aos="zoom-in").h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img24.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.align-content-center
            .p-3
              p.mb-0.text-bold Locales comerciales.

      .col-xl-6.col-lg-8.mb-3.mb-lg-0
        .tarjeta-avatar-b.align-items-center(data-aos="zoom-in")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img25.svg' alt='AvatarTop' style='max-width: 85px;')
          .tarjeta.tarjeta--azul.align-content-center
            .p-3
              p.mb-0.text-bold Prestación de servicios adicionales como: lavandería, custodia de maletas, prensa, etc.
    
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 
            b Tabla 2. 
          span Tipos de servicios complementarios en los establecimientos hoteleros

        .tabla-a.color-acento-contenido.mb-0
          table
            caption Nota. <span style="font-weight: normal">SENA, (2026).</span>
            thead
              tr
                th Clasificación del servicio complementario
                th Tipo de servicio
                th Descripción
            tbody
              tr
                td(rowspan="3") Servicios de atención y apoyo al huésped
                td Recepción permanente
                td Atención continua al huésped para registro, información, orientación y gestión de solicitudes durante su estadía.
              tr
                td Conserjería
                td Asistencia personalizada al huésped mediante información turística, coordinación de servicios externos y apoyo logístico.
              tr
                td Custodia de equipaje
                td Servicio para el resguardo temporal de maletas antes del <i>check-in</i> o después del <i>check-out</i>.
              tr
                td(rowspan="3") Servicios de <i>confort</i> y mantenimiento
                td Limpieza de habitaciones
                td Aseo periódico de habitaciones y áreas comunes para mantener condiciones adecuadas de higiene y presentación.
              tr
                td Cambio de lencería y toallas
                td Sustitución periódica de ropa de cama y baño conforme a políticas del establecimiento o solicitud del huésped.
              tr
                td Cajilla de seguridad
                td Dispositivo destinado al resguardo de objetos de valor del huésped durante su estancia.
              tr
                td Servicios de alimentación y bebidas
                td Restaurante
                td Prestación de servicio de alimentos dentro del establecimiento, orientado a cubrir necesidades nutricionales del huésped.
              tr
                td(rowspan="2") Servicios de <i>confort</i> y mantenimiento
                td <i>Room service</i>
                td Servicio de alimentos y bebidas ofrecido directamente en la habitación del huésped.
              tr
                td Bar
                td Servicio complementario de bebidas que contribuye a la recreación y socialización del huésped.
              tr
                td(rowspan="3") Servicios de bienestar, recreación y ocio
                td <i>Spa</i>
                td Infraestructura destinada al bienestar físico y mental mediante tratamientos especializados.
              tr
                td Gimnasio
                td Espacio equipado para la actividad física del huésped durante su estadía.
              tr
                td Piscina
                td Área recreativa destinada al descanso y la recreación, de acuerdo con la categoría del hotel.
              tr
                td(rowspan="2") Servicios empresariales y para eventos
                td Salones de eventos
                td Espacios destinados a la realización de reuniones, convenciones, capacitaciones o celebraciones.
              tr
                td Servicios de banquetes
                td Prestación de alimentos y bebidas para eventos internos organizados por el hotel.
              tr
                td(rowspan="2") Servicios comerciales y adicionales
                td Lavandería
                td Servicio de lavado, secado y planchado de prendas del huésped.
              tr
                td Tiendas o locales comerciales
                td Espacios destinados a la venta de productos o servicios complementarios dentro del hotel.
              tr
                td(rowspan="3") Servicios de apoyo a la movilidad
                td Transporte o traslados
                td Servicio de traslado desde y hacia aeropuertos, terminales o puntos de interés.
              tr
                td Custodia de vehículos
                td Servicio de parqueadero o <i>valet parking</i> para huéspedes y visitantes.



    .container
      .row.justify-content-center.align-items-center.bg-color-1.p-0
        .col-lg-5.p-0
          figure
            img(src='@/assets/curso/tema3/img26.png' alt='Texto explicativo')
        .col-lg-7.p-4
          p.mb-0 Adicionalmente, los hoteles pueden ofrecer otros servicios complementarios orientados a cubrir requerimientos particulares de los huéspedes, como lavandería, transporte, custodia de equipaje, prensa, alquiler de salones para eventos, convenciones o reuniones empresariales, así como la disponibilidad de locales comerciales y espacios recreativos. La adecuada gestión de estos servicios exige el cumplimiento de protocolos, estándares de calidad y procedimientos técnicos previamente establecidos, así como una comunicación clara al cliente sobre su disponibilidad y condiciones de uso. De esta manera, los servicios complementarios se convierten en un elemento estratégico para fortalecer la calidad del servicio, fidelizar al cliente y apoyar los procesos de oferta y reservación dentro del establecimiento hotelero.
        
    
    separador
    
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Convenciones

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.mb-4.mb-lg-0.col-md-10
        img(src='@/assets/curso/tema3/img27.png' alt='Texto explicativo')
      .col-lg-9
        p.mb-0 Las convenciones son reglas o lineamientos simbólicos que permiten representar información de manera clara y estandarizada, con el fin de evitar confusiones y facilitar la interpretación de datos dentro de un determinado contexto. Aunque su origen se asocia al diseño cartográfico, en el sector hotelero las convenciones cumplen una función similar, ya que se utilizan para organizar, identificar y comunicar de forma ágil información clave relacionada con la operación del establecimiento, especialmente en áreas como recepción, reservas y alojamiento.

    
    .bloque-texto-g.bloque-texto-g--inverso.bg-color-2.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img28.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-3 En los hoteles se emplea una gran variedad de siglas, abreviaturas y símbolos como herramientas operativas para indicar el estado de las habitaciones, la ocupación, las tarifas, los servicios especiales o las condiciones específicas de un huésped. Generalmente, estas convenciones se representan mediante una letra o un conjunto de letras que permiten identificar rápidamente si una habitación se encuentra libre, ocupada, en salida, bloqueada o en proceso de revisión, entre otros estados. 
        p.mb-0 El uso adecuado de estas convenciones facilita la comunicación interna entre los distintos departamentos, optimiza la gestión de las reservas y contribuye a una atención más eficiente y organizada, alineada con los protocolos y procedimientos técnicos del servicio hotelero.


    p.mb-4 A continuación, se ilustran algunos ejemplos de convenciones y siglas para indicar estado de la habitación:



    .row.mb-5.justify-content-center.align-items-center
      .col-xl-2.col-lg-2.d-none.d-lg-flex
        figure
          img(src='@/assets/curso/tema3/img29.png' alt='Texto explicativo')
      .col-lg-10
        .row
          .col-xl-3.col-md-4.mb-3.mb-lg-3
            .tarjeta-avatar-b(data-aos="zoom-in").h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema3/img30.svg' alt='AvatarTop', style="")
              .tarjeta.bg-color-5.align-content-center
                .p-2
                  p.mb-0
                    b CL o C = 
                    | Cliente.
          .col-xl-3.mb-3.mb-lg-3.col-md-4
            .tarjeta-avatar-b(data-aos="zoom-in").h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema3/img30.svg' alt='AvatarTop', style="")
              .tarjeta.bg-color-5.align-content-center
                .p-2
                  p.mb-0
                    b L = 
                    | Libre.
          .col-xl-3.mb-3.mb-lg-3.col-md-4
            .tarjeta-avatar-b(data-aos="zoom-in").h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema3/img30.svg' alt='AvatarTop', style="")
              .tarjeta.bg-color-5.align-content-center
                .p-2
                  p.mb-0
                    b S = 
                    | Salida.
          .col-xl-3.mb-3.mb-lg-3.col-md-4
            .tarjeta-avatar-b(data-aos="zoom-in").h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema3/img30.svg' alt='AvatarTop', style="")
              .tarjeta.bg-color-5.align-content-center
                .p-2
                  p.mb-0
                    b E = 
                    | Entrada.
          .col-xl-3.mb-3.mb-lg-3.col-md-4
            .tarjeta-avatar-b(data-aos="zoom-in").h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema3/img30.svg' alt='AvatarTop', style="")
              .tarjeta.bg-color-5.align-content-center
                .p-2
                  p.mb-0
                    b BQ = 
                    | Bloqueada.
          .col-xl-3.mb-3.mb-lg-3.col-md-4
            .tarjeta-avatar-b(data-aos="zoom-in").h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema3/img30.svg' alt='AvatarTop', style="")
              .tarjeta.bg-color-5.align-content-center
                .p-2
                  p.mb-0
                    b R = 
                    | Repaso / Para revisar.
          .col-xl-3.mb-3.mb-lg-3.col-md-4
            .tarjeta-avatar-b(data-aos="zoom-in").h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema3/img30.svg' alt='AvatarTop', style="")
              .tarjeta.bg-color-5.align-content-center
                .p-2
                  p.mb-0
                    b VIP = 
                    | 
                    i Very important person / People.
          .col-xl-3.mb-3.mb-lg-3.col-md-4
            .tarjeta-avatar-b(data-aos="zoom-in").h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema3/img30.svg' alt='AvatarTop', style="")
              .tarjeta.bg-color-5.align-content-center
                .p-2
                  p.mb-0
                    b DND = 
                    | 
                    i Do not disturb.
          .col-xl-3.mb-3.mb-lg-3.col-md-4
            .tarjeta-avatar-b(data-aos="zoom-in").h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema3/img30.svg' alt='AvatarTop', style="")
              .tarjeta.bg-color-5.align-content-center
                .p-2
                  p.mb-0
                    b CU = 
                    | Cuna.
          .col-xl-3.mb-3.mb-lg-3.col-md-4
            .tarjeta-avatar-b(data-aos="zoom-in").h-100
              .tarjeta-avatar-b__img()
                img(src='@/assets/curso/tema3/img30.svg' alt='AvatarTop', style="")
              .tarjeta.bg-color-5.align-content-center
                .p-2
                  p.mb-0
                    b CEx = 
                    | Cama extra.


    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        p.mb-0 Tenga en cuenta que estas siglas no son universales, ya que pueden variar según la cadena hotelera, el tipo de establecimiento, el país o los sistemas de gestión empleados. Sin embargo, su diseño suele responder a criterios de simplicidad, claridad y no duplicación, con el fin de facilitar su comprensión y uso por parte del personal operativo. 


    .row.justify-content-center.align-items-center
      .col-lg-10
        .cajon.bg-color-9.p-4
          p.mb-0 Por esta razón, resulta fundamental que cada establecimiento documente y socialice sus propias convenciones, garantizando que todos los colaboradores las conozcan y apliquen de manera uniforme. El manejo adecuado de estas siglas contribuye a reducir errores, optimizar los procesos de recepción y reservas, y fortalecer la comunicación interna, elementos clave para la prestación de un servicio hotelero eficiente y de calidad. 




</template>

<script>
export default {
  name: 'Tema3',
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
