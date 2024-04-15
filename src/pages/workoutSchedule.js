import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faPlus } from '@fortawesome/free-solid-svg-icons';
import BottomNavigation from '../components/BottomNavigation';

const WorkoutSchedule = () => {
  const [activeDay, setActiveDay] = useState(1); // 1 represents Monday

  const handleDayClick = (index) => {
    setActiveDay(index);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full h-screen max-w-md mx-auto mt-8">
      <div className="flex flex-col items-center justify-between mb-2">
        <h2 className="text-2xl font-bold">Workout Schedule</h2>
        <div className="flex items-center space-x-2 mt-4">
          <button className="text-[#2C2B2B] hover:text-gray-700 focus:outline-none">
            <FontAwesomeIcon icon={faChevronLeft} className="h-3 w-3" />
          </button>
          <span className="text-[#2C2B2B] text-[12px] font-[600]">Feb 2024</span>
          <button className="text-[#2C2B2B] hover:text-gray-700 focus:outline-none">
            <FontAwesomeIcon icon={faChevronRight} className="h-3 w-3" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-4 mb-4 mt-4">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu'].map((day, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center bg-gray-100 h-[76.24px] w-[62.67] rounded-[10px]  p-4 cursor-pointer ${index === activeDay
              ? 'bg-gradient-to-l from-[#8DA4FF] to-[#D1DBFF] text-white font-bold'
              : 'text-gray-500'
              }`}
            onClick={() => handleDayClick(index)}
          >
            <div className='text-[11.39px] font-[600]'>{day}</div>
            <div className="text-[28.46] font-[600]">{index + 5}</div>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-gray-500 font-medium">06:00 AM</div>
            <div className="bg-purple-100 rounded-lg p-4">
              <div className="text-purple-600 font-medium">
                <div>Ab Workout</div>
                <div>7:30am</div>
              </div>
            </div>
            <div className="text-gray-500 font-medium">07:00 AM</div>
            <div className="bg-pink-100 rounded-lg p-4">
              <div className="text-pink-600 font-medium">
                <div>Upperbody Workout</div>
                <div>9am</div>
              </div>
            </div>
            <div className="text-gray-500 font-medium">03:00 PM</div>
            <div className="bg-purple-100 rounded-lg p-4">
              <div className="text-purple-600 font-medium">
                <div>Lowerbody Workout</div>
                <div>3pm</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed right-6 bottom-24">
        <button className="bg-gradient-to-r from-pink-300 to-purple-400 shadow-[0px_4px_6.5px_0px_rgba(0,0,0,0.15)] text-white rounded-full w-24 h-24 flex items-center justify-center focus:outline-none">
          <FontAwesomeIcon icon={faPlus} className="h-[24px] w-[44px]" />
        </button>
      </div>
      <div className='bottom-0 fixed left-0 z-50 w-full'>
        <BottomNavigation />
      </div>
    </div>
  );
};

export default WorkoutSchedule;