import React from "react";
import s from './Nav.module.css';
import { NavLink } from "react-router-dom";

// let classes = `${s.item2} ${s.item3}`;
const setActive = ({isActive}) => isActive ? s.activeLink : '';

export const Nav = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink className={setActive} to='/profile'>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={setActive} to='/dialogs'>Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={setActive} to='/news'>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={setActive} to='/music'>Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={setActive} to='/settings'>Settings</NavLink>
      </div>
    </nav>
  )
}