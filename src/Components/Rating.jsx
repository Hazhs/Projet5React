import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function Rating({ rating }) {
  const stars = Array(5)
    .fill(0)
    .map((_, index) => (
      <FontAwesomeIcon
        key={index}
        icon={faStar}
        style={{
          fontSize: '1.4rem',
          marginLeft: '5px',
          color: index < rating ? '#FF6060' : '#E3E3E3'
        }}
      />
    ))

  return <div>{stars}</div>;
}
