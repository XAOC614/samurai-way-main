import React from "react";
import c from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className={c.nav}>
            <div className={c.item}><NavLink to='/profile' activeClassName={c.active}>Profile</NavLink></div>
            <div className={c.item}><NavLink to='/dialogs' activeClassName={c.active}>Messages</NavLink></div>
            <div className={c.item}><NavLink to='/news' activeClassName={c.active}>News</NavLink></div>
            <div className={c.item}><NavLink to='/music' activeClassName={c.active}>Music</NavLink></div>
            <div className={c.item}><NavLink to='/setting' activeClassName={c.active}>Settings</NavLink></div>
        </nav>
    )
}