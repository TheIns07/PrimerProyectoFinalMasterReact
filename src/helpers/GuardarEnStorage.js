
export const GuardarEnStorage = (clave, elemento) => {
    //conseguir elementos que ya tenemos
    let elementos = JSON.parse(localStorage.getItem(clave))

    //Si es array
    if(Array.isArray(elementos)){
      elementos.push(elemento)
    }else {
      elementos = [elemento];
    }
    console.log(elementos)
    //Se añade
    localStorage.setItem(clave, JSON.stringify(elementos))
    //Regresar objeto
    return elemento;
  }