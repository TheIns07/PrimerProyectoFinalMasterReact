import React from 'react'

export const Crear = () => {
  return (
    <div className = "add">
    <h3 className = "title"> Añadir pelicula</h3>
    <form>
        <input type = "text" className = "input" placeholder="titulo"/>
        <textarea placeholder="descripcion" className = "input"></textarea>
        <input type = "submit" value  ="guardar"/>
    </form>
</div>
  )
}
