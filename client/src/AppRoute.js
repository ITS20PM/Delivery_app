import React from 'react';
import {Route, Routes} from 'react-router-dom';
import MainComponents from './Components/Home/MainComponents';
import Food from './Pages/Food/Italy';
import Food2 from './Pages/Food/Mexico';
import Food3 from './Pages/Food/America';
import HeadlineComponents from './Components/Menu/HeadlineComponents';

export default function AppRoute() {
    return <Routes>
        <Route path="/" element={<MainComponents/>}/>

        <Route path="/italy/" element={<Food/>}/>
        <Route path="/mexico/" element={<Food2/>}/>
        <Route path="/america/" element={<Food3/>}/>

        <Route path="/orders/" element={<HeadlineComponents/>}/>
        
        </Routes>
}