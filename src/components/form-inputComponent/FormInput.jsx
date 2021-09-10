import React from 'react'
import "./FormInput.scss"

function FormInput(props) {
    const {handleChangeEvent,label,...others}= props;
    return (
        <div className="group">
            <input className="form-input" onChange ={handleChangeEvent} {...others}/>
            {
                label ? <label className={`${others.value.label? 'shrink': ''} form-input-label `}>{label}</label> : null
            }
            
        </div>
    )
}

export default FormInput
