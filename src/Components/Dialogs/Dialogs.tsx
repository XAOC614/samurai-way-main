import React from "react";
import c from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                <div className={`${c.dialog} ${c.active}`}>
                    <NavLink to='/dialogs/1'>Dima</NavLink>
                </div>
                <div className={c.dialog}>
                    <NavLink to='/dialogs/2'>Andrey</NavLink>
                </div>
                <div className={c.dialog}>
                    <NavLink to='/dialogs/3'>Sergey</NavLink>
                </div>
                <div className={c.dialog}>
                    <NavLink to='/dialogs/4'>Anna</NavLink>
                </div>
                <div className={c.dialog}>
                    <NavLink to='/dialogs/5'>Sasha</NavLink>
                </div>
                <div className={c.dialog}>
                    <NavLink to='/dialogs/6'>Valera</NavLink>
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