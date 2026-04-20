const noticias = [
  {
    id: 1,
    titulo: "Escándalo en la UTN: Alumno aprueba Prog 3 sin usar IA",
    resumen: "Un suceso sin precedentes conmociona a los profesores del instituto tras la entrega de un TP perfecto.",
    contenido: "El alumno, conocido como Máximo, logró la hazaña tras horas de codear en la oscuridad. Los peritos informáticos aún están analizando el repositorio en busca de copypaste, pero hasta ahora, el código parece 100% original. 'No lo puedo creer', declaró un profesor entre lágrimas.",
    imagen: "../assets/img/noticia-1.jpg",
    fecha: "2026-04-20T10:30:00",
    vistas: 8540,
    categoria: "Universidad",
    autor: "Tomás Astudillo"
  },
  {
    id: 2,
    titulo: "Nuevo avance en Inteligencia Artificial predice cuándo se va a caer el WiFi",
    resumen: "Desarrolladores locales crean un algoritmo capaz de avisarte 5 minutos antes de que te quedes sin internet en medio de una partida.",
    contenido: "La herramienta utiliza machine learning avanzado y el estado del clima para... (texto largo de la noticia).",
    imagen: "../assets/img/noticia-2.jpg",
    fecha: "2026-04-19T18:15:00",
    vistas: 3200,
    categoria: "Tecnología",
    autor: "Priscila Arrimada"
  },
  {
    id: 3,
    titulo: "Descubren que el 90% de los bugs se resuelven yendo a preparar mate",
    resumen: "Un estudio de la UTN confirma que alejarse de la pantalla y calentar agua es el mejor método de depuración de código conocido hasta la fecha.",
    contenido: "Investigadores analizaron a 500 estudiantes de programación durante la época de parciales. Los resultados mostraron que la tasa de resolución de errores críticos aumentaba drásticamente justo después del primer sorbo de mate...",
    imagen: "../assets/img/noticia-3.jpg",
    fecha: "2026-04-18T14:20:00",
    vistas: 5400,
    categoria: "Universidad",
    autor: "Lucas Rojas"
  },
  {
    id: 4,
    titulo: "Lanzan teclado que escribe 'console.log()' con solo apretar un botón",
    resumen: "La industria del hardware revoluciona el mercado con un periférico diseñado exclusivamente para desarrolladores desesperados.",
    contenido: "El nuevo modelo incluye una tecla roja gigante que, al presionarse, imprime la variable en consola. Los creadores aseguran que ahorrará aproximadamente 40 horas mensuales de tipeo a los programadores junior...",
    imagen: "../assets/img/noticia-4.jpg",
    fecha: "2026-04-18T09:10:00",
    vistas: 12500,
    categoria: "Tecnología",
    autor: "Máximo Moraes"
  },
  {
    id: 5,
    titulo: "Vientos en Bahía Blanca alcanzan la velocidad suficiente para compilar en C++",
    resumen: "Un grupo de estudiantes conecta un molino casero a una notebook para aprovechar las ráfagas locales y acelerar sus tiempos de carga.",
    contenido: "Aprovechando el clásico clima bahiense, el proyecto de energías renovables logró compilar un sistema entero en tiempo récord gracias a una ráfaga de 80 km/h que enfrió los procesadores al máximo...",
    imagen: "../assets/img/noticia-5.jpg",
    fecha: "2026-04-17T22:45:00",
    vistas: 8900,
    categoria: "Local",
    autor: "Máximo Messina"
  },
  {
    id: 6,
    titulo: "El Cine Aurora reabre sus puertas y proyectará la saga de Volver al Futuro",
    resumen: "Tras una intensa remodelación digital, el clásico cine de la ciudad anuncia un maratón retro para este fin de semana.",
    contenido: "Con un nuevo sistema de reservas online creado por estudiantes locales, el Cine Aurora vuelve al ruedo. La función principal será la trilogía completa de Marty McFly con entradas agotadas en los primeros 10 minutos...",
    imagen: "../assets/img/noticia-6.jpg",
    fecha: "2026-04-17T16:30:00",
    vistas: 15200,
    categoria: "Entretenimiento",
    autor: "Priscila Arrimada"
  },
  {
    id: 7,
    titulo: "Torneo interuniversitario de fulbito termina en empate por falta de aire",
    resumen: "El esperado encuentro entre las facultades de Exactas y Humanidades tuvo que suspenderse a los 15 minutos del segundo tiempo.",
    contenido: "La falta de estado físico quedó en evidencia cuando los 22 jugadores decidieron sentarse en el pasto a pedir la hora. El árbitro, también cansado, dio por finalizado el partido con un 0-0 que no dejó quejas...",
    imagen: "../assets/img/noticia-7.jpg",
    fecha: "2026-04-16T20:00:00",
    vistas: 4100,
    categoria: "Deportes",
    autor: "Tomás Astudillo"
  },
  {
    id: 8,
    titulo: "Alumno entrega un parcial en papel y el profesor intenta scrollear",
    resumen: "La dependencia a las pantallas llegó a un punto crítico durante las mesas de exámenes finales de este cuatrimestre.",
    contenido: "El insólito hecho ocurrió cuando un docente, al recibir la única hoja de papel de la jornada, deslizó dos dedos sobre la hoja buscando bajar hacia la segunda pregunta. El aula quedó en un silencio incómodo...",
    imagen: "../assets/img/noticia-8.jpg",
    fecha: "2026-04-15T11:15:00",
    vistas: 9800,
    categoria: "Humor",
    autor: "Valentina Guerrieri"
  },
  {
    id: 9,
    titulo: "Estudio revela que usar modo claro a las 3 AM reduce la esperanza de vida",
    resumen: "Oftalmólogos advierten sobre los peligros de codear con el fondo blanco cuando todo el entorno está a oscuras.",
    contenido: "Las retinas de los programadores están sufriendo un desgaste prematuro equivalente a mirar el sol de frente. 'Si no usan el dark theme, están jugando con fuego', advirtió el jefe del equipo de investigación...",
    imagen: "../assets/img/noticia-9.jpg",
    fecha: "2026-04-14T14:50:00",
    vistas: 2100,
    categoria: "Salud",
    autor: "Lucas Rojas"
  },
  {
    id: 10,
    titulo: "Se cae GitHub por 10 minutos y la productividad mundial se reduce a cero",
    resumen: "El pánico se apoderó de las oficinas de desarrollo cuando el famoso repositorio de código mostró la pantalla del unicornio enojado.",
    contenido: "Miles de programadores admitieron no saber qué hacer con sus vidas durante esos eternos 600 segundos. Algunos incluso intentaron hablar con sus compañeros de escritorio, reportando experiencias aterradoras...",
    imagen: "../assets/img/noticia-10.jpg",
    fecha: "2026-04-13T09:40:00",
    vistas: 18500,
    categoria: "Tecnología",
    autor: "Máximo Moraes"
  },
  {
    id: 11,
    titulo: "Nuevo framework de JavaScript promete hacer todo por vos, pero pesa 500GB",
    resumen: "La comunidad de desarrollo debate si vale la pena descargar medio terabyte para no tener que escribir CSS nunca más.",
    contenido: "Bautizado como 'GigaJS', este nuevo entorno promete compilar, maquetar y servirte el café. El único inconveniente es que requiere un disco sólido dedicado exclusivamente para instalar sus dependencias en node_modules...",
    imagen: "../assets/img/noticia-11.jpg",
    fecha: "2026-04-12T17:20:00",
    vistas: 6700,
    categoria: "Tecnología",
    autor: "Tomás Astudillo"
  },
  {
    id: 12,
    titulo: "La cafetería de la facultad anuncia un nuevo menú: 'Café con Código'",
    resumen: "Estudiantes que presenten un error de compilación sin resolver recibirán un descuento del 15% en su pedido.",
    contenido: "Una iniciativa busca consolar a los alumnos en épocas de entregas de trabajos prácticos. 'Sabemos que un Segmentation Fault duele, así que un buen cortado con medialunas es lo mínimo que podemos ofrecer', declaró el dueño...",
    imagen: "../assets/img/noticia-12.jpg",
    fecha: "2026-04-11T08:30:00",
    vistas: 7300,
    categoria: "Universidad",
    autor: "Valentina Guerrieri"
  }
];