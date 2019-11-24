import React, { Component } from 'react';
import RegisterModal from '../RegisterModal'
import LoginModal from '../LoginModal'


import NavStyle from './style'
import NavLink from './stylelink'

class NavBar extends Component {
    constructor() {
        super();

        this.state = {
            loggedUser: false,
            currentUser: {},
            showLoginModal: null,
            showRegisterModal: null
        }
    }

    openRegister = () => {
        this.setState({
            showRegisterModal: true
        })
    }

    openLogin = () => {
        this.setState({
            showLoginModal: true
        })
    }

    closeAndLogUser = user => {
        this.setState({
            loggedUser: true,
            currentUser: user,
            showLoginModal: false,
            showRegisterModal: false
        })
    }

    openLogin = () => {
        this.setState({
            showLoginModal: true
        })
    }

    closeModal = () => {
        this.setState({
            showLoginModal: false,
            showRegisterModal: false
        })
    }

    render() {
        return (
            <NavStyle>
                <nav>
                    <main>
                        <div >
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/timelines">Timelines</NavLink>
                        </div>
                        <article >
                            <img src="https://img.icons8.com/material-sharp/452/historical.png" alt="Chronos" />
                            <br />
                            Chronos
                    </article>
                        <section>
                            {
                                this.state.loggedUser
                                    ?
                                    <NavLink>{this.state.currentUser.username}'s Account</NavLink>
                                    :
                                    <NavLink onClick={this.openLogin}>Login</NavLink>
                            }
                            {
                                this.state.loggedUser
                                    ?
                                    <NavLink>Logout</NavLink>
                                    :
                                    <NavLink onClick={this.openRegister}>Register</NavLink>
                            }
                        </section>
                    </main>
                </nav>
                {
                    this.state.showLoginModal
                        ?
                        <LoginModal closeAndLogUser={this.closeAndLogUser} closeModal={this.closeModal} />
                        :
                        null
                }
                {
                    this.state.showRegisterModal
                        ?
                        <RegisterModal closeAndLogUser={this.closeAndLogUser} closeModal={this.closeModal} />
                        :
                        null
                }
            </NavStyle >
        )

    }
};

export default NavBar;