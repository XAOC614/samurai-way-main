import React from "react";
import c from './MyPosts.module.css'
import {Posts} from "./Post/Posts";

export const MyPosts = () => {
    return (
        <div>
            My Posts
            <div className={c.item}>
                <textarea></textarea>
                <button>New Post</button>
                <button>Remove</button>
                <Posts message={'Hi, how are you?'} like={15}/>
                <Posts message={'It`s my firs post'} like={20}/>
            </div>

        </div>

    )
}