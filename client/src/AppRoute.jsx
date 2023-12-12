import React from 'react';
import {Route, Routes} from 'react-router-dom';
import MainComponents from './Components/Home/MainComponents';
import Food from './Pages/Food/Italy';
import Food2 from './Pages/Food/Mexico';
import Food3 from './Pages/Food/America';
import Food4 from './Pages/Food/Cantonese';
import Food5 from './Pages/Food/Japan';
import Food6 from './Pages/Food/Vietnam';
import CartPage from './Pages/Cart/CartPage';
import HeadlineComponents from './Components/Menu/HeadlineComponents';

export default function AppRoute() {
    return <Routes>
        <Route path="/" element={<MainComponents/>}/>

        <Route path="/italy/" element={<Food/>}/>
        <Route path="/mexico/" element={<Food2/>}/>
        <Route path="/america/" element={<Food3/>}/>
        <Route path="/cantonese/" element={<Food4/>}/>
        <Route path="/japan/" element={<Food5/>}/>
        <Route path="/vietnam/" element={<Food6/>}/>
        
        <Route path="/cart/" element={<CartPage />}/>

        <Route path="/orders/" element={<HeadlineComponents/>}/>
        
        </Routes>
}