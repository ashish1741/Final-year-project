import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import SignUp from "./components/SignUp";
import SigIn from "./components/SigIn";
import { auth } from "./firebase";
import Header from "./components/Header";
import Tools from "./pages/Tools";
import CardDetails from "./components/CardDetails";
import Course from "./pages/Course";

function App() {
  const [username, setusername] = useState("");

  useEffect(() => {
    setusername("");
    auth.onAuthStateChanged((user) => {
      if (user) {
        setusername(user.displayName);
        console.log(`username is : ${username}`);
      } else {
        setusername("");
      }
    });
  }, []);

  return (
    <div className="w-full h-full bg-slate-950">
      <BrowserRouter>
        <Header username={username} />
        <Routes>
          <Route path="/" element={<Course />} />
          <Route path="/id" element={<CardDetails />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SigIn />} />
          <Route path="/tools" element={<Tools />} />
          {/* Other routes can be added similarly */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
