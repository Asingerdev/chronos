import React  from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return( 
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
    )
};

export default NavBar;