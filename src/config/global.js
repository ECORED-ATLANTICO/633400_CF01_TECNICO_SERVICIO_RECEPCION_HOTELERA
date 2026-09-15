export default {
  global: {
    Name: 'Introducción a la industria hotelera',
    Description:
      'El componente formativo Introducción a la industria hotelera proporciona al aprendiz los fundamentos conceptuales del sector de alojamiento y hospedaje, abordando la evolución de la hotelería, los tipos de establecimientos, el portafolio de servicios y los protocolos de atención al cliente. Este componente permite comprender el contexto operativo y normativo en el que se desarrolla la prestación del servicio hotelero, como base para la oferta adecuada de servicios de acuerdo con los procedimientos técnicos establecidos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [{}],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Hotelería',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Historia de la hotelería y su evolución',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Normativa de formalización',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'Normas técnicas sectoriales hoteleras para establecimientos de alojamiento y hospedaje',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Establecimientos de alojamiento y hospedaje',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Clasificación de hoteles',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Tipos de alojamiento y hospedajes',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Habitaciones hoteleras',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Tipo de habitaciones y acomodación',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Servicios complementarios',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Convenciones',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Estructura organizacional',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Principios de la organización hotelera',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Departamentos que conforman la estructura organizacional',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'El organigrama como herramienta de gestión',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo:
              'Importancia de la estructura organizacional para la calidad del servicio',
            hash: 't_4_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/621602_CF01_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: '',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Acomodación',
      significado:
        'Forma en que se dispone la habitación según el tipo y número de camas, la capacidad y las características del espacio, en relación con el número de huéspedes registrados.',
    },
    {
      termino: 'Ama de llaves',
      significado:
        'Cargo responsable de la planificación, supervisión y control del área de <i>housekeeping</i>, garantizando estándares de limpieza, presentación, lencería y calidad del servicio.',
    },
    {
      termino: 'Categoría hotelera',
      significado:
        'Clasificación oficial de los establecimientos de alojamiento de acuerdo con criterios técnicos, normativos y de calidad, comúnmente representada por estrellas.',
    },
    {
      termino: '<i>Check-in</i>',
      significado:
        'Proceso mediante el cual se realiza el registro y acomodación de uno o varios huéspedes en un establecimiento de alojamiento, asignando habitación y definiendo la forma de pago, con el fin de mantener actualizada la información durante la estancia.',
    },
    {
      termino: '<i>Check-in</i> anticipado (<i>Early check-in</i>)',
      significado:
        'Servicio que permite el ingreso del huésped antes de la hora establecida, sujeto a disponibilidad y a las políticas del establecimiento.',
    },
    {
      termino: '<i>Check-out</i>',
      significado:
        'Proceso mediante el cual el huésped entrega la habitación ocupada, se revisa y liquida la cuenta por los servicios consumidos y se formaliza la salida del establecimiento.',
    },
    {
      termino: '<i>Check-out</i> tardío (<i>Late check-out</i>)',
      significado:
        'Servicio que autoriza al huésped a permanecer en la habitación después de la hora de salida establecida, de acuerdo con la disponibilidad y las condiciones del hotel.',
    },
    {
      termino: 'Conserjería',
      significado:
        'Área del hotel encargada de ofrecer información, asistencia y servicios personalizados al huésped, contribuyendo a mejorar su experiencia durante la estadía.',
    },
    {
      termino: 'Disponibilidad',
      significado:
        'Capacidad real del establecimiento para ofrecer habitaciones o servicios en una fecha determinada, de acuerdo con el nivel de ocupación y las reservas existentes.',
    },
    {
      termino: 'Estancia',
      significado:
        'Periodo comprendido entre el <i>check-in</i> y el <i>check-out</i>, durante el cual el huésped permanece alojado en el establecimiento.',
    },
    {
      termino: '<i>Housekeeping</i>',
      significado:
        'Departamento operativo responsable de la limpieza, orden, presentación y mantenimiento básico de habitaciones y áreas comunes del hotel.',
    },
    {
      termino: 'Inventario hotelero',
      significado:
        'Conjunto de habitaciones, servicios y recursos físicos disponibles para la operación y comercialización del establecimiento de alojamiento.',
    },
    {
      termino: 'Norma de competencia',
      significado:
        'Conjunto de funciones laborales que describen el desempeño esperado en un proceso de trabajo, con valor y significado para el ejercicio profesional.',
    },
    {
      termino: 'Objetivos de calidad',
      significado:
        'Resultados esperados relacionados con la calidad del servicio, definidos a partir de la política de calidad de la organización.',
    },
    {
      termino: 'Ocupación',
      significado:
        'Indicador que refleja el uso efectivo de las habitaciones disponibles durante un periodo determinado, generalmente expresado en porcentaje.',
    },
    {
      termino: '<i>Par stock</i>',
      significado:
        'Cantidad mínima de elementos operativos (lencería, vajilla, utensilios, entre otros) necesarios para garantizar la continuidad del servicio según la capacidad instalada.',
    },
    {
      termino: 'Plan de emergencia',
      significado:
        'Conjunto de medidas y procedimientos destinados a salvaguardar la vida de las personas y los bienes del establecimiento ante situaciones de riesgo o desastre.',
    },
    {
      termino: 'Planta',
      significado:
        'Sistema integrado de instalaciones físicas, equipos y servicios necesarios para el funcionamiento del establecimiento de alojamiento.',
    },
    {
      termino: 'Política de calidad',
      significado:
        'Declaración formal de las intenciones y directrices de la organización en materia de calidad, definida por la alta dirección y alineada con la política corporativa.',
    },
    {
      termino: 'Portafolio de servicios',
      significado:
        'Conjunto organizado de servicios básicos y complementarios que ofrece el establecimiento de alojamiento a sus clientes.',
    },
    {
      termino: 'Procedimiento técnico',
      significado:
        'Secuencia estandarizada de actividades que permite ejecutar un proceso operativo de manera ordenada, eficiente y conforme a normas establecidas.',
    },
    {
      termino: 'Programa de mantenimiento',
      significado:
        'Planificación de actividades de mantenimiento preventivo y correctivo de las instalaciones físicas durante un periodo determinado.',
    },
    {
      termino: 'Protocolo de atención al cliente',
      significado:
        'Lineamientos que orientan la conducta, la comunicación y el servicio del personal hacia el huésped, asegurando atención uniforme y de calidad.',
    },
    {
      termino: 'Recepción',
      significado:
        'Área estratégica del hotel encargada del registro de huéspedes, la gestión de reservas, la atención al cliente y el control de la información operativa.',
    },
    {
      termino: 'Registros de mantenimiento',
      significado:
        'Documentos que evidencian las actividades realizadas y los resultados obtenidos en los procesos de mantenimiento de las instalaciones.',
    },
    {
      termino: 'Reserva garantizada',
      significado:
        'Estado de una reserva que asegura la disponibilidad de la habitación mediante un medio de pago o garantía aceptada por el establecimiento.',
    },
    {
      termino: 'Reserva hotelera',
      significado:
        'Compromiso mediante el cual el establecimiento retiene una o varias habitaciones para una fecha determinada, bajo condiciones específicas de pago y cancelación.',
    },
    {
      termino: '<i>Room service</i>',
      significado:
        'Servicio de alimentación proporcionado directamente en la habitación del huésped.',
    },
    {
      termino: 'Señalización',
      significado:
        'Conjunto de indicaciones visuales que orientan y regulan el comportamiento de las personas dentro del establecimiento.',
    },
    {
      termino: '<i>Spa</i>',
      significado:
        'Infraestructura destinada al bienestar físico y mental, que utiliza elementos naturales o tratamientos especializados como servicio complementario del hotel.',
    },
    {
      termino: 'Tarifa hotelera',
      significado:
        'Valor económico asignado a los servicios de alojamiento y complementarios, definido según políticas internas, temporada y tipo de cliente.',
    },
    {
      termino: 'Tipología de habitaciones',
      significado:
        'Clasificación de las habitaciones según características como tamaño, tipo de cama, capacidad y nivel de confort.',
    },
    {
      termino: 'Turno operativo',
      significado:
        'Franja horaria en la cual el personal desarrolla sus funciones, garantizando la continuidad del servicio hotelero.',
    },
    {
      termino: '<i>Upselling</i>',
      significado:
        'Estrategia orientada a ofrecer al cliente un servicio o producto de mayor valor al inicialmente solicitado, incrementando el ingreso del establecimiento.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alcaldía Mayor de Bogotá – Secretaría General (1996). Documentos para turismo (Reglamentación).',
      link:
        'https://www.alcaldiabogota.gov.co/sisjur/listados/tematica2.jsp?subtema=20482',
    },
    {
      referencia: 'Báez Casillas, S. (2009). Hotelería 4ta Edición.',
      link: '',
    },
    {
      referencia:
        'ICONTEC. (2015). Normas técnicas sectoriales para establecimientos de alojamiento y hospedaje (NTSH). Instituto Colombiano de Normas Técnicas y Certificación.',
      link: '',
    },
    {
      referencia:
        'Medlik, S., & Ingram, H. (2018). The business of hotels (5th ed.). Routledge.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo (2003). Norma Técnica Sectorial Colombiana, Sena, Cotelco.',
      link:
        'https://www.mincit.gov.co/minturismo/calidad-y-desarrollo-sostenible/calidad-turistica/normas-tecnicas-sectoriales',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2003). NTSH 001 Realización de actividades básicas para la prestación del servicio.',
      link:
        'https://www.mincit.gov.co/getattachment/minturismo/calidad-y-desarrollo-sostenible/calidad-turistica/normas-tecnicas-sectoriales/nts-alojamiento-y-hospedaje-1/norma-tecnica-sectorial-colombiana-ntsh-001-establ/nts-alojamiento-y-hospedaje-1.pdf.aspx',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2003). NTSH 002 Información a clientes, atención de sugerencias y reclamaciones de acuerdo a políticas de servicio.',
      link:
        'https://www.mincit.gov.co/getattachment/minturismo/calidad-y-desarrollo-sostenible/calidad-turistica/normas-tecnicas-sectoriales/nts-alojamiento-y-hospedaje-1/norma-tecnica-sectorial-colombiana-ntsh-002-establ/norma-tecnica-sectorial-colombiana-ntsh-002.pdf.aspx',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2003). NTSH 003 Prestación de servicio de recepción y reservas conforme a manuales existentes.',
      link:
        'https://www.mincit.gov.co/getattachment/minturismo/calidad-y-desarrollo-sostenible/calidad-turistica/normas-tecnicas-sectoriales/nts-alojamiento-y-hospedaje-1/norma-tecnica-sectorial-colombiana-ntsh-003-establ/norma-tecnica-sectorial-colombiana-ntsh-003.pdf.aspx',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2003). NTSH 004 Atención del área de conserjería de acuerdo al manual de procedimientos.',
      link:
        'https://www.mincit.gov.co/getattachment/minturismo/calidad-y-desarrollo-sostenible/calidad-turistica/normas-tecnicas-sectoriales/nts-alojamiento-y-hospedaje-1/norma-tecnica-sectorial-colombiana-ntsh-004-establ/norma-tecnica-sectorial-colombiana-ntsh-004.pdf.aspx',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2003). NTSH 005 Manejo de valores e ingresos relacionados con la operación del establecimiento.',
      link:
        'https://www.mincit.gov.co/getattachment/minturismo/calidad-y-desarrollo-sostenible/calidad-turistica/normas-tecnicas-sectoriales/nts-alojamiento-y-hospedaje-1/norma-tecnica-sectorial-colombiana-ntsh-005-establ/norma-tecnica-sectorial-colombiana-ntsh-005.pdf.aspx',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2009). NTSH 006 Clasificación de Establecimientos de Alojamiento y Hospedaje. Categorización por Estrellas de Hoteles. Requisitos Normativos.',
      link:
        'https://www.mincit.gov.co/getattachment/minturismo/calidad-y-desarrollo-sostenible/calidad-turistica/normas-tecnicas-sectoriales/nts-alojamiento-y-hospedaje-1/norma-tecnica-sectorial-colombiana-ntsh-006-i-actu/norma-tecnica-sectorial-colombiana-ntsh-006-i.pdf.aspx',
    },
    {
      referencia:
        'Ministerio de Desarrollo económico (1996 - 2025). Normatividad Turismo Colombia.',
      link: 'https://rosdary.wordpress.com/normatividad-turismo-colombia/',
    },
    {
      referencia:
        'Universidad Peruana de Ciencias Aplicadas. (s. f.). Separata: Introducción al turismo y hotelería.',
      link:
        'https://repositorioacademico.upc.edu.pe/bitstream/handle/10757/297052/SEPARATA%20INTRODUCCI%C3%93N%20AL%20TURISMO%20Y%20HOTELER%C3%8DA.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de la línea de producción',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Sandra Isabel Suarez Delgado',
          cargo: 'Experto temático',
          centro: 'Centro de Servicios y Gestión Empresarial',
        },
        {
          nombre: 'María Fernanda Morales Angulo',
          cargo: 'Diseñador instruccional',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Diseño web',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Álvaro Guillermo Araújo Angarita',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
