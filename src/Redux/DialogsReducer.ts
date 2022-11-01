import { stateType } from '../index'

import { ActionsType } from './State'

export const dialogReducer = (state: stateType, action: ActionsType): stateType => {
  switch (action.type) {
    case 'UPDATE-NEW-MESSAGE-BODY':
      state.dialogPage.newMessageBody = action.body

      return state
    case 'SEND-MESSAGE':
      let body = state.dialogPage.newMessageBody

      state.dialogPage.messages.push({ id: 4, message: body })
      state.dialogPage.newMessageBody = ''

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
