import React from 'react'
import Button from '../components/Button'
import ListItem from '../components/ListItem'

const GoalsPage = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-10 p-4 mt-16'>
      <h1 className='text-[20px] font-[600]'>What are your goals?</h1>

      <div className='grid gap-4'>
        <ListItem text="Weight Loss" />
        <ListItem text="Muscle Gain" />
        <ListItem text="Flexibility and Mobility" />
        <ListItem text="General Fitness" />
        <ListItem text="Event - specific training" />
        <ListItem text="Mindfulness and Mental Health" />

        <div className='ml-2 mt-24'>
          <Button text="Confirm" />
        </div>

      </div>
    </div>
  )
}

export default GoalsPage