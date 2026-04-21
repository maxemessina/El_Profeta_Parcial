document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("contenedor-noticias");

  function renderNoticias() {
    contenedor.innerHTML = ""; // limpiamos solo el contenedor, no el título

    noticias.forEach(noticia => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <img src="${noticia.imagen}" class="card-img" alt="">
        <div class="card-content">
          <span class="categoria">${noticia.categoria}</span>
          <h4>${noticia.titulo}</h4>
          <p>${noticia.resumen}</p>
          <small>${noticia.autor} - ${noticia.fecha}</small>
        </div>
        `;

      contenedor.appendChild(card);
    });
  }

  renderNoticias();
});

