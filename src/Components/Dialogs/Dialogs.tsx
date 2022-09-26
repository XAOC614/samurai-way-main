import React from "react";
import c from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/Dialog.item";
import {Message} from "./Message/Message";
export type DialogsType = {
    id:string
    name:string
}
export type MessagesType = {
    id:string
    message:string
}
export type DialogsPropsType = {
    dialogs:Array<DialogsType>
    messages:Array<MessagesType>
}

export const Dialogs = (props:DialogsPropsType) => {
    let dialogsElements = props.dialogs.map(d=> (<DialogItem name={d.name} id={d.id}/>))

    let messagesElements = props.messages.map(m=>(<Message message={m.message}/>))

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={c.messages}>
                {messagesElements}

            </div>
        </div>
    )
}