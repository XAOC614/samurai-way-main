import React, { ChangeEvent } from 'react'

import { ActionsType } from '../../../Redux/State'

import c from './MyPosts.module.css'
import { Posts } from './Post/Posts'
export type postsType = {
  id: number
  message: string
  like: number
}
export type MyPostsType = {
  posts: Array<postsType>
  newPostText: string

  dispatch: (action: ActionsType) => void
}

export const MyPosts = (props: MyPostsType) => {
  let postsElements = props.posts.map(p => <Posts message={p.message} like={p.like} />)

  let addPost = () => {
    props.dispatch({ type: 'ADD-POST' })
  }
  let updateNewPostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: e.currentTarget.value })
  }

  return (
    <div>
      <h3>My Posts</h3>
      <div className={c.item}>
        <div>
          <textarea onChange={updateNewPostText} value={props.newPostText} />
        </div>
        <div>
          <button onClick={addPost}>New Post</button>
          <button>Remove</button>
        </div>
        <div className={c.posts}>{postsElements}</div>
      </div>
    </div>
  )
}
