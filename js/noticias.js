document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("container_ultimas_noticias");

    let iteracion = 0;
    const Noticias = [];

    // crear TODAS las cards una sola vez
    ultimasNoticias.forEach((Noticia, i) => {
        const card = document.createElement("div");
        card.classList.add("card_ultima_noticia");

        if (i === 0) card.classList.add("active");

        card.innerHTML = `
            <img src="${Noticia.imagen}" class="card_img">
                <div class="card_content">
                    <span>${Noticia.categoria}</span>
                    <h4>${Noticia.titulo}</h4>
                    <p>${Noticia.resumen}</p>
                    <small>${Noticia.autor}</small>
                </div>
            
        `;

        contenedor.appendChild(card);
        Noticias.push(card);
        console.log(card);
    });
        function updateNoticia() {
        Noticias.forEach((Noticias, i) => {
            Noticias.classList.toggle("active", i === iteracion);
        });
    }
    
    document.getElementById("next").addEventListener("click", () => {
        iteracion = (iteracion + 1) %  Noticias.length;
        updateNoticia();
    });

    document.getElementById("prev").addEventListener("click", () => {
        iteracion = (iteracion - 1 + Noticias.length) % Noticias.length;
        updateNoticia();
    });

})