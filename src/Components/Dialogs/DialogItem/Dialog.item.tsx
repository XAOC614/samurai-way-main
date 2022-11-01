import React from 'react'

import { NavLink } from 'react-router-dom'

import c from '../Dialogs.module.css'

type DialogItemType = {
  name: string
  id: number
}
export const DialogItem = (props: DialogItemType) => {
  let path = '/dialogs/' + props.id

  return (
    <div className={`${c.dialog} ${c.active}`}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}
