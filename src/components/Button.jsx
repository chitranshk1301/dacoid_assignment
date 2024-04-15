import React from 'react'

const Button = (props) => {
  return (
    <div className='flex justify-center w-full max-w-xs items-center gap-1.5 h-[50px] rounded-r-[12px] rounded-l-[12px] bg-gradient-to-l from-[#7B91FF] to-[#95BEFF]'>
        <p className='font-[600] text-[16px] text-white'>{props.text}</p>
    </div>
  )
}

export default Button