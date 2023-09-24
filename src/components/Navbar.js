//Navbar Component
import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/style.css';  


function NavigationBar({cambiarVista }) {
  	return (
    <Navbar expand="lg" className="gold">
      <Container>
      <div className="contenedor-logo">
        <Navbar.Brand href="#home">
            <img
              src={process.env.PUBLIC_URL + '/img/logo.png'}
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Button variant="outline-secondary"  onClick={() => cambiarVista('chelas')}>
             Chelas
            </Button>

            <Button variant="outline-secondary" onClick={() => cambiarVista('tacos')} >
              Tacos
            </Button>

            <Button variant="outline-secondary"  onClick={() => cambiarVista('reservas')}>
              Reservas
            </Button>
            
            <Button variant="outline-secondary" onClick={() => cambiarVista('blog')} >
              Blog
            </Button>

       </Container>
    </Navbar>
  );
}

export default NavigationBar;