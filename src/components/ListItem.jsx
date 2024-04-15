import React from 'react'
import Checkbox from './Checkbox'

const ListItem = (props) => {
  return (
    <div className='bg-[#F1F1F1] w-[343px] py-[18px] px-[20px] h-[50px] rounded-r-[12px] rounded-l-[12px] flex items-center justify-between'>
        <p className='text-[12px] font-[600]'>{props.text}</p>
        <Checkbox />
    </div>
  )
}

export default ListItem