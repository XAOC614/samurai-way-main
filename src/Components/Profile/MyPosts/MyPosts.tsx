import React from "react";
import c from './MyPosts.module.css'
import {Posts} from "./Post/Posts";
export type postsType={
    id:string
    message:string
    like:number
}
 export type MyPostsType = {
    posts:Array<postsType>
}

export const MyPosts = (props:MyPostsType) => {
    let postsElements = props.posts.map(p=> <Posts message={p.message} like={p.like}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = ()=>{
            alert(newPostElement.current?.value)
    }
    return (
        <div>
            <h3>My Posts</h3>
            <div className={c.item}>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>New Post</button>
                    <button>Remove</button>
                </div>
                <div className={c.posts}>
                    {postsElements}
                </div>
            </div>

        </div>

    )
}