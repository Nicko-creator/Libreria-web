// ============================================
// ELEMENTOS
// ============================================

const orderProducts =
  document.getElementById('order-products');

const orderTotal =
  document.getElementById('order-total');

const paymentTotal =
  document.getElementById('payment-total');

const qrCode =
  document.getElementById('qr-code');

const paymentStatus =
  document.getElementById('payment-status');

const simulatePayment =
  document.getElementById('simulate-payment');

const paymentOverlay =
  document.getElementById('payment-overlay');

const purchaseNumber =
  document.getElementById('purchase-number');

const returnHome =
  document.getElementById('return-home');


// ============================================
// DINERO
// ============================================

function money(numero) {

  return '$ ' +
    numero.toLocaleString('es-AR');

}


// ============================================
// OBTENER CARRITO
// ============================================

const carritoGuardado =
  localStorage.getItem('derryBooksCart');


let cart = [];


if (carritoGuardado) {

  try {

    cart =
      JSON.parse(carritoGuardado);

  }

  catch (error) {

    console.error(
      'No se pudo leer el carrito:',
      error
    );

    cart = [];

  }

}


// ============================================
// CALCULAR TOTAL
// ============================================

function calcularTotal() {

  return cart.reduce(
    (total, item) => {

      return total +
        item.price * item.qty;

    },
    0
  );

}


// ============================================
// MOSTRAR PRODUCTOS
// ============================================

function mostrarPedido() {

  if (cart.length === 0) {

    orderProducts.innerHTML = `
      <div class="empty-cart">

        No hay productos en el carrito.

        <br><br>

        <a href="index.html#libros">
          Volver a los libros
        </a>

      </div>
    `;


    orderTotal.textContent =
      money(0);

    paymentTotal.textContent =
      money(0);

    return;

  }


  orderProducts.innerHTML =
    cart.map(item => {

      return `

        <div class="order-item">

          <div class="order-item-info">

            <span class="order-item-title">
              ${item.title}
            </span>

            <span class="order-item-qty">
              Cantidad: ${item.qty}
            </span>

          </div>


          <span class="order-item-price">

            ${money(
              item.price * item.qty
            )}

          </span>

        </div>

      `;

    }).join('');


  const total =
    calcularTotal();


  orderTotal.textContent =
    money(total);

  paymentTotal.textContent =
    money(total);

}


// ============================================
// GENERAR QR DE DEMOSTRACIÓN
// ============================================

function generarQR() {

  qrCode.innerHTML = '';


  if (cart.length === 0) {

    qrCode.innerHTML =
      '<span>Carrito vacío</span>';

    return;

  }


  const total =
    calcularTotal();


  /*
    ESTE QR ES DE DEMOSTRACIÓN.

    Todavía NO realiza un pago real
    en Mercado Pago.

    Cuando se conecte Laravel con
    Mercado Pago, el backend deberá
    devolver la URL o información
    correspondiente al pago.
  */


  const datosQR =
    `DERRY BOOKS | TOTAL: ${total}`;


  if (
    typeof QRCode === 'undefined'
  ) {

    qrCode.innerHTML =
      'No se pudo cargar el QR.';

    return;

  }


  new QRCode(
    qrCode,
    {

      text: datosQR,

      width: 185,

      height: 185,

      correctLevel:
        QRCode.CorrectLevel.H

    }
  );

}


// ============================================
// GENERAR NÚMERO DE PEDIDO
// ============================================

function generarNumeroPedido() {

  const numero =
    Math.floor(
      100000 +
      Math.random() * 900000
    );


  return `DB-${numero}`;

}


// ============================================
// SIMULAR PAGO
// ============================================

simulatePayment.addEventListener(
  'click',
  () => {

    if (cart.length === 0) {

      alert(
        'No hay productos para pagar.'
      );

      return;

    }


    paymentStatus.classList.add(
      'approved'
    );


    paymentStatus.innerHTML = `

      <span class="status-dot"></span>

      Pago aprobado

    `;


    purchaseNumber.textContent =
      generarNumeroPedido();


    paymentOverlay.classList.add(
      'open'
    );

  }
);


// ============================================
// FINALIZAR COMPRA DEMO
// ============================================

returnHome.addEventListener(
  'click',
  () => {

    /*
      Como el pago de demostración
      terminó correctamente,
      limpiamos el carrito guardado.
    */

    localStorage.removeItem(
      'derryBooksCart'
    );

  }
);


// ============================================
// INICIAR
// ============================================

mostrarPedido();

generarQR();