import React,{useState} from 'react'

function SignIn() {
    const [state, setstate] = useState({email:"", password:""})

    const handleChangeEvent = (e)=>{

        const {value, name} = e

        setstate({[name]:value})
    }

    const handelSubmit =(e)=>{
            e.preventDefault()
            setstate({email:"",password:""})
            console.log({state});
    }
    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit ={handelSubmit}>
                <label>Email</label>
                <input type="email" onChange={handleChangeEvent} name="email" value = {state.email} placeholder="Your email"/>

                <label>Email</label>
                <input type="password" onChange={handleChangeEvent} name="email" value = {state.password} placeholder="Your email"/>

                <button type="submit">Save</button>
            </form>
            
        </div>
    )
}

export default SignIn
