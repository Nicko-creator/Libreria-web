// ============================================
// COMPONENTES COMPARTIDOS (React)
// Se usan en todas las páginas de la carpeta /paginas
//
//   <Navbar />  → header con menú hamburguesa (Bootstrap)
//   <Footer />  → pie de página
// ============================================


// ============================================
// NAVBAR
// ============================================
//
// Props (datos que le pasamos al componente):
//
//   activo        → qué link se marca en rojo:
//                   'inicio' | 'libros' | 'king' | 'contacto'
//   mostrarVolver → true para mostrar "← Volver a la tienda"

function Navbar({ activo, mostrarVolver }) {

  // Lista de links: en vez de repetir 4 veces el <li>,
  // los recorremos con .map()

  const links = [
    { id: 'inicio',   texto: 'Inicio',             href: '../index.html' },
    { id: 'libros',   texto: 'Libros',             href: '../index.html#libros' },
    { id: 'king',     texto: 'Sobre Stephen King', href: 'SobreKing.html' },
    { id: 'contacto', texto: 'Contacto',           href: 'Contacto.html' }
  ];


  return (

    <header className="site-header sticky-top">

      <nav className="navbar navbar-expand-lg navbar-dark" aria-label="Navegación principal">

        <div className="container-xxl">


          {/* LOGO */}

          <a className="navbar-brand py-0" href="../index.html">
            <img src="../imagenes/logo.png" alt="Derry Books" className="brand-logo" />
          </a>


          {/* SIEMPRE VISIBLES: volver (opcional) + hamburguesa */}

          <div className="header-actions order-lg-last ms-auto ms-lg-3">

            {mostrarVolver && (
              <a href="../index.html" className="back-link">
                ← Volver a la tienda
              </a>
            )}

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


          {/* MENÚ DESPLEGABLE */}

          <div className="collapse navbar-collapse" id="menu-principal">

            <ul className="navbar-nav me-auto main-nav">

              {links.map(link => (

                <li className="nav-item" key={link.id}>

                  <a
                    href={link.href}
                    className={link.id === activo ? 'nav-link active' : 'nav-link'}
                    aria-current={link.id === activo ? 'page' : undefined}
                  >
                    {link.texto}
                  </a>

                </li>

              ))}

            </ul>

          </div>

        </div>

      </nav>

    </header>

  );

}


// ============================================
// FOOTER
// ============================================

function Footer() {

  const anio = new Date().getFullYear();

  return (

    <footer className="site-footer">

      <p>
        © {anio} Derry Books · Librería especializada en Stephen King
      </p>

    </footer>

  );

}