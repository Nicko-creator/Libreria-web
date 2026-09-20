// ============================================
// PESTAÑAS
// ============================================

const loginTab =
  document.getElementById('login-tab');

const registerTab =
  document.getElementById('register-tab');

const loginSection =
  document.getElementById('login-section');

const registerSection =
  document.getElementById('register-section');

const goRegister =
  document.getElementById('go-register');

const goLogin =
  document.getElementById('go-login');

const mainTitle =
  document.getElementById('main-title');

const mainDescription =
  document.getElementById('main-description');


// ============================================
// MOSTRAR LOGIN
// ============================================

function mostrarLogin() {

  loginSection.classList.add('active-form');

  registerSection.classList.remove('active-form');


  loginTab.classList.add('active');

  registerTab.classList.remove('active');


  mainTitle.textContent =
    'Bienvenido de nuevo';

  mainDescription.textContent =
    'Iniciá sesión para acceder a tus favoritos, pedidos y continuar explorando Derry Books.';

}


// ============================================
// MOSTRAR REGISTRO
// ============================================

function mostrarRegistro() {

  registerSection.classList.add('active-form');

  loginSection.classList.remove('active-form');


  registerTab.classList.add('active');

  loginTab.classList.remove('active');


  mainTitle.textContent =
    'Creá tu cuenta';

  mainDescription.textContent =
    'Registrate para disfrutar una mejor experiencia dentro de Derry Books.';

}


// ============================================
// EVENTOS DE LAS PESTAÑAS
// ============================================

loginTab.addEventListener(
  'click',
  mostrarLogin
);


registerTab.addEventListener(
  'click',
  mostrarRegistro
);


goRegister.addEventListener(
  'click',
  mostrarRegistro
);


goLogin.addEventListener(
  'click',
  mostrarLogin
);


// ============================================
// FUNCIÓN VALIDAR EMAIL
// ============================================

function validarEmail(correo) {

  const expresion =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return expresion.test(correo);

}


// ============================================
// MOSTRAR ERROR
// ============================================

function mostrarError(input, mensaje) {

  input.classList.add('input-error');

  const formGroup =
    input.closest('.form-group');

  const error =
    formGroup.querySelector('.error-message');

  error.textContent = mensaje;

}


// ============================================
// QUITAR ERROR
// ============================================

function quitarError(input) {

  input.classList.remove('input-error');

  const formGroup =
    input.closest('.form-group');

  const error =
    formGroup.querySelector('.error-message');

  error.textContent = '';

}


// ============================================
// MOSTRAR / OCULTAR CONTRASEÑA
// ============================================

function configurarBotonPassword(
  boton,
  input
) {

  boton.addEventListener(
    'click',
    () => {

      if (input.type === 'password') {

        input.type = 'text';

        boton.textContent = 'Ocultar';

      }

      else {

        input.type = 'password';

        boton.textContent = 'Ver';

      }

    }
  );

}


// ============================================
// LOGIN - ELEMENTOS
// ============================================

const loginForm =
  document.getElementById('login-form');

const loginEmail =
  document.getElementById('login-email');

const loginPassword =
  document.getElementById('login-password');

const showLoginPassword =
  document.getElementById('show-login-password');

const loginMessage =
  document.getElementById('login-message');


// ============================================
// CONFIGURAR CONTRASEÑA LOGIN
// ============================================

configurarBotonPassword(
  showLoginPassword,
  loginPassword
);


// ============================================
// VALIDAR LOGIN
// ============================================

loginForm.addEventListener(
  'submit',
  event => {

    event.preventDefault();


    let formularioValido = true;


    // EMAIL

    if (loginEmail.value.trim() === '') {

      mostrarError(
        loginEmail,
        'Ingresá tu correo electrónico.'
      );

      formularioValido = false;

    }

    else if (
      !validarEmail(loginEmail.value.trim())
    ) {

      mostrarError(
        loginEmail,
        'Ingresá un correo electrónico válido.'
      );

      formularioValido = false;

    }

    else {

      quitarError(loginEmail);

    }


    // CONTRASEÑA

    if (loginPassword.value === '') {

      mostrarError(
        loginPassword,
        'Ingresá tu contraseña.'
      );

      formularioValido = false;

    }

    else {

      quitarError(loginPassword);

    }


    // LOGIN CORRECTO EN FRONTEND

    if (formularioValido) {

      loginMessage.textContent =
        '✓ Datos completados correctamente.';

      loginMessage.className =
        'register-message success';


      console.log({

        email: loginEmail.value.trim()

      });


      /*
        IMPORTANTE:

        Por ahora solamente validamos el formulario.

        Más adelante Diego conectará este formulario
        con Laravel y MySQL para comprobar realmente
        si el usuario y la contraseña existen.
      */

    }

  }
);


// ============================================
// REGISTRO - ELEMENTOS
// ============================================

const registerForm =
  document.getElementById('register-form');

const nombre =
  document.getElementById('nombre');

const apellido =
  document.getElementById('apellido');

const email =
  document.getElementById('email');

const password =
  document.getElementById('password');

const confirmPassword =
  document.getElementById('confirm-password');

const terminos =
  document.getElementById('terminos');

const termsError =
  document.getElementById('terms-error');

const registerMessage =
  document.getElementById('register-message');

const showPassword =
  document.getElementById('show-password');

const showConfirmPassword =
  document.getElementById('show-confirm-password');


// ============================================
// CONFIGURAR CONTRASEÑAS REGISTRO
// ============================================

configurarBotonPassword(
  showPassword,
  password
);


configurarBotonPassword(
  showConfirmPassword,
  confirmPassword
);


// ============================================
// VALIDAR REGISTRO
// ============================================

registerForm.addEventListener(
  'submit',
  event => {

    event.preventDefault();


    let formularioValido = true;


    // ========================================
    // NOMBRE
    // ========================================

    if (nombre.value.trim() === '') {

      mostrarError(
        nombre,
        'Ingresá tu nombre.'
      );

      formularioValido = false;

    }

    else {

      quitarError(nombre);

    }


    // ========================================
    // APELLIDO
    // ========================================

    if (apellido.value.trim() === '') {

      mostrarError(
        apellido,
        'Ingresá tu apellido.'
      );

      formularioValido = false;

    }

    else {

      quitarError(apellido);

    }


    // ========================================
    // EMAIL
    // ========================================

    if (email.value.trim() === '') {

      mostrarError(
        email,
        'Ingresá tu correo electrónico.'
      );

      formularioValido = false;

    }

    else if (
      !validarEmail(email.value.trim())
    ) {

      mostrarError(
        email,
        'Ingresá un correo electrónico válido.'
      );

      formularioValido = false;

    }

    else {

      quitarError(email);

    }


    // ========================================
    // CONTRASEÑA
    // ========================================

    if (password.value === '') {

      mostrarError(
        password,
        'Ingresá una contraseña.'
      );

      formularioValido = false;

    }

    else if (password.value.length < 8) {

      mostrarError(
        password,
        'La contraseña debe tener al menos 8 caracteres.'
      );

      formularioValido = false;

    }

    else {

      quitarError(password);

    }


    // ========================================
    // CONFIRMAR CONTRASEÑA
    // ========================================

    if (confirmPassword.value === '') {

      mostrarError(
        confirmPassword,
        'Repetí tu contraseña.'
      );

      formularioValido = false;

    }

    else if (
      confirmPassword.value !==
      password.value
    ) {

      mostrarError(
        confirmPassword,
        'Las contraseñas no coinciden.'
      );

      formularioValido = false;

    }

    else {

      quitarError(confirmPassword);

    }


    // ========================================
    // TÉRMINOS
    // ========================================

    if (!terminos.checked) {

      termsError.textContent =
        'Debés aceptar los términos y condiciones.';

      formularioValido = false;

    }

    else {

      termsError.textContent = '';

    }


    // ========================================
    // REGISTRO CORRECTO
    // ========================================

    if (formularioValido) {

      registerMessage.textContent =
        '✓ Cuenta creada correctamente.';

      registerMessage.className =
        'register-message success';


      console.log({

        nombre: nombre.value.trim(),

        apellido: apellido.value.trim(),

        email: email.value.trim()

      });


      /*
        POR AHORA NO GUARDAMOS LA CONTRASEÑA.

        Cuando Diego tenga Laravel + MySQL,
        estos datos se enviarán al backend.
      */


      // LIMPIAR FORMULARIO

      registerForm.reset();


      // OCULTAR CONTRASEÑAS

      password.type =
        'password';

      confirmPassword.type =
        'password';

      showPassword.textContent =
        'Ver';

      showConfirmPassword.textContent =
        'Ver';

    }

  }
);


// ============================================
// QUITAR ERRORES DEL LOGIN AL ESCRIBIR
// ============================================

[
  loginEmail,
  loginPassword

].forEach(input => {

  input.addEventListener(
    'input',
    () => {

      quitarError(input);

      loginMessage.className =
        'register-message';

      loginMessage.textContent = '';

    }
  );

});


// ============================================
// QUITAR ERRORES DEL REGISTRO AL ESCRIBIR
// ============================================

[
  nombre,
  apellido,
  email,
  password,
  confirmPassword

].forEach(input => {

  input.addEventListener(
    'input',
    () => {

      quitarError(input);

      registerMessage.className =
        'register-message';

      registerMessage.textContent = '';

    }
  );

});


// ============================================
// QUITAR ERROR DE TÉRMINOS
// ============================================

terminos.addEventListener(
  'change',
  () => {

    if (terminos.checked) {

      termsError.textContent = '';

    }

  }
);


// ============================================
// OLVIDÉ MI CONTRASEÑA
// ============================================

const forgotPassword =
  document.getElementById('forgot-password');


forgotPassword.addEventListener(
  'click',
  event => {

    event.preventDefault();

    alert(
      'La recuperación de contraseña estará disponible cuando se conecte el backend.'
    );

  }
);