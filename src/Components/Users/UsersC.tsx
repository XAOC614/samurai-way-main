import React from 'react'

import axios from 'axios'

import userPhoto from '../../assets/images/pngtree-user-vector-avatar-png-image_1541962.jpg'

import s from './users.module.css'
import { UsersPropsType } from './UsersContainer'

class UsersC extends React.Component<UsersPropsType> {
  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
      this.props.setUsers(response.data.items)
    })
  }

  render() {
    let pagesCount = this.props.totalUsersCount / this.props.pageSize
    let pages = []

    for (let i = 0; i <= pagesCount; i++) {
      pages.push(i)
    }

    return (
      <div>
        <div>
          {pages.map(p => {
            return <span className={this.props.currentPage === p && s.selectedPage}>{p}</span>
          })}
          <span className={s.selectedPage}> 1 </span>
          <span> 2 </span>
          <span> 3 </span>
          <span> 4 </span>
          <span> 5 </span>
        </div>
        {this.props.usersPage.users.map(u => (
          <div key={u.id}>
            <span>
              <div>
                <img src={u.photos.small != null ? u.photos.small : userPhoto} />
              </div>
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      this.props.unfollow(u.id)
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(u.id)
                    }}
                  >
                    Follow
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
}

export default UsersC
