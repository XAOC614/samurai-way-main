import React, { ChangeEvent } from 'react'

import { sendMessageAC, updateNewMessageBodyAC } from '../../Redux/DialogsReducer'
import { ActionsType } from '../../Redux/Store'

import { DialogItem } from './DialogItem/Dialog.item'
import { Dialogs } from './Dialogs'
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
  dispatch: (action: ActionsType) => void
}

export const DialogsContainer = (props: DialogsPropsType) => {
  let onNewMessageChange = (body: string) => {
    props.dispatch(updateNewMessageBodyAC(body))
  }
  let onMessageClick = () => {
    props.dispatch(sendMessageAC())
  }

  return (
    <Dialogs
      dialogs={props.dialogs}
      messages={props.messages}
      newMessageBody={props.newMessageBody}
      updateNewMessageBody={onNewMessageChange}
      onMessageClick={onMessageClick}
    />
  )
}
