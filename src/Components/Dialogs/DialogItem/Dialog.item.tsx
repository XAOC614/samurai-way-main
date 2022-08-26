import c from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogItemType = {
    name:string
    id:string
}
export const DialogItem = (props:DialogItemType) => {
    let path = '/dialogs/'+ props.id
    return(
        <div className={`${c.dialog} ${c.active}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>

    )
}