import React from "react";
import classes from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
export const Profile = () => {
    return (
        <div>
            <div>
                <img
                    src='https://images.ctfassets.net/hrltx12pl8hq/7JnR6tVVwDyUM8Cbci3GtJ/bf74366cff2ba271471725d0b0ef418c/shutterstock_376532611-og.jpg'/>
            </div>
            <div>
                ava + description
            </div>
           <MyPosts/>
        </div>
    )
}