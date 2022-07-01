import React, { useState } from 'react'

export const Crear = () => {

  const titul = "Añadir Pelicula";
  const [pelicula, setPelicula] = useState({
    titulo: '',
    description: ''
  })
  
  const conseguirDatosForm = e =>{
      e.preventDefault();
      let target = e.target;
      let titulo = target.titulo.value;
      let description = target.description.value;

      let peli = {
        id: new Date().getTime(),
        titulo,
        description
      };
      setPelicula(peli)
      console.log(peli)
  }

  const {titulo, description} = pelicula;

  return (
    <div className="add">
      <h3 className="title"> {titul}</h3>
      <strong>
        {(titulo && description) && "Has creado la pelicula: "+titulo}
      </strong>
      
      <form onSubmit={conseguirDatosForm}>
        <input type="text" name = "titulo" id = "titulo" className="input" placeholder="titulo" />
        <textarea id = "description" name = "description" placeholder="descripcion" className="input"></textarea>
        <input id = "save" type="submit" value="guardar" />
      </form>
    </div>
  )
}
