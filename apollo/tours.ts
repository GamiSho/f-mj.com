import { Itinerario } from 'types/@types'

interface Tour {
  id: number,
  slug: string
  destino: string,
  nombreDelTour: string,
  caracterDeTour: string,
  precioAproximado: string,
  image: string,
  itinerario: Itinerario[],
  serviciosIncluidos: string[],
  noIncluidos: string[], 
  informacionUtil: string[],
  recomendaciones: string[],
}

const Tours: Tour[] = [
  {
    id: 4,
    slug: "machu-picchu-por-carro-2dias-1noche",
    destino: "Cusco",
    nombreDelTour: "MACHU PICCHU POR CARRO 2DIAS 1NOCHE",
    caracterDeTour: "From Cusco, 2 days / 1 Night, Meal = 1 Breakfast, 1 Lunch, 1 Dinner Included",
    precioAproximado: "173 USD",
    image: "Cusco/4-Mapi-carro.jpg",
    itinerario: [
      {
        time: "DÍA 1:",
        description: "CUSCO - HIDROELÉCTRICA - AGUAS CALIENTES",
      },
      {
        time: "06:30 - 07:00",
        description: "Recojo desde su hotel en Cusco",
      },
      {
        time: "08:30 - 08:45",
        description: "Parada en Ollantaytambo para apreciar esta hermosa ciudad viviente de los incas",
      },
      {
        time: "11:30 - 11:40",
        description: "parada en el abra Málaga desde donde podrá tomar fotos de nevados y el paisaje que se transformará en ceja de selva. Luego continuaremos nuestro viaje durante 4 horas.",
      },
      {
        time: "13:00 - 13:40",
        description: "Almuerzo incluido",
      },
      {
        time: "13:40 – 14:30",
        description: "Viaje en transporte turístico hasta llegar a la hidroeléctrica, punto donde inicia una caminata.",
      },
      {
        time: "17:30",
        description: "Su guía lo estará esperando para trasladarlo hacia su hotel",
      },
      {
        time: "18:30",
        description: "Nos dirigiremos a tomar la cena que esta incluida, en este momento su guía le dará más detalles del tour de Machu Picchu del día siguiente.  Hotel en Machu Picchu pueblo",
      },
      {
        time: "DIA 2:",
        description: "TOUR GUIADO EN MACHU PICCHU Y RETORNO A CUSCO",
      },
      {
        time: "04:00",
        description: "Desayuno incluido en el hotel",
      },
      {
        time: "05:00",
        description: "Recojo de su hotel",
      },
      {
        time: "05:30 - 06:00",
        description: "Bus de subida a Machu Picchu",
      },
      {
        time: "06:00",
        description: "Ingreso a Machu Picchu",
      },
      {
        time: "06:30 - 08:30",
        description: "Visita guía a Machu Picchu",
      },
      {
        time: "08:50 - 09:20",
        description: "bus de bajada hacia el pueblo de Machu Picchu (aguas calientes)",
      },
      {
        time: "11:00 - 14:00",
        description: "Caminata de retorno por la ruta de hidroeléctrica",
      },
      {
        time: "14:00 - 15:00",
        description: "Tomaremos el transporte turístico de retorno a Cusco",
      },
      {
        time: "21:00",
        description: "Llegada a Cusco donde lo dejaremos cerca de la plaza de armas",
      },
    ],
    serviciosIncluidos: [
      "Transporte turístico Cusco - Hidroeléctrica – Cusco en servicio compartido",
      "Boleto de ingreso a Machu Picchu.",
      "Bus de subida y bajada a Machu Picchu.",
      "Guía profesional en español o inglés en servicio compartido",
      "01 noche de alojamiento en Aguas Calientes (Pueblo de Machu Picchu).",
      "01 desayuno en el día 2",
      "01 almuerzo en el día 1",
      "01 cena en el día 1",
      "Equipo de primeros auxilios.",
    ],
    noIncluidos: [
      "Alimentos no mencionados",
      "Tickets de tren desde la hidroeléctrica (opcional en vez de la caminata de tres horas, el costo es de USD 40 ida o retorno)",
      "Seguro de viaje.",
      "Gastos extras",
    ],
    informacionUtil: [],
    recomendaciones: [
      "Se requiere un buen nivel físico y estado de salud.",
      "Usar protector solar y gorra",
      "Usar repelente para mosquitos",
      "Usar ropa ligera y llevar una casaca.",
      "Llevar dinero en soles y en efectivo.",
    ],
  },
  {
    id: 8,
    slug: "machupicchu-fd-con-tren-turístico",
    destino: "Cusco",
    nombreDelTour: "MACHUPICCHU FD CON TREN TURÍSTICO",
    caracterDeTour: "Desde Cusco, full day, no incluye",
    precioAproximado: "Desde 320 USD Por persona, base 2 personas",
    image: "Cusco/8-main-Mapi-FD-con-tren-t.jpg",
    itinerario: [
      {
        time: "04:00",
        description: "Lo recogeremos de su hotel para trasladarlo a la estación de tren de Ollantaytambo",
      },
      {
        time: "05:40 - 05:50",
        description: "Llegaremos a la estación de tren y abordaremos el tren turístico rumbo a Machu Picchu pueblo",
      },
      {
        time: "07:20",
        description: "Llegaremos a Machu Picchu pueblo donde tendremos un tiempo para el desayuno que es por su cuenta",
      },
      {
        time: "08:30",
        description: "subiremos en el bus turístico que nos llevará al centro arqueológico de Machu Picchu",
      },
      {
        time: "09:00 - 11:30",
        description: "Ingreso a Machu Picchu y visita guiada durante 2 horas y media",
      },
      {
        time: "12:00 - 12:30",
        description: "Bajada en el bus turístico hacia el pueblo de Machu Picchu",
      },
      {
        time: "12:30 - 18:00",
        description: "Tiempo libre en Machu Picchu pueblo",
      },
      {
        time: "18:30",
        description: "Deberá presentarse en la estación y abordar el tren",
      },
      {
        time: "19:00 - 20:30",
        description: "Viaje en tren de retorno",
      },
      {
        time: "20:30",
        description: "Lo estaremos esperando en la estación de tren de Ollantaytambo con un letrero con su nombre y luego lo llevaremos de vuelta a su hotel en Cusco.",
      },
    ],
    serviciosIncluidos: [
      "Transporte turístico de Cusco a Ollantaytambo ida y retorno.",
      "Tickets de tren turístico ida y retorno.",
      "Tickets de bus subida y bajada al centro arqueológico de Machu Picchu.",
      "Guía profesional (tiempo aproximado de 02 horas y media.)",
      "Ticket de ingreso a Machu Picchu.",
    ],
    noIncluidos: [
      "Alojamiento",
      "Alimentos no mencionados",
      "Seguro de viaje",
      "Vuelos",
    ],
    informacionUtil: [
      "Precio está dependiendo a tren turístico que cotizamos",
    ],
    recomendaciones: [
      "Usar ropa en capas, ropa ligera y abrigadora",
      "Usar zapatos cómodos para caminata",
      "Usar bloqueador solar, gorra",
      "Llevar agua",
      "Si necesita ir al baño debe ir antes de ingresar al centro arqueológico ya que una vez que entra no podrá salir hasta terminar el tour.",
    ],
  },
  {
    id: 9,
    slug: "cusco-night-tour",
    destino: "Cusco",
    nombreDelTour: "CUSCO NIGHT TOUR",
    caracterDeTour: "From Cusco, 5hrs.  Meal = Included Dinner",
    precioAproximado: "Desde 79 USD por persona base 2 personas",
    image: "Cusco/9-Cusco-Recorrido-Noche-1.jpg",
    itinerario: [
      {
        time: "16:00",
        description: "Recojo de su hotel del centro de la ciudad",
      },
      {
        time: "16:10 - 16:50",
        description: "Ingreso y visita al templo del Qoricancha, fue el más importante, en tiempo de los incas estuvo cubierto de oro.",
      },
      {
        time: "17:00 - 18:00",
        description: "Recorrido a pie por las calles con muros incas del Cusco, conocerá la piedra de 12 ángulos que se encuentra en el palacio de inca roca",
      },
      {
        time: "18:00 - 19:00",
        description: "Visita al mirador de San Cristóbal, donde tendrá una hermosa vista de la ciudad del Cusco además podrá apreciar el palacio del inca de Manco Cápac",
      },
      {
        time: "19:30 - 21:00",
        description: "Cena y show de música y danza tradicional del Cusco en un restaurante en la plaza de armas.  21:20 Retorno a su hotel.",
      },
    ],
    serviciosIncluidos: [
      "Transporte",
      "Guías profesionales",
      "cena de tres tiempos",
      "Ingresos",
    ],
    noIncluidos: [
      "Bebidas",
    ],
    informacionUtil: [],
    recomendaciones: [
      "Usar Ropa abrigadora",
    ],
  },
  {
    id: 1,
    slug: "ausangate-y-7-lagunas",
    destino: "Cusco",
    nombreDelTour: "AUSANGATE Y 7 LAGUNAS",
    caracterDeTour: "From Cusco, Full Day, Meal = Breakfast, Lunch",
    precioAproximado: "74 USD",
    image: "Cusco/1-Ausangate-1.jpg",
    itinerario: [
      {
        time: "03:30 a 04:00",
        description: "recojo desde su hotel.",
      },
      {
        time: "07:40",
        description: "Llegaremos a las faldas del nevado Ausangate hasta la comunidad de Pacchanta, aquí tendremos desayuno.",
      },
      {
        time: "08:10",
        description: "Iniciaremos nuestra caminata que será aproximadamente 4 horas (2 horas de ida y 2 horas de retorno). Tendremos hermosas vistas de muchas lagunas, nevados y la cordillera de Cayangate. Altura máxima 5,000 m.s.n.m.",
      },
      {
        time: "13:00 a 14:00",
        description: "Llegaremos al punto de inicio de nuestra caminata (Pacchanta). Aquí nos esperará un delicioso almuerzo. Después del almuerzo usted tiene la opción de disfrutar de los baños termales de Pacchanta (tiene un costo adicional).",
      },
      {
        time: "15:30",
        description: "Retorno a Cusco.",
      },
      {
        time: "18:00 a 19:00",
        description: "Llegaremos a la ciudad del Cusco donde lo dejaremos cerca de la plaza de armas.",
      },
    ],
    serviciosIncluidos: [
      "Transporte turístico.",
      "Guía profesional.",
      "Oxígeno y botiquín de primeros auxilios.",
      "Desayuno y almuerzo)",
    ],
    noIncluidos: [
      "Ingreso a la cordillera Cayangate (10.00 soles)",
      "Otros alimentos no mencionados",
      "Ingreso a las aguas termales (5.00 soles, esto es opcional).",
    ],
    informacionUtil: [
      "4 horas aproximadamente de caminata (ida y vuelta).",
      "Caminata Fácil.",
      "El clima es cambiante.",
      "La altura máxima a la que llegaremos es 4,800 m.s.n.m. (15748.03 pies)",
      "No se permite ingresar a las lagunas.",
      "No es apto para niños, mujeres embarazadas, ancianos y personas con problemas de salud.",
    ],
    recomendaciones: [
      "Usar zapatos para caminata.",
      "Llevar poncho de plástico, bloqueador, lentes de sol y gorra.",
      "Usar ropa abrigadora y también ligera.",
      "Llevar dinero en soles y en efectivo.",
      "No se permite ingresar a las lagunas.",
      "No es apto para niños, mujeres embarazadas, ancianos y personas con problemas de salud.",
    ],
  },
  {
    id: 2,
    slug: "city-tour-panorámico-en-bus",
    destino: "Cusco",
    nombreDelTour: "CITY TOUR PANORÁMICO EN BUS",
    caracterDeTour: "From Cusco, 2 horas y 30 min, No Included Meal",
    precioAproximado: "10 USD",
    image: "Cusco/2-City-Panoramico-1.jpg",
    itinerario: [
      {
        time: "09:20",
        description: "Recojo en transporte desde su hotel para dirigirnos a la plaza de armas",
      },
      {
        time: "09:50",
        description: "Breve caminata guiada por las calles con muros incas hasta el punto donde tomaremos nuestro bus",
      },
      {
        time: "10:00",
        description: "Vista panorámica de las principales calles y plazas del Cusco como: Plaza Regocijo, plaza San Francisco, arco de Santa Clara, Casa de Inca Garcilaso, templo de la Merced, palacio de Justicia, templo del sol o Qoricancha, mural histórico del Cusco, caída de agua artificial “cola de Puma”, colegio San Bernardo, palacio Municipal, templo de Santa Teresa, mirador de san Cristóbal donde se encuentra el palacio del primer Inca Manco Cápac.",
      },
      {
        time: "10:40",
        description: "Parada cerca al centro arqueológico de Sacsayhuaman para tener un ritual a la hoja de coca y visita a un centro textil donde aprenderá sobre la lana de llamas, alpacas donde también podrá observar estos hermosos animales y verá una pequeña laguna.",
      },
      {
        time: "11:40",
        description: "Continuaremos nuestro recorrido en bus panorámico y veremos los centros arqueológicos de Sacsayhuaman, Q’enqo y Puca pucara",
      },
      {
        time: "12:10",
        description: "Parada en el mirador hacia el centro arqueológico de Sacsayhuamán (Cristo blanco), lugar ideal para tomar fotos panorámicas de la ciudad",
      },
      {
        time: "12:30",
        description: "Retorno a la ciudad de Cusco donde lo dejaremos cerca de la plaza de armas.",
      },
    ],
    serviciosIncluidos: [
      "Recojo desde su hotel",
      "Bus panorámico compartido",
      "Guía compartido",
    ],
    noIncluidos: [
      "Alimentación",
    ],
    informacionUtil: [],
    recomendaciones: [
      "Usar bloqueador y gorra",
      "Usar ropa ligera y llevar una casaca",
      "Llevar dinero en soles y en efectivo",
      "Recojo desde hotel (Adicional de 10 soles por auto)",
    ],
  },
  {
    id: 3,
    slug: "cuarimotos-a-la-laguna-de-huaypo---tiobamba---checoq",
    destino: "Cusco",
    nombreDelTour: "CUARIMOTOS A LA LAGUNA DE HUAYPO - TIOBAMBA - CHECOQ",
    caracterDeTour: "Desde Cusco, 6 horas (por la mañana o tarde 13:00-19:00), Alimentación no incluida",
    precioAproximado: "34 USD",
    image: "Cusco/3-Laguna.jpg",
    itinerario: [
      {
        time: "07:00 - 07:30",
        description: "Lo recogeremos desde su hotel en nuestro transporte turístico",
      },
      {
        time: "08:30",
        description: "Llegamos a Cruzpata donde inicia nuestro tour en Cuatrimotos",
      },
      {
        time: "09:30 - 10:30",
        description: " Visita a la tranquila y hermosa Laguna de Huaypo",
      },
      {
        time: "10:30",
        description: "Recorrido en cuatrimotos alrededor de la capilla colonial de Tiobamba.",
      },
      {
        time: "11:30 - 12:30",
        description: "Visita al centro arqueológico de Checoq desde donde se tiene una hermosa vista de los nevados de Chicón y Verónica en cada una de estas paradas tendrá tiempo para tomarse fotos.  12:10 Retorno a Cruzpata donde tomaremos el transporte turístico de retorno ",
      },
      {
        time: "13:00",
        description: "Retorno a Cusco donde lo dejaremos cerca de la plaza de armas",
      },
    ],
    serviciosIncluidos: [
      "Transporte ida y retorno",
      "Guía Oficial",
      "Cuatrimotos",
      "Casco y guantes",
      "Botiquín de primeros auxilios",
    ],
    noIncluidos: [
      "Ingresos",
    ],
    informacionUtil: [],
    recomendaciones: [
      "Usar bloqueador, lentes de sol y gorra",
      "Usar ropa ligera y llevar una casaca",
      "Llevar dinero en soles y en efectivo.",
    ],
  },
  {
    id: 5,
    slug: "montaña-de-colores-en-cuatrimotos",
    destino: "Cusco",
    nombreDelTour: "MONTAÑA DE COLORES EN CUATRIMOTOS",
    caracterDeTour: "From Cusco, Full day Meal = 1 Breakfast, 1 Lunch included",
    precioAproximado: "90 USD",
    image: "Cusco/5-Cuatrimoto-Montaña-de-colores.jpg",
    itinerario: [
      {
        time: "03:30 - 04:00",
        description: "Recojo de su hotel en carro.",
      },
      {
        time: "06:30 - 07:30",
        description: "Llegada a Japur donde tendremos el desayuno y una breve instrucción del uso de los cuatrimotos.",
      },
      {
        time: "07:30 - 09:00",
        description: "Recorrido en cuatrimotos hasta el lugar llamado Qosqopata, estaremos rodeados de hermosos paisajes, llamas y alpacas.",
      },
      {
        time: "09:00 - 09:30",
        description: "Caminata hacia la montaña de colores",
      },
      {
        time: "09:30 - 10:30",
        description: "Visita guiada a la montaña de colores y tiempo para fotos.",
      },
      {
        time: "10:30 - 11:00",
        description: "Caminata de retorno hasta Qosqopata",
      },
      {
        time: "11:00 - 12:30",
        description: "cuatrimotos de retorno hacia Japur",
      },
      {
        time: "12:30 - 13:30",
        description: "Almuerzo",
      },
      {
        time: "13:30 - 16:00",
        description: "Viaje de retorno a Cusco donde lo dejaremos cerca de la plaza de armas",
      },
    ],
    serviciosIncluidos: [
      "Transporte ida y retorno",
      "Guía Oficial",
      "Cuatrimotos",
      "Casco y guantes",
      "Botiquín de primeros auxilios",
    ],
    noIncluidos: [
      "Ingresos (montaña de colores 10 soles)",
    ],
    informacionUtil: [],
    recomendaciones: [
      "Usar bloqueador, lentes de sol, gorra y llevar poncho de lluvia",
      "Usar zapatillas cómodas para caminar",
      "Usar ropa ligera y llevar una casaca",
      "Llevar dinero en soles y en efectivo.",
    ],
  },
  {
    id: 6,
    slug: "montaña-de-colores",
    destino: "Cusco",
    nombreDelTour: "MONTAÑA DE COLORES",
    caracterDeTour: "From Cusco, Full Day Meal = Breakfast, Lunch",
    precioAproximado: "50 USD",
    image: "Cusco/6-Montaña-de-colores-2.jpg",
    itinerario: [
      {
        time: "4:00-5:00",
        description: "Recojo desde hoteles de Centro Historico de Cusco​",
      },
      {
        time: "8:00",
        description: "Desayuno continental​",
      },
      {
        time: "9:00",
        description: "Partida de Caminata",
      },
      {
        time: "11:00",
        description: "Llegamos a mirador, frente de la montaña de colores",
      },
      {
        time: "11:30",
        description: "Tomando foto, retornamos",
      },
      {
        time: "13:00",
        description: "Llegamos al punto de partida",
      },
      {
        time: "14:00",
        description: "Almuerzo buffet en la restaurante",
      },
      {
        time: "17:00-18:00",
        description: "Llegamos a Centro de Cusco",
      },
    ],
    serviciosIncluidos: [
      "Transporte compartido Cusco - Montaña de Colores",
      "Guia Oficial",
      "Desayuno Continental, Almuerzo buffet",
      "Bastón para caminata",
      "Botequín de primeros auxilios",
      "Ingreso",
    ],
    noIncluidos: [
      "Snack",
      "Servicio de Caballo.",
    ],
    informacionUtil: [],
    recomendaciones: [
      "Usar zapatos para caminata.",
      "Llevar poncho de plástico, bloqueador, lentes de sol y gorra.",
      "Usar ropa abrigadora y también ligera.",
      "Llevar dinero en soles y en efectivo.",
    ],
  },
  {
    id: 7,
    slug: "clase-de-cocina-cusco",
    destino: "Cusco",
    nombreDelTour: "CLASE DE COCINA CUSCO",
    caracterDeTour: "Desde Cusco, 4 hrs, Bebida, comida, postre",
    precioAproximado: "93 USD",
    image: "Cusco/7-Clase-de-cocina-Cusco.jpg",
    itinerario: [
      {
        time: "08:45",
        description: "Recojo de su hotel por la mañana o tarde de acuerdo con su elección, (tenemos también otro horario por la tarde a las 13:00)",
      },
      {
        time: "09:00 - 10:00",
        description: "Recorrido guiado al mercado de San Pedro, en este colorido mercado podrá encontrar frutas extrañas que quizá nunca ha probado, además de variedad de papas nativas y maíces de colores entre otros. Es un lugar que tiene mucha cultura viva.",
      },
      {
        time: "11:00 - 13:00",
        description: "Nos dirigiremos al local donde realizaremos la clase de cocina. Lo primero que prepararemos es una bebida típica del Perú, seguidamente unos aperitivos, un plato de fondo y finalmente un postre. también tendremos la oportunidad de probar frutas raras que crecen en nuestro país.",
      },
      {
        time: "13:00",
        description: "Fin del servicio. Nuestro local está a 2 cuadras de la plaza de armas.",
      },
    ],
    serviciosIncluidos: [
      "Chef profesional",
      "Todos los ingredientes",
      "Pisco SourAperitivos",
      "Plato de fondo",
      "Postre",
    ],
    noIncluidos: [
      "Bebidas alcohólicas",
      "Transporte de retorno a su hotel",
      "Propinas",
    ],
    informacionUtil: [
      "Es un tour compartido. Desde 2 Participantes se opera. Caso contrario se tiene que pagar el monto adicional para poder operar el tour.",
    ],
    recomendaciones: [
      "Indicarnos si tienen alguna restricción alimentaria (Alergia)",
    ],
  },
  {
    id: 10,
    slug: "valle-sagrado-fd-compartido",
    destino: "Cusco",
    nombreDelTour: "VALLE SAGRADO FD COMPARTIDO",
    caracterDeTour: "From Cusco, Full Day Meal = No included",
    precioAproximado: "24 USD",
    image: "Cusco/10-Valle-sagrado-FD-1.jpg",
    itinerario: [
      {
        time: "08:00 - 08:30",
        description: "Recojo de su hotel.",
      },
      {
        time: "09:30 - 11:30",
        description: "Visita guiada al centro arqueológico de Pisac y su mercado artesanal.",
      },
      {
        time: "13:00 - 14:20",
        description: "Almuerzo buffet en restaurante turístico.",
      },
      {
        time: "15:00 - 16:00",
        description: "Recorrido guiado por el centro arqueológico de Ollantaytambo.",
      },
      {
        time: "16:40",
        description: "Visita al Centro Arqueológico de Chinchero podrá apreciar demostración de su arte textil.",
      },
      {
        time: "18:00",
        description: "llegada Cusco donde lo dejaremos cerca de la plaza de armas.",
      },
    ],
    serviciosIncluidos: [
      "Transporte turístico compartido",
      "Guía Oficial",
    ],
    noIncluidos: [
      "Ingreso (70 soles)",
      "Otros Alimentos no mencionados",
    ],
    informacionUtil: [],
    recomendaciones: [
      "Usar Bloqueador solar, lentes de sol y gorra.",
      "Usar ropa ligera y llevar una casaca",
      "Adicional Almuerzo",
      "Almuerzo opcional.. Clase A - 60 soles por persona, Clase B - 35 soles por persona",
    ],
  },
  {
    id: 11,
    slug: "kayak-en-la-laguna-de-huaypo",
    destino: "Cusco",
    nombreDelTour: "KAYAK EN LA LAGUNA DE HUAYPO",
    caracterDeTour: "From Cusco, Half day, Meal = No included",
    precioAproximado: "49 USD",
    image: "Cusco/0-Cusco-General.jpg",
    itinerario: [
      {
        time: "09:00 - 09:30",
        description: "Recojo de su hotel del centro de la ciudad.",
      },
      {
        time: "09:30 - 10:40",
        description: "Viaje hacia la laguna de Huaypo, en el camino se podrá ver campos de cultivo y a pobladores realizando sus actividades diarias.",
      },
      {
        time: "10:40 - 12:40",
        description: "Llegaremos a la laguna de Huaypo, tendremos una pequeña charla para realizar la actividad de Kayaking. Ingresaremos al lago, este paseo en Kayak está acompañado de la belleza del paisaje y la tranquilidad, además, podremos ver aves endémicas y pobladores locales pescando de forma artesanal.",
      },
      {
        time: "13:40",
        description: "Retorno a Cusco donde lo dejaremos cerca de la plaza de armas.",
      },
    ],
    serviciosIncluidos: [
      "Transporte",
      "Guías profesionales",
      "Kayak",
      "Spray Skirt",
      "Chaqueta corta viento",
      "Chalecos salvavidas, casco y Remos",
    ],
    noIncluidos: [
      "CDs de fotos",
      "Botella de agua",
      "Zapatos de río.",
    ],
    informacionUtil: [],
    recomendaciones: [
      "Debe traer sandalias o botas para el rio, ropa de baño, toalla y ropa extra para después del rio.",
      "Usar bloqueador y repelente, gorra para el sol-",
    ],
  },
  {
    id: 12,
    slug: "city-tour-en-cusco",
    destino: "Cusco",
    nombreDelTour: "CITY TOUR EN CUSCO",
    caracterDeTour: "From Cusco, Half Day Meal = No included",
    precioAproximado: "14 USD",
    image: "Cusco/12-Cusco-City-tour-catedral.jpg",
    itinerario: [
      {
        time: "13:00 - 13:40",
        description: "Recojo desde su hotel.",
      },
      {
        time: "02:00 - 15:00",
        description: "Visita al Qoricancha o Templo del Sol.",
      },
      {
        time: "15:00 - 18:30",
        description: "Recorrido por los principales centros arqueológicos de Sacsayhuaman (construida con piedras ciclópeas), Qenqo, Puca Pucara, Tambomachay",
      },
      {
        time: "18:30",
        description: "Retorno a Cusco donde nos dejaremos cerca de la plaza de armas.",
      },
    ],
    serviciosIncluidos: [
      "Transporte turístico compartido",
      "Guía Oficial",
    ],
    noIncluidos: [
      "Ingreso (70 soles + 15 soles)",
      "Alimentos",
    ],
    informacionUtil: [],
    recomendaciones: [
      "Usar Bloqueador solar, lentes de sol y gorra.",
      "Usar ropa ligera y llevar una casaca",
    ],
  },
  {
    id: 13,
    slug: "laguna humantay",
    destino: "Cusco",
    nombreDelTour: "LAGUNA HUMANTAY",
    caracterDeTour: "From Cusco, Full Day Meal = Breakfast, Lunch",
    precioAproximado: "40 USD",
    image: "Cusco/13-Lago-Humantay-1.jpg",
    itinerario: [
      {
        time: "04:30 - 05:10",
        description: "Recojo de su hotel",
      },
      {
        time: "05:10 - 07:30",
        description: "Viaje de Cusco a Mollepata (2,900 m.s.n.m.)",
      },
      {
        time: "07:30 - 08:30",
        description: "Desayuno buffet.",
      },
      {
        time: "09:00",
        description: "inicio de la caminata",
      },
      {
        time: "10:30",
        description: "Llegada a la Laguna Humantay (4,200 m.s.n.m.) observaremos el color turqués y los nevados de Humantay y Salkantay. Aquí tendremos un descanso y se podrán tomar fotos",
      },
      {
        time: "12:30 - 13:30",
        description: "Retorno a nuestro transporte.",
      },
      {
        time: "13:30 - 14:30",
        description: "Almuerzo buffet.",
      },
      {
        time: "14:30 - 17:00",
        description: "Viaje de retorno a Cusco donde lo dejaremos cerca de la plaza de armas.",
      },
    ],
    serviciosIncluidos: [
      "Transporte turístico compartido",
      "Guía Oficial",
      "Desayuno y almuerzo",
      "Ingresos",
      "Bastones de trekking, Mantas.",
      "Oxígeno y botiquín de primeros auxilios.",
      "Radios de comunicación.",
    ],
    noIncluidos: [
      "Snack",
      "Caballos (ida y/o vuelta)",
    ],
    informacionUtil: [
      "Tiempo de caminata: 3 horas y 30 minutos aprox. (ida y vuelta).",
      "Nivel de caminata: Difícil.",
      "Clima: Frío y lluvioso.",
      "Altura máxima: 4,200 M.S.N.M. / 13,779.53 pies.",
    ],
    recomendaciones: [
      "Usar zapatos adecuados para caminar.",
      "Usar poncho de plástico, bloqueador, lentes de sol y gorra.",
      "Llevar ropa que abrigue (en capas).",
      "Llevar dinero extra en soles.",
      "Está prohibido ingresar a la laguna.",
      "No apto para niños, mujeres embarazadas, ancianos y personas con problemas de salud.",
    ],
  },
  {
    id: 14,
    slug: "cuatrimotos-en-maras-y-moray",
    destino: "Cusco",
    nombreDelTour: "CUATRIMOTOS EN MARAS Y MORAY",
    caracterDeTour: "From Cusco, Half Day Meal = No included",
    precioAproximado: "34 USD",
    image: "Cusco/14-Moray.jpg",
    itinerario: [
      {
        time: "08:00 - 09:00",
        description: "Recojo desde su hotel desde el centro de la ciudad",
      },
      {
        time: "10:00 - 11:00",
        description: "Recorrido en cuatrimoto a las salineras de Maras, un conjunto de más de 3000 pozos de sal.",
      },
      {
        time: "11:00 - 12:00",
        description: "Visita en cuatrimotos al centro arqueológico de Moray con sus andenes circulares utilizados para experimentos agrícolas durante la época de los incas.",
      },
      {
        time: "13:00",
        description: "retorno a Cusco donde lo dejaremos cerca de la plaza de armas.",
      },
    ],
    serviciosIncluidos: [
      "Traslados desde y hacia su hotel en servicio compartido",
      "Guía profesional",
      "Quad bike ATV",
      "Casco y guantes",
    ],
    noIncluidos: [
      "ingresos (70 soles + 10 soles)",
      "Alimentación",
    ],
    informacionUtil: [],
    recomendaciones: [
      "Usar bloqueador y gorra.",
      "Llevar dinero en soles y en efectivo.",
    ],
  },
  {
    id: 15,
    slug: "puente-de-qeswachaka-y-4-lagunas",
    destino: "Cusco",
    nombreDelTour: "PUENTE DE Q'ESWACHAKA Y 4 LAGUNAS",
    caracterDeTour: "From Cusco, Full Day, Meal = Breakfast, Lunch",
    precioAproximado: "53 USD",
    image: "Cusco/15-puente-de-queswachaca.jpg",
    itinerario: [
      {
        time: "4:00 - 5:00",
        description: "Recojo desde hoteles de Centro Historico de Cusco 05:30 Desayuno buffet",
      },
      {
        time: "07:20 - 10:30",
        description: "Visita a las laguna de Pomacanchi, Acopia, Asnaqocha y Pampamarca donde podremos observar aves andinas y aves migratorias.",
      },
      {
        time: "11:00",
        description: "Visita al último puente inca Q’eswachaca, Tendrá tiempo para tomarse fotos",
      },
      {
        time: "14:00",
        description: "Almuerzo buffet",
      },
      {
        time: "16:30 - 17:00",
        description: "Llegada a Cusco donde lo dejaremos cerca de la plaza de armas.",
      },
    ],
    serviciosIncluidos: [
      "Transporte ida y retorno compartido",
      "Guía profesional.",
      "Ingresos",
      "Desayuno y Almuerzo buffet.",
      "Bastones de caminata",
      "Oxígeno.",
      "Botiquín de primeros auxilios",
    ],
    noIncluidos: [
      "Snack",
    ],
    informacionUtil: [],
    recomendaciones: [
      "Llevar poncho de plástico, bloqueador, lentes de sol y gorra.",
      "Usar ropa abrigadora y también ligera.",
      "Llevar dinero en soles y en efectivo.",
    ],
  },
  {
    id: 16,
    slug: "waqrapukara",
    destino: "Cusco",
    nombreDelTour: "WAQRAPUKARA",
    caracterDeTour: "From Cusco, full day, Meal = Breakfast, Lunch",
    precioAproximado: "53 USD",
    image: "Cusco/16-Waqrapukara.jpg",
    itinerario: [
      {
        time: "4:00 - 4:30",
        description: "Recojo desde su hotel del centro de Cusco",
      },
      {
        time: "06:00",
        description: "Desayuno buffet.",
      },
      {
        time: "08:00",
        description: "Inicio de caminata",
      },
      {
        time: "9:30",
        description: "Llegaremos a Waqrapukara que significa cuerno rojo debido a la forma de este centro arqueológico. Tendrá tiempo para tomarse fotos.",
      },
      {
        time: "13:00",
        description: "Almuerzo frente a la gran fortaleza de Waqrapukara,",
      },
      {
        time: "14:00",
        description: "Caminata de Retorno al lugar donde dejamos el transporte.",
      },
      {
        time: "15:30",
        description: "Retorno a Cusco",
      },
      {
        time: "17:00 - 18:00",
        description: "Llegada a Cusco donde lo dejaremos cerca de la plaza de armas.",
      },
    ],
    serviciosIncluidos: [
      "Transporte ida y retorno compartido",
      "Guia Oficial",
      "Desayuno buffet",
      "Almuerzo",
      "Bastón para caminata y mantas",
      "Botiquín de primeros auxilios",
      "Ingreso",
    ],
    noIncluidos: [
      "Snack",
    ],
    informacionUtil: [],
    recomendaciones: [
      "Usar zapatos para caminata.",
      "Llevar poncho de plástico, bloqueador, lentes de sol y gorra.",
      "Usar ropa abrigadora y también ligera.",
      "Llevar dinero en soles y en efectivo.",
    ],
  },
  {
    id: 17,
    slug: "salineras-de-maras-and-moray",
    destino: "Cusco",
    nombreDelTour: "SALINERAS DE MARAS & MORAY",
    caracterDeTour: "Desde Cusco Half Day Meal = No Included",
    precioAproximado: "19 USD",
    image: "Cusco/17-Maras.jpg",
    itinerario: [
      {
        time: "08:30 - 09:00",
        description: "Lo recogeremos de su hotel en Cusco.",
      },
      {
        time: "10:00",
        description: "Llegaremos al poblado de Chinchero donde podremos apreciar la demostración de las técnicas de tejidos y la textilería tradicional.",
      },
      {
        time: "11:00",
        description: "Visitaremos las minas de sal de Maras que consta de 3000 pozos pequeños de sal aproximadamente.",
      },
      {
        time: "12:00",
        description: "Finalmente visitaremos Moray que en tiempo de los incas fue un centro de investigación agrícola incaico donde se llevaron a cabo experimentos de cultivos a diferentes temperaturas.",
      },
      {
        time: "14:00",
        description: "Retornaremos a la ciudad de Cusco donde lo dejaremos cerca de la plaza de armas.",
      },
    ],
    serviciosIncluidos: [
      "Transporte turístico compartido",
      "Guía Oficial",
    ],
    noIncluidos: [
      "Ingreso (80 soles) *Si habia comprado boleto turístico, solo 10 soles",
      "Alimentos",
    ],
    informacionUtil: [],
    recomendaciones: [
      "Usar Bloqueador solar, lentes de sol y gorra.",
      "Usar ropa ligera y llevar una casaca",
    ],
  },
  {
    id: 18,
    slug: "bus-cusco---puno-con-guiado-(ruta-del-sol)",
    destino: "Cusco",
    nombreDelTour: "BUS CUSCO - PUNO CON GUIADO (RUTA DEL SOL)",
    caracterDeTour: "Desde Cusco, full day, Almuerzo",
    precioAproximado: "64 USD",
    image: "Cusco/0-Cusco-General.jpg",
    itinerario: [
      {
        time: "06:50",
        description: "Recojo en transporte privado desde su hotel hacia la estación de",
      },
      {
        time: "07:30",
        description: "Partida del bus de Cusco a Puno",
      },
      {
        time: "08:50 - 09:30",
        description: "Visita a la capilla de Andahuaylillas conocida como la capilla Sixtina de los andes por tener unos hermosos murales, altares completamente decorados en oro y pinturas del siglo 16 al 18.",
      },
      {
        time: "10:50 - 11:30",
        description: "Visita a centro arqueológico de Raqcchi conocido como el Templo de Wiracocha, el dios más importante de los incas.",
      },
      {
        time: "11:45 - 12:30",
        description: "Almuerzo buffet",
      },
      {
        time: "13:10 - 13:20",
        description: "Parada en el paso de la Raya, el punto más alto de nuestro viaje (4,335 m.s.n.m.) que se encuentra en la frontera de Cusco y Puno.",
      },
      {
        time: "14:30 - 15:00",
        description: "Visita al museo lítico de Pukara",
      },
      {
        time: "17:00",
        description: "Llegaremos a Puno",
      },
    ],
    serviciosIncluidos: [
      "Guía profesional",
      "Almuerzo buffet",
      "Transporte en bus moderno con asientos confortables reclinables.",
      "Oxígeno y botiquín de primeros auxilios",
      "Aire acondicionado",
      "Calefacción.",
      "Servicio de WI-FI gratuito a bordo (sólo en zonas con señal de internet).",
    ],
    noIncluidos: [
      "Ingresos (Andahuaylillas S/ 15.00, Raqchi S/20.00, Pukara S/ 15.00)",
      "Alimentos no mencionados",
      "Traslados desde o hacia su hotel",
    ],
    informacionUtil: [],
    recomendaciones: [
      "Usar bloqueador, lentes de sol y gorra.",
      "Usar ropa abrigadora y también ligera.",
      "Llevar dinero en soles y en efectivo.",
    ],
  },
  {
    id: 19,
    slug: "tumbas-de-sillustani",
    destino: "Puno",
    nombreDelTour: "TUMBAS DE SILLUSTANI",
    caracterDeTour: "From Puno, 4 hours, Meal = No included",
    precioAproximado: "24 USD",
    image: "Puno/1-Tumbes-de-sillustani-1.jpg",
    itinerario: [
      {
        time: "14:00",
        description: "Recojo de su hotel desde el centro de Puno en bus.",
      },
      {
        time: "14:50 - 17:00",
        description: "Llegamos a Sillustani donde visitaremos tumbas en forma de torre hechas de piedras gigantes",
      },
      {
        time: "16:00 - 17:00",
        description: "Haremos una parada en una casa local para render de la vida diaria de los pobladores. Tendremos también una vista hermosa del lago Umayo.",
      },
      {
        time: "17:30",
        description: "Retorno a Puno donde lo dejaremos en su hotel.",
      },
    ],
    serviciosIncluidos: [
      "Guía profesional en servicio compartido",
      "Ingresos",
      "Transporte turístico compartido",
    ],
    noIncluidos: [
      "Alimentos",
      "Propinas a los pobladores locales",
    ],
    informacionUtil: [],
    recomendaciones: [
      "Usar bloqueador, lentes de sol y gorra.",
      "Usar ropa abrigadora y también ligera.",
      "Llevar dinero en soles y en efectivo.",
    ],
  },
  {
    id: 20,
    slug: "islas-uros-y-taquile",
    destino: "Puno",
    nombreDelTour: "ISLAS UROS Y TAQUILE",
    caracterDeTour: "Desde Puno, 9 hours, Meal = Only Lunch",
    precioAproximado: "43 USD",
    image: "Puno/2-Isla-Uros-1.jpg",
    itinerario: [
      {
        time: "06:30 - 07:30",
        description: "Recojo desde su hotel del centro de Puno",
      },
      {
        time: "08:00",
        description: "Embarcaremos en una lancha hacia las islas flotantes de Uros hechas enteramente de totora, una planta que crece en el lago",
      },
      {
        time: "09:00",
        description: "Visita a la isla natural de Taquile, conocida por su textilería que es considerada Patrimonio Cultural de la Humanidad por la UNESCO. Aquí los hombres aprenden a tejer desde niños",
      },
      {
        time: "13:00",
        description: "Almuerzo típico de este lugar con insumos propios de la isla",
      },
      {
        time: "15:30",
        description: "Retorno a Puno",
      },
    ],
    serviciosIncluidos: [
      "Ingresos",
      "Guía profesional",
      "Transporte ida y retorno desde hoteles del centro de Puno en compartido",
      "Lancha o barco veloz",
      "Almuerzo",
    ],
    noIncluidos: [
      "Snack",
    ],
    informacionUtil: [],
    recomendaciones: [
      "Llevar bloqueador, lentes de sol y gorra.",
      "Usar ropa abrigadora y también ligera.",
      "Llevar dinero en soles y en efectivo.",
    ],
  },
  {
    id: 21,
    slug: "clases-de-cocina-lima-con-una-familia-local",
    destino: "Lima",
    nombreDelTour: "CLASES DE COCINA LIMA CON UNA FAMILIA LOCAL",
    caracterDeTour: "Desde Lima, 4 hrs, Lunch included (1 entrada, 1 plato principal, Pisco sour y refresco)",
    precioAproximado: "70 USD",
    image: "Lima/0-Lima-general.jpg",
    itinerario: [
      {
        time: "10:00",
        description: "Recojo de su hotel por la mañana o tarde de acuerdo con su elección.",
      },
      {
        time: "10:30 - 11:00",
        description: "Recorrido guiado en un mercado local donde apreciara la variedad de frutas, vegetales y otros productos de la costa, sierra y selva de Perú que quizás no vio en otro lugar.",
      },
      {
        time: "11:20 - 13:30",
        description: "Nos dirigiremos a un apartamento con vistas al mar donde junto a una familia local tendrá la experiencia de preparar comida peruana además del famoso pisco sour. Tenemos varias opciones para su elección.",
      },
      {
        time: "14:00",
        description: "Retorno a su hotel",
      },
    ],
    serviciosIncluidos: [
      "Chef profesional",
      "Todos los ingredientes",
      "Pisco Sour",
      "01 Aperitivo",
      "01 Plato de fondo",
      "Botella de agua y chicha morada",
    ],
    noIncluidos: [
      "Propinas",
    ],
    informacionUtil: [],
    recomendaciones: [
      "Indíquenos si tiene alguna restricción alimenticia",
      "Estas son nuestras opciones que usted puede elegir como aperitivo y plato principal:",
      "Entrada:",
      " - Papa a la Huancaina (papas cubiertas con salsa de crema peruana)",
      " - Ceviche (Mariscos en jugo de limón)",
      " - Causa rellena (puré de papas con limón relleno de aguacate, pollo, mayonesa)",
      "Platos principales:",
      " - Lomo saltado (carne de res salteada con salsa de soya junto con cebollas, y tomates, se sirve con patatas fritas y arroz)",
      " - Arroz con Pollo (el arroz tiene un color verde por el cilantro)",
      " - Ají de gallina (pollo deshilachado mezclado con una salsa a base de chile amarillo, leche y pan, se sirve acompañado de arroz)",
      "Bebidas:",
      " - Chicha Morada (refresco a base de maíz morado, canela, limón)",
      "- Pisco Sour (bebida alcohólica a base de pisco, limón, clara de huevo)",
      "También tenemos una opción vegetariana",
    ],
  },
  {
    id: 22,
    slug: "city-tour-de-noche---circuito-de-aguas-y-barranco",
    destino: "Lima",
    nombreDelTour: "CITY TOUR DE NOCHE - CIRCUITO DE AGUAS Y BARRANCO",
    caracterDeTour: "Desde Lima, 3 - 4 hrs. Aprox no incluye",
    precioAproximado: "52 USD",
    image: "Lima/2-6-1.jpg",
    itinerario: [
      {
        time: "17:30",
        description: "Recojo de su hotel en auto",
      },
      {
        time: "18:00 - 18:40",
        description: "Visita al centro histórico de Lima donde veremos el palacio de gobierno, la catedral de Lima, el palacio arzobispal entre otros.",
      },
      {
        time: "19:00 - 20:00",
        description: "Visita al mágico circuito de las aguas, que tiene un espectáculo de grandes fuentes de agua, iluminadas con luces láser y música.",
      },
      {
        time: "20:20 - 20:50",
        description: "Visita al distrito de barranco, lleno de arte y música, combinando lo tradicional con lo moderno, aquí podrá observar hermosos murales y sitios artísticos y “el puente de los suspiros”.",
      },
      {
        time: "21:20",
        description: "Retorno a su hotel",
      },
    ],
    serviciosIncluidos: [
      "Transporte turístico",
      "Guía profesional",
      "ingresos",
    ],
    noIncluidos: [
      "Alimentación",
    ],
    informacionUtil: [],
    recomendaciones: [
      "Llevar una muda de ropa por si se moja en el circuito de las aguas",
      "Tomar en cuenta que el circuito de las aguas está cerrado los lunes",
    ],
  },
  {
    id: 23,
    slug: "fd-islas-ballestas-+-huacachina",
    destino: "Lima",
    nombreDelTour: "FD ISLAS BALLESTAS + HUACACHINA",
    caracterDeTour: "Desde Lima, Full Day, no incluye",
    precioAproximado: "105 USD",
    image: "Lima/0-Lima-general.jpg",
    itinerario: [
      {
        time: "04:30 - 05:00",
        description: "Recojo desde su hotel",
      },
      {
        time: "08:00",
        description: "Llegada a Paracas donde nos embarcamos en un bote para visitar las islas ballestas. Podrá observar a los lobos marinos y los pingüinos de Humboldt viviendo en hermosas formaciones rocosas.",
      },
      {
        time: "10:30",
        description: "Visita a una bodega artesanal donde aprenderá el proceso de la elaboración del vino peruano y degustarán vinos y pisco peruanos.",
      },
      {
        time: "12:00",
        description: "Almuerzo",
      },
      {
        time: "14:00",
        description: "Visita al oasis de la Huacachina y paseo en buggy (carro arenero) en las dunas del desierto de Ica.",
      },
      {
        time: "21:00",
        description: "Retorno a Lima donde lo dejaremos en su hotel",
      },
    ],
    serviciosIncluidos: [
      "Transporte turístico",
      "Guía profesional",
      "Paseo en bote en las islas ballestas",
      "Sandboard y Buggy por las Dunas de Ica",
      "Degustación de vinos y pisco",
    ],
    noIncluidos: [
      "Almuerzo",
      "Ingresos e impuestos (impuestos en las Islas Ballesta (4.5 USD) y Buggy & Sandboarding (1.5 USD)",
    ],
    informacionUtil: [],
    recomendaciones: [
      "No es recomendable para embarazadas",
      "Utilizar bloqueador solar y gorra",
      "Usa ropa ligera y llevar una casaca",
    ],
  },
  {
    id: 24,
    slug: "fd-sobrevuelo-lineas-de-nazca-y-huacachina-desde-lima",
    destino: "Lima",
    nombreDelTour: "FD SOBREVUELO LINEAS DE NAZCA Y HUACACHINA DESDE LIMA",
    caracterDeTour: "From Lima, Full day, Snack & Lunch Included",
    precioAproximado: "368 USD",
    image: "Lima/0-Lima-general.jpg",
    itinerario: [
      {
        time: "05:30 - 06:30",
        description: "Recojo de su hotel para dirigirnos hacia Ica",
      },
      {
        time: "10:30",
        description: "Arribo a Ica",
      },
      {
        time: "xx:xx",
        description: "Sobrevuelo líneas de Nasca, este dura 70 minutos, la hora se confirma ya estando en el aeródromo. Aquí podrá observar diversas figuras como ballena, trapezoides, astronauta, mono, perro, colibrí",
      },
      {
        time: "13:00",
        description: "Almuerzo",
      },
      {
        time: "14:00 - 16:00",
        description: "Visita a la laguna de la Huacachina",
      },
      {
        time: "21:30",
        description: "Retorno a Lima",
      },
    ],
    serviciosIncluidos: [
      "Recojo desde su Hotel de lugares céntricos (Miraflores, San Isidro, San Borja)",
      "Transporte Lima – Ica ida y retorno",
      "Guía profesional",
      "Snack a bordo",
      "Sobrevuelo Líneas de Nazca desde Ica",
      "Impuestos y tasas aeroportuarias",
      "Almuerzo",
      "Excursión Laguna de la Huacachina",
      "Certificado de vuelo",
    ],
    noIncluidos: [
      "Paseo en carros areneros",
      "Alojamiento",
    ],
    informacionUtil: [],
    recomendaciones: [
      "Usar ropa ligera pero siempre llevar una casaca",
      "Usar bloqueador solar, gorra",
      "No olvidar Pasaporte (Si olvida no puede participar al sobrevuelo)",
    ],
  },
  {
    id: 25,
    slug: "hd-city-tour-moderno-y-colonial-de-lima",
    destino: "Lima",
    nombreDelTour: "HD CITY TOUR MODERNO Y COLONIAL DE LIMA",
    caracterDeTour: "From Lima, 6 horas aprox, Meal = No included",
    precioAproximado: "46 USD",
    image: "Lima/0-Lima-general.jpg",
    itinerario: [
      {
        time: "06:50:00 - 08:40",
        description: "Recojo de su hotel",
      },
      {
        time: "09:30",
        description: "Vista panorámica del centro arqueológico de Huaca Pucllana que tiene una gran pirámide de adobe y arcilla.",
      },
      {
        time: "10:00",
        description: "Visita al centro histórico de Lima donde veremos el palacio de gobierno, la catedral de Lima, el palacio arzobispal entre otros.",
      },
      {
        time: "11:00",
        description: "Visita al convento de San Francisco y sus catacumbas subterráneas.",
      },
      {
        time: "11:30",
        description: "Visita al “Parque Del Olivar” con sus olivos con al menos quinientos años de antigüedad. Podrá ver maquinarias antiguas utilizadas en la producción de aceite de oliva.",
      },
      {
        time: "12:00",
        description: "Visita a “El Parque del Amor” con vistas al Océano Pacífico.",
      },
      {
        time: "12:30",
        description: "Tiempo para almorzar",
      },
      {
        time: "13:30",
        description: "Visita al barrio de Barranco, con sus hermosos murales y sitios artísticos y “el puente de los suspiros”.",
      },
      {
        time: "14:00",
        description: "Lo estaremos dejando en su hotel",
      },
    ],
    serviciosIncluidos: [
      "Transporte turístico con aire acondicionado",
      "Guía profesional",
      "ingreso al convento de San Francisco",
    ],
    noIncluidos: [
      "Alimentación",
    ],
    informacionUtil: [],
    recomendaciones: [
      "Usar bloqueador y gorra.",
      "Usar ropa abrigadora y ligera de acuerdo con la estación del año.",
      "Usar Zapatos cómodos",
    ],
  },
  {
    id: 26,
    slug: "city-tour-de-noche-+-circuito-de-aguas-+-cena-show-(show-solo-en-viernes)",
    destino: "Lima",
    nombreDelTour: "CITY TOUR DE NOCHE + CIRCUITO DE AGUAS + CENA SHOW (SHOW SOLO EN VIERNES)",
    caracterDeTour: "From Lima 6hrs Cena",
    precioAproximado: "80 USD",
    image: "Lima/2-6-1.jpg",
    itinerario: [
      {
        time: "15:50 - 17:40",
        description: "Recojo desde su hotel.",
      },
      {
        time: "18:00 - 18:30",
        description: "Visita al centro histórico de Lima donde veremos el palacio de gobierno, la catedral de Lima, el palacio arzobispal entre otros.",
      },
      {
        time: "19:00- 20:00",
        description: "Visita al mágico circuito de las aguas, que tiene un espectáculo de grandes fuentes de agua, iluminadas con luces láser y música.",
      },
      {
        time: "20:00 - 21:00",
        description: "Cena show con espectáculo de danzas típicas del perú",
      },
      {
        time: "22:00",
        description: "Retorno a su hotel",
      },
    ],
    serviciosIncluidos: [
      "Transporte turistico",
      "Guía profesional",
      "Ticket al circuito mágico del agua",
      "Cena show en restaurante turístico",
    ],
    noIncluidos: [
      "Alimentos no mencionados",
    ],
    informacionUtil: [],
    recomendaciones: [
      "Utilizar bloqueador solar y gorra y zapatos cómodos",
      "Usa ropa ligera y llevar una casaca",
      "Este tour con show está disponible sólo los viernes, los demás días sólo es cena sin show",
    ],
  },
  {
    id: 27,
    slug: "callao-historico",
    destino: "Lima",
    nombreDelTour: "CALLAO HISTORICO",
    caracterDeTour: "Desde Lima, 6 hrs., No incluye",
    precioAproximado: "59 USD",
    image: "Lima/0-Lima-general.jpg",
    itinerario: [
      {
        time: "07:00 - 08:20",
        description: "Recojo desde su hotel.",
      },
      {
        time: "09:00",
        description: "Visita a la Fortaleza Real Felipe (2 horas de visita)",
      },
      {
        time: "11:00",
        description: "Visita a la Plaza Grau. Ingresamos al Museo Naval y al Submarino Abtao",
      },
      {
        time: "13:00",
        description: "Retorno a su hotel.",
      },
    ],
    serviciosIncluidos: [
      "Transporte privado ida y vuelta",
      "Guía profesional",
      "Ticket de ingreso al Real Felipe, Museo Naval y Submarino Abtao",
      "Asistencia durante su viaje",
    ],
    noIncluidos: [
      "Alimentación",
    ],
    informacionUtil: [
      "Este tour sólo está disponible los sábados",
    ],
    recomendaciones: [
      "Utilizar bloqueador solar y gorra y zapatos cómodos",
      "Llevar la ropa adecuada de acuerdo a la estación en la que realice la visita",
      "Documentos personales",
      "Dinero en efectivo",
    ],
  },
  {
    id: 28,
    slug: "pachacamac-y-show-caballo-de-paso-(sólo-en-sábados)",
    destino: "Lima",
    nombreDelTour: "PACHACAMAC Y SHOW CABALLO DE PASO (SÓLO EN SÁBADOS)",
    caracterDeTour: "Desde Lima, 7 hrs., Only Lunch Included",
    precioAproximado: "105 USD",
    image: "Lima/0-Lima-general.jpg",
    itinerario: [
      {
        time: "08:40 - 09:50",
        description: "Recojo desde su hotel.",
      },
      {
        time: "10:50 - 12:00",
        description: "Visita al centro arqueológico de Pachacamac con sus interesantes templos y su museo de sitio.",
      },
      {
        time: "12:15 - 14:30",
        description: "Visita a una casa hacienda donde disfrutará un show de danzas típicas del Perú mientras saborea su delicioso almuerzo buffet.",
      },
      {
        time: "14:30 - 15:00",
        description: "Show de caballos de paso peruano, si desea puede realizar un pequeño paseo en caballos.",
      },
      {
        time: "16:00",
        description: "Retorno a su hotel.",
      },
    ],
    serviciosIncluidos: [
      "Transporte privado ida y vuelta",
      "Guía profesional",
      "Almuerzo buffet",
      "show de danzas típicas, Paseo a caballo, Caballos de paso",
      "Ticket de ingreso a Pachacamac",
    ],
    noIncluidos: [
      "Alimentos no mencionados",
    ],
    informacionUtil: [
      "Este tour sólo está disponible los sábados",
    ],
    recomendaciones: [
      "Utilizar bloqueador solar y gorra y zapatos cómodos",
      "Usa ropa ligera y llevar una casaca",
    ],
  },
  {
    id: 29,
    slug: "nado-con-lobos-marinos",
    destino: "Lima",
    nombreDelTour: "NADO CON LOBOS MARINOS",
    caracterDeTour: "Desde Lima, HD , Alimentos no incluidos",
    precioAproximado: "70 USD",
    image: "Lima/0-Lima-general.jpg",
    itinerario: [
      {
        time: "9:00",
        description: "Recogeremos de su hotel y nos dirigiremos hacia las islas palominos (9 islas rodeadas de fauna marina).",
      },
      {
        time: "10:00",
        description: "Abordaremos el bote, tendremos hermosos paisajes con colonias de aves y algunos pingüinos.",
      },
      {
        time: "11:00 - 11:20",
        description: "Ingresaremos al mar donde usted tendrá esta increíble experiencia de nadar con los lobos marinos en su hábitat natural, podrá tomarse fotos con ellos incluso podrá tocarlos mientras nadan a su alrededor.",
      },
      {
        time: "12:30",
        description: "Retorno a las orillas del mar",
      },
      {
        time: "13:30",
        description: "Retorno a su hotel",
      },
    ],
    serviciosIncluidos: [
      "Guía profesional",
      "Todos los impuestos y tasas de embarcación",
      "Chalecos salvavidas",
    ],
    noIncluidos: [
      "Traslados hacia el embarcadero ida y retorno",
      "Alimentación",
      "Ingresos",
      "Trajes de neopreno para natación",
    ],
    informacionUtil: [],
    recomendaciones: [
      "Llevar traje de baño, toalla, sombrero, protector solar, una muda de ropa, impermeables",
    ],
  },
  {
    id: 30,
    slug: "peru-4-dias---3-noches-(lima-cusco-mapi)",
    destino: "PAQUETE",
    nombreDelTour: "PERU 4 DIAS - 3 NOCHES (Lima-Cusco-Mapi)",
    caracterDeTour: "Desde Lima / 4Dias 3Noches /3 desayunos",
    precioAproximado: "Desde 906 USD por persona. Base de 2 personas en habitación doble de hotel básico",
    image: "PAQUETE/4dias-3noches.jpg",
    itinerario: [
      {
        time: "DIA 1: LLEGADA A LIMA",
        description: "xx:xx A su llegada a nuestro país lo estaremos esperando para darle la bienvenida y trasladarlo a su hotel. Alojamiento en Lima",
      },
      {
        time: "DIA 2:",
        description: "3 horas antes de su vuelo lo recogeremos de su hotel y lo llevaremos al aeropuerto para tomar su vuelo de Lima a Cusco. Al llegar a Cusco su guía y su conductor lo estarán esperando para trasladarlo a su hotel  donde tendrá un tiempo libre. Entre las 13:00 - 13:40 hrs. lo recogeremos de su hotel para el city tour donde visitará Qoricancha o Templo del Sol, centros arqueológicos de Sacsayhuaman, Qenqo, Puca Pucara, Tambomachay. El retorno a Cusco es a las  18:30hs. Alojamiento en Cusco",
      },
      {
        time: "DIA 3: CUSCO - MACHU PICCHU - CUSCO",
        description: "A las 04:00 hrs. lo recogemos de su hotel y lo trasladaremos  hacia la estación de tren en Ollantaytambo donde tomará el tren al pueblo de Machu Picchu, al llegar se encontrará con su guía, juntos tomarán el bus de subida a Machu Picchu, donde tendrá 2hs.30min. de tour guiado, después descenderá hasta la estación de tren para su viaje de retorno a Cusco donde llegará a las 22:40 hrs. Alojamiento en Cusco",
      },
      {
        time: "DIA 4: VUELO CUSCO - LIMA",
        description: "2 horas y media antes de la partida de su vuelo lo estaremos trasladando de su hotel al aeropuerto para su vuelo Cusco - Lima y conectar con su vuelo internacional.",
      },
    ],
    serviciosIncluidos: [
      "Transporte para traslados y tours",
      "Guía profesional",
      "Ingresos",
      "Tren turístico ida y retorno",
      "Bus de subida y bajada a Machu Picchu",
      "01 noches de alojamiento en Lima",
      "02 noches de alojamiento en Cusco",
      "03 desayunos",
      "Vuelos Lima - Cusco - Lima",
    ],
    noIncluidos: [
      "Alimentación no especificada",
      "Seguro de viaje",
    ],
    informacionUtil: [],
    recomendaciones: [
      "El primer día en Cusco evite hacer mucho esfuerzo físico como correr, coma ligero, tome mate de coca excepto en la noche, esto le ayudará a evitar los síntomas del mal de altura.",
      "Una vez que ingrese al centro arqueológico de Machu Picchu no podrá salir hasta terminar el tour por eso si desea comer o ir al baño hágalo antes de ingresar.",
      "Usar bloqueador y repelente, gorra para el sol",
      "El clima es cambiante por eso usar ropa ligera pero siempre llevar ropa para abrigarse",
      "No olvidar Pasaporte (Si olvida no puede ingresar a los parques arqueológicos ni subir al tren)",
    ],
  },
  {
    id: 31,
    slug: "peru-4-dias---3-noches-economico-(lima-cusco-mapi)",
    destino: "PAQUETE",
    nombreDelTour: "PERU 4 DIAS - 3 NOCHES ECONOMICO (Lima-Cusco-Mapi)",
    caracterDeTour: "Desde Lima, 4dias/3noches, 3 Desayunos incluidos",
    precioAproximado: "Desde 830 USD por persona.  Base de 2 personas en habitación doble de hotel básico",
    image: "PAQUETE/4dias-3noches-economico.jpg",
    itinerario: [
      {
        time: "DIA 1: LLEGADA A LIMA",
        description: "xx:xx A su llegada a nuestro país lo estaremos esperando para trasladarlo a su hotel. Alojamiento en Lima",
      },
      {
        time: "DIA 2: LIMA - CUSCO - MACHU PICCHU",
        description: "3 horas antes de su vuelo lo recogemos de su hotel y lo llevamos al aeropuerto para tomar su vuelo de Lima a Cusco. Al llegar a la ciudad de Cusco su guía y su conductor lo estarán esperando. Luego será trasladado  hacia la estación de tren en Ollantaytambo donde tomará el tren al pueblo de Machu Picchu, ahí un personal del hotel lo estará esperando. Alojamiento en Machu Picchu pueblo",
      },
      {
        time: "DIA 3: MACHU PICCHU - CUSCO",
        description: "06:30 - 7:00 Su guía lo recogerá de su hotel, luego tomarán el bus de subida a Machu Picchu, donde tendrá 2hs.30min. de tour guiado, después descenderá hasta la estación de tren para su viaje de retorno a Cusco donde llegará a las 22:40 hrs. Alojamiento en Cusco",
      },
      {
        time: "DIA 4: CUSCO - LIMA",
        description: "Dos horas y media antes de la partida de su vuelo lo estaremos trasladando de su hotel al aeropuerto para su vuelo Cusco - Lima y conectar con su vuelo internacional.",
      },
    ],
    serviciosIncluidos: [
      "Guía profesional",
      "Transporte para traslados y tours",
      "Ingresos",
      "Tren turístico ida y retorno",
      "Bus de subida y bajada a Machu Picchu",
      "01 noche de alojamiento en Lima",
      "01 noche de alojamiento en Machu Picchu",
      "01 noche de alojamiento en Cusco",
      "03 desayunos",
      "Vuelos Lima - Cusco - Lima",
    ],
    noIncluidos: [
      "Alimentación no especificada",
      "Seguro de viaje",
    ],
    informacionUtil: [],
    recomendaciones: [
      "Una vez que ingrese al centro arqueológico de Machu Picchu no podrá salir hasta terminar el tour por eso si desea comer o ir al baño hágalo antes de ingresar.",
      "Usar bloqueador y repelente, gorra para el sol.",
      "El clima es cambiante por eso use ropa ligera pero siempre llevar ropa para abrigarse.",
      "No olvidar Pasaporte (Si olvida no puede ingresar a los parques arqueológicos ni subir al tren)",
    ],
  },
  {
    id: 32,
    slug: "cuscopack-4-dias---3-noches-(sólo-cusco)",
    destino: "PAQUETE",
    nombreDelTour: "CUSCOPACK 4 DIAS - 3 NOCHES (Sólo Cusco)",
    caracterDeTour: "Desde Cusco, 4 dias/3 noches, 1 Cena, 1 almuerzo + 3 Desayunos incluidos",
    precioAproximado: "Desde 582 USD por persona.  Base de 2 personas en habitación doble de hotel básico",
    image: "PAQUETE/Cusco-pack.jpg",
    itinerario: [
      {
        time: "DÍA 1: ARRIBO A CUSCO",
        description: "xx:xx A su llegada a Cusco lo estaremos esperando para trasladarlo a su hotel. Luego tendrá tiempo libre. A las 16:00 hrs. lo recogeremos de su hotel para visitar el templo del Qoricancha, recorrido por calles con muros incas del Cusco, vista panorámica de toda la ciudad desde el mirador de San Cristóbal. Finalmente a las 18:30Hrs. tendrá una cena show y a las 21:30 lo dejaremos en su hotel. Alojamiento en Cusco",
      },
      {
        time: "DIA 2: CUSCO - MACHU PICCHU - CUSCO",
        description: "Salimos temprano desde su hotel de Cusco, nos dirigiremos hasta la estación de tren que queda a unas 2 horas desde Cusco. Luego subirá al tren, al llegar su guía lo estará esperando para su visita a Machu Picchu. Retorno a Cusco a a las 22:30hrs. Alojamiento en Cusco",
      },
      {
        time: "DIA 3: LAGUNA HUMANTAY",
        description: "Entre las 04:30 - 05:10 hrs. lo recogeremos de su hotel para la visita a esta hermosa laguna al pie de los nevados, el almuerzo está incluido. Estaremos retornando a su hotel a las 17:00hrs.",
      },
      {
        time: "DIA 4: LIMA - CUSCO",
        description: "Dos horas y media antes de la partida de su vuelo lo estaremos trasladando de su hotel al aeropuerto para su vuelo Cusco - Lima",
      },
    ],
    serviciosIncluidos: [
      "Guía profesional",
      "Transporte para traslados y tours",
      "Ingresos",
      "Tren turístico ida y retorno",
      "Bus de subida y bajada a Machu Picchu",
      "03 noches de alojamiento en Cusco",
      "03 desayunos",
      "01 almuerzo en laguna Humantay",
      "01 cena show en dia 1",
    ],
    noIncluidos: [
      "Vuelo Lima - Cusco - Lima",
      "Alimentación no especificada",
      "Seguro de viajes",
    ],
    informacionUtil: [],
    recomendaciones: [
      "Una vez que ingrese al centro arqueológico de Machu Picchu no podrá salir hasta terminar el tour, por eso si desea comer o ir al baño hágalo antes de ingresar.",
      "Usar bloqueador y repelente, gorra para el sol",
      "El clima es cambiante por eso use ropa ligera pero siempre llevar ropa para abrigarse",
      "El tour a la laguna Humantay tiene una caminata larga. Si en caso quiere otro tipo de tour tenemos otras alternativas que usted puede escoger.",
      "Siempre llevar sus pasaportes",
    ],
  },
  {
    id: 33,
    slug: "peru-8-dias---7-noches-(lima-cusco-mapi-puno)",
    destino: "PAQUETE",
    nombreDelTour: "PERU 8 DIAS - 7 NOCHES  (Lima-Cusco-Mapi-Puno)",
    caracterDeTour: "Desde Lima, 8 días / 7 noches, 7 Desayunos, 2 Almuerzos, 1 Cena incluidos",
    precioAproximado: "Desde 1340 USD por persona. Base de 2 personas en habitación doble de hotel básico.",
    image: "PAQUETE/8dias-7noches.jpg",
    itinerario: [
      {
        time: "DÍA 1: ARRIBO A LIMA",
        description: "xx:xx A su llegada a nuestro país lo estaremos esperando para darle la bienvenida y trasladarlo a su hotel. Alojamiento en Lima",
      },
      {
        time: "DIA 2: LIMA - REAL SAN FELIPE",
        description: "Entre las 07:00 - 08:20Hrs. lo recogeremos de su hotel para visitar la fortaleza Real Felipe , aquí tendrá 2 horas de visita, luego nos dirigiremos hacia la plaza Grau e ingresamos al Museo Naval donde conocerá sobre la marina de guerra del Perú y al Submarino Abtao que es un museo. Terminado este tour lo dejaremos en su hotel a las 13:00hrs Alojamiento en Lima",
      },
      {
        time: "DIA 3: LIMA- CUSCO CITY TOUR DE NOCHE",
        description: "3 horas antes de su vuelo lo recogeremos de su hotel y lo llevaremos al aeropuerto para tomar su vuelo de Lima a Cusco. Al llegar a Cusco su guía y su conductor lo estarán esperando para trasladarlo a su hotel  donde tendrá un tiempo libre. A las 16:00 hrs. lo recogeremos de su hotel para visitar el templo del Qoricancha, recorrido por calles con muros incas del Cusco, vista panorámica de toda la ciudad desde el mirador de San Cristóbal. Finalmente a las 18:30Hrs. tendrá una cena show y a las 21:30 lo dejaremos en su hotel. Alojamiento en Cusco",
      },
      {
        time: "DIA 4: CUSCO - MACHU PICCHU",
        description: "A las 08:00 hrs. lo recogemos de su hotel y lo trasladaremos  hacia la estación de tren en Ollantaytambo donde tomará el tren al pueblo de Machu Picchu, al llegar se encontrará con su guía, juntos tomarán el bus de subida a Machu Picchu, donde tendrá 2hs.30min. de tour guiado, después descenderá hasta el pueblo de Machu Picchu donde lo dejaremos en su hotel. Alojamiento en Machu Picchu pueblo",
      },
      {
        time: "DIA 5: MACHU PICCHU - CUSCO",
        description: "Entre las 06:30 - 7:00 hrs. su guía lo recogerá en el lobby de su hotel. juntos tomarán el bus de subida a Machu Picchu, donde tendrá 2hs.30min. de tour guiado compartido, después descenderá hasta la estación de tren para su viaje de retorno a Cusco donde llegará a las 22:40 hrs. Alojamiento en Cusco",
      },
      {
        time: "DIA 6: CUSCO - PUNO",
        description: "A las 06:50 hrs. lo recogeremos de su hotel en nuestro transporte privado para llevarlo a la estación de bus donde abordará el bus guiado hacia Puno. En el trayecto visitará la capilla de Andahuaylillas, centro arqueológico de Raqcchi y el museo lítico de Pukara. Este día el almuerzo está incluido. Llegará a Puno a las 17:00hrs. aquí le dejaremos en su hotel Alojamiento en Puno",
      },
      {
        time: "DIA 7: PUNO - ISLAS UROS TAQUILE",
        description: "Entre las 06:30 - 07:30 hrs. lo recogeremos de su hotel, luego embarcamos una lancha hacia las islas flotantes de Uros hechas enteramente de totora, seguidamente visitará  la isla natural de Taquile, conocida por su textilería.El almuerzo está incluido este día. Estaremos de retorno en Puno a las 15:30hrs. Alojamiento en Puno",
      },
      {
        time: "DIA 8: PUNO - JULIACA - LIMA",
        description: "Tres horas y media antes de la partida de su vuelo lo estaremos trasladando de su hotel al aeropuerto para su vuelo Juliaca - Lima",
      },
    ],
    serviciosIncluidos: [
      "Transporte para traslados y tours",
      "Guía profesional",
      "Ingresos (incluye tickets para Machu Picchu para 2 días)",
      "Bus Cusco a Puno con guiado",
      "Tickets de bus de subida y bajada hacia el centro arqueológico de Machu Picchu para 2 días",
      "Tren turístico ida y retorno",
      "02 noches de alojamiento en Lima",
      "02 noches de alojamiento en Cusco",
      "01 noche de alojamiento en Machu Picchu pueblo",
      "02 noches de alojamiento en Puno",
      "01 Cena show y 07 desayunos",
      "02 almuerzo en el dia 6 y 7",
    ],
    noIncluidos: [
      "Alimentación no especificada",
      "Seguro de viaje",
      "Propinas",
    ],
    informacionUtil: [],
    recomendaciones: [
      "El primer día en Cusco evite hacer mucho esfuerzo físico como correr, coma ligero, tome mate de coca excepto en la noche, esto le ayudará a evitar los síntomas del mal de altura.",
      "Una vez que ingrese al centro arqueológico de Machu Picchu no podrá salir hasta terminar el tour por eso si desea comer o ir al baño hágalo antes de ingresar.",
      "Usar bloqueador y repelente, gorra para el sol",
      "El clima es cambiante por eso use ropa ligera pero siempre llevar ropa para abrigarse",
      "Es un tour recomendado a familias",
      "Llevar pasaporte (Si olvida llevarlo, no se puede subir al tren turístico, ni ingresar a los parques arqueológicos como Santuario de Machupicchu.)",
    ],
  },
]

export default Tours
