//Menu Component
import React, { useState,useEffect } from 'react';
import '../styles/MenuItemStyle.css'; // Importa el archivo de estilos

function MenuItem({ URL, Nombre, Descripcion,precio, onClick }) {
  return (
    <div className="menu-item" onClick={() => onClick(URL, Nombre, Descripcion,precio)}>
      <img  src={URL} alt={Nombre} className="menu-item-image" />
      <div className="menu-item-details">
        <h3>{Nombre}</h3>
        <p>{Descripcion}</p>
        <p>Precio: ${precio}</p>
      </div>
    </div>
  );
}

function MenuItemList({ menuItems, onItemClick }) {
  console.log(menuItems)
  return (
    <div className="menu-item-list">
      {menuItems.map((item, index) => (
      
        <MenuItem
          key={index}
          URL={item.URL}
          Nombre={item.Nombre}
          descripcion={item.Descripcion}
          precio={item.Precio}
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

  const handleItemClick = (URL, Nombre, descripcion,precio) => {
    setSelectedItem({ URL, Nombre, descripcion,precio });
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
