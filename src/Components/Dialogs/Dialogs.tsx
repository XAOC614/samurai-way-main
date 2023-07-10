import React, { ChangeEvent } from 'react'

import { Redirect } from 'react-router-dom'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'

// import { sendMessageAC, updateNewMessageBodyAC } from '../../Redux/DialogsReducer'
// import { ActionsType } from '../../Redux/Store'

import { maxLengthCreator, required } from '../../utils/validators/validators'
import { Textarea } from '../FormsControls/FormsControls'

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
  onMessageClick: (newMessageBody: string) => void
  auth: boolean
}
type AddMessageFormType = {
  newMessageBody: string
}
export const Dialogs = (props: DialogsPropsType) => {
  // let newMessageBody = props.newMessageBody
  // let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
  //   let body = e.currentTarget.value
  //
  //   props.updateNewMessageBody(body)
  // }
  let addNewMessage = (values: AddMessageFormType) => {
    props.onMessageClick(values.newMessageBody)
  }
  // let onMessageClick = () => {
  //   props.onMessageClick()
  // }
  let dialogsElements = props.dialogs.map((d, index) => (
    <DialogItem name={d.name} id={d.id} key={index} />
  ))

  let messagesElements = props.messages.map((m, index) => (
    <Message message={m.message} key={index} />
  ))

  return (
    <div className={c.dialogs}>
      <div className={c.dialogsItems}>{dialogsElements}</div>
      <div className={c.messages}>
        <div>{messagesElements}</div>
      </div>
      <AddMessageFormRedux onSubmit={addNewMessage} />
    </div>
  )
}
const maxLength50 = maxLengthCreator(50)
const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormType>> = props => {
  return (
    <form onSubmit={props.handleSubmit} className={c.messages}>
      <Field
        component={Textarea}
        name={'newMessageBody'}
        validate={[required, maxLength50]}
        placeholder={'Enter you message'}
      />
      <div>
        <button>New Message</button>
      </div>
    </form>
  )
}
const AddMessageFormRedux = reduxForm<AddMessageFormType>({ form: 'dialogAddMessageForm' })(
  AddMessageForm
)
