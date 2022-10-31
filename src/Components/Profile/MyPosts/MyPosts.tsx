import React, { ChangeEvent } from 'react'

import { ActionsType, addPostAC, updateNewPostTextAC } from '../../../Redux/State'

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
  let postsElements = props.posts.map((p, index) => (
    <Posts message={p.message} like={p.like} key={index} />
  ))

  let addPost = () => {
    props.dispatch(addPostAC())
  }
  let updateNewPostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let text = e.currentTarget.value

    props.dispatch(updateNewPostTextAC(text))
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
