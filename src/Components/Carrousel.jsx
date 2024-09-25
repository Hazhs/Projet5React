import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

export default function Carrousel( {locationId}) {
  const locationGallery = locationId.pictures
  const showImgCarrousel = locationGallery.map((imgSrc) =>
  <img src={imgSrc} alt='test'/>)

  return (
    <div className='carrousel'>
      <FontAwesomeIcon icon = {faChevronLeft} 
      style={{fontSize:'3rem'} } 
      className='Chevron-left'/>
      <FontAwesomeIcon icon = {faChevronRight}
      style={{fontSize:'3rem'}} 
      className='Chevron-right'/>
      {showImgCarrousel}
    </div>
  )
}
