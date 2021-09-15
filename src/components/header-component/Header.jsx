import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "./Header.scss";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.util";
import CardIcon from "../cart-icon/CardIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";

function Header({ currentUser,hidden }) {
  console.log({currentUser});
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <img className="logo" src={Logo} />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <div className ="option" onClick ={() =>auth.signOut()}> SIGN OUT</div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CardIcon/>
      </div>
          {
            hidden ? null :  <CartDropdown/>
          }
      
    </div>
  );
}



const mapStateToProps =({user:{currentUser},cart:{hidden}}) =>({
  currentUser,
  hidden

})

export default connect(mapStateToProps)(Header);
