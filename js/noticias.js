document.addEventListener ("DOMContentLoaded", () => {
    const contenedor = document.getElementById("Container_UltimasNoticias");


    function renderUltimasNoticias() {
    contenedor.innerHTML = ""; // limpiamos solo el contenedor, no el título
    ultimasNoticias.forEach(Noticia =>{
        const CardNoticia = document.createElement("div")   //creo los div para separar cada noticia
        CardNoticia.classList.add("CardUltimaNoticia")      //agrego la clase para retocar con css
    
        CardNoticia.innerHTML = `
        <img src="${Noticia.imagen}" class="card-img" alt="">
        <div class="card-content">
            <span class="categoria">${noticia.categoria}</span>
            <h4>${Noticia.titulo}</h4>
            <p>${Noticia.resumen}</p>
            <small>${Noticia.autor} - ${Noticia.fecha}</small>
        </div>
        `;
        contenedor.appendChild(CardNoticia);
    })

}
renderUltimasNoticias()

})