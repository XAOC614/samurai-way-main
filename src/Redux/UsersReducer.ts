import { ActionsType } from './Store'

export type InitialStateType = {
  users: Array<userType>
}
export type userType = {
  id: number
  photoUrl: string
  followed: boolean
  fullName: string
  status: string
  location: {
    city: string
    country: string
  }
}

let initialState = {
  users: [],
}

export const usersReducer = (
  state: InitialStateType = initialState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case 'FOLLOW': {
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true }
          }

          return u
        }),
      }
    }
    case 'UNFOLLOW': {
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false }
          }

          return u
        }),
      }
    }
    case 'SET_USERS': {
      return { ...state, users: [...state.users, ...action.users] }
    }
    default:
      return state
  }
}
export const followAC = (id: number) => {
  return {
    type: 'FOLLOW',
    userId: id,
  } as const
}
export const setUserAC = (users: Array<userType>) => {
  return {
    type: 'SET_USERS',
    users: users,
  } as const
}
export const unfollowAC = (id: number) => {
  return {
    type: 'UNFOLLOW',
    userId: id,
  } as const
}
