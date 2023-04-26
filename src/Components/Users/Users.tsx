import React from 'react'

import { NavLink } from 'react-router-dom'

import userPhoto from '../../assets/images/pngtree-user-vector-avatar-png-image_1541962.jpg'
import { InitialStateType } from '../../Redux/UsersReducer'

import s from './users.module.css'
export type UsersPresentationPropsType = {
  totalUsersCount: number
  pageSize: number
  currentPage: number
  onPageChanged: (pageNumber: number) => void
  usersPage: InitialStateType
  follow: (userId: number) => void
  unfollow: (userId: number) => void
}
export const Users = (props: UsersPresentationPropsType) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  let pages = []

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div>
      <div>
        {pages.map((p, index) => {
          return (
            <span
              key={index}
              className={props.currentPage === p ? s.selectedPage : ''}
              onClick={e => {
                props.onPageChanged(p)
              }}
            >
              {p}
            </span>
          )
        })}
      </div>
      {props.usersPage.users.map(u => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={'/profile/' + u.id}>
                <img src={u.photos.small != null ? u.photos.small : userPhoto} />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.follow(u.id)
                  }}
                >
                  follow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.unfollow(u.id)
                  }}
                >
                  Unfollow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{'u.location.country'}</div>
              <div>{'u.location.city'}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  )
}
