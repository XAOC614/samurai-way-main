import { combineReducers, createStore } from 'redux'

import { dialogReducer } from './DialogsReducer'
import { profileReducer } from './ProfileReducer'

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogReducer,
})

export let store = createStore(reducers)

export type AppStoreType = typeof store
