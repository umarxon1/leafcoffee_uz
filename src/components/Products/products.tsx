import React from 'react'
import { products } from "../../data/db"
import Image from 'next/image'
import { getTranslations } from 'next-intl/server';
import { LocalType } from '@/types/type';
export default async function Products({locale}:LocalType) {
    
  const t = await getTranslations({ locale, namespace: "header" });

  return (
    <div className='flex flex-col items-center gap-10 mb-[70px] mt-[30px]'>
        <h2 className='text-[32px] max-md:text-[26px] max-sm:text-[20px]'>{t("menu")}</h2>
    <div className='container grid grid-cols-4 gap-8 max-lg1:grid-cols-3 max-md:grid-cols-2 max-sm1:gap-4'>
        {products.map((el,i)=> {
            return(
                <div className='rounded-xl transition shadow-sm flex ease-in hover:shadow-lg overflow-hidden ' key={i}>
                    <div className='flex flex-col'>
                     <div className='overflow-hidden max-h-[323px] mb-[20px]'>
                    <Image width={330} height={200} className='rounded-t-xl h-[100%] w-[100%] bg-amber-50 cursor-pointer object-cover transform-transition duration-300 ease-in-out hover:scale-110' src={el.img} alt="img" />
                    </div>
                   <div className='px-[20px] pb-[20px] flex flex-col '>
                     <h3 className='h-[60px] text-[18px] text-[#371C06] hover:underline cursor-pointer max-lg1:text-[14px] max-sm1:text-[12px]'>{el.title}</h3>
                   </div>
                    </div>
                </div>
            )
        })}
    </div>
    </div>
  )
}
