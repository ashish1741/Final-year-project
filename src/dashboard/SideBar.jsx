import React, { useState } from 'react';
import { creatorDashboardItems } from '../constants';
import { NavLink, useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // Import ArrowBackIcon

function SideBar() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNavigation = (index, url) => {
    setCurrentIndex(index);
    navigate(url);
  };

  const navigateToHome = () => {
    navigate('/'); // Navigate to the main Home page
  };

  return (
    <div className="bg-gray-800 h-screen p-4 shadow-md relative"> {/* Added relative positioning */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          {creatorDashboardItems.map((ele, index) => (
            <div
              key={index}
              className={`flex items-center ${
                currentIndex === index
                  ? 'text-gray-950 transition duration-300 font-thin rounded-md bg-gray-600 shadow-lg'
                  : ''
              }`}
            >
              {ele.icon && <div className="mr-2">{ele.icon}</div>}
              <NavLink
                to={`/creator-dashboard/${ele.url}`}
                className="text-white cursor-pointer rounded-md pl-2 py-3"
                onClick={() => handleNavigation(index, ele.url)}
              >
                {ele.name}
              </NavLink>
            </div>
          ))}
        </div>
        <div className="flex relative top-[200px] gap-4 mt-5">
          <SettingsIcon className="cursor-pointer text-white hover:text-gray-600 transition duration-300" />
          <VisibilityIcon className="cursor-pointer text-white hover:text-red-200 transition duration-300" />
          <LogoutIcon className="cursor-pointer text-red-500 hover:text-red-200 transition duration-300" />
        </div>
        {/* Back to Home button */}
        <button
          onClick={navigateToHome}
          className="flex items-center font-[400]   text-gray-500 rounded-md p-2 hover:bg-gray-600 " >
          <ArrowBackIcon className="text-gray-300 mr-2" /> {/* Arrow icon */}
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default SideBar;
