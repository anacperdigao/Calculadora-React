import React, { useState } from 'react'
import './styles.css'
import Button from '../Button'
import Display from '../Display'



const Calculadora = () => {

    const [display, setDisplay] = useState('') //Usei para armazenar o numero digitado

    
    const handleClick = (label) => {
        setDisplay(display + label)

        if(label === 'AC'){
            setDisplay('')
        }

        else if (label === '='){
            if(Number.isInteger(eval(display))){
                setDisplay(eval(display))
            } 
            else {
                setDisplay(eval(display).toFixed(2))
            }
        }
    }


    return (
        <div className='Calculadora'>
            <Display value={display} />
            <Button clickButton={handleClick} label="AC" triple />
            <Button clickButton={handleClick} label="/" operation />
            <Button clickButton={handleClick} label="7" />
            <Button clickButton={handleClick} label="8" />
            <Button clickButton={handleClick} label="9" />
            <Button clickButton={handleClick} label="*" operation />
            <Button clickButton={handleClick} label="4" />
            <Button clickButton={handleClick} label="5" />
            <Button clickButton={handleClick} label="6" />
            <Button clickButton={handleClick} label="-" operation />
            <Button clickButton={handleClick} label="1" />
            <Button clickButton={handleClick} label="2" />
            <Button clickButton={handleClick} label="3" />
            <Button clickButton={handleClick} label="+" operation />
            <Button clickButton={handleClick} label="0" double />
            <Button clickButton={handleClick} label="." />
            <Button clickButton={handleClick} label="=" operation />
        </div>
    )
}

export default Calculadora