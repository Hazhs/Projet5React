import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'

export default function CollapseMenu({ collapseData, customClass }) {
  const [collapseIsOpen, setCollapseIsOpen] = useState(false)
  const contentRef = useRef(null)

  function toggleCollapse() {
    setCollapseIsOpen(!collapseIsOpen)

    const contentHeight = contentRef.current
    if (!collapseIsOpen) {
      contentHeight.style.height = contentHeight.scrollHeight + 30 + 'px'
    } else {
      contentHeight.style.height = '0px'
    }
  }

  CollapseMenu.propTypes = {
    customClass: PropTypes.string
  }

  return (
    <div className={`collapse-menu ${customClass}`}>
      <button onClick={toggleCollapse} className="location-collapse">
        {collapseData.title}
        <FontAwesomeIcon
          icon={faChevronUp}
          style={{fontSize: '1.3rem'}}
          className={`icon ${collapseIsOpen ? 'rotated chevron-up' : 'chevron-up'}`}/>
      </button>
      <div
        ref={contentRef}
        className={`collapse-content ${collapseIsOpen ? 'collapse-content-show' : ''}`}>
        {collapseData.content}
      </div>
    </div>
  )
}