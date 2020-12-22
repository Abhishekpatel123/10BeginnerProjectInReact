import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = ()=>{

    

    return(
        <>
            <nav className = "navStyle">
                <NavLink exact activeClassName = "active-class" className = 'link' to = '/' >Home</NavLink>
                <NavLink activeClassName = "active-class" className = 'link' to = '/about'  >About</NavLink>
                <NavLink activeClassName = "active-class" className = 'link' to = '/contact' >Contact</NavLink>
            </nav>
        </>
    )
}
export default Navbar;