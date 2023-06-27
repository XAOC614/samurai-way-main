import React from 'react'

import { connect } from 'react-redux'

import { AppStateType } from '../../Redux/ReduxStore'
import {
  followThunk,
  getUsers,
  InitialStateType,
  setCurrentPage,
  unfollowThunk,
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
  followThunk: (userId: number) => void
  unfollowThunk: (userId: number) => void
  setCurrentPage: (pageNumber: number) => void
  getUsers: (currentPage: number, pageSize: number) => void
}

class UsersAPIComponent extends React.Component<UsersPropsType> {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
    // this.props.setIsFetching(true)
    // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
    //   this.props.setIsFetching(false)
    //   this.props.setUsers(data.items)
    //   this.props.setTotalUserCount(data.totalCount)
    // })
  }
  onPageChanged = (pageNumber: number) => {
    this.props.getUsers(pageNumber, this.props.pageSize)
    // this.props.setCurrentPage(pageNumber)
    // this.props.setIsFetching(true)
    // usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
    //   this.props.setUsers(data.items)
    //   this.props.setIsFetching(false)
    // })
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
          unfollowThunk={this.props.unfollowThunk}
          followThunk={this.props.followThunk}
          followingInProgress={this.props.followingInProgress}
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
  followThunk,
  unfollowThunk,
  setCurrentPage,
  getUsers,
})(UsersAPIComponent)
