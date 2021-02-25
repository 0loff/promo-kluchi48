import camelcase from 'camelcase'
import React from 'react'
import classes from './Button.scss'

const Button = props => (
    <button 
        className={ [classes.Button, classes.Button_short, classes.Button_short_inForm].join(' ') }
        disabled={ props.Disabled }    
    >
        Отправить
    </button>
)

export default Button