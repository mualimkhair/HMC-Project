import { MagnifyingGlass } from '@phosphor-icons/react'
import React from 'react'

const InputSearch = () => {
  return (
    <div className="w-96 ml-[650px] relative mr-8">
          <input className="w-full h-10 rounded-md text-bg text-lg bg-primary" type="text" placeholder="Cari Sesuatu.." />
          <button className="absolute right-2 top-1">
            <MagnifyingGlass size={32} className="text-secondary"/>
          </button>
        </div>
  )
}

export default InputSearch