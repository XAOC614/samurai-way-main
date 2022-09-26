import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let posts = [
    {id:'1', message:'Hi, how are you?',like:15},
    {id:'2', message:'It`s my firs post',like:20}
]
let dialogs = [
    {id: '1', name: 'Dima'},
    {id: '2', name: 'Andrey'},
    {id: '3', name: 'Sergey'},
    {id: '4', name: 'Anna'},
    {id: '5', name: 'Sasha'},
    {id: '6', name: 'Valera'}
]
let messages = [
    {id:'1', message:'Hi'},
    {id:'2', message:'How are you?'},
    {id:'3', message:'You the best!!'}
]

ReactDOM.render(
    <App posts={posts} dialogs={dialogs} messages={messages}/>,
  document.getElementById('root')
);