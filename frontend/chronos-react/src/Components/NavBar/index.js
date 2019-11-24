import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

    doUpdateCurrentUser = user => {
        this.setState({
            currentUser: user,
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
                            <NavLink to="/">Account</NavLink>
                            <NavLink to="/">Login</NavLink>
                            <NavLink onClick={this.openRegister}>Register</NavLink>

                        </section>
                    </main>
                </nav>
                {
                    this.state.showLoginModal
                        ?
                        <LoginModal closeAndAdd={this.closeAndLogUser} closeModal={this.closeModal} />
                        :
                        null
                }
                {
                    this.state.showRegisterModal
                        ?
                        <RegisterModal closeAndRegisterUser={this.closeAndRegisterUser} closeModal={this.closeModal} handleEditChange={this.handleEditChange} timelineToEdit={this.state.timelineToEdit} />
                        :
                        null
                }
            </NavStyle >
        )

    }
};

export default NavBar;