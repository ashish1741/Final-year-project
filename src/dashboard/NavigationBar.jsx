import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';

function NavigationBar() {
  return (
    <div className='flex justify-between items-center bg-gray-900 text-white px-4 py-2 shadow-md'>
      <div className="text-xl font-semibold">Creator Dashboard</div>
      <div className="flex gap-6 text-3xl">
        <CircleNotificationsIcon className='cursor-pointer hover:text-gray-300 transition-colors' />
      </div>
    </div>
  );
}

export default NavigationBar;
