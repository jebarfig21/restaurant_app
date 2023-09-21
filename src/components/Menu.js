//Menu Component
import React, { useState } from 'react';
import '../styles/MenuItemStyle.css'; // Importa el archivo de estilos

function MenuItem({ URL, Nombre, Descripcion,Precio, onClick }) {
  return (
    <div className="menu-item" onClick={() => onClick(URL, Nombre, Descripcion,Precio)}>
      <img  src={URL} alt={Nombre} className="menu-item-image" />
      <div className="menu-item-details">
        <h3>{Nombre}</h3>
        <p>Precio: ${Precio}</p>
      </div>
    </div>
  );
}

function MenuItemList({ menuItems, onItemClick }) {
  return (
    <div className="menu-item-list">
      {menuItems.map((item, index) => (
      
        <MenuItem
          key={index}
          URL={item.URL}
          Nombre={item.Nombre}
          Descripcion={item.Descripcion}
          Precio={item.Precio}
          onClick={onItemClick}
        />
      ))}
    </div>
  );
}

function MenuItemDetail({ image, title, description, precio }) {
  return (
    <div className="menu-item-detail">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>Precio: ${precio}</p>
      <p>{description}</p>
    </div>
  );
}

function MenuPage({ menuItems }) {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (URL, Nombre, Descripcion,Precio) => {
    setSelectedItem({ URL, Nombre, Descripcion,Precio });
  };


  return (
      
    <div className="menu-page">   
      <div className="menu-container">
        <div className="menu-item-container menu-list">
         
            <MenuItemList menuItems={menuItems} onItemClick={handleItemClick} />
        </div>
      <div className="menu-item-container menu-detail">
        {selectedItem ? (
          <MenuItemDetail
            image={selectedItem.URL}
            title={selectedItem.Nombre}
            description={selectedItem.Descripcion}
            precio={selectedItem.Precio}
          />
        ) : (
          <p>Selecciona un elemento del menú para ver los detalles.</p>
        )}
      </div>
    </div>
    </div>
  );
}

export default MenuPage;
