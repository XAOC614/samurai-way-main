import React, { ChangeEvent } from 'react'

import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { addPostAC } from '../../../Redux/ProfileReducer'
import { AppStateType } from '../../../Redux/ReduxStore'
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

// export const MyPostsContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       {store => {
//         let addPost = () => {
//           store.dispatch(addPostAC())
//         }
//         let onPostChange = (text: string) => {
//           let action = updateNewPostTextAC(text)
//
//           store.dispatch(action)
//         }
//
//         return (
//           <MyPosts
//             posts={store.getState().profilePage.posts}
//             newPostText={store.getState().profilePage.newPostText}
//             addPost={addPost}
//             updateNewPostText={onPostChange}
//           />
//         )
//       }}
//     </StoreContext.Consumer>
//   )
// }
const mapStateToProps = (state: AppStateType) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addPost: (newPostText: string) => {
      dispatch(addPostAC(newPostText))
    },
    // updateNewPostText: (text: string) => {
    //   let action = updateNewPostTextAC(text)
    //
    //   dispatch(action)
    // },
  }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
