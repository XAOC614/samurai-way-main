import React from 'react'

import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import {
  followAC,
  InitialStateType,
  setUserAC,
  unfollowAC,
  userType,
} from '../../Redux/UsersReducer'

import { Users } from './Users'

type MapStatePropsType = {
  usersPage: InitialStateType
}
type MapDispatchPropsType = {
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  setUsers: (users: Array<userType>) => void
}
export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: MapStatePropsType) => {
  return {
    users: state.usersPage.users,
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

export default connect(mapStateToProps, mapDispatchToProps)(Users)
