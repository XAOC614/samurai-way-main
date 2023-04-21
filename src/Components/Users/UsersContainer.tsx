import React from 'react'

import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { AppStateType } from '../../Redux/ReduxStore'
import {
  followAC,
  InitialStateType,
  setCurrentPageAC,
  setTotalUserCountAC,
  setUserAC,
  unfollowAC,
  userType,
} from '../../Redux/UsersReducer'

import Users from './Users'

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
  usersPage: InitialStateType
  pageSize: number
  totalUsersCount: number
  currentPage: number
}

type MapDispatchPropsType = {
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  setUsers: (users: Array<userType>) => void
  setCurrentPage: (pageNumber: number) => void
  setTotalUserCount: (totalCount: number) => void
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    usersPage: state.usersPage,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
  return {
    follow: (userId: number) => {
      dispatch(followAC(userId))
    },
    unfollow: (userId: number) => {
      dispatch(unfollowAC(userId))
    },
    setUsers: (users: Array<userType>) => {
      dispatch(setUserAC(users))
    },
    setCurrentPage: (pageNumber: number) => {
      dispatch(setCurrentPageAC(pageNumber))
    },
    setTotalUserCount: (totalCount: number) => {
      dispatch(setTotalUserCountAC(totalCount))
    },
  }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
