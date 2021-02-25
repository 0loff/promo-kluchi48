import React from 'react'
import classes from './Banner.scss'
import buttonClasses from '../UI/Button/Button.scss'

const Banner = props => (
    <article className={ classes.banner }>
        <div className="container">
            <div className={ classes.banner__content }>
                <h1 className={ classes.banner__title }>{ props.header }</h1>                                
                <p className={ classes.banner__subTitle}>{ props.subHeader }</p>
                <div className={ classes.banner__buttons }>
                    <a 
                        href="tel:+74742376637"
                        className={[ buttonClasses.LinkAsButton, buttonClasses.LinkAsButton_short ].join(' ') }
                    >
                        { props.buttonLabelCall }
                    </a>
                    <span 
                        className={[ buttonClasses.LinkAsButton, buttonClasses.LinkAsButton_short ].join(' ') }
                        onClick = { props.showContactFrom } 
                    >
                        { props.buttonLabelContact }
                    </span>
                </div>
            </div>
        </div>
    </article>
)

export default Banner