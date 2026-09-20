// ============================================
// FORMULARIO DE CONTACTO
// ============================================

const contactForm = document.getElementById("contactForm");

const formMessage = document.getElementById("formMessage");


// ============================================
// ENVIAR FORMULARIO
// ============================================

contactForm.addEventListener("submit", function(event) {

  // Evita que la página se recargue
  event.preventDefault();


  // Obtener datos

  const nombre = document
    .getElementById("nombre")
    .value
    .trim();

  const email = document
    .getElementById("email")
    .value
    .trim();

  const asunto = document
    .getElementById("asunto")
    .value;

  const mensaje = document
    .getElementById("mensaje")
    .value
    .trim();


  // ==========================================
  // VALIDACIÓN
  // ==========================================

  if (
    nombre === "" ||
    email === "" ||
    asunto === "" ||
    mensaje === ""
  ) {

    formMessage.textContent =
      "Por favor, completá todos los campos.";

    formMessage.classList.add("visible");

    return;
  }


  // ==========================================
  // FORMULARIO CORRECTO
  // ==========================================

  formMessage.textContent =
    `Gracias ${nombre}. Tu consulta fue registrada correctamente.`;

  formMessage.classList.add("visible");


  // Limpiar formulario

  contactForm.reset();

});