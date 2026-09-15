<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Reconociendo los fundamentos de la industria hotelera.',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> evaluar la comprensión del aprendiz sobre los conceptos fundamentales de la industria hotelera, su evolución, estructura organizacional, normativa básica y terminología técnica, mediante la identificación correcta de enunciados, fortaleciendo la apropiación conceptual necesaria para el desempeño en el contexto técnico profesional del sector alojamiento y hospedaje.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto: '¿Cuál es el propósito principal de la industria hotelera?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ofrecer únicamente alojamiento a turistas extranjeros.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Prestar servicios de alojamiento y otros servicios complementarios a diferentes tipos de huéspedes.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Administrar exclusivamente agencias de viajes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Comercializar únicamente paquetes turísticos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué factor ha influido directamente en la evolución histórica de la hotelería?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Porque todos utilizan la misma clasificación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Porque la normativa y la clasificación turística varían según cada país.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Porque no existe regulación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Porque dependen únicamente del idioma.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Por qué los establecimientos de alojamiento reciben diferentes denominaciones entre países?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Porque todos utilizan la misma clasificación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Porque la normativa y la clasificación turística varían según cada país.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Porque no existe regulación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Porque dependen únicamente del idioma.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es el propósito de la estructura organizacional de un hotel?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Elaborar campañas publicitarias.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Definir áreas, cargos y niveles de responsabilidad para una operación eficiente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Determinar únicamente las tarifas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Organizar eventos sociales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál de las siguientes funciones corresponde al departamento de recepción?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Preparar alimentos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Gestionar el registro, la atención y la salida de los huéspedes.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Realizar mantenimiento de equipos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Supervisar exclusivamente la lavandería.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué aportan los servicios complementarios a un establecimiento hotelero?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementa únicamente los costos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Mejora la experiencia del huésped y generan valor agregado.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar la necesidad del alojamiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituye el servicio de recepción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es el objetivo de las normas técnicas sectoriales hoteleras en Colombia?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Limitar el funcionamiento de los hoteles.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Promover la calidad y estandarizar los procesos de servicio.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Regular únicamente las tarifas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Clasificar únicamente restaurantes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Por qué la tipología de habitaciones es importante en un hotel?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sólo sirve para decorar el establecimiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Influye en la tarifa, la comercialización y la gestión de reservas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'No tiene relación con la operación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sólo interesa al área de mantenimiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cuál es el beneficio del uso de siglas y convenciones hoteleras?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar el número de huéspedes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Facilitar la comunicación y la operación entre las diferentes áreas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir la cantidad de habitaciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar los procedimientos administrativos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'Respecto a las siglas utilizadas para identificar el estado de las habitaciones, es correcto afirmar que:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Son obligatorias y universales en todos los hoteles',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Pueden variar según el establecimiento o el sistema utilizado.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Sólo se utilizan en hoteles cinco estrellas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'No tienen utilidad operativa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: '¿Cuál es la función principal del área de housekeeping?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Gestionar reservas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Garantizar la limpieza, presentación y disponibilidad de las habitaciones.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Elaborar estados financieros.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Diseñar campañas comerciales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto: '¿Qué información permite identificar un organigrama?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Únicamente los salarios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Los niveles jerárquicos y los canales de comunicación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Las tarifas de alojamiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Los horarios de los huéspedes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto: '¿Por qué es importante cumplir la normativa turística?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Porque sólo aplica a hoteles internacionales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Porque garantiza una operación legal y de calidad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Porque reemplaza los procedimientos internos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Porque eliminan las auditorías.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto: '¿Cuál es la característica de la hotelería moderna?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar el contacto con el huésped.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Integrar tecnología y personalizar la experiencia del cliente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir todos los servicios complementarios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Operar únicamente de forma presencial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            '¿Por qué un técnico profesional debe conocer la estructura organizacional del hotel?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Para reemplazar a todos los jefes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Para integrarse adecuadamente a la operación y comprender sus responsabilidades.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Para definir las tarifas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Para administrar exclusivamente el área financiera.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            '¿Cuáles de los siguientes establecimientos hace parte del sector de alojamiento?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Centro comercial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Hotel.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Hospital.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Banco.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Qué área mantiene contacto permanente con el huésped durante su estadía?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Contabilidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Recepción.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Compras.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Archivo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            '¿Cuál es uno de los objetivos de ejercer un servicio de calidad en hotelería?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar únicamente los costos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Lograr la satisfacción y fidelización del huésped.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir la ocupación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Limitar los servicios ofrecidos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿Qué elemento hace parte de la tecnología técnica utilizada en hotelería?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Fórmulas químicas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Siglas y convenciones operativas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Lenguaje jurídico exclusivamente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Términología médica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Cuál es la importancia de conocer los fundamentos de la industria hotelera?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sólo sirve para desempeñar cargos administrativos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Proporciona las bases para comprender la operación y prestarnos un servicio de calidad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Únicamente permite clasificar hoteles.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sólo es útil para el área comercial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
