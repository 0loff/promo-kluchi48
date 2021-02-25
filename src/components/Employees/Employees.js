import React, { Component } from 'react'
import classes from './Employees.scss'
import data from './data.json'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default class Employees extends Component {
    render() {
        const settings = {
            dots: false,
            arrows: true,
            infinite: true,
            autoplay: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 620,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        };
        return(
            <article id="employees" className={ classes.employees + ' container'}>
                <h2>Наши риэлторы начнут уже сегодня</h2>
                <Slider {...settings}>
                    {
                        data.map((item, index) => (
                            <div className={ classes.employees__item } key={ index }>
                                <img src={`images/employees/${item.img}.png`} alt="employee_photo" />
                                <span>{ item.name }</span>
                            </div>
                        ))
                    }
                </Slider>
            </article>
        )
    }
}