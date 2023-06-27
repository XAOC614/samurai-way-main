import { Dispatch } from 'redux'

import { authAPI } from '../api/api'

import { ActionsType } from './Store'

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
      let stateCopy = { ...state }

      stateCopy.data.login = action.data.login
      stateCopy.isAuth = true

      return stateCopy
    }
    default:
      return state
  }
}

export const setUserData = (id: number, email: string, login: string) => ({
  type: 'SET_USER_DATA',
  data: { id, email, login },
})

export const getUserData = () => (dispatch: Dispatch) => {
  authAPI.me().then(response => {
    if (response.data.resultCode === 0) {
      let { id, email, login } = response.data.data

      dispatch(setUserData(id, email, login))
    }
  })
}

export default authReducer
