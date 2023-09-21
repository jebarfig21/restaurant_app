import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-light">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-6">
            <h3>Información de Contacto</h3>
            <p>Dirección: Tlalpan, Ciudad de México, México</p>
            <p>Email: jbarajas.fig@gmail.com</p>
          </div>
          <div className="col-md-6">
            <h3>Enlaces Útiles</h3>
            <ul className="list-unstyled">
              <li><a href="https://github.com/jebarfig21/">Inicio</a></li>
              <li><a href="https://github.com/jebarfig21/">Acerca de Nosotros</a></li>
              <li><a href="https://github.com/jebarfig21/">Contacto</a></li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="text-center">&copy; 2023 UCamp, Proyecto 4 Restaurante React .</p>
      </div>
    </footer>
  );
}

export default Footer;
