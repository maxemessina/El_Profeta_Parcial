const cajaNoticias = document.getElementById('contenedor-noticias');
const btnCargarMas = document.getElementById('btn-cargar-mas');

// Configuración inicial
const noticiasFiltradas = noticias.filter(n => n.id !== 1);
let index = 0;
const cantidad = 3;

const renderNoticias = () => {
    // Obtenemos el segmento y lo mapeamos a HTML
    const segmento = noticiasFiltradas.slice(index, index + cantidad);
    
    const html = segmento.map(noti => `
        <article class="card">
            <div class="card-content">
                <h4>${noti.titulo}</h4>
                <p>${noti.resumen}</p>
                <a href="pages/detalle.html?id=${noti.id}" class="btn">Ver más</a>
            </div>
        </article>
    `).join('');

    cajaNoticias.insertAdjacentHTML('beforeend', html);
    
    // Actualizamos índice y revisamos si ocultar el botón
    index += cantidad;
    if (index >= noticiasFiltradas.length) btnCargarMas.remove();
};

// Eventos
btnCargarMas.addEventListener('click', renderNoticias);
renderNoticias(); // Carga inicial
