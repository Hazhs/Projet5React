import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

export default function Slideshow({ locationId }) {
  const locationGallery = locationId.pictures;
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextIndex = () => {
    setCurrentIndex(
      (actualIndex) => (actualIndex + 1) % locationGallery.length
    )
  }
  const prevIndex = () => {
    setCurrentIndex((actualIndex) =>
      actualIndex === 0 ? locationGallery.length - 1 : actualIndex - 1
    )
  }

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const Resizing = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', Resizing);
    return () => {
      window.removeEventListener('resize', Resizing);
    }
  }, [])

  const iconResponsive = windowWidth < 650 ? '3rem' : '6rem'
  const onePicture = locationGallery.length === 1
  const customClass = onePicture ? 'hide' : ''

  return (
    <div
      className="slideshow"
      style={{ backgroundImage: `url(${locationGallery[currentIndex]})`}}>
      <div className={`chevrons ${customClass}`}>
        <FontAwesomeIcon
          icon={faChevronLeft}
          style={{fontSize: `${iconResponsive}`, color: 'white', cursor: 'pointer'}}
          className="chevron-left"
          onClick={prevIndex}/>
        <FontAwesomeIcon
          icon={faChevronRight}
          style={{fontSize: `${iconResponsive}`,color: 'white',cursor: 'pointer'}}
          className="chevron-right"
          onClick={nextIndex}/>
      </div>
      <span className={`pictures-index ${customClass}`}>
        {currentIndex + 1}/{locationGallery.length}
      </span>
    </div>
  )
}
