import React from "react";
import s from './myPosts.module.css';
import { Post } from "./post/post";
// import { postsData } from "./post/postsData";


export const MyPosts = (props) => {
  let postElems = props.posts.postsData.map(postInfo => <Post text={postInfo.text} imgLink={postInfo.imgLink} likesCount={postInfo.likesCount} />)

  
  let newPostInput = React.createRef();


  const btnFunc = () => {
    debugger;
    let text = newPostInput.current.value; //current return elem
    props.addpost(text)
  }


  return (
    <div className={s.content}>
      <div className={s.newPostBlock}>
        <h1>New Post</h1>
        <textarea placeholder='New Post' className={s.newPostInput} ref={newPostInput}></textarea>
        <button type="button" className={s.btnAdd} id='btnAdd' onClick={btnFunc}>New Post</button>
      </div >
      {/* <Post text={postsData[0].text} imgLink={postsData[0].imgLink} likesCount={postsData[0].likesCount}/>
      <Post text={postsData[1].text} imgLink={postsData[1].imgLink} likesCount={postsData[1].likesCount}/>
      <Post text={postsData[2].text} imgLink={postsData[2].imgLink} likesCount={postsData[2].likesCount}/>
      <Post text={postsData[3].text} imgLink={postsData[3].imgLink} likesCount={postsData[3].likesCount}/> */}
      {postElems}

    </div>
  )
}