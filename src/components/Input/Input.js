import React from 'react'
import './Input.css'
function Input({ type, placeholder, label, setState}) {
    return (
        <div className='input-container'>
            <p className='label'>{label}</p>
            <input 
            type={type}  
            onChange={(e)=> setState(e.target.value)} 
            className='custom-input' 
            placeholder={placeholder}
            required >
            </input>
        </div>
    )
}

export default Input