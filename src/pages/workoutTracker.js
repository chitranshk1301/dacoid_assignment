import React from 'react'
import Graph from '../assets/graph.svg'
import AlertCard from '../components/AlertCard'
import WorkoutCard from '../components/WorkoutCard'

import FullBodyWorkout from '../assets/fullBodyWorkout.svg'
import UpperBodyWorkout from '../assets/upperBodyWorkout.svg'
import DetailedCard from '../assets/detailedCard.svg'
import BottomNavigation from '../components/BottomNavigation'

const WorkoutTracker = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-10 p-4 mt-16'>
      <h1 className='text-[20px] font-[600]'>Workout Tracker</h1>
      <img src={Graph} alt="*" />
      <AlertCard />

      <div>
        <h2 className='flex items-center gap-32 text-[16px] font-[600]'>Upcoming Workout <span className='text-[12px] font-[500] text-[#7F7F7F] underline'>See more</span></h2>
        <WorkoutCard img={FullBodyWorkout} text="Full Body Workout" time="Today 3pm" />
        <WorkoutCard img={UpperBodyWorkout} text="Upper Body Workout" time="4 Feb, 3:30 pm" />
      </div> 

      <div>
        <h2 className='flex items-center gap-32 text-[16px] font-[600]'>What Do You Want to Train</h2>
        <img src={DetailedCard} alt="*" />
      </div>

      <div className='bottom-0 fixed left-0 z-50 w-full'>
        <BottomNavigation />
      </div>

    </div>
  )
}

export default WorkoutTracker