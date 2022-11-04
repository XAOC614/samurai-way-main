import React, { ChangeEvent } from 'react'

import { addPostAC, updateNewPostTextAC } from '../../../Redux/ProfileReducer'
import { ActionsType } from '../../../Redux/Store'

import { MyPosts } from './MyPosts'
export type postsType = {
  id: number
  message: string
  like: number
}

export type MyPostsContainerType = {
  posts: Array<postsType>
  newPostText: string
  dispatch: (action: ActionsType) => void
}

export const MyPostsContainer = (props: MyPostsContainerType) => {
  let addPost = () => {
    props.dispatch(addPostAC())
  }
  let onPostChange = (text: string) => {
    let action = updateNewPostTextAC(text)

    props.dispatch(action)
  }

  return (
    <MyPosts
      posts={props.posts}
      newPostText={props.newPostText}
      addPost={addPost}
      updateNewPostText={onPostChange}
    />
  )
}
