const form = document.getElementById("form-crear-noticia");
const mensajeExito = document.getElementById("mensaje-exito");

//Cuando ejecuta el envío del formulario
form.addEventListener("submit", function(e) {

  e.preventDefault();

  // Valores de los inputs
  const titulo = document.getElementById("titulo").value.trim();
  const resumen = document.getElementById("resumen").value.trim();

  // VALIDACIONES
  // 1. Campos vacíos
  if (!titulo || !resumen) {
    alert("Completá todos los campos");
    return;
  }

  // 2. Longitud texto
  if (titulo.length < 3 || titulo.length > 25) {
    alert("El titulo debe tener entre 3 y 25 caracteres");
    return;
  }

  // 3. Guardar noticia en localStorage

  let notiusuarios = JSON.parse(localStorage.getItem("notiusuarios")) || [];
  notiusuarios.append({ titulo: titulo, resumen: resumen });
  localStorage.setItem("notiusuarios", JSON.stringify(notiusuarios));

  // 4. Mensaje de enviado exitosamente y reseteo del formulario
  mensajeExito.style.display = "block";
  form.reset();
});
