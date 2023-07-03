import React from "react";
import { MyPosts } from "../my-posts/myPosts";
import s from './content.module.css';
import { ProfilInfo } from "./profilinfo";



export const Content = (props) => {
    return (
        <div className={s.content}>
            <div><img className={s.jungle} src='https://phlearn.com/wp-content/uploads/2019/03/david-klaasen-775082-unsplash.jpg'></img></div>
        <ProfilInfo profilAva='https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png' profilName='Valentin'/>
        <MyPosts posts={props.posts} addpost={props.addpost}/>
        </div>
    )
}