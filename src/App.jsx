import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route ,  useLocation} from 'react-router-dom';
import SignUp from "./components/SignUp"
import SigIn from './components/SigIn'
import Layout from './pages/Layout';
import { auth } from './firebase';
import Header from './components/Header';
import Tools from './pages/Tools';

function App() {
  const [username, setusername] = useState("");

  



  useEffect(() => {
    setusername("")
    auth.onAuthStateChanged((user) => {
      if (user) {
        setusername(user.displayName);  
        console.log(`username is : ${username}`);
      }
      else
      {
        setusername("")
      }
    })

  }, [])
  
  return (
    <BrowserRouter>
    <Header username = {username} />
    <Routes>
      <Route path='/' element={<Layout  />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SigIn />} />
      <Route path='/tools'  element = {<Tools />} />
      {/* Other routes can be added similarly */}
    </Routes>
  </BrowserRouter>
  
  )
}

export default App