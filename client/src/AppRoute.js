import React from 'react';
import {Route, Routes} from 'react-router-dom';
import MainComponents from './Components/Home/MainComponents';
import HomePage from './Pages/Home/HomePage';
import HeadlineComponents from './Components/Menu/HeadlineComponents';

export default function AppRoute() {
    return <Routes>
        <Route path="/" element={<MainComponents/>}/>
        <Route path="/home/" element={<HomePage/>}/>
        <Route path="/orders/" element={<HeadlineComponents/>}/>
        
        </Routes>
}