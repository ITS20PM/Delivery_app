import React from 'react'
import {UilSearch, UilLocationPoint} from "@iconscout/react-unicons";

function Inputs() {
  return (
    <div className='flex flex-row justify-center my6'>
        <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
            <input type="text" 
            placeholder='search for city...'
            className='text-xl font-light p2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase'/>
        
            <UilSearch size={25} className="text-white cursor-pointer"></UilSearch>
            <UilLocationPoint size={25} className="text-white cursor-pointer"></UilLocationPoint>
        </div>
    </div>
  )
}

export default Inputs;
