import React, { useEffect, useState } from 'react'
import { Editar } from './Editar';

export const Listado = ({listadoState, setListadoState}) => {
    const [editar, setEditar] = useState(0);
    useEffect(() => {
        console.log("Componente de peliculas cargado")  
        conseguirPeliculas();
    }, [])

    const conseguirPeliculas = () => {
        let peliculas = JSON.parse(localStorage.getItem("peli"));
        setListadoState(peliculas);
        return peliculas;
    }
    const borrarPeliculas = (id) => {
        //Get movies
        let peliculas = conseguirPeliculas();
        //Filter movies
        let array_peliculas = peliculas.filter
            (peliculas => peliculas.id !== parseInt(id))
        //Actualizar estado listado
        setListadoState(array_peliculas)
        //Actualizar datos
        localStorage.setItem('peli', JSON.stringify(array_peliculas));

    }
    
    return (
        <>
        {listadoState != null ? 
             listadoState.map(peli => {
            return(
            <article key = {peli.id} className="peli-item">
                <h3 className="title">{peli.titulo}</h3>
                <p className="descripcion">{peli.description}</p>
                <button className="edit" onClick = {() => setEditar(peli.id)}>Editar</button>
                <button className="delete" onClick = {() => borrarPeliculas(peli.id)}>Borrar</button>
                {editar === peli.id && (
                    <Editar peli = {peli} conseguirPeliculas = {conseguirPeliculas} setEditar = {setEditar} setListadoState = {setListadoState}/>
                )}
            </article>)
        }) :  <h2>No hay peliculas disponibles para mostrar</h2>}
            
        </>
    )
}
