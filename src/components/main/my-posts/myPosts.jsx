import React from "react";
import s from './myPosts.module.css'
import { Post } from "./post/post";

export const MyPosts = () => {
  return (
    <div className={s.content}>
      <div >
        My posts
        <div>New post</div>
      </div >
      <Post text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi beatae, unde sed atque consequuntur voluptates excepturi molestias, vero odio saepe quod quidem sit harum! Possimus nesciunt earum nihil enim a!' imgLink='https://img.freepik.com/free-icon/user_318-159711.jpg' likesCount='34'/>
      <Post text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi beatae, unde sed atque consequuntur voluptates excepturi molestias, vero odio saepe quod quidem sit harum! Possimus nesciunt earum nihil enim a!' imgLink='https://img.freepik.com/free-icon/user_318-159711.jpg' likesCount='78'/>
      <Post text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi beatae, unde sed atque consequuntur voluptates excepturi molestias, vero odio saepe quod quidem sit harum! Possimus nesciunt earum nihil enim a!' imgLink='https://img.freepik.com/free-icon/user_318-159711.jpg' likesCount='12'/>
      <Post text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi beatae, unde sed atque consequuntur voluptates excepturi molestias, vero odio saepe quod quidem sit harum! Possimus nesciunt earum nihil enim a!' imgLink='https://img.freepik.com/free-icon/user_318-159711.jpg' likesCount='9'/>

    </div>
  )
}