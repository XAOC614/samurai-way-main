import React from 'react'

import { MyPostsContainer, MyPostsContainerType } from './MyPosts/MyPostContainer'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'

export const Profile = () => {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer
      // dispatch={props.dispatch}
      // posts={props.posts}
      // newPostText={props.newPostText}
      />
    </div>
  )
}
