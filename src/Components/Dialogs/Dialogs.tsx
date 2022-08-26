import React from "react";
import c from './Dialogs.module.css'

export const Dialogs = () => {
    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                <div className={`${c.dialog} ${c.active}`}>
                    Dima
                </div>
                <div className={c.dialog}>
                    Andrey
                </div>
                <div className={c.dialog}>
                    Sergey
                </div>
                <div className={c.dialog}>
                    Anna
                </div>
                <div className={c.dialog}>
                    Sasha
                </div>
                <div className={c.dialog}>
                    Valeriy
                </div>
            </div>
            <div className={c.messages}>
                <div className={c.message}>Hi</div>
                <div className={c.message}>How are you?</div>
                <div className={c.message}>You are Best!</div>


            </div>
        </div>
    )
}