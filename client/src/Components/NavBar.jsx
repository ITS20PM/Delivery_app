import React from 'react';
import {Link} from "react-router-dom";
import Login from '../Pages/Login';


export default function NavBar() {
    const user = {
        name: 'Patrick',  
    };

    const cart = {
        totalCount: 10,
    };

    const logout = () => {

    }

    return (
        <header className='max-w-[1640px] mx-auto flex jutisfy-between items-center p-5 
        mt-4 py-5 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl 
        shadow-gray-400'>
            <div className='flex items-center'>
                <Link to="/" className='text-2xl sm:text-3xl lg:text-4xl px-19'>
                    Food Delivery App
                </Link>

                <nav>
                    <ul>
                        {
                            user? (
                                <li className='lg:flex ml-80'>
                                <Link to="/profile">{user.name}</Link>
                                <div className='m-auto inline-block flex-col justify-end'>
                                    <Link to="/profile" className='px-10'>Profile</Link>
                                    <Link to="/orders" className='px-10'>Orders</Link>
                                    <a onClick={logout}>Logout</a>
                                </div>
                            </li>
                            ) : (
                                <Link to="/login"></Link>    
                            )}

                            <li className='justify-end ml-80'>
                                <Link to="/cart">
                                    Cart
                                    {cart.totalCount > 0 && <span className='text-slate-200'>{cart.totalCount}</span>}
                                </Link>
                            </li>
         
                    </ul>
                </nav>
            </div>
        </header>    
    )
}