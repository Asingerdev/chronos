import React, { Component } from 'react';

import { Modal } from './style'

class LoginModal extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
            email: '',
            showError: null
        }
    }
    handleChange = (e) => {
        this.setState({ [e.currentTarget.name]: e.currentTarget.value })
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        const loginResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/users/login`, {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const parsedResponse = await loginResponse.json();
        if (parsedResponse.status.message === 'user is logged in') {
            this.props.closeAndLogUser(parsedResponse.data)
        } else {
            this.setState({
                showError: true
            })
        }
    }
    render() {
        return (
            <Modal>
                <section>
                    <header>
                        <ul>
                            <span>
                                <li><h1>Sign in</h1></li>
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
                            {
                                this.state.showError ? <h2>email or password is incorrect</h2> : null
                            }
                        </footer>
                    </form>
                </section>
            </Modal>
        )
    }
}

export default LoginModal