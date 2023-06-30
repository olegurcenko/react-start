import React from "react";
import s from './Nav.module.css'
// let classes = `${s.item2} ${s.item3}`;

export const Nav = () => {
    return (
        <nav className={s.nav}>
        <div className={s.item}>
          <a href='/content'>Profile</a>
        </div>
        <div className={s.item}>
          <a href='/dialogs'>Messages</a>
        </div>
        <div className={s.item}>
          <a href='/news'>News</a>
        </div>
        <div className={s.item}>
          <a href='/music'>Music</a>
        </div>
        <div className={s.item}>
          <a href='/settings'>Settings</a>
        </div>
      </nav>
    )
}