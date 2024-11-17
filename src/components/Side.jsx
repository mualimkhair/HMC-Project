import { CaretDown } from '@phosphor-icons/react'
import React from 'react'

const Side = () => {

  return (
    <div className='bg-black w-1/2 h-screen mt-[2px] rounded-md'>
      <div className='w-full grid gap-2'>
        <div className=' text-primary flex justify-between w-auto items-center mx-4 pt-8 '>
          <p className='font-bold text-lg'>Promo!!!</p>
          <CaretDown size={24} />
        </div>
        <div className=' text-primary flex justify-between w-auto items-center mx-4 '>
          <p className='font-bold text-lg'>Kategori</p>
          <CaretDown size={24} />
        </div>
        <div className=' text-primary flex justify-between w-auto items-center mx-4 '>
          <p className='font-bold text-lg'>Metode Pembayaran</p>
          <CaretDown size={24} />
        </div>
      </div>
    </div>
  )
}

export default Side