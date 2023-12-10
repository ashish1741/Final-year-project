import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import SignUp from "./components/SignUp";
import SigIn from "./components/SigIn";
import Header from "./components/Header";
import Tools from "./pages/Tools";
import CardDetails from "./components/CardDetails";
import Course from "./pages/Course";
import CreatorPannel from "./components/CreatorPannel";
import LearnerPannel from "./components/LearnerPannel"

function App() {
  

  return (
    <div className="w-full h-full bg-slate-950">
      <BrowserRouter>
        <Header  />
        <Routes>
          <Route path="/" element={<Course />} />
          <Route path="course/:id" element={<CardDetails />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SigIn />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/creator-dashboard" element={<CreatorPannel />} />
          <Route path="/learner-dashboard" element={<LearnerPannel />} />
          {/* Other routes can be added similarly */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
