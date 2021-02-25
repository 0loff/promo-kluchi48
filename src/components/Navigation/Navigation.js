import React from 'react'
import classes from './Navigation.scss'
import { Link, animateScroll as scroll } from 'react-scroll'

const navItems = [
    {
        linkTitle: 'О нас',
        scrollSettings: {
            terget: 'figures',
            offsetPosition: -200,
            animateTime: 500
        }
    },
    {
        linkTitle: 'Преимущества',
        scrollSettings: {
            terget: 'advantages',
            offsetPosition: -200,
            animateTime: 625
        }
    },
    {
        linkTitle: 'Риэлторы',
        scrollSettings: {
            terget: 'employees',
            offsetPosition: -200,
            animateTime: 750
        }
    },
    {
        linkTitle: 'Контакты',
        scrollSettings: {
            terget: 'footer',
            offsetPosition: 0,
            animateTime: 1000
        }
    },
]

 

const Navigation = props => {

    const navMenuClasses = [
        classes.navigation__wrapper,
        classes.navigation__wrapper_show
    ]

    props.isShowed
        ? navMenuClasses.push(classes.header__item_navigation_show)
        : navMenuClasses.pop(classes.header__item_navigation_show)
   
    return (
        <React.Fragment>
            <div className={ navMenuClasses.join(' ') }>
                <nav className={ classes.navigation }>
                    <ul className={ classes.navigation__container }>
                        { navItems.map((item, index) => (                            
                            <li key={ index } className={ classes.navigation__item }>
                                <Link
                                    to={ item.scrollSettings.terget }
                                    spy={ true }
                                    smooth={ true }
                                    offset={ item.scrollSettings.offsetPosition }
                                    duration={ item.scrollSettings.animateTime }
                                >
                                    { item.linkTitle }
                                </Link>
                            </li>
                        )) }           
                    </ul>
                </nav>
            </div>


        <div className="header__menuToggler">
            <input type="checkbox" id="checkbox4" className="checkbox4 visuallyHidden" />
            <label 
                htmlFor="checkbox4" 
                onClick={ props.mobileMenuHandler }
            >
                <div className="hamburger hamburger4">
                    <span className="bar bar1"></span>
                    <span className="bar bar2"></span>
                    <span className="bar bar3"></span>
                    <span className="bar bar4"></span>
                    <span className="bar bar5"></span>
                </div>
            </label>
        </div>
        </React.Fragment>
    )
} 

export default Navigation