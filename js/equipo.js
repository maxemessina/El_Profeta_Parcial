const botonAtras = document.getElementById('boton_atras');

botonAtras.addEventListener('click', () => {
    window.location.href = '../index.html'; 
});

const equipo = [
{
    nombre: "Valentina Guerrieri",
    rol: "Periodista especializada en deporte ",
    img: "../assets/img/valen.jpg",
    info: "",
    pais: "Argentina",
    experiencia: "5 años de experiencia"
},
{
    nombre: "Maximo Messina",
    rol: "Periodista locas y fotografo de prensa",
    img: "../assets/img/maxime.jpg",
    info: "Analiza la actualidad, entrevistas a referentes del ambito publico y documenta acontecimientos a traves de las imagenes.",
    pais: "Argentina",
    experiencia: "8 años de experiencia"
},
{
    nombre: "Maximo Moraes",
    rol: "Periodista especializado en cultura e historia",
    img: "../assets/img/maximm.jpg",
    info: "Explora el impacto de la cultura y la historia en la sociedad actual. Realiza notas sobre arte, patrimonio y procesos históricos relevantes, cine y lectura.",
    pais: "Argentina",
    experiencia: "3 años de experiencia"
},
{
    nombre: "Lucas Rojas",
    rol: "Periodista de Servicio o Utilitario",
    img: "../assets/img/lucas.jpg",
    info: "encargado de divulgar e informar sobre recomendaciones personales, experiencias o consejos útiles para la vida cotidiana",
    pais: "Argentina",
    experiencia: "5 años de experiencia"
},
{
    nombre: "Priscila Arrimada",
    rol: "Periodista especializada en Tecnologias y Ciencias de la computacion",
    img: "../assets/img/pri.jpg",
    info: "Informa sobre las nuevas y mas actuales novedades sobre informatica, IT y ingenieria en Sistemas, con amplia cobertura en el desarrollo de tecnologias.",
    pais: "Argentina",
    experiencia: "10 años de experiencia"
},
{
    nombre: "Tomas Astudillo",
    rol: "Periodista de Deportivo",
    img: "../assets/img/tomi.jpg",
    info: "Cubre eventos deportivos internacionales y entrevistas exclusivas.",
    pais: "Argentina",
    experiencia: "7 años de experiencia"
}   
];

const contenedor = document.getElementById("contenedor-equipo");


for (let i = 0; i < equipo.length; i++) {
const persona = equipo[i];

const card = document.createElement("div");
card.classList.add("card");

card.innerHTML = `
 <img src="${persona.img}" alt="${persona.nombre}">
   
 <div class= "card-content">
    <h4>${persona.nombre}</h4>
    <p class="rol">${persona.rol}</p>

    <div class= "info-extra">
     <p>${persona.info}</p>
     <p><strong>${persona.pais}</strong></p>
     <p>${persona.experiencia}</p>
    </div>

</div>
`;   

contenedor.appendChild(card);
}
