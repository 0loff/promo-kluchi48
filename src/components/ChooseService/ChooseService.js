import React from 'react'
import classes from './ChooseService.scss'
import LinkAsButton from '../UI/Button/LinkAsButton'
import buttonClasses from '../UI/Button/Button.scss'

const ChooseService = props => (
    <div className={classes.ChooseService}>
        <h2>Хотите купить или продать недвижимость?</h2>
        <div className={classes.ChooseService__buttonsContainer}>
            <LinkAsButton
                label="Я покупаю недвижимость"
                moveTo='/buying'
                usingClasses={[ buttonClasses.LinkAsButton, buttonClasses.LinkAsButton_long ].join(' ')}
            />
            <LinkAsButton
                label="Я продаю недвижимость"
                moveTo='/selling'
                usingClasses={[ buttonClasses.LinkAsButton, buttonClasses.LinkAsButton_long ].join(' ')}
            />
        </div>
    </div>
)

export default ChooseService