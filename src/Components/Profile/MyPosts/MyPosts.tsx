import React, { ChangeEvent } from 'react'

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
  addPost: (postMessage: string) => void
  updateNewPostText: (newText: string) => void
}

export const MyPosts = (props: MyPostsType) => {
  let postsElements = props.posts.map(p => <Posts message={p.message} like={p.like} />)

  let addPost = () => {
    props.addPost(props.newPostText)
  }
  let updateNewPostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.updateNewPostText(e.currentTarget.value)
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
