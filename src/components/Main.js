import React, { useState, useEffect } from 'react';

import NavigationBar from './Navbar';
import Reservas from './Reservas';
import MenuPage from './Menu';
import Blog from './Blog';
import Footer from './Footer';
import { checkMenuData } from '../controllers/menuController';
import { checkBlogData } from '../controllers/blogController';


function Main() {

  const [vistaActual, setVistaActual] = useState('chelas');
  const [menuItems, setMenuItems] = useState([]); // Estado para almacenar los datos del menú
  const [blogItems, setBlogItems] = useState([]); // Estado para almacenar los datos del menú
  const [tacosItems, setTacosItems] = useState([]); // Estado para almacenar los datos del menú
  
  const cambiarVista = (vista) => {
    setVistaActual(vista);
  };

  useEffect(() => {
    async function loadMenuData() {
      try {
        const data = await checkMenuData();
        setMenuItems(data.chelas);
        setTacosItems(data.tacos);
      } catch (error) {
        console.error('Error fetching data from Firebase:', error);
      }
    }

    loadMenuData();
  }, []);

  useEffect(() => {
    async function loadBlogData() {
      try {
        const data = await checkBlogData();
        setBlogItems(data);
        console.log(data)
      } catch (error) {
        console.error('Error fetching data from Firebase:', error);
      }
    }

    loadBlogData();
  }, []);


  return (
    <div>
      <NavigationBar cambiarVista={cambiarVista} />
      <br/>

      {vistaActual === 'tacos' && <MenuPage menuItems={tacosItems}/>}
      {vistaActual === 'chelas' && <MenuPage menuItems={menuItems}/>}
      {vistaActual === 'blog' && <Blog entradas={blogItems}/>}
      {vistaActual === 'reservas' && <Reservas />}
      <br/>
      <Footer/>
    </div>
  );
}

export default Main;




