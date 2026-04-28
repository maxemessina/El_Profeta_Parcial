# El Profeta | Diario Digital de Actualidad

![Página de Inicio](el-profeta-inicio.png)

Proyecto de desarrollo web creado para el Parcial de Programación. Consiste en el desarrollo y maquetación de una plataforma periodística con estética de diario clásico, aplicando técnicas de diseño responsivo, manipulación dinámica del DOM con JavaScript y almacenamiento local, manteniendo un enfoque de código modular.

## Tecnologías y Conceptos Aplicados

* **HTML5 Semántico:** Estructura organizada para mejorar la accesibilidad, el SEO y la correcta división de los artículos periodísticos.
* **CSS3 Avanzado:**
* **Modularización:** Uso de `@import` para separar estilos por componentes (`nav.css`, `card.css`, `button.css`, `footer.css`).
* **Variables CSS (`:root`):** Centralización de la paleta de colores y bordes para mantener la consistencia temática.
* **Flexbox:** Implementación de layouts fluidos para las grillas de noticias y los menús de navegación.
* **Media Queries:** Adaptación del diseño (Responsive Web Design) para garantizar una lectura cómoda en celulares y tablets.
* **JavaScript Moderno (ES6+):**
* **Manipulación del DOM:** Creación dinámica de nodos HTML para inyectar noticias, equipos y detalles desde arrays de datos (`data.js`).
* **Lógica de Estado:** Implementación de carga incremental ("Cargar más") gestionando índices de arrays.
* **LocalStorage:** Almacenamiento persistente de datos en el navegador para simular una base de datos de noticias creadas por los usuarios.
* **Tipografías Externas:** Integración de fuentes de Google Fonts.
* **Git & GitHub:** Trabajo colaborativo mediante el uso de repositorios, gestión de ramas y control de versiones del código fuente.

## Descripción del Proyecto

El sitio web está diseñado para "El Profeta", un periódico con una propuesta visual inspirada en la tipografía y estructura de los diarios tradicionales. La plataforma permite a los usuarios explorar las noticias más recientes mediante un sistema de carga incremental, leer artículos en detalle, conocer al plantel de periodistas y participar activamente publicando sus propios titulares mediante un sistema guardado en el navegador. El sistema destaca por su interactividad, validación de datos y su capacidad de adaptarse a cualquier dispositivo móvil o de escritorio.

## Integrantes y Responsabilidades

El desarrollo se organizó bajo un sistema de trabajo colaborativo, donde cada integrante asumió el diseño y la lógica de vistas específicas, asegurando la integración con la arquitectura global del diario:

* **Priscila Arrimada:** Diseño del formulario de comunicación y programación de las validaciones de datos (`contacto.html` y `contacto.js`).
* **Tomás Astudillo:** Maquetación de la página de últimas noticias y desarrollo de la lógica del slider/carrusel de artículos (`noticias.html` y `noticias.js`)
* **Valentina Guerrieri:** Diseño y renderizado dinámico de la página de perfil de los periodistas (`equipo.html` y `equipo.js`).
* **Máximo Messina:** Arquitectura global CSS, implementación de la grilla responsiva (Media Queries), e implementación de LocalStorage para la carga de noticias de usuarios (`cargar.js` y `cargar.html`).
* **Máximo Moraes:** Desarrollo de la vista de lectura y lógica de inyección de datos para las noticias específicas (`detalle.html` y `detalle.js`).
* **Lucas Rojas:** Estructuración base del proyecto, desarrollo de la página de inicio (`script.js` y `index.html`).