import React, { Component } from 'react'
import classes from './Header.scss'
import mainClasses from '../../App.scss'
import { Route, Link } from "react-router-dom"
import Navigation from '../Navigation/Navigation'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isNavShow: false,
        }
    }

    menuToggler = () => {
        this.setState({ isNavShow: !this.state.isNavShow })
    }        
           
    render() {       
        return (
            <header className={classes.header}>
                <Link to="/"> <div className={mainClasses.mainLogo}></div> </Link>               
                    <Route path="/" render={( props ) => ( props.location.pathname !== "/") && <Navigation
                        isShowed = { this.state.isNavShow }
                        mobileMenuHandler = { this.menuToggler }
                    />} />
                <div className={classes.header__item_phone}><a href="tel:+74742376637"> +7 (4742) 37–66–37</a></div>
            </header>
        )
    }
}

export default Header