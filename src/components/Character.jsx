import { useState } from 'react'
import './Character.css'

//creo componente hijo character, que recibira el promp de data
const Character = ({ data }) => {
  const [rotation, setRotation] = useState(0)
  //genero estado para la rotacion se inicia en 0

  //Funcion para la rotatcion  con cada click 180grados
  const handleImgClick = () => {
    setRotation((prevRotation) => (prevRotation === 0 ? 180 : 0))
  }
  //utilico una funcion que recibe el valor anterior, porque mi estado depende de como se encuentre antes del click; si el estado anterior es 0 entonces devuelvo 180g sino es 0 = 180 devuelvo imagen posicion inicial

  return (
    <div className='character-card'>
      <h2>{data.name}</h2>
      <img
        src={data.image}
        alt={data.name}
        onClick={handleImgClick}
        //patron estandard para realizar la rotacion con valor previo
        style={{
          transform: `rotate(${rotation}deg)`,
          transition: 'transform0.5s'
        }}
      />
      {/* accedo a el status y la specie de cada result para añadir un poco mas de info */}
      <p>Status:{data.status}</p>
      <p>Species:{data.species}</p>
    </div>
  )
}

export default Character
