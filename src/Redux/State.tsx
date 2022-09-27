import React from "react";

import {rerenderEntireTree, stateType} from "../Render";

type newPostType = {
    id: number
    message: string
    like: number
}

export let state:stateType = {
    profilePage:{
        posts : [
            {id:1, message:'Hi, how are you?',like:15},
            {id:2, message:'It`s my firs post',like:20}
        ],
        newPostText:'it-incubator.com'
    },
    dialogPage:{
        dialogs : [
            {id: 1, name: 'Dima'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sergey'},
            {id: 4, name: 'Anna'},
            {id: 5, name: 'Sasha'},
            {id: 6, name: 'Valera'}
        ],
        messages : [
            {id:1, message:'Hi'},
            {id:2, message:'How are you?'},
            {id:3, message:'You the best!!'}
        ]
    }

}
export let addPost = (postMessage:string)=> {
    let newPost :newPostType = {
        id: new Date().getTime(),
        message:postMessage,
        like:0
    }
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}
export let updateNewPostText = (newText:string) =>{
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}