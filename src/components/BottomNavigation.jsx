import React from 'react'

import HomeIcon from '../assets/homeIcon.svg'
import CameraIcon from '../assets/cameraIcon.svg'
import MetricIcon from '../assets/metricIcon.svg'
import ProfileIcon from '../assets/profileIcon.svg'
import SearchIcon from '../assets/searchIcon.svg'

const BottomNavigation = () => {
  return (
    <div className='h-[76px] w-[375px] bg-white py-4'>
        <div className='flex gap-6 justify-center'>
            <img src={HomeIcon} alt="*" />
            <img src={MetricIcon} alt="*" />
            <img src={SearchIcon} alt="*" className='z-100 -mt-10' />
            <img src={CameraIcon} alt="*" />
            <img src={ProfileIcon} alt="*" />
        </div>
    </div>
  )
}

export default BottomNavigation