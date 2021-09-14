
import './App.css';
import React,{useState,useEffect} from 'react';
import Homepage from './pages/HomePage/HomePage';
import Shop from './pages/shop/Shop';
import {Switch,Route} from "react-router-dom"
import Header from './components/header-component/Header';
import Account from './pages/Accout/Account';
import { auth,createUserProfile } from './firebase/firebase.util';
import {connect} from 'react-redux';
import { setcurrentUser } from './redux/user/user.action'


function App(props) {
const {setcurrentUser} = props
   // const [currentUser, setcurrentUser] = useState(null)

    const getCurrentUser =  async ()=>{
     
      auth.onAuthStateChanged( async user => {
       
        if(user){
          
         const userAuth = await createUserProfile(user)
        
         setcurrentUser(userAuth)
       
        } else{
          setcurrentUser(null)
         
        }
       
      })
    
    } 

    useEffect(() => {
      getCurrentUser()
      return () => {
        getCurrentUser()
      
      }
    }, [auth])
   
   

    
   
  return (
    
    <div>
      <Header />
      <Switch>
        
        <Route exact path="/" component={Homepage}/>
        <Route  path="/shop" component={Shop}/>
        <Route  path="/signin" component={Account} />
      </Switch>

    
    </div>
  );
}

const mapDispactToProps = dispatch =>({
  setcurrentUser: user => dispatch (setcurrentUser(user))
})

export default connect(null,mapDispactToProps)(App);
