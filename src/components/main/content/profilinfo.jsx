import React from "react";
import s from './profilinfo.module.css'

export const ProfilInfo = (props) => {
    return (
        <div className={s.profilInfo}>
            <img className={s.avatar} src={props.profilAva}/>
            <p className={s.name}>{props.profilName}</p>
        </div>
    )
}