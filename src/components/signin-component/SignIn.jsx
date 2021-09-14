import React, { useState } from "react";
import ButtonComponent from "../button-component/ButtonComponent";
import FormInput from "../form-inputComponent/FormInput";
import "./SignIn.scss";
import {auth, signInWithGoogle,SignInFunc } from "../../firebase/firebase.util";

function SignIn() {
  const [state, setstate] = useState({ email: "", password: "" });

  const handleChangeEvent = (event) => {
    const { value, name } = event.target;

    setstate({ ...state, [name]: value });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();

    const {email,password} = state
    try {
      const res = await SignInFunc(auth,email,password)
      console.log({res});
      setstate({ email: "", password: "" });
    } catch (error) {
      console.log(error);
      
    }



   
    
  };
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handelSubmit}>
        <FormInput
          handleChangeEvent={handleChangeEvent}
          name="email"
          value={state.email}
          label="Email"
        />

        <FormInput
          handleChangeEvent={handleChangeEvent}
          name="password"
          value={state.password}
          label="Password"
        />

        <div className="buttons">
          <ButtonComponent type="submit">Submit</ButtonComponent>
          <ButtonComponent type="button" isGoogleSignInBtn onClick={signInWithGoogle}>
            Sign in with google{" "}
          </ButtonComponent>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
