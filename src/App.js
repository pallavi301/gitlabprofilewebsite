import React from 'react';
//import './App.css';
//import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import Sidebar from './components/Sidebar';
//import Dashboard from './pages/Dashboard.jsx';
//import Profile from './pages/Profile.jsx';
//import Account from './pages/Account.jsx';
//import PasswordChange from './pages/PasswordChange';


const App = () => {
  return (
    /*<BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/account" element={<Account />} />
          <Route path="/passwordchange" element={<PasswordChange />} />
          
        </Routes>
      </Sidebar>
    </BrowserRouter>*/
    <>
    <h1 className="bg-red-500">
      Hello world!
    </h1>
    <input value={20}/>
    </>
  );
};

export default App;

