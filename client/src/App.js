import React, { useState} from "react";
import Home from "./Pages/Home";
import RequestBlood from "./Pages/RequestBlood";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import RegisterUser from "./Pages/RegisterUser";
import EmergencyPage from "./Pages/EmergencyPage";
import SearchResult from "./Pages/SearchResult";
import Profile from "./Pages/Profile";
import Login from "./Pages/Login";
import AdminPage from "./Pages/AdminPage";
import NotFoundPage from "./Pages/NotFoundPage";
import Donate from "./Pages/Donate";


function App() {
  const [islogged, setIslogged] = useState(localStorage.getItem("isAuth"));

  const handleLogin = () => {
    setIslogged("true");
  };

  const handleLogout = () => {
    setIslogged(false);
    localStorage.setItem("isAdmin", "false");
    localStorage.setItem("isAuth", "false");
  };

  return (
    <div className="app">
      <Navbar onLogout={handleLogout} islogged={islogged} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<RequestBlood />} />
        <Route path="/register" element={<RegisterUser admin={0} />} />
        <Route path="/emergency" element={<EmergencyPage />} />
        <Route path="/search/:bloodgroup/:location" element={<SearchResult />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="*" element={<NotFoundPage />} />
        
      </Routes>
    </div>
  );
}

export default App;
