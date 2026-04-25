const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get('id'));

const noti = noticias.find(n => n.id === id);

const tituloDetalle = document.getElementById('titulo_noticia');
const fechaDetalle = document.getElementById('fecha_noticia');
const imagenDetalle = document.getElementById('img_noticia');
const textoDetalle = document.getElementById('texto_noticia');
const botonAtras = document.getElementById('boton_atras');

botonAtras.addEventListener('click', () => {
    window.location.href = '../index.html'; 
});

if (noti) {
    tituloDetalle.textContent = noti.titulo;
    
    const fechaLocal = new Date(noti.fecha).toLocaleDateString();
    fechaDetalle.textContent = fechaLocal + " | Por " + noti.autor;
    
    imagenDetalle.setAttribute('src', noti.imagen);
    imagenDetalle.setAttribute('alt', noti.titulo);

    textoDetalle.innerHTML = `
        <b>${noti.resumen}</b>
        <br><br>
        <p>${noti.contenido}</p>
    `;
} else {
    tituloDetalle.textContent = "Error 404";
    textoDetalle.innerHTML = "<p>Esta noticia no existe o la borraron.</p>";
    imagenDetalle.style.display = "none";
}
