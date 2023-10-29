import React from 'react';
import { useState } from 'react';
import {AiOutlineMenu, AiOutlineSearch, AiOutlineClose} from 'react-icons/ai';
import {BsFillCartFill} from 'react-icons/bs';

function NavBar() {

    const [nav, set_nav] = useState(false);

    return (
        <div className='max-w-[1640px] mx-auto flex jutisfy-between items-center p-5'>

            <div className='flex items-center'>
                <div onclick={() => set_nav(!nav)} className='cursor-pointer'>
                    <AiOutlineMenu size={30} />
                </div>
                
                <h1 className='text-2xl sm:text-3xl lg:text-4xl px-20'>
                    Uvic Mobile<span className='font-bold'> Delivery App</span>
                </h1>

                <div className='lg:flex items-center bg-gray-400 rounded-full p-2 text-[17px]'>
                    <p className='bg-slate-800 text-white rounded-full p-2 my-5'>delivery</p>
                    <p className='p-4'>Pickup</p>
                </div>
            </div>

            <div className='bg-gray-200 rounded-full flex items-center px-2 w-[100px] sm:w-[300px] lg:w-[300px] ml-10'>
                <AiOutlineSearch size={30}/>
                <input className="bg-transparent p-2 w-full focus:outline:none" />
            </div>

            <button className='bg-black text-white md:flex item-center p-4 rounded-full'>
                <BsFillCartFill size={25} className='mr-2'/>
                Cart
            </button>

            <div>
                <AiOutlineClose size={25} onClick={() => set_nav(!nav)} className='absolute right-4 top:4 cursor-pointer'/>
                
                <nav>
                    <ul>
                        <li>Orders</li>
                        <li>Favorites</li>
                        <li>Wallet</li>
                        <li>Help</li>
                        <li>Promotion</li>
                        <li>Best Ones</li>
                        <li>Invite a Friend</li>
                    </ul>
                </nav>
            </div>
        </div>

        
    )
}

export default NavBar