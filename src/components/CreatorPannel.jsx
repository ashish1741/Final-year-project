import React from 'react';
import NavigationBar from '../dashboard/NavigationBar';
import SideBar from '../dashboard/SideBar';
import { Outlet, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // Import the arrow icon from Material-UI

function CreatorPannel() {
  const navigate = useNavigate();

  // Function to handle navigation to the main Home page
  const navigateToHome = () => {
    navigate('/');
  };

  return (
    <div className="bg-gray-900 flex flex-col h-screen fixed top-0 bottom-0 left-0 right-0">
      <div className="p-4">
        <NavigationBar />
      </div>
      <div className="flex flex-1 overflow-hidden">
        <div className="w-64 bg-gray-800 shadow-md mt-5 overflow-y-auto border-r-2 border-white">
          <SideBar />
        </div>
        <div className="flex-1 bg-gray-900 p-4 overflow-y-auto relative">
          {/* Outlet for rendering nested routes */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default CreatorPannel;
