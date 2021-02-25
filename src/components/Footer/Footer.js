import React from 'react'
import classes from './Footer.scss'
import mainClasses from '../../App.scss'

const Footer = props => (
    <footer id="footer" className={ classes.footer }>
        <div className={ [ mainClasses.mainLogo, classes.footer__logo ].join(' ') }></div>
        <div className={ classes.footerInfo }>
            <div className={ classes.footerInfo__item}>Основной сайт: kluchi48.ru</div>
            <div className={ classes.footerInfo__item}>Политика обработки персональных данных</div>
            <div className={ classes.footerInfo__item}>Создано web-студией «Rise»</div>
        </div>
        <div className={ classes.footerContacts }>
            <div className={ [ classes.footerContacts__item, classes.footerPhone ].join(' ') }>+7 (4742) 37–66–37</div>
            <div className={ [ classes.footerContacts__item, classes.footerLocation ].join(' ') }>г. Липецк, ул. Стаханова, 19</div>
            <div className={ [ classes.footerContacts__item, classes.footerLocation ].join(' ') }>г. Липецк, ул. Льва Толстого, 2</div>
        </div>
    </footer>
)   

export default Footer