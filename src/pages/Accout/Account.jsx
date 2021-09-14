import React from 'react'
import SignIn from '../../components/signin-component/SignIn'
import SignUp from '../../components/signup-componemt/SignUp'
import './Account.scss'

function Account() {
    return (
        <div className="sign-in-and-sign-up">
           <SignIn/>
           <SignUp/>
        </div>
    )
}

export default Account
