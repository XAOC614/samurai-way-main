import { ActionsType } from './Store'

export type InitialStateType = {
  users: Array<userType>
  pageSize: number
  totalUsersCount: number
  currentPage: number
}
export type userType = {
  id: number
  photos: {
    small: string
    large: string
  }
  followed: boolean
  name: string
  status: string
}

let initialState: InitialStateType = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
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
      return { ...state, users: action.users }
    }
    case 'SET_CURRENT_PAGE': {
      return { ...state, currentPage: action.currentPage }
    }
    case 'SET_TOTAL_USER_COUNT': {
      return { ...state, totalUsersCount: action.totalCount }
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
export const setCurrentPageAC = (currentPage: number) => {
  return {
    type: 'SET_CURRENT_PAGE',
    currentPage: currentPage,
  } as const
}
export const setTotalUserCountAC = (totalCount: number) => {
  return {
    type: 'SET_TOTAL_USER_COUNT',
    totalCount: totalCount,
  } as const
}
