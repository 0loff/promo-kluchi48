import React from 'react'
import classes from './Attainment.scss'

 const Attainment = props => (
    <article className={ classes.attainment }>
        <div className="container">
            <div className={ classes.attainmentContent}>
                <span className={[classes.attainmentContent__item, classes.attainmentContent__item_month].join(' ')}>{ props.month }</span>
                <span className={[classes.attainmentContent__item, classes.attainmentContent__item_action].join(' ') +  props.title }></span>
                <span className={[classes.attainmentContent__item, classes.attainmentContent__item_quantity].join(' ')}><span>{ props.count }</span>{ props.word }</span>
            </div>
        </div>
    </article>
)

export default Attainment