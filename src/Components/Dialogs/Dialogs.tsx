import React from "react";
import c from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/Dialog.item";
import {Message} from "./Message/Message";
export type DialogsType = {
    id:number
    name:string
}
export type MessagesType = {
    id:number
    message:string
}
export type DialogsPropsType = {
    dialogs:Array<DialogsType>
    messages:Array<MessagesType>
}

export const Dialogs = (props:DialogsPropsType) => {
    let newMessageElement = React.createRef<HTMLTextAreaElement>()
    let addMessage = () => {
        alert(newMessageElement.current?.value)
    }
    let dialogsElements = props.dialogs.map(d=> (<DialogItem name={d.name} id={d.id}/>))

    let messagesElements = props.messages.map(m=>(<Message message={m.message}/>))

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={c.messages}>
                {messagesElements}
                <textarea ref={newMessageElement}></textarea>
                <div>
                <button onClick={addMessage}>New Message</button>
                </div>
            </div>
        </div>
    )
}