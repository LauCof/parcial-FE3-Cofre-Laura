import React, { useState } from 'react'


function Form () {
  const [animal, setAnimal] = useState({
    nombre: '',
    dni: ' ',
    favorito: ' ',
  });
  
  const [show, setShow] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();

    if (animal.nombre.length < 3 && /^\s/.test(animal.nombre)) {
      setError('Por favor chequea que la información sea correcta')
      return;
    }

    if (animal.dni.length < 6) {
      setError('Por favor chequea que la información sea correcta')
      return;
    }

    if (animal.favorito.length < 4) {
        setError('Por favor chequea que la información sea correcta')
        return;
      } else {
        setError(false)
        setShow(true)
      }

  }

  return (
    <><h2> Completa tus datos y dinos tu animal favorito </h2>
        
        <form onSubmit={handleSubmit}>
              <label>Tu nombre:</label>
              <input type="text" onChange = {(event) => setAnimal ({...animal, nombre: event.target.value})}/>
              <label>Tu Dni:</label>
              <input type="text" onChange = {(event) => setAnimal ({...animal, dni: event.target.value})}/>
              <label>Animal Favorito:</label>
              <input type="text" onChange = {(event) => setAnimal ({...animal, favorito: event.target.value})}/>
              <button type="submit">Enviar</button>
            
        </form>
            {show && <h4>{animal.nombre}, con dni {animal.dni}, se ha registrado tu votacion de animal favorito {animal.favorito}, con fecha 28 de febrero.</h4>}
            {error && <p>Por favor chequea que la información sea correcta</p>}
      
      </>
  );
}

export default Form;