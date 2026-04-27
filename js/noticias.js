document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("Container_UltimasNoticias");

    let index = 0;
    let slides = [];

    // 👉 crear TODAS las cards una sola vez
    ultimasNoticias.forEach((Noticia, i) => {
        const card = document.createElement("div");
        card.classList.add("CardUltimaNoticia");

        if (i === 0) card.classList.add("active");

        card.innerHTML = `
            <img src="${Noticia.imagen}" class="card-img">
            <div class="card-content">
                <span>${Noticia.categoria}</span>
                <h4>${Noticia.titulo}</h4>
                <p>${Noticia.resumen}</p>
                <small>${Noticia.autor}</small>
            </div>
        `;

        contenedor.appendChild(card);
        slides.push(card);
    });
        function updateSlider() {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
        });
    }
    
    document.getElementById("next").addEventListener("click", () => {
        index = (index + 1) % slides.length;
        updateSlider();
    });

    document.getElementById("prev").addEventListener("click", () => {
        index = (index - 1 + slides.length) % slides.length;
        updateSlider();
    });



;

})