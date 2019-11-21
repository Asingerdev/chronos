import React  from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return( 
        <nav>
            <main>
                <div >
                    <NavLink href="/">Home</NavLink>
                    <Link href="/timelines">Timelines</Link>
                </div>
                <article >

                </article>
                <section>
                    <NavLink href="/Home">Account</NavLink>
                    <NavLink href="/Home">Login</NavLink>
                    <NavLink href="/Home">Logout</NavLink>
                </section>
            </main>
        </nav>
    )
};

export default NavBar;