import React from "react";
import c from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/Dialog.item";
import {Message} from "./Message/Message";




export const Dialogs = () => {
    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                <DialogItem name={'Dima'} id={'1'}/>
                <DialogItem name={'Andrey'} id={'2'}/>
                <DialogItem name={'Sergey'} id={'3'}/>
                <DialogItem name={'Anna'} id={'4'}/>
                <DialogItem name={'Sasha'} id={'5'}/>
                <DialogItem name={'Valera'} id={'6'}/>
            </div>
            <div className={c.messages}>
                <Message message={'Hi'}/>
                <Message message={'How are you?'}/>
                <Message message={'You the best!!'}/>


            </div>
        </div>
    )
}