import React from 'react'
import {Link} from 'react-router-dom'
import Logo from "../../assets/logo.png"
import "./Header.scss"

function Header() {
    return (
        <div className="header">
            <Link to="/" className="logo-container">
                <img className="logo" src={Logo}/>
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    SHOP
                </Link>
                <Link className="option" to="/shop">
                    CONTACT
                </Link>
                <Link className="option" to="/signin">
                    SIGN IN
                </Link>
            </div>
        </div>
    )
}

export default Header
