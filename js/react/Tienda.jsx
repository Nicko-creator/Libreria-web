// ============================================
// PÁGINA PRINCIPAL EN REACT (index.html)
// ============================================
//
// Antes todo esto lo hacía script.js buscando elementos
// con getElementById y cambiando el innerHTML.
//
// Ahora la página está dividida en COMPONENTES.
// Cada componente es una función que devuelve HTML (JSX):
//
//   <Tienda>              → componente principal, guarda el ESTADO
//     <Header />          → logo, menú, buscador, cuenta y carrito
//     <Hero />            → "Elegí tu próxima lectura"
//     <Beneficios />      → envíos, pagos, compra segura...
//     <Categorias />      → lista de categorías
//     <Catalogo />        → grilla de libros (o colecciones)
//       <TarjetaLibro />  → cada libro
//     <Carrito />         → panel lateral (offcanvas de Bootstrap)
//
// La lista de libros (BOOKS) está en js/script.js
// ============================================


// Funciones de React que vamos a usar
//   useState  → guardar datos que cambian (categoría, carrito...)
//   useEffect → hacer algo cuando cambia un dato (guardar el carrito)

const { useState, useEffect } = React;


// ============================================
// FORMATO DE PRECIO
// ============================================

const money = n => '$ ' + n.toLocaleString('es-AR');


// ============================================
// CATEGORÍAS
// ============================================

const CATEGORIAS = [
  { id: 'todos',                texto: 'Todos los libros' },
  { id: 'tapa-dura',            texto: 'Tapa dura' },
  { id: 'box-sets',             texto: 'Box Sets' },
  { id: 'ingles',               texto: 'Ediciones en inglés' },
  { id: 'colecciones',          texto: 'Colecciones' },
  { id: 'ediciones-especiales', texto: 'Ediciones especiales' }
];


// En "Todos los libros" no se muestran estas categorías

const CATEGORIAS_APARTE = [
  'colecciones',
  'ediciones-especiales',
  'tapa-dura',
  'box-sets',
  'ingles'
];


// ============================================
// BUSCADOR
// ============================================

function coincideBusqueda(libro, termino) {

  // Separamos el título en palabras

  const palabras = libro.title
    .toLowerCase()
    .trim()
    .split(/[\s\-:(),.]+/);


  // Buscamos palabras que empiecen con lo escrito

  return palabras.some(palabra =>
    palabra.startsWith(termino)
  );

}


// ============================================
// CARRITO GUARDADO
// (Pago.html lo lee de localStorage)
// ============================================

function leerCarritoGuardado() {

  try {

    return JSON.parse(localStorage.getItem('derryBooksCart')) || [];

  }

  catch (error) {

    return [];

  }

}



// ============================================
// ÍCONOS (SVG)
// ============================================

function IconoLupa() {

  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
      <path d="M21 21l-4.3-4.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );

}


function IconoCuenta() {

  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
      <path d="M4 20c1.5-4 5-6 8-6s6.5 2 8 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );

}


function IconoCarrito() {

  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M3 4h2l2.2 12.2a2 2 0 0 0 2 1.8h7.6a2 2 0 0 0 2-1.6L20 8H6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="21" r="1.4" fill="currentColor" />
      <circle cx="17" cy="21" r="1.4" fill="currentColor" />
    </svg>
  );

}


function IconoCorazon({ lleno }) {

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill={lleno ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M12 21s-7.5-4.7-10-9.3C.5 8.4 2.6 5 6.2 5c2 0 3.6 1.1 4.8 2.7C12.2 6.1 13.8 5 15.8 5 19.4 5 21.5 8.4 20 11.7 19.5 16.3 12 21 12 21z" />
    </svg>
  );

}



// ============================================
// HEADER (navbar de Bootstrap)
// ============================================
//
// Props:
//   busqueda         → lo que está escrito en el buscador
//   onBuscar         → función que se llama al escribir
//   cantidadCarrito  → número del circulito rojo

function Header({ busqueda, onBuscar, cantidadCarrito }) {

  // Al apretar Enter o la lupa, bajamos hasta los libros

  function irALibros(evento) {

    evento.preventDefault();

    document
      .getElementById('libros')
      .scrollIntoView({ behavior: 'smooth' });

  }


  return (

    <header className="site-header sticky-top">

      <nav className="navbar navbar-expand-lg navbar-dark" aria-label="Navegación principal">

        <div className="container-xxl">


          {/* LOGO */}

          <a className="navbar-brand py-0" href="#top">
            <img src="imagenes/logo.png" alt="Derry Books" className="brand-logo" />
          </a>


          {/* SIEMPRE VISIBLES: cuenta, carrito y hamburguesa */}

          <div className="header-actions order-lg-last ms-auto ms-lg-3">


            {/* CUENTA */}

            <a href="paginas/Registro.html" className="icon-btn" aria-label="Mi cuenta">
              <IconoCuenta />
            </a>


            {/* CARRITO (abre el offcanvas de Bootstrap) */}

            <button
              type="button"
              className="icon-btn cart-btn"
              aria-label="Carrito"
              data-bs-toggle="offcanvas"
              data-bs-target="#carrito"
              aria-controls="carrito"
            >
              <IconoCarrito />
              <span className="cart-count">{cantidadCarrito}</span>
            </button>


            {/* HAMBURGUESA */}

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#menu-principal"
              aria-controls="menu-principal"
              aria-expanded="false"
              aria-label="Abrir menú"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

          </div>


          {/* MENÚ DESPLEGABLE: links + buscador */}

          <div className="collapse navbar-collapse" id="menu-principal">

            <ul className="navbar-nav me-auto main-nav">

              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="index.html">Inicio</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#libros">Libros</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="paginas/SobreKing.html">Sobre Stephen King</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="paginas/Contacto.html">Contacto</a>
              </li>

            </ul>


            {/* BUSCADOR */}

            <form className="search-box" role="search" onSubmit={irALibros}>

              <input
                type="text"
                placeholder="Buscar libros..."
                autoComplete="off"
                aria-label="Buscar libros"
                value={busqueda}
                onChange={evento => onBuscar(evento.target.value)}
              />

              <button type="submit" aria-label="Buscar">
                <IconoLupa />
              </button>

            </form>

          </div>

        </div>

      </nav>

    </header>

  );

}



// ============================================
// HERO
// ============================================

function Hero() {

  return (

    <section className="hero" id="top">

      <div className="hero-content">

        <h1>
          Elegí tu<br />
          próxima lectura
        </h1>

        <p className="hero-tagline">
          Historias que nunca terminan
        </p>

      </div>

    </section>

  );

}



// ============================================
// BENEFICIOS
// (en vez de repetir 5 veces el mismo HTML,
//  armamos una lista y la recorremos con .map)
// ============================================

const BENEFICIOS = [

  {
    texto: 'Envíos a todo el país',
    icono: (
      <>
        <path d="M1 7h13v9H1z" stroke="currentColor" strokeWidth="1.6" />
        <path d="M14 10h4l4 4v2h-8z" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="6" cy="18" r="1.8" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="17" cy="18" r="1.8" stroke="currentColor" strokeWidth="1.6" />
      </>
    )
  },

  {
    texto: 'Todos los medios de pago',
    icono: (
      <>
        <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M2 9h20" stroke="currentColor" strokeWidth="1.6" />
      </>
    )
  },

  {
    texto: 'Compra segura',
    icono: (
      <>
        <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" stroke="currentColor" strokeWidth="1.6" />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </>
    )
  },

  {
    texto: 'Ediciones especiales',
    icono: (
      <>
        <path d="M4 6c0-1 2-1.5 4-1.5s4 .5 4 1.5v13c0-1-2-1.5-4-1.5s-4 .5-4 1.5z" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 6c0-1 2-1.5 4-1.5s4 .5 4 1.5v13c0-1-2-1.5-4-1.5s-4 .5-4 1.5" stroke="currentColor" strokeWidth="1.6" />
      </>
    )
  },

  {
    texto: 'Solo Stephen King',
    icono: (
      <path
        d="M12 2l2.9 6 6.6.6-5 4.4 1.5 6.5L12 16.8 6 19.5l1.5-6.5-5-4.4 6.6-.6z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    )
  }

];


function Beneficios() {

  return (

    <section className="benefits">

      <div className="benefits-inner">

        {BENEFICIOS.map(beneficio => (

          <div className="benefit" key={beneficio.texto}>

            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              {beneficio.icono}
            </svg>

            <span>{beneficio.texto}</span>

          </div>

        ))}

      </div>

    </section>

  );

}



// ============================================
// CATEGORÍAS
// ============================================
//
// Props:
//   categoriaActual → cuál está marcada
//   onCambiar       → función que se llama al tocar una

function Categorias({ categoriaActual, onCambiar }) {

  return (

    <aside className="col-lg-3 col-xl-2 sidebar" id="categorias">

      <h2>Categorías</h2>


      <ul className="category-list">

        {CATEGORIAS.map(categoria => (

          <li
            key={categoria.id}
            className={categoria.id === categoriaActual ? 'active' : ''}
            onClick={() => onCambiar(categoria.id)}
          >
            {categoria.texto}
          </li>

        ))}

      </ul>


      {/* BANNER (se oculta en celular: d-none d-lg-block) */}

      <div className="sidebar-banner d-none d-lg-block">
        <img src="imagenes/Banner.png" alt="Stephen King" />
      </div>

    </aside>

  );

}



// ============================================
// TARJETA DE LIBRO
// ============================================
//
// Props:
//   libro       → los datos del libro (title, price, image...)
//   esFavorito  → true / false
//   onFavorito  → función al tocar el corazón
//   onAgregar   → función al tocar "Agregar al carrito"

function TarjetaLibro({ libro, esFavorito, onFavorito, onAgregar }) {

  // Estado propio de cada tarjeta:
  // para mostrar "✓ Agregado" durante un ratito

  const [agregado, setAgregado] = useState(false);


  function agregar() {

    onAgregar(libro);

    setAgregado(true);

    setTimeout(() => setAgregado(false), 1100);

  }


  return (

    <div className="col">

      <article className="book-card h-100">

        <div className="book-cover">

          <img
            src={libro.image}
            alt={'Portada de ' + libro.title}
            className="book-cover-img"
          />

          <button
            type="button"
            className={esFavorito ? 'fav-btn active' : 'fav-btn'}
            aria-label="Agregar a favoritos"
            onClick={() => onFavorito(libro.id)}
          >
            <IconoCorazon lleno={esFavorito} />
          </button>

        </div>


        <div className="book-info">

          <h3>{libro.title}</h3>

          <span className="book-price">{money(libro.price)}</span>

          <span className="book-stock">En stock</span>

          <button
            type="button"
            className={agregado ? 'btn-add added' : 'btn-add'}
            onClick={agregar}
          >
            {agregado ? '✓ Agregado' : 'Agregar al carrito'}
          </button>

        </div>

      </article>

    </div>

  );

}



// ============================================
// GRILLA DE LIBROS (grilla de Bootstrap)
// row-cols-2 → 2 por fila en celular ... row-cols-xxl-5 → 5
// ============================================

function GrillaLibros({ libros, favoritos, onFavorito, onAgregar }) {

  return (

    <div className="row row-cols-2 row-cols-md-3 row-cols-xl-4 row-cols-xxl-5 g-3">

      {libros.map(libro => (

        <TarjetaLibro
          key={libro.id}
          libro={libro}
          esFavorito={favoritos.includes(libro.id)}
          onFavorito={onFavorito}
          onAgregar={onAgregar}
        />

      ))}

    </div>

  );

}



// ============================================
// CATÁLOGO
// Decide qué libros mostrar según la búsqueda
// y la categoría
// ============================================

function Catalogo({ categoria, busqueda, favoritos, onFavorito, onAgregar }) {

  // Agrupamos las props que se repiten

  const propsGrilla = { favoritos, onFavorito, onAgregar };


  // ---------- BUSCADOR ----------

  if (busqueda.trim() !== '') {

    const termino = busqueda.toLowerCase().trim();

    const resultados = BOOKS.filter(libro =>
      coincideBusqueda(libro, termino)
    );


    if (resultados.length === 0) {

      return (

        <div className="no-results">

          <h3>No encontramos libros</h3>

          <p>No hay resultados para "{busqueda}".</p>

        </div>

      );

    }


    return <GrillaLibros libros={resultados} {...propsGrilla} />;

  }


  // ---------- COLECCIONES ----------

  if (categoria === 'colecciones') {

    const librosColeccion = BOOKS.filter(libro =>
      libro.cat === 'colecciones'
    );

    // Nombres de colecciones sin repetir

    const colecciones = [
      ...new Set(librosColeccion.map(libro => libro.collection))
    ];


    return colecciones.map(nombre => (

      <div className="collection-section" key={nombre}>

        <h2 className="collection-title">{nombre}</h2>

        <GrillaLibros
          libros={librosColeccion.filter(libro => libro.collection === nombre)}
          {...propsGrilla}
        />

      </div>

    ));

  }


  // ---------- TODOS / CATEGORÍA ----------

  const lista = categoria === 'todos'
    ? BOOKS.filter(libro => !CATEGORIAS_APARTE.includes(libro.cat))
    : BOOKS.filter(libro => libro.cat === categoria);


  return <GrillaLibros libros={lista} {...propsGrilla} />;

}



// ============================================
// CARRITO (offcanvas de Bootstrap)
// ============================================
//
// Props:
//   carrito  → lista de productos
//   onQuitar → función al tocar "Quitar"

function Carrito({ carrito, onQuitar }) {

  const total = carrito.reduce(
    (suma, item) => suma + item.price * item.qty,
    0
  );


  function finalizarCompra() {

    if (carrito.length === 0) {

      alert('Tu carrito está vacío.');

      return;

    }

    // Pago.html lee el carrito desde localStorage

    localStorage.setItem('derryBooksCart', JSON.stringify(carrito));

    window.location.href = 'paginas/Pago.html';

  }


  return (

    <div
      className="offcanvas offcanvas-end cart-drawer"
      tabIndex="-1"
      id="carrito"
      aria-labelledby="carrito-titulo"
    >


      {/* ENCABEZADO */}

      <div className="offcanvas-header cart-drawer-header">

        <h3 className="offcanvas-title" id="carrito-titulo">
          Tu carrito
        </h3>

        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Cerrar carrito"
        ></button>

      </div>


      {/* PRODUCTOS */}

      <div className="offcanvas-body p-0">

        <ul className="cart-items">

          {carrito.length === 0 && (
            <li className="empty">Tu carrito está vacío</li>
          )}

          {carrito.map(item => (

            <li key={item.id}>

              <span>
                {item.title} {item.qty > 1 && `x${item.qty}`}
              </span>

              <span className="d-flex align-items-center gap-2">

                <strong>{money(item.price * item.qty)}</strong>

                <button
                  type="button"
                  className="remove-item"
                  onClick={() => onQuitar(item.id)}
                >
                  Quitar
                </button>

              </span>

            </li>

          ))}

        </ul>

      </div>


      {/* TOTAL Y BOTÓN */}

      <div className="cart-footer">

        <div className="cart-total">
          <span>Total</span>
          <strong>{money(total)}</strong>
        </div>

        <button
          type="button"
          className="btn btn-dark w-100"
          onClick={finalizarCompra}
        >
          Finalizar compra
        </button>

      </div>

    </div>

  );

}



// ============================================
// COMPONENTE PRINCIPAL
// Acá vive el ESTADO de la página.
// Cuando cambia algo con un "set...", React
// vuelve a dibujar solo lo necesario.
// ============================================

function Tienda() {

  // ---------- ESTADO ----------

  const [categoria, setCategoria] = useState('todos');

  const [busqueda, setBusqueda] = useState('');

  const [favoritos, setFavoritos] = useState([]);

  const [carrito, setCarrito] = useState(leerCarritoGuardado);


  // ---------- GUARDAR EL CARRITO ----------
  // Cada vez que cambia el carrito, lo guardamos
  // (así no se pierde si vamos a otra página)

  useEffect(() => {

    localStorage.setItem('derryBooksCart', JSON.stringify(carrito));

  }, [carrito]);


  // ---------- ACCIONES ----------

  function cambiarCategoria(id) {

    setCategoria(id);

    setBusqueda('');

  }


  function alternarFavorito(id) {

    if (favoritos.includes(id)) {

      setFavoritos(favoritos.filter(favId => favId !== id));

    }

    else {

      setFavoritos([...favoritos, id]);

    }

  }


  function agregarAlCarrito(libro) {

    const existe = carrito.find(item => item.id === libro.id);


    if (existe) {

      // Si ya estaba, le sumamos 1 a la cantidad

      setCarrito(
        carrito.map(item =>
          item.id === libro.id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );

    }

    else {

      setCarrito([
        ...carrito,
        { id: libro.id, title: libro.title, price: libro.price, qty: 1 }
      ]);

    }

  }


  function quitarDelCarrito(id) {

    setCarrito(carrito.filter(item => item.id !== id));

  }


  // ---------- DATOS CALCULADOS ----------

  const cantidadCarrito = carrito.reduce(
    (suma, item) => suma + item.qty,
    0
  );


  const titulo = busqueda.trim() !== ''
    ? 'Resultados de búsqueda'
    : categoria === 'todos'
      ? 'Libros destacados'
      : CATEGORIAS.find(c => c.id === categoria).texto;


  // ---------- PANTALLA ----------

  return (

    <>

      <Header
        busqueda={busqueda}
        onBuscar={setBusqueda}
        cantidadCarrito={cantidadCarrito}
      />

      <Hero />

      <Beneficios />


      {/* CONTENIDO PRINCIPAL (grilla de Bootstrap) */}

      <main className="container-xxl main-layout">

        <div className="row g-4">

          <Categorias
            categoriaActual={busqueda.trim() !== '' ? '' : categoria}
            onCambiar={cambiarCategoria}
          />


          <section className="col-lg-9 col-xl-10 catalog" id="libros">

            <div className="catalog-header">

              <h2>{titulo}</h2>

              <a
                href="#libros"
                className="ver-todos"
                onClick={() => cambiarCategoria('todos')}
              >
                Ver todos →
              </a>

            </div>


            <Catalogo
              categoria={categoria}
              busqueda={busqueda}
              favoritos={favoritos}
              onFavorito={alternarFavorito}
              onAgregar={agregarAlCarrito}
            />

          </section>

        </div>

      </main>


      <Carrito
        carrito={carrito}
        onQuitar={quitarDelCarrito}
      />

    </>

  );

}



// ============================================
// INICIAR: dibujar <Tienda /> dentro de <div id="root">
// ============================================

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<Tienda />);