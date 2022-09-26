import React from "react";
import {MyPosts, MyPostsType} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";


export const Profile = (props:MyPostsType) => {
    return (
        <div>
           <ProfileInfo/>
           <MyPosts posts={props.posts}/>
        </div>
    )
}