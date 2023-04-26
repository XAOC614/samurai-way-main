import React from 'react'

import './App.css'
import { Route } from 'react-router-dom'

import { DialogsContainer } from './Components/Dialogs/DialogContainer'
import { Header } from './Components/Header/Header'
import { Navbar } from './Components/Navbar/Navbar'
import ProfileContainer from './Components/Profile/ProfileContainer'
import { UsersContainer } from './Components/Users/UsersContainer'
import { AppStateType } from './Redux/ReduxStore'

export type StatePropsType = {
  store: AppStateType
}

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route
          path="/dialogs"
          render={() => (
            <DialogsContainer
            // dialogs={props.store.getState().dialogPage.dialogs}
            // messages={props.store.getState().dialogPage.messages}
            // newMessageBody={props.store.getState().dialogPage.newMessageBody}
            // dispatch={props.store.dispatch.bind(props.store)}
            />
          )}
        />
        <Route
          path="/profile/:userId?"
          render={() => (
            <ProfileContainer
            // posts={props.store.getState().profilePage.posts}
            // dispatch={props.store.dispatch.bind(props.store)}
            // newPostText={props.store.getState().profilePage.newPostText}
            />
          )}
        />
        <Route path="/users" render={() => <UsersContainer />} />
        {/*<Route path='/news' component={News}/>*/}
        {/*<Route path='/music' component={Music}/>*/}
        {/*<Route path='/setting' component={Setting}/>*/}
      </div>
    </div>
  )
}

export default App
