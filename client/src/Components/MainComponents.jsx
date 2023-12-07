import React from 'react'

function MainComponents() {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
        <div className='max-h-[400px] relative'>
            <div className='absolute w-full h-full max-h-[400px] bg-black/50 flex flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6l lg:text-7l font-bold'>
                    <span className='text-green-300'>Recommended</span>
                    <span className='text-green-500'> Foods</span>
                </h1>
            </div>

            <img className="w-full max-h-[400px] object-cover" 
            src="https://images.crowdspring.com/blog/wp-content/uploads/2023/05/16174534/bakery-hero.png" alt="" />
        </div>
    </div>
  )
}

export default MainComponents