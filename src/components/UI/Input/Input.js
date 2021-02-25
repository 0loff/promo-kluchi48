import React from 'react'
import classes from './Input.scss'
import InputMask from 'react-input-mask';

function isInvalid({valid, touched, shouldValidate}) {
    return !valid && shouldValidate && touched
}

const Input = props => {
    const inputType = props.type || 'text'
    const mask = props.mask || ''
    const maskChar = props.maskChar || ' '
    // if (isInvalid(props)) {
    //     cls.push(classes.invalid)
    // }

        return(
            <div className={ classes.field }>
                <label 
                    htmlFor=""
                    className={ classes.field__label }
                >
                    { props.label }
                </label>
                <InputMask 
                    type={ inputType }
                    className={ classes.field__input }
                    mask={ mask }
                    maskChar={ maskChar }
                    placeholder={ props.placeholder }
                    onChange={ props.onChangeInput }
                />
            </div>
        )
    
}

export default Input