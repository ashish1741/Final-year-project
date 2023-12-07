import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from "./components/SignUp"
import SigIn from './components/SigIn'
import Layout from './pages/Layout';
import { auth } from './firebase';

function App() {
  const [username, setusername] = useState("");
  

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setusername(user.displayName);  
      }
      else
      {
        setusername("")
      }
    })

  }, [])
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout username ={username} />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SigIn />} />
      {/* Other routes can be added similarly */}
    </Routes>
  </BrowserRouter>
  
  )
}

export default App