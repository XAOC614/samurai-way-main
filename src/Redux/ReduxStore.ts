import { applyMiddleware, combineReducers, createStore } from 'redux'
import { reducer as formReducer } from 'redux-form'
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
  form: formReducer,
})

export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppStateType = ReturnType<typeof rootReducer>

export type RootStateType = ReturnType<typeof store.getState>
