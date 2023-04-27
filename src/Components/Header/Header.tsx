import React from 'react'

import { NavLink } from 'react-router-dom'

import classes from './Header.module.css'
import { PropsHeaderType } from './HeaderContainer'
export const Header = (props: PropsHeaderType) => {
  debugger

  return (
    <header className={classes.header}>
      <img src="https://pbs.twimg.com/profile_images/831981845713649664/BvP8XIjt_400x400.jpg" />
      <div className={classes.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  )
}
