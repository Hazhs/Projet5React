import React, { useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

function CollapseMenu ({collapseData}) {
    const [collapseIsOpen, setCollapseIsOpen] = useState(false);
    function toggleCollapse () {
        setCollapseIsOpen(!collapseIsOpen);
    };

    return (
        <div className="collapse-menu" >
            <button onClick={toggleCollapse}>
                {collapseData.title}
                <FontAwesomeIcon icon = {faChevronUp} 
                style={{fontSize:'1.3rem'}} 
                className={`icon ${collapseIsOpen ? 'rotated chevron-up' : 'chevron-up'}`}/>
                </button>
            {collapseIsOpen && (
                <p>{collapseData.content}</p>
            )}
        </div>
    )
}

export default CollapseMenu