import React from 'react'
import classes from './ScrollToTop.scss'
import { animateScroll as scroll } from 'react-scroll'

const toTopScrolling = () => {
    scroll.scrollToTop();
}

const ScrollToTop = props => {

    let cls = [ 
        classes.scrollToTop, 
        classes.scrollToTop_show 
    ]

    props.isVisible === true
        ? cls.push( classes.scrollToTop_show )
        : cls.pop( classes.scrollToTop_show )

        return (
            <div 
                className={ cls.join(' ') }
                onClick={ toTopScrolling }
            ></div>
        )       
    }   

export default ScrollToTop