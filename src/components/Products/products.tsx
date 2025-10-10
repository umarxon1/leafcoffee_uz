import React from 'react'
import { products } from "../../data/db"
import Image from 'next/image'
const Products = () => {
    
  return (
    <div className='flex flex-col items-center gap-20 mb-[150px] mt-[70px]'>
        <h2 className='text-[32px] max-md:text-[26px] max-sm:text-[20px]'>Top</h2>
    <div className='container grid grid-cols-4 gap-8 max-lg1:grid-cols-3 max-md:grid-cols-2 max-sm1:gap-4'>
        {products.map((el,i)=> {
            return(
                <div className='rounded-xl transition shadow-sm flex ease-in hover:shadow-lg overflow-hidden ' key={i}>
                    <div className='flex flex-col'>
                     <div className='overflow-hidden max-h-[323px] mb-[20px]'>
                    <Image width={300} height={200} className='rounded-t-xl h-[100%] w-[100%] cursor-pointer object-cover transform-transition duration-300 ease-in-out hover:scale-110' src={el.img} alt="img" />
                    </div>
                   <div className='px-[20px] pb-[20px] flex flex-col '>
                     <h3 className='h-[60px] text-[18px] text-[#371C06] hover:underline cursor-pointer max-lg1:text-[14px] max-sm1:text-[12px]'>{el.title}</h3>
                    <p className=' mb-[20px] h-[65px] text-[14px] text-[#ACACAC] max-lg1:text-[10px] max-md:hidden'>{el.description.slice(0,60)}...</p>
                 <div className='flex items-center justify-between max-sm1:flex-col max-sm1:gap-3 max-sm1:items-start'>
                       <span className=' text-[#371C06] text-[18px] max-lg1:text-[16px]  max-sm1:text-[14px]'>{el.price} сум</span>
                 </div>
                   </div>
                    </div>
                </div>
            )
        })}
    </div>
    </div>
  )
}

export default Products