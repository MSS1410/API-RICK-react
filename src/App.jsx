import { useState, useEffect } from 'react'
import './app.css'
import Character from './components/Character'

function App() {
  //configuro el estado en un array vacio
  const [characters, setCharacters] = useState([])

  //quiero cargar la iformacion de la api con useEffect y el array vacio para que sea sola una vez

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      //esta url pasa todos los personajes
      //.then porque es promesa
      .then((response) => response.json())
      //paso la respuesta de la peticion a json, el resultado de la traduccion lo llamo data.
      //dentro de data ataco la propiedad results que contiene la lista de personajes
      .then((data) => {
        setCharacters(data.results)
      })
      .catch((error) => {
        console.error('error fecthing Rick Api', error)
      })
    //uso la data results para actualizar el estado character
  }, []) //mando el array vacio para mounting)

  return (
    <div className='App'>
      <h1>Rick and Morty Characters</h1>
      {/* me interesa mostrar lo que he obtenido de la api, debo mapear */}
      <div className='characters-container'>
        {characters.map((character) => (
          <Character key={character.id} data={character} />
        ))}
        {/* con map recorro cada elemento de characters, que lo he llenado con la lista de characters, y para cada uno de ellos tenemos un character, mapeo el componente llamado Character que seria mi hijo, y le paso el prop key con id unico y el prop data con el objeto que contiene la informacion del personaje*/}
      </div>
    </div>
  )
}

export default App
