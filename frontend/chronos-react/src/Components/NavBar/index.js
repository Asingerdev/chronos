import React  from 'react';
import { Link } from 'react-router-dom';

import { NavStyle } from './style' 

const NavBar = () => {
    return( 
        <NavStyle>
            <nav>
                <main>
                    <div >
                        <Link to="/">Home</Link>
                        <Link to="/timelines">Timelines</Link>
                    </div>
                    <article >

                    </article>
                    <section>
                        <Link to="/">Account</Link>
                        <Link to="/">Login</Link>
                        <Link to="/">Logout</Link>
                    </section>
                </main>
            </nav>
        </NavStyle>
    )
};

export default NavBar;