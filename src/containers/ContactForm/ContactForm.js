import React, { Component } from 'react'
import axios from 'axios'

class ContactForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            userPhone: '' 
        }
    }
    onUserNameChange(e) {
        this.setState({ userName: e.target.value })
    }
    onUserPhoneChange(e) {
        this.setState({ userPhone: e.target.value })
    }
    handleSubmit(e) {
        e.preventDefault()

        console.log(this.state)

        axios({
            method: "POST",
            url: "http://mailsender.loc:8080/",
            data: this.state
        }).then((response) => {
            if (response.data.status === 'success') {
                console.log(response);
                alert('Message Sent.')
                this.resetForm()
            } else if (response.data.status === 'fail') {
                alert('Message faild to send.')
                console.log(response)
            }
        }).catch ((response) => {
            console.log(response)

        }

        )

        
    }
    render() {
        return(
            <div className='contactFormWrapper'>
                <form 
                    id="contact-form" 
                    onSubmit={ this.handleSubmit.bind(this) } 
                    method="POST">
                    <div className="field field_input">
                        <label htmlFor="userName"></label>
                        <input 
                            type="text"
                            className="field__input" 
                            value={ this.state.userName } 
                            onChange={ this.onUserNameChange.bind(this) } 
                        />
                    </div>
                    <div className="field field_phone">
                        <label htmlFor="userPhone"></label>
                        <input 
                            type="phone"
                            className="field__input" 
                            value={ this.state.userPhone } 
                            onChange={ this.onUserPhoneChange.bind(this) } 
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="button"
                    >Submit</button>
                </form>
            </div>
        )
    }
}

export default ContactForm