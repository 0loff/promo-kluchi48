import React, { Component } from 'react'
import classes from './Figures.scss'

export default class Figures extends Component {
    state = {
        keysInFigures: {
            totalArea: {
                figures: 0,
                description: 'Жилой недвижимости в продаже',
                steps: 13400,
                stepDelay: 1000
            },
            objectsForSell: {
                figures: 0,
                description: 'Объектов продается сейчас',
                steps: 338,
                stepDelay: 1000
            },
            objectsSeld: {
                figures: 0,
                description: 'Проданных объектов',
                steps: 1740,
                stepDelay: 1000
            },
            happyClients: {
                figures: 0,
                description: 'Довольных клиента',
                steps: 2380,
                stepDelay: 1000
            },
            expirience: {
                figures: 0,
                description: 'Лет работы',
                steps: 7,
                stepDelay: 1000
            },
            offices: {
                figures: 0,
                description: 'Оффиса в липецке',
                steps: 2,
                stepDelay: 1000
            },
            expiriencedEmployee: {
                figures: 0,
                description: 'Опытных риэлтора',
                steps: 21,
                stepDelay: 1000
            },
            lawyers: {
                figures: 0,
                description: 'Юриста в штате',
                steps: 2,
                stepDelay: 1000
            },
        }
    }

    // componentDidMount() {
    //     let figuresContainer = document.querySelector('#figures').getBoundingClientRect()
    //     let pureObj = this.state.keysInFigures
        // window.onscroll = () => {
            // let topWindow = document.documentElement.scrollTop;
            // let testscrollTop =  document.documentElement.scrollTop;
            // console.log(figuresContainer.top - testscrollTop)
            // console.log(testscrollTop)

            // for (let item of pureObj) {
            //     let interval = setInterval(() => {
            //         if (item.figures <= item.steps) {
            //             let temptest = item.figures + 1
            //                 this
            //         } else {
            //             clearInterval(interval)
            //         }
            //     }, item.stepDelay)
            // }

            // let interval = setInterval
        // }
    //  }

    render() {
        return(
            <article id="figures" className="container">
                <h2>Ключи-Недвижимость в цифрах</h2>
                <div 
                    className={classes.figures}>

                    {/* { this.state.keysInFigures.map((item, index) => (
                        <div key={ index } className={classes.figures__item}>
                            <span>{ item.figures }</span>
                            <span>{ item.description }</span>
                        </div>
                    ))} */}

                    




                    <div className={classes.figures__item}>
                        <span>13 400 м</span>
                        <span>Жилой недвижимости в продаже</span>
                    </div>
                    <div className={classes.figures__item}>
                        <span>338</span>
                        <span>Объектов продается сейчас</span>
                    </div>
                    <div className={classes.figures__item}>
                        <span> 1 740</span>
                        <span>Проданных объектов</span>
                    </div>
                    <div className={classes.figures__item}>
                        <span>2 380</span>
                        <span>Довольных клиента</span>
                    </div>
                    <div className={classes.figures__item}>
                        <span>7</span>
                        <span>Лет работы</span>
                    </div>
                    <div className={classes.figures__item}>
                        <span>2</span>
                        <span>Оффиса в липецке</span>
                    </div>
                    <div className={classes.figures__item}>
                        <span>21</span>
                        <span>Опытных риэлтора</span>
                    </div>
                    <div className={classes.figures__item}>
                        <span>2</span>
                        <span>Юриста в штате</span>
                    </div>
                </div>
            </article>
        )
    }
}
