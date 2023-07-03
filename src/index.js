import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { postsData } from './components/main/my-posts/post/postsData';

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <React.StrictMode>
    <App posts={postsData}/>
  </React.StrictMode>
);
// document.getElementById('btnAdd').addEventListener('click', () => 
// {console.log(document.getElementById("newPostText").value)})


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
