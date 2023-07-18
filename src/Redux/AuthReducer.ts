import { Dispatch } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

import { authAPI } from '../api/api'

import { RootStateType } from './ReduxStore'
import { ActionsType, SetUsersType } from './Store'

type InitialType = {
  data: {
    id: number
    email: string
    login: string
  }
  isAuth: boolean
  resultCode: number
  messages: [string]
}

let initialState: InitialType = {
  data: {
    id: 1,
    email: '',
    login: '',
  },
  isAuth: false,
  resultCode: 1,
  messages: [''],
}

const authReducer = (state = initialState, action: ActionsType): InitialType => {
  switch (action.type) {
    case 'SET_USER_DATA': {
      return {
        ...state,
        ...action.payload,
      }
      // let stateCopy = { ...state }
      //
      // stateCopy.data.login = action.data.login
      // stateCopy.isAuth = true
      //
      // return stateCopy
    }
    default:
      return state
  }
}

export const setUserData = (id: number, email: string, login: string, isAuth: boolean) => ({
  type: 'SET_USER_DATA',
  payload: { id, email, login, isAuth },
})

export const getUserData = () => (dispatch: Dispatch) => {
  authAPI.me().then(response => {
    if (response.data.resultCode === 0) {
      let { id, email, login } = response.data.data

      dispatch(setUserData(id, email, login, true))
    }
  })
}
export const login =
  (email: string, password: string, rememberMe: boolean) =>
  (dispatch: ThunkDispatch<RootStateType, {}, SetUsersType>) => {
    authAPI.login(email, password, rememberMe).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(getUserData())
      }
    })
  }
export const logout = () => (dispatch: Dispatch) => {
  authAPI.logout().then(response => {
    if (response.data.resultCode === 0) {
      dispatch(setUserData(0, '', '', false))
    }
  })
}
export default authReducer
