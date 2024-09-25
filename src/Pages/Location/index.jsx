import React from 'react'
import Carrousel from '../../Components/Carrousel.jsx'
//import Collapse from '../../Components/Collapse.jsx'
import data from '../../data.json'
import { useParams } from 'react-router-dom'

// Composant Carrousel/Tag/Rating/Collapse/ description directement dans la fonction de Location/index.jsx
export default function Location() {
  const { id } = useParams()
  const item = data.find((item) => item.id === id)

  return (
    <div className='location'>
        <Carrousel locationId={item}/>

    </div>
  )
}
