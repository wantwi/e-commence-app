import React from 'react'
import "./ButtonComponent.scss"

function ButtonComponent({children,isGoogleSignInBtn,inverted,...otherprops}) {
    return (
        <button className={`${inverted? 'inverted': ''} ${isGoogleSignInBtn? 'google-sign-in': ''} custom-button`} {...otherprops}>
            {children}
        </button>
    )
}

export default ButtonComponent
