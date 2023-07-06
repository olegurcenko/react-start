import './index.css';
import reportWebVitals from './reportWebVitals';
import { state } from './redux/state';
import { subscribe } from './redux/state';
// import { postsData } from './components/main/my-posts/post/postsData';
// import { dialogsData } from './components/main/dialogs/dialogsData';
// import { messageData } from './components/main/dialogs/messagesData';
// import { addPost } from './redux/state';
// import { state } from './redux/state';
// import { BrowserRouter } from 'react-router-dom';



import React from "react";
import ReactDOM from 'react-dom/client';
import { addPost, updateNewPostText } from './redux/state';
import App from './App';
// import { state } from "../redux/state";
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));



export let renderEntireTree = (state) => {
  root.render(
    // <React.StrictMode>
      <BrowserRouter>
        <App state={state} addPost={addPost} newPostText={state.profilePage.newPostText} updateNewPostText={updateNewPostText}/>
      </BrowserRouter>
    /* </React.StrictMode> */
  );
}


subscribe(renderEntireTree);

renderEntireTree(state);

// document.getElementById('btnAdd').addEventListener('click', () => 
// {console.log(document.getElementById("newPostText").value)})


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
