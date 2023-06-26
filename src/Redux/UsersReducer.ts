import { ActionsType } from './Store'

export type InitialStateType = {
  users: Array<userType>
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  followingInProgress: Array<number>
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
  isFetching: false,
  followingInProgress: [],
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
    case 'TOGGLE_IS_FETCHING': {
      return { ...state, isFetching: action.isFetching }
    }
    case 'TOGGLE_IS_FOLLOWING_PROGRESS': {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id != action.userId),
      }
    }
    default:
      return state
  }
}
export const follow = (id: number) => {
  return {
    type: 'FOLLOW',
    userId: id,
  } as const
}
export const setUsers = (users: Array<userType>) => {
  return {
    type: 'SET_USERS',
    users: users,
  } as const
}
export const unfollow = (id: number) => {
  return {
    type: 'UNFOLLOW',
    userId: id,
  } as const
}
export const setCurrentPage = (currentPage: number) => {
  return {
    type: 'SET_CURRENT_PAGE',
    currentPage: currentPage,
  } as const
}
export const setTotalUserCount = (totalCount: number) => {
  return {
    type: 'SET_TOTAL_USER_COUNT',
    totalCount: totalCount,
  } as const
}
export const setIsFetching = (isFetching: boolean) => {
  return {
    type: 'TOGGLE_IS_FETCHING',
    isFetching: isFetching,
  } as const
}
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => {
  return {
    type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
    isFetching: isFetching,
    userId: userId,
  }
}
