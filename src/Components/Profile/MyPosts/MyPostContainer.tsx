import React, { ChangeEvent } from 'react'

import { addPostAC, updateNewPostTextAC } from '../../../Redux/ProfileReducer'
import { ActionsType } from '../../../Redux/Store'
import { StoreContext } from '../../../StoreContext'

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

export const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {store => {
        let addPost = () => {
          store.dispatch(addPostAC())
        }
        let onPostChange = (text: string) => {
          let action = updateNewPostTextAC(text)

          store.dispatch(action)
        }

        return (
          <MyPosts
            posts={store.getState().profilePage.posts}
            newPostText={store.getState().profilePage.newPostText}
            addPost={addPost}
            updateNewPostText={onPostChange}
          />
        )
      }}
    </StoreContext.Consumer>
  )
}
