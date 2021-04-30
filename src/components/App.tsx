import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Routes} from '../routes/Routes';
import {Navbar} from './navbar/Navbar';

function App() {
    return (
        <>
            <h1>This is mega super friday project</h1>
            <div>
                <BrowserRouter>
                    <Navbar/>
                    <Routes/>
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;
