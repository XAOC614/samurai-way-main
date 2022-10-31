import React from 'react'

import { MyPosts, MyPostsType } from './MyPosts/MyPosts'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'

export const Profile = (props: MyPostsType) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts dispatch={props.dispatch} posts={props.posts} newPostText={props.newPostText} />
    </div>
  )
}
