import React from 'react'

import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { AppStateType } from '../../Redux/ReduxStore'
import {
  followAC,
  InitialStateType,
  setUserAC,
  unfollowAC,
  userType,
} from '../../Redux/UsersReducer'

import { Users } from './Users'
import UsersC from './UsersC'
export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
  usersPage: InitialStateType
}

type MapDispatchPropsType = {
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  setUsers: (users: Array<userType>) => void
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    usersPage: state.usersPage,
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
  }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC)
