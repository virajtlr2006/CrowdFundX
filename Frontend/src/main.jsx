import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter,Route,Routes } from "react-router";
import Signup from './pages/Signup.jsx';
import Signin from './pages/Signin.jsx';
import Profile from './pages/Profile.jsx';
import Navbar from '../Components/Navbar.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
