import React from 'react'
import "./ButtonComponent.scss"

function ButtonComponent({children,isGoogleSignInBtn,...otherprops}) {
    return (
        <button className={`${isGoogleSignInBtn? 'google-sign-in': ''} custom-button`} {...otherprops}>
            {children}
        </button>
    )
}

export default ButtonComponent
