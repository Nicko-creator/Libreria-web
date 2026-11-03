// ============================================
// CONEXIÓN CON LARAVEL
// ============================================

const API_CONTACTO = 'http://127.0.0.1:8000/api/contacto';

// ============================================
// FORMULARIO DE CONTACTO
// ============================================

const contactForm = document.getElementById("contactForm");

const formMessage = document.getElementById("formMessage");


const nombre = document.getElementById("nombre");

const email = document.getElementById("email");

const asunto = document.getElementById("asunto");

const mensaje = document.getElementById("mensaje");

const emailError = document.getElementById("email-error");

const mensajeError = document.getElementById("mensaje-error");


// ============================================
// FUNCIONES DE AYUDA
// ============================================

// Bootstrap pinta el campo de rojo con la clase "is-invalid"
// y muestra el <div class="invalid-feedback"> que está abajo

function marcarError(campo) {

  campo.classList.add("is-invalid");

}


function quitarError(campo) {

  campo.classList.remove("is-invalid");

}


function validarEmail(correo) {

  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);

}


// Muestra la alerta de Bootstrap (verde o roja)

function mostrarMensaje(texto, tipo) {

  formMessage.textContent = texto;

  formMessage.className = `alert alert-${tipo} mt-3 mb-0`;

}


function ocultarMensaje() {

  formMessage.className = "alert d-none mt-3 mb-0";

}


// ============================================
// ENVIAR FORMULARIO
// ============================================

contactForm.addEventListener("submit", async function(event) {

  // Evita que la página se recargue
  event.preventDefault();


  let formularioValido = true;


  // ==========================================
  // VALIDACIÓN
  // ==========================================

  // NOMBRE

  if (nombre.value.trim() === "") {

    marcarError(nombre);

    formularioValido = false;

  }

  else {

    quitarError(nombre);

  }


  // EMAIL

  if (email.value.trim() === "") {

    emailError.textContent = "Ingresá tu correo electrónico.";

    marcarError(email);

    formularioValido = false;

  }

  else if (!validarEmail(email.value.trim())) {

    emailError.textContent = "Ingresá un correo electrónico válido.";

    marcarError(email);

    formularioValido = false;

  }

  else {

    quitarError(email);

  }


  // ASUNTO

  if (asunto.value === "") {

    marcarError(asunto);

    formularioValido = false;

  }

  else {

    quitarError(asunto);

  }


  // MENSAJE

  if (mensaje.value.trim() === "") {

    mensajeError.textContent = "Escribí tu consulta.";

    marcarError(mensaje);

    formularioValido = false;

  }

  else if (mensaje.value.trim().length < 10) {

    mensajeError.textContent = "La consulta debe tener al menos 10 caracteres.";

    marcarError(mensaje);

    formularioValido = false;

  }

  else {

    quitarError(mensaje);

  }


  // ==========================================
  // HAY ERRORES
  // ==========================================

  if (!formularioValido) {

    mostrarMensaje(
      "Por favor, revisá los campos marcados en rojo.",
      "danger"
    );

    return;

  }


  // ==========================================
  // FORMULARIO CORRECTO
  // ==========================================

    // ==========================================
  // ENVIAR CONSULTA A LARAVEL
  // ==========================================

  try {
    const respuesta = await fetch(API_CONTACTO, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        nombre: nombre.value.trim(),
        email: email.value.trim(),
        asunto: asunto.value,
        mensaje: mensaje.value.trim()
      })
    });

    const datos = await respuesta.json();

    if (!respuesta.ok) {
      throw new Error(
        datos.message || "No se pudo enviar la consulta."
      );
    }

    mostrarMensaje(
      `Gracias ${nombre.value.trim()}. Tu consulta fue registrada correctamente.`,
      "success"
    );

    contactForm.reset();

  } catch (error) {
    console.error("Error al enviar la consulta:", error);

    mostrarMensaje(
      "No se pudo enviar tu consulta. Intentá nuevamente.",
      "danger"
    );
  }

});


// ============================================
// SACAR EL ERROR CUANDO EL USUARIO ESCRIBE
// ============================================

[nombre, email, asunto, mensaje].forEach(campo => {

  campo.addEventListener("input", () => {

    quitarError(campo);

    ocultarMensaje();

  });

});
