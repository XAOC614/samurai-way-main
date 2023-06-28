import React, { ChangeEvent } from 'react'

import { Redirect } from 'react-router-dom'

import { sendMessageAC, updateNewMessageBodyAC } from '../../Redux/DialogsReducer'
import { ActionsType } from '../../Redux/Store'

import { DialogItem } from './DialogItem/Dialog.item'
import c from './Dialogs.module.css'
import { Message } from './Message/Message'
export type DialogsType = {
  id: number
  name: string
}
export type MessagesType = {
  id: number
  message: string
}
export type DialogsPropsType = {
  dialogs: Array<DialogsType>
  messages: Array<MessagesType>
  newMessageBody: string
  updateNewMessageBody: (body: string) => void
  onMessageClick: () => void
  auth: boolean
}

export const Dialogs = (props: DialogsPropsType) => {
  let newMessageBody = props.newMessageBody
  let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let body = e.currentTarget.value

    props.updateNewMessageBody(body)
  }

  let onMessageClick = () => {
    props.onMessageClick()
  }
  let dialogsElements = props.dialogs.map((d, index) => (
    <DialogItem name={d.name} id={d.id} key={index} />
  ))

  let messagesElements = props.messages.map((m, index) => (
    <Message message={m.message} key={index} />
  ))

  if (!props.auth) return <Redirect to={'/login'} />

  return (
    <div className={c.dialogs}>
      <div className={c.dialogsItems}>{dialogsElements}</div>
      <div className={c.messages}>
        {messagesElements}
        <textarea value={newMessageBody} onChange={onNewMessageChange}></textarea>
        <div>
          <button onClick={onMessageClick}>New Message</button>
        </div>
      </div>
    </div>
  )
}
