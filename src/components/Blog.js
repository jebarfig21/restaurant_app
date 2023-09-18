//Blog Component
import React from 'react';

// Componente de Entrada del Blog
function Entrada({ titulo, resumen, imagenSrc, contenido }) {
  return (
    <div className="entrada">
      <div className="entrada-imagen">
        <img src={imagenSrc} alt="Imagen de la entrada" />
      </div>
      <div className="entrada-contenido">
        <h2>{titulo}</h2>
        <p>{resumen}</p>
        <p>{contenido}</p>
      </div>
    </div>
  );
}

// Componente de Blog que muestra varias entradas
function Blog() {
  return (
    <div className="blog">
      <Entrada
        titulo="Título de la Entrada 1"
        resumen="Resumen de la Entrada 1"
        imagenSrc="URL_IMAGEN_1"
        contenido="Contenido de la Entrada 1..."
      />
      <Entrada
        titulo="Título de la Entrada 2"
        resumen="Resumen de la Entrada 2"
        imagenSrc="URL_IMAGEN_2"
        contenido="Contenido de la Entrada 2..."
      />
      {/* Puedes agregar más entradas aquí */}
    </div>
  );
}
export default Blog;