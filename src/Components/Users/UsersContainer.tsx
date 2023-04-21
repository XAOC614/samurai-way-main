import React from 'react'

import axios from 'axios'
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

import { Users } from './Users'

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

class UsersAPIComponent extends React.Component<UsersPropsType> {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then(response => {
        this.props.setUsers(response.data.items)
        this.props.setTotalUserCount(response.data.totalCount)
      })
  }
  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber)
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then(response => {
        this.props.setUsers(response.data.items)
      })
  }
  render() {
    return (
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        usersPage={this.props.usersPage}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
      />
    )
  }
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

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)
