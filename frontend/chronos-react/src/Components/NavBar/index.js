import React  from 'react';
import { Link } from 'react-router-dom';

import NavStyle from './style' 
import NavLink from './stylelink'

const NavBar = () => {
    return( 
        <NavStyle>
            <nav>
                <main>
                    <div > 
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/timelines">Timelines</NavLink>      
                    </div>
                    <article >

                    </article>
                    <section>
                        <NavLink to="/">Account</NavLink>
                        <NavLink to="/">Login</NavLink>
                        <NavLink to="/">Logout</NavLink>
                    </section>
                </main>
            </nav>
        </NavStyle>
    )
};

export default NavBar;