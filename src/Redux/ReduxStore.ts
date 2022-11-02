import { combineReducers, createStore } from 'redux'

import { dialogReducer } from './DialogsReducer'
import { profileReducer } from './ProfileReducer'

let reducers = combineReducers({
  profileReducer,
  dialogReducer,
})

export let store = createStore(reducers)
