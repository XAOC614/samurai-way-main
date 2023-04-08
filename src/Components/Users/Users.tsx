import React from 'react'

import { UsersPropsType } from './UsersContainer'

export let Users = (props: UsersPropsType) => {
  debugger
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl: 'https://cs14.pikabu.ru/post_img/2023/02/13/8/1676295806139337963.jpg',
        followed: false,
        fullName: 'Dmitry',
        status: 'I am a boss',
        location: { city: 'Minsk', country: 'Belarus' },
      },
      {
        id: 2,
        photoUrl: 'https://www.perunica.ru/uploads/posts/2011-10/1319832745_0_6065c_b70de565_l.jpg',
        followed: true,
        fullName: 'Sergey',
        status: 'Good gay',
        location: { city: 'Vitebsk', country: 'Belarus' },
      },
      {
        id: 3,
        photoUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTugosWIOR7352sS3RHnrdr_3mImXWQv5bHtw&usqp=CAU',
        followed: true,
        fullName: 'Anna',
        status: 'Perfect ladies',
        location: { city: 'Vitebsk', country: 'Belarus' },
      },
    ])
  }

  return (
    <div>
      {props.users.map(u => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id)
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id)
                  }}
                >
                  Follow
                </button>
              )}
              <button>Follow</button>
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  )
}
