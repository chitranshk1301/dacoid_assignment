import React from 'react'

import NavigationButton from '../assets/navigation_button.svg';
import TwoCyclists from '../assets/two_cyclists_page2.png';

const GetBurn = () => {
  return (
    <div className='flex flex-col items-center justify-center p-4'>
      <div>
        <p className='text-[#9fb2ff] underline ml-[17rem]'>Skip</p>
      </div>
      <div className='mt-28'>
        <img src={TwoCyclists} />
      </div>
      <div className='mt-16'>
        <h3 className='text-[20px] font-[600]'>Get Burn</h3>
        <p className='text-[16px] font-[500] text-[#787878]'>Let’s keep burning to achieve your goals,<br /> it hurts only temporarily, if you give up now you will be in pain forever
        </p>
      </div>
      <div className='focus:opacity-100 cursor-pointer mt-28 ml-[15rem]'>
        <img src={NavigationButton} />
      </div>
    </div>
  )
}

export default GetBurn
