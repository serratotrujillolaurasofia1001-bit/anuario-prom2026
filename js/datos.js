/* ============================================================================
   ANUARIO ESCOLAR · AQUÍ SE EDITA TODO
   ============================================================================

   RESEÑA RÁPIDA (léela una vez y listo)
   -------------------------------------
   1. Este es el ÚNICO archivo que necesitas tocar para poner los datos.
   2. Guarda con Ctrl + S y recarga el navegador con F5 para ver los cambios.
   3. Cada texto va entre comillas:   nombre: 'Laura Pérez',
      - Si el texto lleva un apóstrofe (') usa comillas dobles: "D'Angelo"
      - No borres las comas (,) del final de cada línea.
   4. Para dejar algo vacío escribe dos comillas:  frase: '',

   CÓMO AGREGAR UN ESTUDIANTE
   --------------------------
   Más abajo, en la lista  estudiantes: [ ... ],  cada estudiante es un bloque
   entre llaves { ... }.  El PRIMER bloque sale en la página 4, el segundo en la 5,
   y así sucesivamente.  Copia y pega esta plantilla por cada estudiante:

      {
        nombre: 'Nombre Apellido',
        foto: 'img/fotos/nombre.jpg',
        firma: 'img/firmas/nombre.png',
        frase: 'Su frase favorita',
        recuerdo: 'Su recuerdo favorito',
        aspiraciones: ['Primera', 'Segunda', 'Tercera', 'Cuarta', 'Quinta'],
        agradecimientos: 'A quién quiere agradecer',
      },

   FOTOS Y FIRMAS
   --------------
   - Guarda las imágenes dentro de la carpeta img (fotos en img/fotos,
     firmas en img/firmas, escudo en img/logo.png).
   - En  foto:  y  firma:  escribe la ruta exacta del archivo, con mayúsculas,
     minúsculas y extensión (.jpg, .png).
   - Si NO escribes foto/firma, el anuario busca solas estas rutas:
         img/fotos/foto-1.jpg   img/firmas/firma-1.png   (1 = primer estudiante)
         img/fotos/foto-2.jpg   img/firmas/firma-2.png   ... y así.
   - Si el archivo no existe, se ve el marco vacío (no se daña nada).
   - Para la firma usa un PNG con fondo transparente; se ve más elegante.

   CUÁNTAS PÁGINAS TIENE
   ---------------------
   Por defecto 32 páginas (26 de estudiantes). Si tienes más de 26 estudiantes,
   las páginas crecen solas. Si tienes menos, quedan páginas con la plantilla vacía.
   Cambia  paginasEstudiantes  si quieres otro mínimo (debe ser un número par).

   COLORES
   -------
   Están en css/base.css, al principio, en la sección  :root { ... }
   ============================================================================ */

const DATOS = {

  /* ---------- GENERAL ---------- */
  colegio:      'Eugenio Ferro Falla',
  logo:         'img/logo.png',            // escudo del colegio
  generacion:   'Generación 2026',
  curso:        'GRADO 1101',
  promocion:    'Prom 2026',
  paginasEstudiantes: 26,                  // mínimo de páginas de estudiantes (número par)

  /* ---------- PORTADA ---------- */
  portada: {
    linea1: 'ANUARIO',
    linea2: 'ESCOLAR',
  },

  /* ---------- BIENVENIDA (página 3) ---------- */
  bienvenida: {
    titulo:    '¡Bienvenidos!',
    subtitulo: 'Un recuerdo para siempre',
    mensaje:
      'Este anuario guarda a cada uno de nosotros: nuestros rostros, nuestras frases y los sueños que nos trajeron hasta aquí.\n' +
      'Que estas páginas nos recuerden quiénes fuimos, y que el mañana nos encuentre siempre juntos.',
  },

  /* ---------- ESTUDIANTES ---------- */
  estudiantes: [

    /* 1 */
    {
      nombre: 'Laura Liney Alarcon',
      foto: 'img/carnets/laura alarcon.jpg',
      firma: 'img/firmas/laura alarcon.png',
      frase: 'El que persevera alcanza ',
      recuerdo: 'Haber encontrado una persona realmente leal en mi vida',
      aspiraciones: [
        'enfermera',
        'doctora',
        'ingeniera',
      ],
      agradecimientos: 'Agradezco a Dios y a mi familia que me acompañaron en esta etapa, por su apoyo, consejos y paciencia.',
    },

    /* 2 */
    {
      nombre: 'Narly Lizeth Amaya',
      foto: 'img/carnets/2.jpeg',
      firma: 'img/firmas/2.png',
      frase: 'No entendí nada',
      recuerdo: 'Mi recuerdo favorito es conocer a amistades que me ayudaron en el peor momento y me sacaban una sonrisa',
      aspiraciones: ['Seguir estudiando', 'terminar hasta sacar el tecnólogo', 'trabajar para conseguir mis cosas'],
      agradecimientos: 'A mis padres y a todos los docentes que me acompañaron ',
    },

    /* 3 */
    {
      nombre: 'Nycolt Danihela Barrera Mosquera',
      foto: 'img/carnets/3.png',
      firma: 'img/firmas/3.png',
      frase: 'Su Madreeee.',
      recuerdo: 'Mi recuerdo favorito fue cuando iniciamos nuestro grupito de 4 en séptimo con unas amigas.',
      aspiraciones: [
        'Estudiar en el SENA.',
        'Hacer orgullosa a mi madre.',
        'Infante de Marina.',
        'Chef.',
      ],
      agradecimientos: 'Le doy gracias a mi madre por darme su apoyo incondicional en mis estudios y por siempre confiar en mí.',
    },

    /* 4 */
    {
      nombre: 'Andrés Felipe Bastidas Lombana',
      foto: 'img/carnets/4.webp',
      firma: 'img/firmas/4.webp',
      frase: 'Relax que yo remonto.',
      recuerdo: 'Mi noviazgo.',
      aspiraciones: ['Odontólogo.'],
      agradecimientos: 'Agradezco a mis padres por todo el esfuerzo que hicieron todos estos años para que yo pudiera llegar hasta acá: MI GRADO DE BACHILLER.',
    },

    /* 5 */
    {
      nombre: 'Estiven Julián Benítez Castro',
      foto: 'img/carnets/5.png',
      firma: 'img/firmas/5.webp',
      frase: 'Mire a este negro.',
      recuerdo: 'Sin duda, mi recuerdo favorito fue el día en que me organizaron una fiesta de cumpleaños sorpresa. Ver reunidos a mis 4 mejores amigos para celebrar conmigo es un momento que guardo con muchísimo cariño en el corazón.',
      aspiraciones: [
        'Mi mayor aspiración es convertirme en doctor y alcanzar todas mis metas profesionales, preparándome con dedicación para proteger la salud de las personas y cumplir con éxito cada objetivo que me proponga en el futuro.',
      ],
      agradecimientos: 'Agradezco profundamente a mis compañeros, familiares y profesores por haberme acompañado y guiado en esta etapa. Su apoyo y compañía fueron fundamentales durante todo mi proceso educativo en la secundaria.',
    },

    /* 6 */
    {
      nombre: 'Nikoll Lizeth Bocanegra Giraldo',
      foto: 'img/carnets/6.webp',
      firma: 'img/firmas/6.webp',
      frase: 'En nombre de Dios, todo lo lograré.',
      recuerdo: 'Todos los recuerdos de octavo, pero especialmente cuando dañamos un candado para no tener clases con una profesora.',
      aspiraciones: ['Estudiar la carrera de mis sueños.'],
      agradecimientos: 'Gracias a mi familia por el apoyo.',
    },

    /* 7 */
    {
      nombre: 'Danna Valentina Caviedes Perdomo',
      foto: 'img/carnets/7.webp',
      firma: 'img/firmas/7.webp',
      frase: 'Ay Dios mío.',
      recuerdo: 'Mi recuerdo favorito es cuando unos compañeros estaban jugando con una pelota de papel, y accidentalmente le pegaron a una profesora casi dañándole las gafas.',
      aspiraciones: ['Estudiar psicología, o seguir con el técnico.'],
      agradecimientos: 'Les doy las gracias a mis padres por su apoyo emocional y económico, a mis maestros por su paciencia, y por todas las enseñanzas que me han dejado.',
    },

    /* 8 */
    {
      nombre: 'Zaidy Liceth Cuéllar Caviedes',
      foto: 'img/carnets/8.webp',
      firma: 'img/firmas/8.webp',
      frase: 'Ay no, qué pena.',
      recuerdo: 'Mi recuerdo favorito de décimo fue compartir risas, locuras y momentos inolvidables con mis compañeros, creando recuerdos que siempre llevaré en mi corazón.',
      aspiraciones: [
        'Estudiar en el SENA.',
        'Hacer sentir orgullosa a mi familia.',
        'Cumplir mi sueño sin rendirme.',
        'Crecer como persona y aprender de mis errores.',
      ],
      agradecimientos: 'Agradezco a mis padres por su amor incondicional, por apoyarme en cada momento y por hacer tantos esfuerzos para darme lo mejor. Gracias por sus consejos, por confiar en mí y por motivarme a seguir adelante, incluso cuando las cosas se ponen difíciles. Ustedes son una parte fundamental de mi vida y una de mis mayores motivaciones para cumplir mis sueños. Todo lo que hacen por mí lo llevo en mi corazón, y espero algún día poder devolverles un poquito de todo lo que me han dado. Los amo mucho y me siento muy afortunada de tenerlos en mi vida.',
    },

    /* 9 */
    {
      nombre: 'Kewin Daniel Escobar Ramírez',
      foto: 'img/carnets/9.webp',
      firma: 'img/firmas/9.webp',
      frase: 'Olé no.',
      recuerdo: 'El día que jugué un torneo departamental.',
      aspiraciones: [
        'Ser profesional en multimedia.',
        'Debutación como jugador.',
      ],
      agradecimientos: 'Le agradezco a mi familia por apoyarme.',
    },

    /* 10 */
    {
      nombre: 'Laura Fuentes Aranda',
      foto: 'img/carnets/10.jpeg',
      firma: 'img/firmas/10.webp',
      frase: 'Estoy siendo víctima de Xenofobia por parte de mi compañero Benítez.',
      recuerdo: 'Todos los días a partir de 9no (2024) han sido como el mejor de todos. Pero los mejores como Prom fueron las horas lúdicas a la última hora de todos los miércoles.',
      aspiraciones: ['Ser programadora y tener una vida tranquila y digna.'],
      agradecimientos:
        'Agradezco a cada uno de mis compañeros por haber formado parte de los recuerdos más bonitos de mi último año escolar. Me llevo conmigo las risas, las enseñanzas, los momentos compartidos y la tristeza de saber que una etapa tan especial está llegando a su fin. ' +
        'A Yuvettslit Yunda, por ser mi primera amiga al llegar a la institución, por permitirme verla crecer y por ocupar un lugar en mi corazón que el tiempo nunca podrá borrar. A Julieta Rocha, por ser mi compañía, cómplice, apoyo incondicional y una de las amistades más valiosas de este camino. A Isabella Monje, por tenderme la mano cuando más lo necesité; a Laura Serrato, por los momentos vividos; a Estiven Benítez, por su liderazgo, amistad y por hacerme bullying de vez en cuando; a Laura Marinez, por tantas risas y su apoyo; a Cristian Muñoz, por su compañía; a Heilyn Sánchez y Saory Montaña, por estar presentes cuando pudieron; a Laura Galindo, por su cariño y confianza; y a Johan Ramírez, por su carisma y honestidad. Gracias a todos por dejar un pedacito de ustedes en esta historia que siempre recordaré con cariño. ' +
        'A mis profesores, especialmente al profe Sebastián Masmelas, gracias por despertar en mí el amor por la programación. ' +
        'A mi padre, Leonardo Fuentes, por su apoyo económico durante mi formación; a mis hermanos mayores, Cristian Galindo y Yonatan Galindo, por tenderme la mano cuando lo necesité; y a Esther Hernández, por acompañarme espiritual y emocionalmente en este proceso. ' +
        'Pero, sobre todo, mi agradecimiento más profundo es para mi mamá, Lina Aranda. Gracias por cada sacrificio, por cada esfuerzo silencioso y por luchar incansablemente para darme un futuro mejor. Gracias por salvarme de la ignorancia, por creer en mí incluso en medio de las dificultades y por dejarlo todo con tal de verme llegar lejos. Si hoy puedo soñar con un futuro lleno de oportunidades, es porque tú has construido el camino con tus propias manos.',
    },

    /* 11 */
    {
      nombre: 'Laura Valentina Galindo Díaz',
      foto: 'img/carnets/11.webp',
      firma: 'img/firmas/11.webp',
      frase: 'Tengo sueño.',
      recuerdo: 'Mi recuerdo favorito es cuando conocí por primera vez a mi mejor amiga Valeria en sexto.',
      aspiraciones: ['Poder especializarme en lo que más aspiro.'],
      agradecimientos: 'Le agradezco a mis padres por darme motivación y fuerzas para lograr mis metas y poder seguir adelante.',
    },

    /* 12 */
    {
      nombre: 'Mariana García Pérez',
      foto: 'img/carnets/12.webp',
      firma: 'img/firmas/12.webp',
      frase: 'Falsos.',
      recuerdo: 'La vez que hicieron caer a Edwin y de paso a Natalia en el puente de Guaunda y quedó cochino.',
      aspiraciones: ['Psicología o Licenciatura en Lengua Castellana.'],
      agradecimientos: 'Agradezco principalmente a Dios y a mis padres, sobre todo a mi hermana Nubia quien ha hecho el papel principal en apoyarme tanto académica como financieramente, los amo.',
    },

    /* 13 */
    {
      nombre: 'Jesús Fernando Gutiérrez Diz',
      foto: 'img/carnets/13.webp',
      firma: 'img/firmas/13.webp',
      frase: 'Los errores ocurren.',
      recuerdo: 'Cuando obtuve las 80 horas sociales sin hacer prácticamente nada.',
      aspiraciones: ['Convertirme en médico.'],
      agradecimientos: 'Gracias a mis padres, hermano y profesores que me apoyaron en todo para poder salir adelante.',
    },

    /* 14 */
    {
      nombre: 'Laura Angeline Marinez Olaya',
      foto: 'img/carnets/14.webp',
      firma: 'img/firmas/14.webp',
      frase: 'No joda.',
      recuerdo: 'Con mis padres de pequeña.',
      aspiraciones: ['Estudiar derecho.'],
      agradecimientos: 'Agradezco a mi familia.',
    },

    /* 15 */
    {
      nombre: 'Francy Fidelina Medina García',
      foto: 'img/carnets/15.webp',
      firma: 'img/firmas/15.webp',
      frase: 'Todo es mental.',
      recuerdo: 'Mi recuerdo favorito en general es cuando compartimos.',
      aspiraciones: [
        'Graduarme',
        'Ingresar a la universidad',
        'Estudiar Medicina',
        'Crecer como persona',
        'Ayudar a mi familia',
        'Conocer nuevos lugares',
        'Cumplir cada uno de mis sueños',
      ],
      agradecimientos: 'Agradezco a mi familia, docentes y compañeros por su apoyo, dedicación y enseñanzas durante esta etapa, que han contribuido a mi formación personal y académica.',
    },

    /* 16 */
    {
      nombre: 'Isabella Monje Vega',
      foto: 'img/carnets/16.webp',
      firma: 'img/firmas/16.webp',
      frase: 'Te cuento un chiste, amiga.',
      recuerdo: 'Cuando estaba en el puente con mis amigos y nos inventamos un caso para un juicio.',
      aspiraciones: ['Tener mi propia empresa y llegar a componer mis propias canciones.'],
      agradecimientos: 'Le agradezco a mi mamá, tío y abuela por nunca dejarme sola y confiar en mí incluso cuando yo no lo podía hacer.',
    },

    /* 17 */
    {
      nombre: 'Saory Valentina Montaña Piñeros',
      foto: 'img/carnets/17.webp',
      firma: 'img/firmas/17.webp',
      frase: 'Tengo hambre.',
      recuerdo: 'Cuando me la pasaba jugando voleibol.',
      aspiraciones: ['Salir del colegio y formar una carrera.'],
      agradecimientos: 'Agradecimiento a todos los que me acompañaron en mi formación académica.',
    },

    /* 18 */
    {
      nombre: 'Julieth Valentina Mora Esquivel',
      foto: 'img/carnets/18.webp',
      firma: 'img/firmas/18.webp',
      frase: 'Somos la resistencia.',
      recuerdo: 'En 7mo cuando jugábamos fútbol la mayoría del salón unidos.',
      aspiraciones: ['Estudiar lo que me gusta y terminarlo, trabajar en eso y formar una hermosa familia.'],
      agradecimientos: 'Agradezco primeramente a Dios por haberme permitido estar donde estoy y con vida, y a mis padres por apoyarme en cada momento de mi vida y supliendo cada necesidad que tengo.',
    },

    /* 19 */
    {
      nombre: 'Cristian René Muñoz Quintero',
      foto: 'img/carnets/19.webp',
      firma: 'img/firmas/19.webp',
      frase: 'Amo a Angeline.',
      recuerdo: 'Cuando fui novio de Angeline.',
      aspiraciones: ['Hacer un tecnólogo en el SENA, ir a la Universidad y estudiar lo que me gusta para ganar mucha plata.'],
      agradecimientos: 'Agradecimiento especial a su familia y seres queridos.',
    },

    /* 20 */
    {
      nombre: 'Alex Felipe Ortiz Narváez',
      foto: 'img/carnets/20.webp',
      firma: 'img/firmas/20.webp',
      frase: 'No mienta.',
      recuerdo: 'Cuando jugaba micro con mis compañeros.',
      aspiraciones: ['Estudiar la carrera de mis sueños y ser un gran profesional.'],
      agradecimientos: 'Primero que todo, quiero dar gracias a Dios por haberme permitido vivir esta experiencia escolar con salud y vida. También agradecer a los profesores que se esforzaron por enseñarnos con dedicación, paciencia y esfuerzo todos sus conocimientos y valores que nos puedan servir en nuestra vida cotidiana. Por último, estaré infinitamente agradecido con mis padres por haberme acompañado y apoyado en todos mis proyectos y en mi trayectoria como estudiante a través del tiempo.',
    },

    /* 21 */
    {
      nombre: 'Duván Felipe Ortiz Sarmiento',
      foto: 'img/carnets/21.webp',
      firma: 'img/firmas/21.webp',
      frase: 'Yo sí estudié pero se me olvidó todo.',
      recuerdo: 'Cuando jugué fútbol con mis compañeros y nos golearon pero no faltaron las risas.',
      aspiraciones: [
        'Mis aspiraciones son terminar mis estudios, graduarme del colegio, estudiar lo que me gusta y convertirme en un gran profesional. Sueño con tener un buen trabajo, una casa propia, ayudar económicamente a mi familia, hacer sentir orgullosos a mi mamá y hermano, viajar y conocer nuevos lugares. Aspiro a ser una persona responsable, humilde y respetuosa, cumplir cada uno de mis sueños y construir un futuro lleno de felicidad, éxitos y bendiciones, siempre con la ayuda de Dios.',
      ],
      agradecimientos: 'Gracias, Dios, por permitirme vivir esta hermosa etapa de mi vida, por darme la oportunidad de aprender, por cada compañero que puso una sonrisa en mis días y por cada maestro que me enseñó algo más que una lección. Gracias por los momentos felices, por las dificultades que me hicieron más fuerte y por los recuerdos que siempre llevaré en mi corazón. Hoy entiendo que el colegio no solo me dejó conocimientos, sino también amistades, experiencias y enseñanzas que me acompañarán toda la vida.',
    },

    /* 22 */
    {
      nombre: 'Joan Sebastián Ramírez García',
      foto: 'img/carnets/22.webp',
      firma: 'img/firmas/22.webp',
      frase: 'Sapa.',
      recuerdo: 'Ninguno.',
      aspiraciones: ['Ser un gran empresario.'],
      agradecimientos: 'Mi familia.',
    },

    /* 23 */
    {
      nombre: 'Julieta Rocha',
      foto: 'img/carnets/23.webp',
      firma: 'img/firmas/23.webp',
      frase: 'Todo pasa por algo, los planes de Dios son perfectos.',
      recuerdo: 'Cuando me caí en un río con mis amigos y aprovechamos y nos bañamos.',
      aspiraciones: [
        'Llegar a ser profesora de pedagogía infantil para mostrar ese amor tan grande que tengo con los niños y enseñarles las bases que les van a servir para el resto de su vida.',
        'Después de cumplir eso, estudiar para ser azafata, que es uno de mis mayores sueños.',
      ],
      agradecimientos: 'A mis papás que han estado desde el momento en que nací y me han apoyado en todo.',
    },

    /* 24 */
    {
      nombre: 'Heilyn Yireth Sánchez Dussán',
      foto: 'img/carnets/24.webp',
      firma: 'img/firmas/24.webp',
      frase: 'Ya quisiera yo.',
      recuerdo: 'El compartir de la salchipapa.',
      aspiraciones: ['Llegar a ser una persona exitosa que no necesita ayuda de los demás.'],
      agradecimientos: 'Agradezco a mi familia, amigos, compañeros y profesores por darme enseñanzas, ejemplos y aprendizaje que me ayudaron a formarme como la persona que soy ahora.',
    },

    /* 25 */
    {
      nombre: 'Thaliana Sofía Sánchez Rocha',
      foto: 'img/carnets/25.webp',
      firma: 'img/firmas/25.webp',
      frase: 'Vive la vida.',
      recuerdo: 'El 2022 con mis amigas.',
      aspiraciones: ['Ser feliz.'],
      agradecimientos: 'Agradezco a mdzs, a mis padres, a mis profesores y a mis compañeros por ayudarme a lograr mis metas.',
    },

    /* 26 */
    {
      nombre: 'Hilary Natalia Serrato Acosta',
      foto: 'img/carnets/26.webp',
      firma: 'img/firmas/26.webp',
      frase: 'No todo es para siempre, pero tú sí vas a poder con todo.',
      recuerdo: 'Una vez que estaba caminando con mis amigos por el patio del colegio y después nos fuimos para un lado el cual había un río; esa vez me lanzaron al río con otro compañero. Yo no quería culpar ni avisar a la responsable pero ya la habían delatado en coordinación. Nos llevaron para allá, le pusieron observación y nos regañaron.',
      aspiraciones: ['Quiero terminar mi bachillerato con la ayuda de Dios, graduarme y estudiar para ser una gran licenciada en educación infantil.'],
      agradecimientos: 'A mis padres y maestros por el apoyo en todo mi proceso educativo.',
    },

    /* 27 */
    {
      nombre: 'Laura Sofía Serrato',
      foto: 'img/carnets/27.webp',
      firma: 'img/firmas/27.webp',
      frase: 'Uy no, atrás Satanás.',
      recuerdo: 'Mi recuerdo favorito es cuando todos fuimos a la casa del man que me gustaba y ellos se pusieron a dar de serenata la canción de "La ventana marroncita".',
      aspiraciones: [
        'Quiero graduarme feliz junto a mis amigos.',
        'Terminar el tecnólogo.',
        'Homologar y estudiar diseño.',
        'Estudiar más cursos en el SENA.',
        'Entrar a la universidad y estudiar biología.',
        'Graduarme de la universidad.',
        'Ser profesional con lo estudiado.',
      ],
      agradecimientos: 'Gracias a mis amigos: Laura Fuentes, Ancízar Triana, Joan Ramírez, Isabella Monje, Yuvettslit Yunda... y a todo el salón por ser tan especial para mí y por ser tan unidos a pesar de nuestras diferencias.',
    },

    /* 28 */
    {
      nombre: 'Nicolás Soto Calderón',
      foto: 'img/carnets/28.webp',
      firma: 'img/firmas/28.webp',
      frase: 'Yo que me saque un 3 me conformo.',
      recuerdo: 'Cuando jugamos un partido con mis amigos y nos golearon.',
      aspiraciones: ['Tener un trabajo estable, tener un título profesional de ingeniero y estar junto a mis padres.'],
      agradecimientos: 'Primero que todo darle el agradecimiento a mis padres que son los que me han apoyado siempre y en cualquier circunstancia, también a mis abuelas que es otro mérito de orgullo saber que tengo una familia unida y que me apoya en todo, y gracias a eso he podido con todo y siempre salir adelante afrontando todo.',
    },

    /* 29 */
    {
      nombre: 'Ancízar Steven Triana Murcia',
      foto: 'img/carnets/29.webp',
      firma: 'img/firmas/29.webp',
      frase: 'Six seven.',
      recuerdo: 'El día del compartir en 10°.',
      aspiraciones: [
        'Terminar el tecnólogo.',
        'Irme del país junto a mi familia.',
        'Hacer la universidad.',
        'Tener hijos.',
      ],
      agradecimientos: 'Agradezco a mis padres por el gran amor que me han dado, a mis hermanos, al profe Sebas por ser tan buen docente y a mis amigos por hacer los días tan divertidos y más fáciles.',
    },

    /* 30 */
    {
      nombre: 'Yuvettslit Yunda Cortés',
      foto: 'img/carnets/30.webp',
      firma: 'img/firmas/30.webp',
      frase: 'Life goes on.',
      recuerdo: 'Mi mamá y yo en la graduación de 9no, por cómo se veía y sentí su orgullo.',
      aspiraciones: [
        'Llegar a ser profesional en marketing',
        'Ayudar a mi mamá',
        'Viajar',
        'Tener un trabajo estable',
        'Obtener dinero',
        'Especializarme en algo',
      ],
      agradecimientos: 'A mi mamá y a mi hermano, por acompañarme durante todo este proceso, por su esfuerzo para conseguir lo que yo necesitaba y, sobre todo, por demostrarme su apoyo, amor y orgullo.',
    },

    /* MENCIÓN ESPECIAL · DOCENTE */
    {
      nombre: 'Johan Sebastián Masmelas Vega',
      foto: 'img/carnets/docente.webp',
      firma: 'img/firmas/docente.webp',
      frase: 'La constancia concede la victoria.',
      recuerdo: 'Cuando me gradué de Ingeniero.',
      aspiraciones: [
        'Doctorado en Educación.',
        'Tener Salud.',
        'Ser feliz.',
      ],
      agradecimientos: 'A mi familia quiero agradecerles por ser mi mayor refugio y mi equipo incondicional.',
    },

    /* ↓↓↓ Pega aquí abajo la plantilla de cada nuevo estudiante ↓↓↓ */

  ],

  /* ---------- MOMENTOS QUE BRILLAN (6 fotos del salón) ---------- */
  momentosTitulo: 'Momentos que brillan',
  momentos: [
    { foto: 'img/momentos/momento-1.jpg', texto: '' },
    { foto: 'img/momentos/momento-2.jpg', texto: '' },
    { foto: 'img/momentos/momento-3.jpg', texto: '' },
    { foto: 'img/momentos/momento-4.jpg', texto: '' },
    { foto: 'img/momentos/momento-5.jpg', texto: '' },
    { foto: 'img/momentos/momento-6.jpg', texto: '' },
  ],

  /* ---------- ÚLTIMA PÁGINA: FRASE Y AGRADECIMIENTOS ---------- */
  despedida: {
    titulo: 'Hasta siempre, 1101',
    frase: [
      'Un día cerraremos esta puerta por última vez, pero las risas del salón, los abrazos del recreo y los sueños que susurramos juntos seguirán viviendo en estas paredes… y en nuestro corazón.',
      'Hoy nos despedimos del colegio, no de todo lo que fuimos aquí.',
    ],
    fraseFinal: 'Gracias por tanto, 1101. Los vamos a extrañar siempre.',
    agradecimientosTitulo: 'Agradecimientos',
    agradecimientos: [
      'A nuestras familias, por creer en nosotros incluso cuando dudábamos.',
      'A nuestros profesores y directivos, por enseñarnos mucho más que materias.',
      'A cada compañero, por convertir este camino en una aventura.',
      'A la Institución Educativa Eugenio Ferro Falla, nuestro segundo hogar.',
    ],
  },

  /* ---------- CONTRAPORTADA ---------- */
  contraportada: {
    titulo: ['Gracias por ser parte', 'de esta historia'],
    pie:    'Hecho con cariño por los estudiantes de 1101',
  },
};