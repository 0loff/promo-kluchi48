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
            isButtonDisabled: true
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
            url: "http://mailsender.loc:8080/",
            data: this.state.valuesForSend
        }).then((response) => {
            if (response.data.status === 'success') {
                alert('Message Sent.')
                this.resetForm()
            } else if (response.data.status === 'fail') {
                alert('Message faild  to send.')
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

        this.props.isVisible
            ? cls.push(classes.contactForm__wrapper_show)
            : cls.pop(classes.contactForm__wrapper_show)

        return(
            <div className={ cls.join(' ') }>
                <form
                    id="contact-form" 
                    className={ classes.contactForm__form }
                    onSubmit={ this.handleSubmit.bind(this)}
                    method="POST"
                >
                    <span 
                        className={ classes.form_hide }
                        onClick={ this.props.hideContactForm }
                    ></span>
                    <h2 className={ classes.contactForm__title }>Оставить заявку на продажу</h2>
                    { this.renderInputs() }
                    {/* <Input
                        label={ 'Имя' }
                        placeholder={ 'Введите имя' }
                        onChangeInput={ this.onUserNameChange }
                    />
                    <Input
                        label={ 'Номер' }
                        placeholder={ '+7 ( ___ ) ___ __ __' }
                        onChangeInput={ this.onUserPhoneChange }
                    /> */}
                    <Checkbox
                        onChangeInput={ this.onAgreementChange }
                    />
                    <Button
                        Disabled={ this.state.isButtonDisabled }
                    />
                </form>
            </div>
        )
    }
}

export default ContactForm