import { Dispatch } from 'redux'

import { profileAPI, usersAPI } from '../api/api'
import { postsType } from '../Components/Profile/MyPosts/MyPosts'

import { ActionsType, newPostType } from './Store'
type InitialStateType = {
  posts: Array<postsType>
  newPostText: string
  status: string
  profile: ProfileType
}
// export type statusType = {
//   resultCode: number
//   messages: Array<string>
//   data: {}
// }
export type ProfileType = {
  userId: string
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts: {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
  }
  photos: {
    small: string
    large: string
  }
}
let initialState = {
  posts: [
    { id: 1, message: 'Hi, how are you?', like: 15 },
    { id: 2, message: 'It`s my firs post', like: 20 },
  ],
  newPostText: 'it-incubator.com',
  status: 'Valera',
  profile: {
    userId: 'string',
    lookingForAJob: false,
    lookingForAJobDescription: 'string',
    fullName: 'string',
    contacts: {
      github: 'string',
      vk: 'string',
      facebook: 'string',
      instagram: 'string',
      twitter: 'string',
      website: 'string',
      youtube: 'string',
      mainLink: 'string',
    },
    photos: {
      small: 'string',
      large: 'string',
    },
  },
}

export const profileReducer = (
  state: InitialStateType = initialState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case 'ADD-POST': {
      let newPost: newPostType = {
        id: new Date().getTime(),
        message: state.newPostText,
        like: 0,
      }
      let stateCopy = { ...state }

      stateCopy.posts = [...state.posts]
      stateCopy.posts.push(newPost)
      stateCopy.newPostText = ''

      return stateCopy
    }
    case 'UPDATE-NEW-POST-TEXT': {
      let stateCopy = { ...state }

      stateCopy.newPostText = action.newText

      return stateCopy
    }
    case 'SET_USER_PROFILE': {
      return { ...state, profile: action.profile }
    }
    case 'SET_STATUS': {
      return {
        ...state,
        status: action.status,
      }
    }
    default:
      return state
  }
}
export const addPostAC = () => {
  return {
    type: 'ADD-POST',
  } as const
}
export const setUserProfile = (profile: ProfileType) => {
  return {
    type: 'SET_USER_PROFILE',
    profile: profile,
  } as const
}
export const updateNewPostTextAC = (text: string) => {
  return {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: text,
  } as const
}
export const setStatus = (status: string) => {
  return {
    type: 'SET_STATUS',
    status: status,
  } as const
}
export const getUserProfile = (userId: string) => (dispatch: Dispatch) => {
  usersAPI.getProfile(userId).then(response => {
    dispatch(setUserProfile(response.data))
  })
}
export const getUserStatus = (userId: string) => (dispatch: Dispatch) => {
  profileAPI.getStatus(userId).then(response => {
    dispatch(setStatus(response.data))
  })
}
export const updateUserStatus = (status: string) => (dispatch: Dispatch) => {
  profileAPI.updateStatus(status).then(response => {
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status))
    }
  })
}
