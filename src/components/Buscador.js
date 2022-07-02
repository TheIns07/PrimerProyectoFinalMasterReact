import React, { useState } from 'react'

export const Buscador = ({listadoState, setListadoState}) => {
  const [busqueda, setBusqueda] = useState("")
  const [encontrado, setEncontrado] = useState(false)

  const buscarPelicula = (e) => {
    //Crear estado y actualizarlo
    setBusqueda(e.target.value)

    //Filtrar
    let peliculas_encontradas = listadoState.filter(peli => {
        return peli.titulo.toLowerCase().includes(busqueda.toLowerCase());
    })

    //Comprobar valor
    if(busqueda.length <= 1 || peliculas_encontradas <= 0){
      peliculas_encontradas = JSON.parse(localStorage.getItem("peli"));
      setEncontrado(true)
    } else {
      setEncontrado(false)
    }


    //Actualizar estado
    setListadoState(peliculas_encontradas);
  }
  return (
    <div className = "search">
    <h3 className = "title">Buscador: {busqueda}</h3>
    {(encontrado === true && busqueda.length > 1) && (
      <span className='no-encontrado'>No se ha encontrado ninguna coincidencia.</span>
    )}
    
    <form>
        <input className = "input" 
                type = "text"
                name = "busqueda"
                autoComplete='off'
                value ={busqueda}
                onChange={buscarPelicula}
                />
        <button>Buscar</button>
    </form>
</div>
  )
}
