import { postsType } from '../Components/Profile/MyPosts/MyPosts'

import { ActionsType, newPostType } from './Store'
type InitialStateType = {
  posts: Array<postsType>
  newPostText: string
}
let initialState = {
  posts: [
    { id: 1, message: 'Hi, how are you?', like: 15 },
    { id: 2, message: 'It`s my firs post', like: 20 },
  ],
  newPostText: 'it-incubator.com',
}

export const profileReducer = (
  state: InitialStateType = initialState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case 'ADD-POST': {
      let newPost: newPostType = {
        id: new Date().getTime(),
        message: state.newPostText,
        like: 0,
      }
      let stateCopy = { ...state }

      stateCopy.posts = [...state.posts]
      stateCopy.posts.push(newPost)
      stateCopy.newPostText = ''

      return stateCopy
    }
    case 'UPDATE-NEW-POST-TEXT': {
      let stateCopy = { ...state }

      stateCopy.newPostText = action.newText

      return stateCopy
    }
    default:
      return state
  }
}
export const addPostAC = () => {
  return {
    type: 'ADD-POST',
  } as const
}
export const updateNewPostTextAC = (text: string) => {
  return {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: text,
  } as const
}
