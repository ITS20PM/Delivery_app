import React from 'react';
import {Route, Routes} from 'react-router-dom';
import MainComponents from './Components/MainComponents';

export default function AppRoute() {
    return <Routes>
        <Route path="/" element={<MainComponents/>}/>
        </Routes>
}