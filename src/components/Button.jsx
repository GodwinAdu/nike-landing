import React from 'react'

const Button = ({label, iconURL}) => {
  return (
    <button className='flex justify-center gap-2 px-7 py-4 font-montserrat text-lg rounded-full leading-none bg-coral-red border-coral-red'>
        {label}
        {iconURL && (
          <img src={iconURL} alt="" className='ml-2 w-5 h-5 rounded-full' />
        )}
    </button>
  )
}

export default Button