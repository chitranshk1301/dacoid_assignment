import React from 'react'
import AlertTriangle from '../assets/alertTriangle.svg'

const AlertCard = () => {
  return (
    <div className='h-[50px] w-[328.75] min-w-[330px] rounded-r-[12px] rounded-l-[12px] bg-gradient-to-r from-[rgba(129,157,255,0.28)] to-[rgba(16,16,16,0)] border-[1.02px] flex gap-2 px-[10px] py-[5px]'>
        <img src={AlertTriangle} />
        <p className='text-[12.57px] font-[500]'>You've burned fewer calories than <br /> yesterday. Time to get moving!</p>
    </div> 
  )
}

export default AlertCard