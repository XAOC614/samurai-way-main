import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {addPost, state, updateNewPostText} from "./Redux/State";
import {BrowserRouter} from "react-router-dom";
import {DialogsType, MessagesType} from "./Components/Dialogs/Dialogs";
import {postsType} from "./Components/Profile/MyPosts/MyPosts";
import App from "./App";

export type stateType = {
        profilePage: { posts: Array<postsType>
                        newPostText:string}
        dialogPage: {
            dialogs: Array<DialogsType>
            messages: Array<MessagesType>
        }


}


export let rerenderEntireTree = (state:stateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>,
        document.getElementById('root'));
}
rerenderEntireTree(state);