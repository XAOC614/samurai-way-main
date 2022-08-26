import React from "react";
import c from './MyPosts.module.css'
import {Posts} from "./Post/Posts";

export const MyPosts = () => {
    return (
        <div>
            <h3>My Posts</h3>
            <div className={c.item}>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>New Post</button>
                    <button>Remove</button>
                </div>
                <div className={c.posts}>
                    <Posts message={'Hi, how are you?'} like={15}/>
                    <Posts message={'It`s my firs post'} like={20}/>
                </div>
            </div>

        </div>

    )
}