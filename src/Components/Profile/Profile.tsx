import React from 'react'

import { MyPostsContainer } from './MyPosts/MyPostContainer'
import { PropsType } from './ProfileContainer'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'

export const Profile = (props: PropsType) => {
  return (
    <div>
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer
      // dispatch={props.dispatch}
      // posts={props.posts}
      // newPostText={props.newPostText}
      />
    </div>
  )
}
