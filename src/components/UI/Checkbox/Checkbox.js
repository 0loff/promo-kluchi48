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
            Согласен на обработку  <a className={ classes.checkbox__privacyPolicy} href="http://kluchi48.ru/policy" target="_blank" rel="noreferrer">персональных данных</a> 
        </label>
    </div>
)

export default Checkbox