import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import SignUp from "./components/SignUp";
import SigIn from "./components/SigIn";
import Header from "./components/Header";
import Tools from "./pages/Tools";
import CardDetails from "./components/CardDetails";
import Course from "./pages/Course";
import CreatorPannel from "./components/CreatorPannel";
import LearnerPannel from "./components/LearnerPannel";
import DashBorad from "./dashboard/DashBorad";
import Analytics from "./dashboard/Analytics";
import Home from "./pages/Home";
import Error404 from "./components/Error404";
import Signin from "./components/SigIn";
import CourseManagement from "./dashboard/courseManagement"
import CreateVideo from "./dashboard/createVideo";
import SettingsProfile from "./dashboard/Settings-Profile";

function App() {
  return (
    <div className="w-full h-full bg-slate-950">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="*" element={<Error404 />} />

          {/* Nested route for courses */}
          <Route path="/course" element={<Course />}>
          <Route path=":id" element={<CardDetails />} />
          </Route>

          {/* Nested routes for creator dashboard */}
          <Route path="/creator-dashboard" element={<CreatorPannel />}>
            <Route index element={<DashBorad />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="courseManagement" element={<CourseManagement />} />
            <Route path="create-course" element={<CreateVideo />} />
            <Route path="Settings-Profile" element={<SettingsProfile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
