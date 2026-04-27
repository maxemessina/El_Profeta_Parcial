const equipo = [
{
    nombre: "Valentina Guerrieri",
    rol: "Periodista especializada en deporte ",
    img: "../assets/img/valen.jpg",
    info: "Cubre eventos deportivos internacionales y entrevistas exclusivas.",
    pais: "Argentina",
    experiencia: "5 años de experiencia"
},
{
    nombre: "Maximo Messina",
    rol: "Periodista especializado en Politica",
    img: "../assets/img/maxime.jpg",
    info: "Analiza la actualidad política nacional e internacional, con foco en elecciones, debates legislativos y entrevistas a referentes del ámbito público.",
    pais: "Argentina",
    experiencia: "8 años de experiencia"
},
{
    nombre: "Maximo Moraes",
    rol: "Periodista especializado en cultura e historia",
    img: "../assets/img/maximm.jpg",
    info: "Explora el impacto de la cultura y la historia en la sociedad actual. Realiza notas sobre arte, patrimonio y procesos históricos relevantes.",
    pais: "Argentina",
    experiencia: "3 años de experiencia"
},
{
    nombre: "Lucas Rojas",
    rol: "Periodista especializado en Ciencia",
    img: "../assets/img/lucas.jpg",
    info: "Divulga avances científicos y tecnológicos de forma clara y accesible. Se enfoca en innovación, salud y descubrimientos recientes.",
    pais: "Argentina",
    experiencia: "5 años de experiencia"
},
{
    nombre: "Priscila Arrimada",
    rol: "Periodista de Sucesos/Policial",
    img: "../assets/img/pri.jpg",
    info: "Cubre noticias policiales y casos de actualidad con enfoque investigativo, brindando información precisa y seguimiento de cada caso.",
    pais: "Argentina",
    experiencia: "10 años de experiencia"
},
{
    nombre: "Tomas Astudillo",
    rol: "Periodista de Guerra/Corresponsal",
    img: "../assets/img/tomi.jpg",
    info: "Reporta desde zonas de conflicto y contextos internacionales complejos, aportando una mirada directa y humana de los hechos.",
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
