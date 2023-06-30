import React from "react";
import { MyPosts } from "../my-posts/myPosts";
import s from './content.module.css'

export const Content = () => {
    return (
        <div className={s.content}>
            <div><img className={s.jungle} src='https://phlearn.com/wp-content/uploads/2019/03/david-klaasen-775082-unsplash.jpg'></img></div>
        {/* <div><img className='google' src='https://www.freepnglogos.com/uploads/google-logo-png/google-logo-icon-png-transparent-background-osteopathy-16.png'></img></div> */}
        <div>ava + descr</div>
        <MyPosts/>
        </div>
    )
}