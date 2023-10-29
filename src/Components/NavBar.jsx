import React from 'react';
import { useState } from 'react';
import {AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag} from 'react-icons/ai';
import {BsFillCartFill, BsFillSaveFill} from 'react-icons/bs';
import {TbTruckDelivery} from 'react-icons/tb';
import {FaUserFriends, FaWallet} from 'react-icons/fa';
import {MdFavorite, MdHelp} from 'react-icons/md';

function NavBar() {

    const [nav, set_nav] = useState(false);

    return (
        <div className='max-w-[1640px] mx-auto flex jutisfy-between items-center p-5'>

            <div className='flex items-center'>
                <div onclick={() => set_nav(!nav)} className='cursor-pointer'>
                    <AiOutlineMenu size={30} />
                </div>
                
                <h1 className='text-2xl sm:text-3xl lg:text-4xl px-19'>
                    Uvic Mobile<span className='font-bold'> App</span>
                </h1>

                <div className='lg:flex items-center bg-gray-400 rounded-full p-2 text-[17px] mx-5'>
                    <p className='bg-slate-800 text-white rounded-full p-2 my-5'>delivery</p>
                    <p className='p-4'>Pickup</p>
                </div>
            </div>

            <div className='bg-gray-200 rounded-full flex items-center px-2 w-[100px] sm:w-[300px] lg:w-[300px] ml-2'>
                <AiOutlineSearch size={30}/>
                <input className="bg-transparent p-2 w-full focus:outline:none" />
            </div>

            <button className='bg-black text-white md:flex item-center p-4 rounded-full ml-10'>
                <BsFillCartFill size={25} className='mr-2'/>
                Cart
            </button>

            
            <div>
                <AiOutlineClose size={25} onClick={() => set_nav(!nav)} className='absolute right-4 top:4 cursor-pointer'/>
                
                <nav className='mx-10'>
                    <ul className='flex flex-col p-4 text-grey-800'>
                        <li className='text-xl py-4 flex'><TbTruckDelivery size={30} className="mr-4"/>Orders</li>
                        <li className='text-xl py-4 flex'><MdFavorite size={30} className='mr-4'/>Favorites</li>
                        <li className='text-xl py-4 flex' ><FaWallet size={30} className='mr-4'/>Wallet</li>
                        <li className='text-xl py-4 flex'><MdHelp size={30} className='mr-4'/>Help</li>
                        <li className='text-xl py-4 flex'><AiFillTag size={30} className='mr-4'/>Promotion</li>
                        <li className='text-xl py-4 flex'><BsFillSaveFill size={30} className='mr-4'/>Best Ones</li>
                        <li className='text-xl py-4 flex'><FaUserFriends size={30} className='mr-4'/>Invite a Friend</li>
                    </ul>
                </nav>
            </div>
        </div>

        
    )
}

export default NavBar