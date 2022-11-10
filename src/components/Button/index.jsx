import React from 'react'
import './styles.css'

const Button = ({label, operation, double, triple, clickButton}) => {


    return (

        <button 
        onClick={() => clickButton(label)}
        className={`
            Button
            ${operation && 'operation'}
            ${double && 'double'}
            ${triple && 'triple'}
        `}>
            {label}
        </button>
    )
}

export default Button