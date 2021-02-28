import React, { Component } from 'react'
import classes from './ContactForm.scss'
import Input from '../UI/Input/Input'
import Checkbox from '../UI/Checkbox/Checkbox'
import Button from '../UI/Button/Button'
import axios from 'axios'

class ContactForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            valuesForSend: {
                userName: '',
                userPhone: '',
            },
            inputs: {
                neme: {
                    label: 'Имя',
                    placeholder: 'Введите имя',
                    valid: false,
                    touched: false,
                    onChangeInput: this.onUserNameChange
                },
                phone: {
                    type: 'tel',
                    label: 'Номер',
                    mask: '+7 (999) 999 99 99',
                    maskChar: '_',
                    placeholder: '+7 (___) ___ __ __',
                    valid: false,
                    touched: false,
                    onChangeInput: this.onUserPhoneChange
                }
            },
            agreement: false,
            isButtonDisabled: true,
            isMessageSended: false,
            messageStatus: '',
            messageAnswer: ''
        }
    }

    onUserNameChange = (e) => {
        let valuesForSend = this.state.valuesForSend
        valuesForSend.userName = e.target.value
        this.setState({ valuesForSend })
    }
    onUserPhoneChange = (e) => {
        let valuesForSend = this.state.valuesForSend
        valuesForSend.userPhone = e.target.value
        console.log(valuesForSend.userPhone);
        this.setState({ valuesForSend })
    }
    onAgreementChange = (e) => {
        this.setState({ agreement: e.target.checked, isButtonDisabled: !e.target.checked })
    }

    handleSubmit(e) {
        e.preventDefault()

        axios({
            method: "POST",
            url: "http://mailsender.promo-kluchi48.ru/",
            data: this.state.valuesForSend
        }).then((response) => {
            if (response.data.status === 'success') {
                this.setState({ 
                    isMessageSended: true, 
                    messageStatus: 'Заявка принята!',
                    messageAnswer: 'Наш риэлтор свяжется с вами в ближайшее время. Пожалуйста, ожидайте звонка.'
                })
            } else if (response.data.status === 'fail') {
                this.setState({ 
                    isMessageSended: true, 
                    messageStatus: 'Возникла ошибка!',
                    messageAnswer: 'Что-то пошло не так и данные не были отправлены. Пожалуйста свяжитесь с нами по контактному номеру, указанному на сайте.'
                })
            }
        })
    }

    renderInputs() {
        return Object.keys(this.state.inputs).map((inputName, index) => {
            const inputRender = this.state.inputs[inputName]
            return (
                <Input
                    key={ inputName + index }
                    type={ inputRender.type }
                    label={ inputRender.label }
                    mask={ inputRender.mask }
                    maskChar={ inputRender.maskChar }
                    placeholder={ inputRender.placeholder }
                    valid={ inputRender.valid }
                    touched={ inputRender.touched }
                    onChangeInput={ inputRender.onChangeInput }
                />
            )
        })
    }
    
    render() {

        let cls = [
            classes.contactForm__wrapper,
            classes.contactForm__wrapper_show
        ]

        let formCls = [
            classes.contactForm__form,
            classes.contactForm__form_hided
        ]

        let msgCls = [
            classes.contactForm__form,
            classes.contactForm__form_hided
        ]

        this.props.isVisible
            ? cls.push(classes.contactForm__wrapper_show)
            : cls.pop(classes.contactForm__wrapper_show)


        if (this.state.isMessageSended) {
            formCls.push(classes.contactForm__form_hided)
            msgCls.pop(classes.contactForm__form_hided)
        } else {
            formCls.pop(classes.contactForm__form_hided)
            msgCls.push(classes.contactForm__form_hided)
        }
        
        return(
            <div className={ cls.join(' ') }>
                <form
                    id="contact-form" 
                    className={ formCls.join(' ') }
                    onSubmit={ this.handleSubmit.bind(this)}
                    method="POST"
                >
                    <span 
                        className={ classes.form_hide }
                        onClick={ this.props.hideContactForm }
                    ></span>
                    <h2 className={ classes.contactForm__title }>Оставить заявку на продажу</h2>
                    { this.renderInputs() }
                    <Checkbox
                        onChangeInput={ this.onAgreementChange }
                    />
                    <Button
                        Disabled={ this.state.isButtonDisabled }
                    />
                </form>
                <div className={ msgCls.join(' ') }>
                    <span 
                        className={ classes.form_hide }
                        onClick={ this.props.hideContactForm }
                    ></span>
                    <h2 className={ classes.contactForm__title }>{ this.state.messageStatus}</h2>
                    <p className={ classes.contactForm__answer }>{ this.state.messageAnswer}</p>
                </div>
            </div>
        )
    }
}

export default ContactForm