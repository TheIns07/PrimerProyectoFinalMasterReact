import React from 'react'
import '../index.css'
export const Editar = ({peli, conseguirPeliculas, setEditar, setListadoState}) => {
  const titulo_componente = "Editar Pelicula"
  const guardarEdicion = (e, id) => {
    e.preventDefault();

    let target = e.target;

    const peliculas_almacenadas = conseguirPeliculas();
    const index = peliculas_almacenadas.findIndex(peliculas =>  peliculas.id === id);

    let pelicula_actualizada = {
      id,
      titulo: target.titulo.value,
      description: target.description.value,
    };

    peliculas_almacenadas[index] = pelicula_actualizada;

    localStorage.setItem("peli", JSON.stringify(peliculas_almacenadas));

    setListadoState(peliculas_almacenadas)
    setEditar(0);

    
  }
  return (
    <div className = "add">
        <h3>{titulo_componente}</h3>
        <form onSubmit={e => guardarEdicion(e, peli.id)}>
            <input type="text" name = "titulo" id = "titulo" className="input" defaultValue={peli.titulo}/>
        <textarea
          id = "description" name = "description" placeholder="descripcion" className="input" defaultValue={peli.description}/>

        <input type = "submit" className = "editar" value = "Actualizar"/>
        </form>
    </div>
  )
}
