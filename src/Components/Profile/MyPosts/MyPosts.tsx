import React, { ChangeEvent } from 'react'

import { Field, InjectedFormProps, reduxForm } from 'redux-form'

import { maxLengthCreator, required } from '../../../utils/validators/validators'
import { Textarea } from '../../FormsControls/FormsControls'

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
  addPost: (newPostText: string) => void
  // updateNewPostText: (text: string) => void
}
type newPostTextType = {
  newPostText: string
}

const maxLength = maxLengthCreator(10)

export const MyPosts = (props: MyPostsType) => {
  let postsElements = props.posts.map((p, index) => (
    <Posts message={p.message} like={p.like} key={index} />
  ))

  // let addPost = () => {
  //   props.addPost()
  // }
  // let updateNewPostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
  //   let text = e.currentTarget.value
  //
  //   props.updateNewPostText(text)
  // }
  let onAddPost = (values: newPostTextType) => {
    props.addPost(values.newPostText)
  }

  return (
    <div>
      <h3>My Posts</h3>
      <div className={c.item}>
        <AddNewPostFormRedux onSubmit={onAddPost} />
        <div className={c.posts}>{postsElements}</div>
      </div>
    </div>
  )
}

const AddNewPostForm: React.FC<InjectedFormProps<newPostTextType>> = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name={'newPostText'}
          component={Textarea}
          placeholder={'post message'}
          validate={[required, maxLength]}
        />
      </div>
      <div>
        <button>New Post</button>
      </div>
    </form>
  )
}
const AddNewPostFormRedux = reduxForm<newPostTextType>({ form: 'ProfileAddNewPostForm' })(
  AddNewPostForm
)
