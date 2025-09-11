import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter,Route,Routes } from "react-router";
import Signup from './pages/Signup.jsx';
import Signin from './pages/Signin.jsx';
import Profile from './pages/Profile.jsx';
import Homepage from '../Components/Homepage.jsx';
import EditProfile from './pages/EditProfile.jsx';
import Explore from './pages/Explore.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/edit" element={<EditProfile />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
