import React from 'react'
import classes from './Footer.scss'
import mainClasses from '../../App.scss'
import { Link } from 'react-router-dom'

const Footer = props => (
    <footer id="footer" className={ classes.footer }>
        <Link className={ classes.footer__link } to="/"><div className={ [ mainClasses.mainLogo, classes.footer__logo ].join(' ') }></div></Link>
        <div className={ classes.footerInfo }>
            <div className={ classes.footerInfo__item}>Основной сайт: <a href="http://kluchi48.ru/" target="_blank" rel="noreferrer">kluchi48.ru</a></div>
            <div className={ classes.footerInfo__item}><a href="http://kluchi48.ru/policy" target="_blank" rel="noreferrer">Политика обработки персональных данных</a></div>
            <div className={ classes.footerInfo__item}>Создано web-студией <strong>«Rise»</strong></div>
        </div>
        <div className={ classes.footerContacts }>
            <div className={ [ classes.footerContacts__item, classes.footerPhone ].join(' ') }><a href="tel:+74742376637">+7 (4742) 37–66–37</a></div>
            <div className={ [ classes.footerContacts__item, classes.footerLocation ].join(' ') }>г. Липецк, ул. Стаханова, 19</div>
            <div className={ [ classes.footerContacts__item, classes.footerLocation ].join(' ') }>г. Липецк, ул. Льва Толстого, 2</div>
        </div>
    </footer>
)   

export default Footer