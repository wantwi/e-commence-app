import React,{useState} from "react";
import FormInput from "../form-inputComponent/FormInput";
import ButtonComponent from "../button-component/ButtonComponent";
import { createUser,auth} from "../../firebase/firebase.util"

import "./SignUp.scss";

const initialState ={
    displayName:'',
    email:'',
    password:'',
    confrimPassword:''
}

function SignUp() {
  const [state, setstate] = useState(initialState)

  const handleChangeEvent = (event) => {
     
    const { value, name } = event.target;
   

    setstate({ ...state,[name]: value });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
   
    if(state.password !==state.confrimPassword){
        alert('Password don not match')
        return;
    }

    try {
       await createUser(auth,state)

    } catch (error) {
        console.error({error});
    }
  
   
  };

  return (
    <div className="sign-up">
      <h2>I do not have an account</h2>
      <span>Sign up with your email and password</span>
     
      <form onSubmit={handelSubmit}>
        <FormInput
          name="displayName"
          type ="text"
          label = "Display Name"
          value = {state.displayName}
          handleChangeEvent={handleChangeEvent}

        />

        <FormInput
          name="email"
          type ="email"
          label = "Email"
          value = {state.email}
          handleChangeEvent={handleChangeEvent}
          
        />
         <FormInput
          name="password"
          type ="password"
          label = "Password"
          value = {state.password}
          handleChangeEvent={handleChangeEvent}
          
        />
         <FormInput
          name="confrimPassword"
          type ="password"
          label = "Confirm Password"
          value = {state.confrimPassword}
          handleChangeEvent={handleChangeEvent}
          
        />


        <div className="buttons">
          <ButtonComponent type="submit">SIGN UP</ButtonComponent>
        
         
        </div>
      </form>
    </div>
  );
}

export default SignUp;
