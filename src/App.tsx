import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";


function App() {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <Profile/>
            <Dialogs/>
        </div>
    );
}


export default App;
