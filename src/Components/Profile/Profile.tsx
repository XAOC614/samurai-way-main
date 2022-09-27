import React from "react";
import {MyPosts, MyPostsType} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {updateNewPostText} from "../../Redux/State";


export const Profile = (props:MyPostsType) => {
    return (
        <div>
           <ProfileInfo/>
           <MyPosts posts={props.posts} addPost={props.addPost}
                    newPostText={props.newPostText} updateNewPostText={updateNewPostText}/>
        </div>
    )
}