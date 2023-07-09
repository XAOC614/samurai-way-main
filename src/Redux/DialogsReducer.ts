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
    // case 'UPDATE-NEW-MESSAGE-BODY':
    //   return { ...state, newMessageBody: action.body }

    case 'SEND-MESSAGE': {
      let body = action.newMessageBody

      return {
        ...state,
        messages: [...state.messages, { id: 4, message: body }],
      }
    }
    default:
      return state
  }
}

export const sendMessageAC = (newMessageBody: string) => {
  return {
    type: 'SEND-MESSAGE',
    newMessageBody: newMessageBody,
  } as const
}
// export const updateNewMessageBodyAC = (body: string) => {
//   return {
//     type: 'UPDATE-NEW-MESSAGE-BODY',
//     body: body,
//   } as const
// }
