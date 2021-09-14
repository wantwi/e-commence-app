import React from 'react'
import "./FormInput.scss"

function FormInput(props) {
    const {handleChangeEvent,label,...others}= props;
    return (
        <div className="group">
            <input className="form-input" onChange ={handleChangeEvent} {...others}/>
            <label className="form-input-label">{label}</label>
            
            
        </div>
    )
}

export default FormInput

// {
//     label ? <label className={`${others.value.label? 'shrink1': ''} form-input-label `}>{label}</label> : label
// }