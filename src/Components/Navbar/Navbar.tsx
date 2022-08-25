import React from "react";
import c from './Navbar.module.css'
export const Navbar = () => {
    return (
        <nav className={c.nav}>
            <div className={`${c.item} ${c.active}`}><a>Perofile</a></div>
            <div className={c.item}><a>Messages</a></div>
            <div className={c.item}><a>News</a></div>
            <div className={c.item}><a>Music</a></div>
            <div className={c.item}><a>Settings</a></div>

        </nav>
    )
}