//Navbar Component
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/style.css';  


function NavigationBar({cambiarVista }) {
  	return (
    <Navbar expand="lg" className="gold">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={process.env.PUBLIC_URL + '/img/logo.png'}
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Button variant="outline-secondary"  onClick={() => cambiarVista('menu')}>
              Menu
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