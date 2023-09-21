//Blog Component
import React from 'react';
import '../styles/BlogStyle.css'; 

// Componente de Entrada del Blog
function Entrada({ titulo, autor, imagenSrc, contenido }) {
  return (
    <div className="entrada">
      <div className="entrada-titulo">
     
          <h2>{titulo}</h2>
          <p>{autor}</p>
          <div className="entrada-imagen">
            <img src={imagenSrc} alt="Imagen de la entrada" />
          </div>
        </div>
        <div className="entrada-contenido">
     
     
         <div dangerouslySetInnerHTML={{ __html: contenido}} />
         </div>
         <hr/>

      </div>
     
  );
}

// Componente de Blog que muestra varias entradas
function Blog({entradas}) {
  console.log(Object.values(entradas))
  
  return (
    <div className="blog">
      
       {Object.values(entradas).map((entrada, index) => (
        <Entrada
          key={index} // Asegúrate de asignar una clave única a cada componente
          titulo={entrada.Titulo}
          autor={entrada.Autor}
          imagenSrc={entrada.URL_imagen}
          contenido={entrada.Cuerpo}
        />
        ))}    
    </div>)
}
export default Blog;