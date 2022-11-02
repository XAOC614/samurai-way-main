import React from 'react'

import './App.css'
import { Route } from 'react-router-dom'

import { Dialogs } from './Components/Dialogs/Dialogs'
import { Header } from './Components/Header/Header'
import { Navbar } from './Components/Navbar/Navbar'
import { Profile } from './Components/Profile/Profile'
import { storeType } from './Redux/Store'

export type StatePropsType = {
  store: storeType
}

function App(props: StatePropsType) {
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
              newMessageBody={props.store.getState().dialogPage.newMessageBody}
              dispatch={props.store.dispatch.bind(props.store)}
            />
          )}
        />
        <Route
          path="/profile"
          render={() => (
            <Profile
              posts={props.store.getState().profilePage.posts}
              dispatch={props.store.dispatch.bind(props.store)}
              newPostText={props.store.getState().profilePage.newPostText}
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
