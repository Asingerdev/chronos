import React, { Component } from 'react';

import { Modal } from './style'

class RegisterModal extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
            email: ''
        }
    }
    handleChange = (e) => {
        this.setState({ [e.currentTarget.name]: e.currentTarget.value })
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        console.log('this is the handle submit')
        console.log(process.env)
        const registerResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/users/register`, {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const parsedResponse = await registerResponse.json();

        if (parsedResponse.status.message === 'Success') {
            console.log('success login')
            this.props.doUpdateCurrentUser(parsedResponse.data)
            this.props.history.push('/games');
        }
    }
    render() {
        return (
            <Modal>
                <section>
                    <header>
                        <ul>
                            <span>
                                <li><h1>Add Timeline</h1></li>
                            </span>
                            <li><div id='close' onClick={this.props.closeModal}></div></li>
                        </ul>
                    </header>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Username:
                            </label>
                        <input type='text' name='title' value={this.state.title} onChange={this.handleChange} />

                        <label>
                            Password:
                             </label>
                        <input type='text' name='date_from' value={this.state.date_from} onChange={this.handleChange} placeholder='yyyy-mm-dd' />

                        <label>
                            Email:
                        </label>
                        <input type='text' name='date_to' value={this.state.date_to} onChange={this.handleChange} placeholder='yyyy-mm-dd' />

                        <footer>
                            <button id='submit'><p>Submit</p></button>
                        </footer>
                    </form>
                </section>
            </Modal>
        )
    }
}

export default RegisterModal