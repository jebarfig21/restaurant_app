//Menu Component
import React, { useState,useEffect } from 'react';
import { firestore } from '../firebase/firebase';

function MenuItem({ image, title, description, onClick }) {
  return (
    <div className="menu-item" onClick={() => onClick(image, title, description)}>
      <img src={image} alt={title} />
    </div>
  );
}

function MenuItemList({ menuItems, onItemClick }) {
  return (
    <div className="menu-item-list">
      {menuItems.map((item, index) => (
        <MenuItem
          key={index}
          image={item.image}
          title={item.title}
          description={item.description}
          onClick={onItemClick}
        />
      ))}
    </div>
  );
}

function MenuItemDetail({ image, title, description }) {
  return (
    <div className="menu-item-detail">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function MenuPage({ menuItems }) {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (image, title, description) => {
    setSelectedItem({ image, title, description });
  };

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const menuSnapshot = await firestore
          .collection('menu') // Nombre de la colección "menu"
          .doc('vsoe9Umoblhf7880a3QY') // ID del documento en "menu"
          .collection('vsoe9Umoblhf7880a3QY') // Nombre de la subcolección "vsoe9Umoblhf7880a3QY"
          .get();

        if (!menuSnapshot.empty) {
          // Verifica si hay documentos en la subcolección
          menuSnapshot.forEach((doc) => {
            console.log('ID del documento:', doc.id);
            console.log('Datos del documento:', doc.data());
            // Aquí puedes procesar los datos y mostrarlos en tu componente si es necesario
          });
        } else {
          console.log('No se encontraron documentos en la subcolección');
        }
      } catch (error) {
        console.error('Error al obtener datos del menú:', error);
      }
    };

    fetchMenuData(); // Llama a la función para obtener datos del menú cuando el componente se monta
  }, []);


  return (
    <div className="menu-page">
      <div className="menu-item-container">
        <MenuItemList menuItems={menuItems} onItemClick={handleItemClick} />
      </div>
      <div className="menu-item-container">
        {selectedItem ? (
          <MenuItemDetail
            image={selectedItem.image}
            title={selectedItem.title}
            description={selectedItem.description}
          />
        ) : (
          <p>Selecciona un elemento del menú para ver los detalles.</p>
        )}
      </div>
    </div>
  );
}

export default MenuPage;
