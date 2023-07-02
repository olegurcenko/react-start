import React from "react";
import s from './message.module.css';

export const Message = (props) => {
    return (
        <div className={s.message}>{props.text}</div>
    )
}