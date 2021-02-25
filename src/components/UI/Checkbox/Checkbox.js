import React from 'react'
import classes from './Checkbox.scss'

const Checkbox = props => (
    <div className={ classes.checkbox }>
        <input 
            type="checkbox"
            id="agreement"   
            className={ classes.checkbox__input } 
            onChange={ props.onChangeInput }
        />
        <label 
            htmlFor="agreement" 
            className={ classes.checkbox__label }            
        >            
            Согласен на обработку персональных данных
        </label>
    </div>
)

export default Checkbox