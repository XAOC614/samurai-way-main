import { combineReducers, createStore } from 'redux'

import { dialogReducer } from './DialogsReducer'
import { profileReducer } from './ProfileReducer'

let rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogReducer,
})

export let store = createStore(rootReducer)

export type AppStateType = ReturnType<typeof rootReducer>
