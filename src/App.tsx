import React from 'react'

import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'

import { Dialogs, DialogsType, MessagesType } from './Components/Dialogs/Dialogs'
import { Header } from './Components/Header/Header'
import { Navbar } from './Components/Navbar/Navbar'
import { Profile } from './Components/Profile/Profile'
import { storeType } from './Redux/State'

export type StatePropsType = {
  store: storeType
}

function App(props: StatePropsType) {
  const { addPost } = props.store

  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route
          path="/dialogs"
          render={() => (
            <Dialogs
              dialogs={props.store.getState().dialogPage.dialogs}
              messages={props.store.getState().dialogPage.messages}
            />
          )}
        />
        <Route
          path="/profile"
          render={() => (
            <Profile
              posts={props.store.getState().profilePage.posts}
              addPost={addPost.bind(props.store)}
              newPostText={props.store.getState().profilePage.newPostText}
              updateNewPostText={props.store.updateNewPostText.bind(props.store)}
            />
          )}
        />
        {/*<Route path='/news' component={News}/>*/}
        {/*<Route path='/music' component={Music}/>*/}
        {/*<Route path='/setting' component={Setting}/>*/}
      </div>
    </div>
  )
}

export default App
