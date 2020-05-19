import React from 'react'
import {Link} from 'react-router-dom'
const Nav = () =>{
    return(
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link to="/">
                    <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112" height="28"/>
                </Link>

            </div>
        </nav>
    )
}

export default Nav