import React, { useState } from 'react';

import NavigationBar from './Navbar';
import Reservas from './Reservas';
import Menu from './Menu';
import Blog from './Blog';

function Main() {

  const [vistaActual, setVistaActual] = useState('menu');

  const cambiarVista = (vista) => {
    setVistaActual(vista);
  };

  const menuItems = [
    {
      image: '../public/img/menu1.png',
      title: 'IPA',
      description: 'Una cerveza India Pale Ale con un sabor amargo y cítrico.',
    },
    {
      image: '../public/img/menu2.png',
      title: 'Red IPA',
      description: 'Una variante de IPA con un matiz rojo y un sabor más equilibrado.',
    },
    {
      image: '../public/img/menu3.png',
      title: 'Stout',
      description: 'Una cerveza oscura y tostada con notas de café y chocolate.',
    },
    {
      image: '../public/img/menu4.png',
      title: 'Lager',
      description: 'Una cerveza ligera y refrescante con un perfil suave y limpio.',
    },
    {
      image: '../public/img/menu5.png',
      title: 'Pilsner',
      description: 'Una cerveza pilsner checa con un sabor a malta y lúpulo equilibrado.',
    },
  ];

  return (
    <div>
      <NavigationBar cambiarVista={cambiarVista} />
      {vistaActual === 'menu' && <Menu menuItems={menuItems}/>}
      {vistaActual === 'blog' && <Blog />}
      {vistaActual === 'reservas' && <Reservas />}
    </div>
  );
}

export default Main;



