import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs,  DialogsType, MessagesType} from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

import {stateType} from "./Render";



export type StatePropsType = {
    state: stateType
    addPost:(postMessage:string)=>void
    updateNewPostText:(newText:string)=>void
}
function App(props:StatePropsType) {

    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={()=> <Dialogs dialogs={props.state.dialogPage.dialogs} messages={props.state.dialogPage.messages}/>}/>
                <Route path='/profile' render={()=>
                    <Profile posts={props.state.profilePage.posts} addPost={props.addPost}
                             newPostText={props.state.profilePage.newPostText}
                             updateNewPostText={props.updateNewPostText}/>}/>
                {/*<Route path='/news' component={News}/>*/}
                {/*<Route path='/music' component={Music}/>*/}
                {/*<Route path='/setting' component={Setting}/>*/}
            </div>
        </div>

    );
}


export default App;
