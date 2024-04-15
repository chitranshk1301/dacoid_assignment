import React from 'react'
import { Link } from "react-router-dom";

import ManRunning from '../assets/man_running_page1.png';
import NavigationButton from '../assets/navigation_button.svg'

const TrackYourGoal = () => {
  return (
    <div className='flex flex-col items-center justify-center p-4'>
      <div>
        <p className='text-[#9fb2ff] underline ml-[17rem]'>Skip</p>
      </div>
      <div className='mt-28'>
        <img src={ManRunning} />
      </div>
      <div className='mt-8'>
        <h3 className='text-[20px] font-[600]'>Track Your Goal</h3>
        <p className='text-[16px] font-[500] text-[#787878]'>Don’t worry if you have trouble <br /> determining your goals,
          We can help you determine your goals and track your goals
        </p>
      </div>
      <div className='focus:opacity-100 cursor-pointer mt-28 ml-[15rem]'>
        <Link to='/get-burn'><img src={NavigationButton} /></Link>
      </div>
    </div>
  )
}

export default TrackYourGoal