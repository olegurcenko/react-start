import React from "react";
import s from './post.module.css';

export const Post = (props) => {
    return (
        <div className={s.block}>
          <div className={s.item}>
            <img src={props.imgLink} alt=""/>
            <ul>
              <p>{props.text}</p>
              <span className={s.like}>{props.likesCount}&hearts; Like</span>
            </ul>
          </div>
        </div>
    )
}