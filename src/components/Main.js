import React, { useState, useEffect } from 'react';

import NavigationBar from './Navbar';
import Reservas from './Reservas';
import MenuPage from './Menu';
import Blog from './Blog';
import { checkMenuData } from '../controllers/menuController';


function Main() {

  const [vistaActual, setVistaActual] = useState('menu');
  const [menuItems, setMenuItems] = useState([]); // Estado para almacenar los datos del menú

  const cambiarVista = (vista) => {
    setVistaActual(vista);
  };
  useEffect(() => {
    // Cargar datos cuando el componente se monte
    async function loadMenuData() {
      try {
        const data = await checkMenuData();
        setMenuItems(data.chelas);
      } catch (error) {
        console.error('Error fetching data from Firebase:', error);
      }
    }

    loadMenuData();
  }, []);

  /*const menuItems = [
    {
      URL: 'https://firebasestorage.googleapis.com/v0/b/restaurant-app-4d79b.appspot.com/o/CervezaIPA.png?alt=media&token=07890664-140d-49b1-81aa-e62ceb38d710',
      nombre: 'IPA',
      Descripcion: 'Una cerveza IPA',
      precio : 155 },
    {
      URL: '../public/img/menu4.png',
      nombre: 'RedIPA',
      Descripcion: 'Una RedIPA',
      precio : 95 },
    {
      URL: '../public/img/menu4.png',
      nombre: 'Stout',
      Descripcion: 'Una cerveza ligera y refrescante con un perfil suave y limpio.',
      precio : 155
    },
    {
      URL: '../public/img/menu4.png',
      nombre: 'Lager',
      Descripcion: 'Una cerveza ligera y refrescante con un perfil suave y limpio.',
      precio : 155
    },
    {
      
      URL: '../public/img/menu4.png',
      nombre: 'Pilser',
      Descripcion: 'Una cerveza pilsner',
      precio : 105
    },
  ];
*/
  //var datosMenu2;
  
  return (
    <div>
      <NavigationBar cambiarVista={cambiarVista} />
      {vistaActual === 'menu' && <MenuPage menuItems={menuItems}/>}
      {vistaActual === 'blog' && <Blog />}
      {vistaActual === 'reservas' && <Reservas />}
    </div>
  );
}

export default Main;




