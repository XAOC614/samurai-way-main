import { stateType } from '../index'

import { ActionsType, newPostType } from './State'

export const profileReducer = (state: stateType, action: ActionsType): stateType => {
  switch (action.type) {
    case 'ADD-POST':
      let newPost: newPostType = {
        id: new Date().getTime(),
        message: state.profilePage.newPostText,
        like: 0,
      }

      state.profilePage.posts.push(newPost)
      state.profilePage.newPostText = ''

      return state
    case 'UPDATE-NEW-POST-TEXT':
      state.profilePage.newPostText = action.newText

      return state
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
