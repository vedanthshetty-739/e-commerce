import React from 'react'
import { createPortal } from 'react-dom';


function Model({ children, onClose }) {
    const portalElement = document.querySelector('.model-portal');
    return (createPortal(
        (<div>
            {children}
        </div>), portalElement
    )
    )
}

export default Model
