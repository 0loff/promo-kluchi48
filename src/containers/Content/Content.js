import React, { Component } from 'react'
import classes from './Content.scss'
import Banner from '../../components/Banner/Banner'
import Figures from '../../components/Figures/Figures'
import Advantages from '../../components/Advantages/Advantages'
import Attainment from '../../components/Attainment/Attainment'
import Workflow from '../../components/Workflow/Workflow'
import Employees from '../../components/Employees/Employees'
import Application from '../../components/Application/Application'
import ContactForm from '../../components/ContactForm/ContactForm'
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop'

const buyingParams = {
    bannerHeader: 'Подберем недвижимость по договору за 7 дней',
    bannerSubHeader: 'Поможем найти жильё в Липецке безопасно, быстро и дешево',
    attaintmentTitle: ' attaintment__content_action-buy',
    workFlow: [
        {
            title: 'Свяжитесь с нами',
            content: 'Мы поможем определить требования к объекту и заключим договор.',
            img: ' workflowList__item_callUs'
        },
        {
            title: 'Подождите немного',
            content: 'Мы подберем несколько объектов для просмотра и проведем показ.',
            img: ' workflowList__item_await'
        },
        {
            title: 'Совершите покупку',
            content: 'Мы соберем документы и поможем оформить сделку по всем правилам.',
            img: ' workflowList__item_money'
        }
    ],
    actionTrait: 'купить'
}

const sellingParams = {
    bannerHeader: 'Продадим недвижимость за 30 дней без предоплаты',
    bannerSubHeader: 'Поможем продать жильё в Липецке безопасно, быстро и дорого',
    attaintmentTitle: ' attaintment__content_action-sell',
    workFlow: [
        {
            title: 'Свяжитесь с нами',
            content: 'Мы проведем оценку и заключим договор о продаже объекта.',
            img: ' workflowList__item_callUs'
        },
        {
            title: 'Подождите немного',
            content: 'Мы опубликуем объявления, примем звонки и проведем показ объекта.',
            img: ' workflowList__item_await'
        },
        {
            title: 'Получите деньги',
            content: 'Мы соберем документы и поможем оформить сделку по всем правилам.',
            img: ' workflowList__item_money'
        }
    ],
    actionTrait: 'продать'
}

class Content extends Component {

    constructor(props) {
        super(props)
        this.state = {
            pageParams: {},
            attaintmentMonth: '',
            isScrollToTopVisible: false,
            isContactFormVisible: false,
            buttonLabelCall: 'Позвонить',
            buttonsLabelContact: 'Оставить заявку'
        }
        this.props.location.pathname === '/buying'
            ? this.state.pageParams = buyingParams
            : this.state.pageParams = sellingParams

        switch (new Date().getMonth() - 1) {
            case -1:  this.state.attaintmentMonth = 'в декабре';   break;
            case 0:   this.state.attaintmentMonth = 'в январе';    break;
            case 1:   this.state.attaintmentMonth = 'в феврале';   break;
            case 2:   this.state.attaintmentMonth = 'в марте';     break;
            case 3:   this.state.attaintmentMonth = 'в апреле';    break;
            case 4:   this.state.attaintmentMonth = 'в мае';       break;
            case 5:   this.state.attaintmentMonth = 'в июне';      break;
            case 6:   this.state.attaintmentMonth = 'в июле';      break;
            case 7:   this.state.attaintmentMonth = 'в августе';   break;
            case 8:   this.state.attaintmentMonth = 'в сентябре';  break;
            case 9:   this.state.attaintmentMonth = 'в октябре';   break;
            case 10:  this.state.attaintmentMonth = 'в ноябре';    break;
            case 11:  this.state.attaintmentMonth = 'в декабре';   break;
        }
    } 

    componentDidMount() {
        window.onscroll = () => {
            let heightFromTop = document.documentElement.scrollTop
            if (heightFromTop > 690 && this.state.isScrollToTopVisible === false) {
                this.setState({ isScrollToTopVisible: true })
            } else if (heightFromTop < 689 && this.state.isScrollToTopVisible === true) {
                this.setState({ isScrollToTopVisible: false })
            }
        }
    }

    showContactFrom = () =>  {
        this.setState({ isContactFormVisible: true })
    }

    hideContactForm = () => {
        this.setState({ isContactFormVisible: false})
    }
    
    render() {

        return(
            <div className={ classes.content }>
                <Banner
                    header = { this.state.pageParams.bannerHeader }
                    subHeader = { this.state.pageParams.bannerSubHeader }
                    buttonLabelCall={ this.state.buttonLabelCall }
                    buttonLabelContact = { this.state.buttonsLabelContact }
                    showContactFrom = { this.showContactFrom }
                />
                <Figures />
                <Advantages />
                <Attainment
                    month = { this.state.attaintmentMonth }
                    title = { this.state.pageParams.attaintmentTitle }
                />
                <Workflow
                    workFlowList = { this.state.pageParams.workFlow }
                />
                <Employees />
                <Application
                    trait = { this.state.pageParams.actionTrait }
                    buttonLabelCall={ this.state.buttonLabelCall }
                    buttonLabel = { this.state.buttonsLabelContact }
                    showContactFrom = { this.showContactFrom }
                />
                <ContactForm
                    isVisible = { this.state.isContactFormVisible}
                    hideContactForm = { this.hideContactForm }
                />
                <ScrollToTop
                    isVisible = { this.state.isScrollToTopVisible }
                />
            </div>
        )
    }
}

export default Content