import React from 'react'
import Toggler from './Toggler'


const WorkoutCard = (props) => {
  return (
    <div className='flex justify-between items-center h-[75px] w-full rounded-r-[12px] rounded-l-[12px] shadow-[-4px_8px_25px_-8px_rgba(0,0,0,0.15)]'>
        <img src={props.img} />
        <div className=''>
            <p className='text-[12px] font-[500] mr-16'>{props.text}</p>
            <p className='text-[10px] font-[500] font-[#7F7F7F]'>{props.time}</p>
        </div>
        <Toggler />
    </div>
  )
}

export default WorkoutCard