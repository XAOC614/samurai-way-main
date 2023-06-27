import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'

import authReducer from './AuthReducer'
import { dialogReducer } from './DialogsReducer'
import { profileReducer } from './ProfileReducer'
import { usersReducer } from './UsersReducer'
let rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogReducer,
  usersPage: usersReducer,
  auth: authReducer,
})

export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppStateType = ReturnType<typeof rootReducer>
