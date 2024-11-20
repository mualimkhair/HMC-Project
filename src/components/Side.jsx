import { CaretDown } from '@phosphor-icons/react'
import React from 'react'

const Side = () => {

  return (
    <div className='bg-black w-full h-screen mt-[2px] rounded-md hidden md:block'>
      <div className='grid gap-4 text-lg'>
        <div className='relative text-primary flex justify-between w-auto items-center mx-4 pt-8 '>
          <p className='font-bold'>Promo!!!</p>
          <CaretDown size={24} />
          <div className='absolute bottom-0 w-full h-[1px] bg-primary bg-opacity-25'></div>
        </div>
        <div className='relative text-primary flex justify-between w-auto items-center mx-4 '>
          <p className='font-bold'>Kategori</p>
          <CaretDown size={24} />
          <div className='absolute bottom-0 w-full h-[1px] bg-primary bg-opacity-25'></div>
        </div>
        <div className='relative text-primary flex justify-between w-auto items-center mx-4 '>
          <p className='font-bold'>Pembayaran</p>
          <CaretDown size={24} />
          <div className='absolute bottom-0 w-full h-[1px] bg-primary bg-opacity-25'></div>
        </div>
      </div>
    </div>
  )
}

export default Side