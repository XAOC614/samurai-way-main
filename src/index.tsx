import React from 'react'

import './index.css'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import { DialogsType, MessagesType } from './Components/Dialogs/Dialogs'
import { postsType } from './Components/Profile/MyPosts/MyPosts'
import { store } from './Redux/ReduxStore'

export type stateType = {
  profilePage: {
    posts: Array<postsType>
    newPostText: string
  }
  dialogPage: {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageBody: string
  }
}

export let rerenderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App store={store} />
    </BrowserRouter>,
    document.getElementById('root')
  )
}
rerenderEntireTree()
store.subscribe(rerenderEntireTree)
