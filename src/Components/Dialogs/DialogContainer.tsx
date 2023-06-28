import React, { ChangeEvent } from 'react'

import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { sendMessageAC, updateNewMessageBodyAC } from '../../Redux/DialogsReducer'
import { AppStateType } from '../../Redux/ReduxStore'
import { ActionsType } from '../../Redux/Store'

import { Dialogs } from './Dialogs'

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

let mapStateToProps = (state: AppStateType) => {
  return {
    dialogs: state.dialogPage.dialogs,
    messages: state.dialogPage.messages,
    newMessageBody: state.dialogPage.newMessageBody,
    auth: state.auth.isAuth,
  }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    updateNewMessageBody: (body: string) => {
      dispatch(updateNewMessageBodyAC(body))
    },
    onMessageClick: () => {
      dispatch(sendMessageAC())
    },
  }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
