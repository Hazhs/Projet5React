import React from 'react'
import PropTypes from 'prop-types'

export default function PageBanner({ content, imgPath }) {
  PageBanner.propTypes = {
    imgPath: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([''])])
  }
  const backgroundImg = {
    backgroundImage: `url(${imgPath})`
  }
  return (
    <div className="banner" style={backgroundImg}>
      <h1>{content}</h1>
    </div>
  )
}

