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
        const registerResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/users/register`, {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const parsedResponse = await registerResponse.json();
        if (parsedResponse.status.message === 'Success, user is registered') {
            console.log('success login')
            this.props.closeAndLogUser(parsedResponse.data)
        }
    }
    render() {
        return (
            <Modal>
                <section>
                    <header>
                        <ul>
                            <span>
                                <li><h1>Create Account</h1></li>
                            </span>
                            <li><div id='close' onClick={this.props.closeModal}></div></li>
                        </ul>
                    </header>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Username:
                            </label>
                        <input type='text' name='username' value={this.state.username} onChange={this.handleChange} />

                        <label>
                            Password:
                             </label>
                        <input type='password' name='password' value={this.state.password} onChange={this.handleChange} />

                        <label>
                            Email:
                        </label>
                        <input type='text' name='email' value={this.state.email} onChange={this.handleChange} />

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