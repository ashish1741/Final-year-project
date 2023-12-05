import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from "./components/SignUp"
import SigIn from './components/SigIn'
import Layout from './pages/Layout';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SigIn />} />
      {/* Other routes can be added similarly */}
    </Routes>
  </BrowserRouter>
  
  )
}

export default App