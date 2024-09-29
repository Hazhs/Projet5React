import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({cardElement}) {
  const backgroundImg = {
    backgroundImage:`url(${cardElement.cover})`,
}
  
  return (
    <Link to={`/location/${cardElement.id}`} className='card' style={backgroundImg} id={cardElement.id}>
      <div className='card-title'>
        <span>{cardElement.title}</span>
      </div>
    </Link>
  )
}
