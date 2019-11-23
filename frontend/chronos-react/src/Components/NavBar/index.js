import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
        this.setState({ currentUser: user })
    }

    openLogin = () => {
        this.setState({
            showLoginModal: true
        })
    }

    closeAndLogUser = () => {
        this.setState({
            loggedUser: true,
            showLoginModal: false
        })
    }

    openRegister = () => {
        this.setState({
            showRegisterModal: true
        })
    }

    closeAndRegisterUser = () => {
        this.setState({
            loggedUser: true,
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
            </NavStyle >
        )

    }
};

export default NavBar;