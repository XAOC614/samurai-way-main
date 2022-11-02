import { DialogsType, MessagesType } from '../Components/Dialogs/Dialogs'

import { ActionsType } from './Store'
type InitialStateType = {
  dialogs: Array<DialogsType>
  messages: Array<MessagesType>
  newMessageBody: string
}
let initialState = {
  dialogs: [
    { id: 1, name: 'Dima' },
    { id: 2, name: 'Andrey' },
    { id: 3, name: 'Sergey' },
    { id: 4, name: 'Anna' },
    { id: 5, name: 'Sasha' },
    { id: 6, name: 'Valera' },
  ],
  messages: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'You the best!!' },
  ],
  newMessageBody: '',
}

export const dialogReducer = (
  state: InitialStateType = initialState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case 'UPDATE-NEW-MESSAGE-BODY':
      state.newMessageBody = action.body

      return state
    case 'SEND-MESSAGE':
      let body = state.newMessageBody

      state.messages.push({ id: 4, message: body })
      state.newMessageBody = ''

      return state
    default:
      return state
  }
}

export const sendMessageAC = () => {
  return {
    type: 'SEND-MESSAGE',
  } as const
}
export const updateNewMessageBodyAC = (body: string) => {
  return {
    type: 'UPDATE-NEW-MESSAGE-BODY',
    body: body,
  } as const
}
