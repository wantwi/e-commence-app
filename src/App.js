
import './App.css';
import React,{useState,useEffect} from 'react';
import Homepage from './pages/HomePage/HomePage';
import Shop from './pages/shop/Shop';
import {Switch,Route,Redirect} from "react-router-dom"
import Header from './components/header-component/Header';
import Account from './pages/Accout/Account';
import { auth,createUserProfile } from './firebase/firebase.util';
import {connect} from 'react-redux';
import { setcurrentUser } from './redux/user/user.action'


function App(props) {
const {setcurrentUser,currentUser} = props
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
        <Route exact path="/signin" render={()=>currentUser? (<Redirect to='/' />) : <Account/>} />
      </Switch>

    
    </div>
  );
}


const mapStateToProps =({user}) =>({
  currentUser: user.currentUser

})

const mapDispactToProps = dispatch =>({
  setcurrentUser: user => dispatch (setcurrentUser(user))
})

export default connect(mapStateToProps,mapDispactToProps)(App);
