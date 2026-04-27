const cajaNoticias = document.getElementById('contenedor-noticias');
let tarjetasGeneradas = "";

const noticiasFiltradas = noticias.filter(noti => noti.id !== 1);

noticiasFiltradas.forEach(noti => {
    tarjetasGeneradas += `
        <article class="card">
            <div class="card-content">
                <h4>${noti.titulo}</h4>
                <p>${noti.resumen}</p>
                <br>
                <a href="pages/detalle.html?id=${noti.id}" class="btn">Ver más</a>
            </div>
        </article>
    `;
});

if (cajaNoticias) {
    cajaNoticias.innerHTML = tarjetasGeneradas;
}