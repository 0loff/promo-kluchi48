import React from 'react'
import classes from './Application.scss'
import buttonClasses from '../UI/Button/Button.scss'

const Application = props => (
    <article className={ classes.application}>
        <div className={ classes.application__content + ' container'}>
            <div className={ classes.application__title}>Хотите выгодно { props.trait } недвижимость?</div>
            <h2>Мы знаем, как это сделать!</h2>
            <div className={ classes.application__buttons}>
                <a 
                    href="tel:+74742376637"
                    className={[ buttonClasses.LinkAsButton, buttonClasses.LinkAsButton_short, buttonClasses.LinkAsButton_white ].join(' ') }
                >
                    { props.buttonLabelCall }
                </a>
                <span 
                    className={[ buttonClasses.LinkAsButton, buttonClasses.LinkAsButton_short, buttonClasses.LinkAsButton_white ].join(' ') }
                    onClick = { props.showContactFrom } 
                >
                    { props.buttonLabel }
                </span>
            </div>
        </div>
    </article>
)

export default Application