import React from 'react'

import { connect } from 'react-redux'

import { usersAPI } from '../../api/api'
import { AppStateType } from '../../Redux/ReduxStore'
import {
  follow,
  InitialStateType,
  setCurrentPage,
  setIsFetching,
  setTotalUserCount,
  setUsers,
  toggleFollowingProgress,
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
  followingInProgress: Array<number>
}

type MapDispatchPropsType = {
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  setUsers: (users: Array<userType>) => void
  setCurrentPage: (pageNumber: number) => void
  setTotalUserCount: (totalCount: number) => void
  setIsFetching: (isFetching: boolean) => void
  toggleFollowingProgress: (isFetching: boolean, userId: number) => void
}

class UsersAPIComponent extends React.Component<UsersPropsType> {
  componentDidMount() {
    this.props.setIsFetching(true)
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
      this.props.setIsFetching(false)
      this.props.setUsers(data.items)
      this.props.setTotalUserCount(data.totalCount)
    })
  }
  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber)
    this.props.setIsFetching(true)
    usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
      this.props.setUsers(data.items)
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
          followingInProgress={this.props.followingInProgress}
          toggleFollowingProgress={this.props.toggleFollowingProgress}
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
    followingInProgress: state.usersPage.followingInProgress,
  }
}

export const UsersContainer = connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUserCount,
  setIsFetching,
  toggleFollowingProgress,
})(UsersAPIComponent)
