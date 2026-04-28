const form = document.getElementById("form-contacto");
const mensajeExito = document.getElementById("mensaje-exito");

//Cuando ejecuta el envío del formulario
form.addEventListener("submit", function(e) {

  e.preventDefault();

  // Valores de los inputs
  const nombre = document.getElementById("nombre").value.trim();
  const apellido = document.getElementById("apellido").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  // VALIDACIONES
  // 1. Campos vacíos
  if (!nombre || !apellido || !email || !mensaje) {
    alert("Completá todos los campos");
    return;
  }

  // 2. Longitud texto
  if (nombre.length < 2 || nombre.length > 20) {
    alert("El nombre debe tener entre 2 y 20 caracteres");
    return;
  }

  if (apellido.length < 2 || apellido.length > 20) {
    alert("El apellido debe tener entre 2 y 20 caracteres");
    return;
  }

  // 3. Solo letras (Utilizo esa expresión para incluir acentos, ñ y espacios)
  const soloTexto = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;

  if (!soloTexto.test(nombre)) {
    alert("El nombre solo debe contener letras");
    return;
  }

  if (!soloTexto.test(apellido)) {
    alert("El apellido solo debe contener letras");
    return;
  }

  // 4. Email válido
  if (!email.includes("@")) {
    alert("Email inválido");
    return;
  }

  // 5. Mensaje de enviado exitosamente y reseteo del formulario
  mensajeExito.style.display = "block";
  form.reset();
});