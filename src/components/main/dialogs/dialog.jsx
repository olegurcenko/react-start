import React from "react";
import { Link } from "react-router-dom";
import s from './dialog.module.css';

const setActive = ({isActive}) => isActive ? s.activeLink : '';

export const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
                    <Link className={setActive} to={'/dialogs/' + props.id}>{props.name}</Link>
                    </div>
    )
}