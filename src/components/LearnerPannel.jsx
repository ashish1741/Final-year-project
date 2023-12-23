import React from "react";
import { useCourseContext } from "../context/context";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import CircleNotificationsRoundedIcon from "@mui/icons-material/CircleNotificationsRounded";
import { LearnerDashboardItems } from "../constants";
import SavingsIcon from "@mui/icons-material/Savings";
import SettingsIcon from "@mui/icons-material/Settings";

function LearnerPanel() {
  const { user } = useCourseContext();
  const { username, email } = user;

  return (
    <div className="bg-gradient-to-br from-slate-900 to-gray-900 p-4 w-full shadow-xl rounded-lg">
      <div className="flex justify-between mt-5 items-center">
        <div className="flex flex-col">
          <h1 className="text-gray-300 text-3xl font-semibold mb-1">
            Hey {username} 👋
          </h1>
          <h2 className="text-gray-400 text-lg mb-3">
            Pathshala's Learner Dashboard
          </h2>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-3 border-r text-gray-300">
      {LearnerDashboardItems.map((item) => (
          <div key={item.id} className="flex items-center gap-3  mb-3">
            <span className="text-lg ">{item.name}</span>
          </div>
        ))}
        <div className="flex my-3 space-x-2">
          <CircleNotificationsRoundedIcon className="text-white cursor-pointer transition-transform duration-300 transform hover:translate-x-2" />
          <SavingsIcon className="text-white cursor-pointer transition-transform duration-300 transform hover:translate-x-2" />
          <SettingsIcon className="text-white cursor-pointer transition-transform duration-300 transform hover:translate-x-2" />
          <LoginRoundedIcon className="text-white cursor-pointer transition-transform duration-100 transform hover:translate-x-2" />
        </div>
      </div>
    </div>
  );
}

export default LearnerPanel;
