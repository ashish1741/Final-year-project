import React from 'react';
import { useCourseContext } from '../context/context';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import CircleNotificationsRoundedIcon from '@mui/icons-material/CircleNotificationsRounded';
import { LearnerDashboardItems } from '../constants';
function LearnerPanel() {
  const { user } = useCourseContext();
  const { username, email } = user;

  return (
    <div className='bg-gradient-to-br from-slate-800 to-gray-900 p-4 w-full shadow-xl '>
      <div className="flex justify-between items-center">
        <div className="flex flex-col justify-center">
          <h1 className='text-gray-300 text-3xl font-semibold'>Hey {username} 👋</h1>
          <h2 className='text-gray-400 text-lg'>Pathshala's Learner Dashboard</h2>
        </div>
        <div className="flex items-center space-x-6">
          <LoginRoundedIcon className='text-white cursor-pointer' style={{ fontSize: '2.5rem' }} />
          <CircleNotificationsRoundedIcon className='text-white cursor-pointer' style={{ fontSize: '2.5rem' }} />
        </div>
      </div>
      <div className="mt-2 w-[40%] h-full border-r-2">
        <div className="flex flex-col space-y-2">
          {

            LearnerDashboardItems.map((ele) => <span key={ele.id}>{ele.name}</span>)

          }
        </div>
       

      </div>
    </div>
  );
}

export default LearnerPanel;
