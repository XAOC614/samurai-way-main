import React from 'react'

import { rerenderEntireTree, stateType } from '../index'

type newPostType = {
  id: number
  message: string
  like: number
}
export type storeType = {
  _state: stateType
  getState: () => stateType
  subscribe: (observer: () => void) => void
  _callSubscriber: (state: stateType) => void
  dispatch: (action: ActionsType) => void
}
type NewPostTextActionType = {
  type: 'UPDATE-NEW-POST-TEXT'
  newText: string
}
type AddPostActionType = {
  type: 'ADD-POST'
}
export type ActionsType = NewPostTextActionType | AddPostActionType

export const addPostAC = (): AddPostActionType => {
  return {
    type: 'ADD-POST',
  }
}
export const updateNewPostTextAC = (text: string): NewPostTextActionType => {
  return {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: text,
  }
}

export let store: storeType = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi, how are you?', like: 15 },
        { id: 2, message: 'It`s my firs post', like: 20 },
      ],
      newPostText: 'it-incubator.com',
    },
    dialogPage: {
      dialogs: [
        { id: 1, name: 'Dima' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Sergey' },
        { id: 4, name: 'Anna' },
        { id: 5, name: 'Sasha' },
        { id: 6, name: 'Valera' },
      ],
      messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'You the best!!' },
      ],
    },
  },
  _callSubscriber() {
    console.log('render')
  },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },

  // addPost(postMessage) {
  //   let newPost: newPostType = {
  //     id: new Date().getTime(),
  //     message: this._state.profilePage.newPostText,
  //     like: 0,
  //   }
  //
  //   this._state.profilePage.posts.push(newPost)
  //   this._state.profilePage.newPostText = ''
  //   rerenderEntireTree()
  // },
  // updateNewPostText(newText) {
  //   this._state.profilePage.newPostText = newText
  //   rerenderEntireTree()
  // },
  dispatch(action) {
    if (action.type === 'ADD-POST') {
      let newPost: newPostType = {
        id: new Date().getTime(),
        message: this._state.profilePage.newPostText,
        like: 0,
      }

      this._state.profilePage.posts.push(newPost)
      this._state.profilePage.newPostText = ''
      rerenderEntireTree()
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText
      rerenderEntireTree()
    }
  },
}
