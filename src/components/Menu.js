//Menu Component
import React, { useState } from 'react';

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
