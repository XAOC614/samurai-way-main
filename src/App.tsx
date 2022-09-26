import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs,  DialogsType, MessagesType} from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {postsType} from "./Components/Profile/MyPosts/MyPosts";

type AppPropsType = {
    dialogs:Array<DialogsType>
    messages:Array<MessagesType>
    posts:Array<postsType>
}
function App(props:AppPropsType) {

    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={()=> <Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                <Route path='/profile' render={()=> <Profile posts={props.posts}/>}/>
                {/*<Route path='/news' component={News}/>*/}
                {/*<Route path='/music' component={Music}/>*/}
                {/*<Route path='/setting' component={Setting}/>*/}
            </div>
        </div>
        </BrowserRouter>
    );
}


export default App;
