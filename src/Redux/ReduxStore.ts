import { combineReducers, createStore } from 'redux'

import { dialogReducer } from './DialogsReducer'
import { profileReducer } from './ProfileReducer'
import { usersReducer } from './UsersReducer'

let rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogReducer,
  usersPage: usersReducer,
})

export let store = createStore(rootReducer)

export type AppStateType = ReturnType<typeof rootReducer>
