import React from 'react'

import axios from 'axios'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { AppStateType } from '../../Redux/ReduxStore'
import {
  follow,
  InitialStateType,
  setCurrentPage,
  setIsFetching,
  setTotalUserCount,
  setUser,
  unfollow,
  userType,
} from '../../Redux/UsersReducer'
import { Preloader } from '../Preloader/Preloader'

import { Users } from './Users'

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
  usersPage: InitialStateType
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
}

type MapDispatchPropsType = {
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  setUsers: (users: Array<userType>) => void
  setCurrentPage: (pageNumber: number) => void
  setTotalUserCount: (totalCount: number) => void
  setIsFetching: (isFetching: boolean) => void
}

class UsersAPIComponent extends React.Component<UsersPropsType> {
  componentDidMount() {
    this.props.setIsFetching(true)
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then(response => {
        this.props.setIsFetching(false)
        this.props.setUsers(response.data.items)
        this.props.setTotalUserCount(response.data.totalCount)
      })
  }
  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber)
    this.props.setIsFetching(true)
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then(response => {
        this.props.setUsers(response.data.items)
        this.props.setIsFetching(false)
      })
  }
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          usersPage={this.props.usersPage}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
        />
      </>
    )
  }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    usersPage: state.usersPage,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  }
}
// let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
//   return {
//     follow: (userId: number) => {
//       dispatch(followAC(userId))
//     },
//     unfollow: (userId: number) => {
//       dispatch(unfollowAC(userId))
//     },
//     setUsers: (users: Array<userType>) => {
//       dispatch(setUserAC(users))
//     },
//     setCurrentPage: (pageNumber: number) => {
//       dispatch(setCurrentPageAC(pageNumber))
//     },
//     setTotalUserCount: (totalCount: number) => {
//       dispatch(setTotalUserCountAC(totalCount))
//     },
//     setIsFetching: (isFetching: boolean) => {
//       dispatch(setIsFetchingAC(isFetching))
//     },
//   }
// }

export const UsersContainer = connect(mapStateToProps, {
  follow,
  unfollow,
  setUser,
  setCurrentPage,
  setTotalUserCount,
  setIsFetching,
})(UsersAPIComponent)
