import React from "react";
// import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "./Header.scss";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.util";
import CardIcon from "../cart-icon/CardIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";
import { HeaderContainer,LogoContainer,OptionDiv,OptionLink,OptionsContainer } from "./HeaderComponentStyle";

//new additions
import {createStructuredSelector} from "reselect"
import {selectCartHidden} from "../../redux/cart/cart.selector"
import {selectCurrentUser} from "../../redux/user/user.selector"

function Header({ currentUser,hidden }) {
 
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <img className="logo" src={Logo} alt="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">
          SHOP
        </OptionLink>
        <OptionLink to="/contact">
          CONTACT
        </OptionLink>
        {currentUser ? (
          <OptionDiv onClick ={() =>auth.signOut()}> SIGN OUT</OptionDiv>
        ) : (
          <OptionLink to="/signin">
            SIGN IN
          </OptionLink>
        )}
        <CardIcon/>
      </OptionsContainer> 
          {
            hidden ? null :  <CartDropdown/>
          }
      
    </HeaderContainer>
  );
}


const mapStateToProps = createStructuredSelector ({
  currentUser:selectCurrentUser,
  hidden:selectCartHidden

})


// const mapStateToProps =() =>({
//   currentUser:selectCurrentUser(state),
//   hidden:selectCartHidden(state)

// })

export default connect(mapStateToProps)(Header);


// return (
//   <div className="header">
//     <Link to="/" className="logo-container">
//       <img className="logo" src={Logo} alt="logo" />
//     </Link>
//     <div className="options">
//       <Link className="option" to="/shop">
//         SHOP
//       </Link>
//       <Link className="option" to="/shop">
//         CONTACT
//       </Link>
//       {currentUser ? (
//         <div className ="option" onClick ={() =>auth.signOut()}> SIGN OUT</div>
//       ) : (
//         <Link className="option" to="/signin">
//           SIGN IN
//         </Link>
//       )}
//       <CardIcon/>
//     </div> 
//         {
//           hidden ? null :  <CartDropdown/>
//         }
    
//   </div>
// );