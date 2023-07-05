import React from 'react'

import './App.css'
import { Route } from 'react-router-dom'

import { DialogsContainer } from './Components/Dialogs/DialogContainer'
import { Header } from './Components/Header/Header'
import HeaderContainer from './Components/Header/HeaderContainer'
import { Login } from './Components/Login/Login'
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
      <HeaderContainer />
      <Navbar />
      <div className="app-wrapper-content">
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
        <Route path="/users" render={() => <UsersContainer />} />
        {/*<Route path='/news' component={News}/>*/}
        {/*<Route path='/music' component={Music}/>*/}
        {/*<Route path='/setting' component={Setting}/>*/}
        <Route path="/login" render={() => <Login />} />
      </div>
    </div>
  )
}

export default App
