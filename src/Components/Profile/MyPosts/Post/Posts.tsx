import React from 'react'

import c from './Post.module.css'
type PostsType = {
  message: string
  like: number
}
export const Posts = (props: PostsType) => {
  return (
    <div>
      <div className={`${c.item} ${c.active}`}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjLE9Ylr4f4BXaJfXkLC0YGydJDZVQoxK0Dg&usqp=CAU" />
        {props.message}
        <div>
          <span> Likes - {props.like} </span>
        </div>
      </div>
    </div>
  )
}
