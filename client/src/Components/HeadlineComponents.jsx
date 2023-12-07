import React from 'react'

function HeadlineComponents() {

  const country_list = [{image_url: "https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/07/19/11/yard-sale-pizza-1907.jpg?width=1200&auto=webp&quality=75", country: "Italian"}, 
  {image_url: "https://danosseasoning.com/wp-content/uploads/2022/03/Beef-Tacos-768x575.jpg", country: "Mexican"}, 
  {image_url: "https://static.standard.co.uk/s3fs-public/thumbnails/image/2015/07/23/12/hotdogs-top-dog-2.jpg?width=1200", country: "American"}, 
  {image_url: "https://s.dash.co/2019/06/14/030601/header2.jpg", country: "Cantonese"},
  {image_url: "https://www.utsc.utoronto.ca/food/sites/utsc.utoronto.ca.food/files/styles/cta_wide/public/images/cta/Bento%20Sushi%20Menu_0_0.png?h=52e56c2b&itok=uXvS8vd1", country: "Japanese"}, 
  {image_url: "https://tb-static.uber.com/prod/image-proc/processed_images/9ad0b70df6bb45d8c64edb0ce5060a84/16bb0a3ab8ea98cfe8906135767f7bf4.webp", country: "Vietnamese"}];
  
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        
        {country_list.map(item => (
          <div className='rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
              <p className='font-bold text-2xl px-2 pt-4'>{item.country}</p>
              <p className='px-2'>Through 10/29</p>
              <button className='border-white bg-white text-black mx-2 absolute bottom-4 rounded'>Order Now</button>
            </div>
  
            <img className='max-h-[250px] md:max-h-[250px] w-full object-cover rounded-xl'
            
            src={item.image_url} alt="" />
          </div>
        ))}
        
    </div>
  )
}

export default HeadlineComponents;