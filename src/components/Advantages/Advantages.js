import React from 'react'
import classes from './Advantages.scss'
import imgKeys from '../../img/keys.png'

const Advantages = props => (
    <article id="advantages" className="container" onScroll={ (event) => {console.log(event.target.offsetTop) }}>
        <h2>Почему стоит обратиться к нам</h2>
        <div className={ classes.advantagesWrapper }>
            <div className={ classes.advantages }>
                <div className={ classes.advantages__item}>
                    <h3>Найдем быстро</h3>
                    <span>Едежневно проводим осомотр сотен объектов недвижимости. Поэтому быстро подберем подходящее жилье.</span>
                </div>
                <div className={ classes.advantages__item}>
                    <h3>Проверяем продавца</h3>
                    <span>Исключаем покупку недвижимости у мошенников. Проводим детальную проверку продавца перед сделкой.</span>
                </div>
                <div className={ classes.advantages__item}>
                    <h3>Готовим документы</h3>
                    <span>Каждая сделка курируется юристом. Он собирает документы и готовит индвидуальный договор.</span>
                </div>
                <div className={ classes.advantages__item}>
                    <h3>Покупаем дешево</h3>
                    <span>Знание рынка и умение вести переговоры позволяет покупать объекты по выгодной цене.</span>
                </div>
            </div>
            <img
                className={ classes.advImgKeys } 
                src={ imgKeys } 
                alt="Ключи"
            />
        </div>
    </article>
)

export default Advantages