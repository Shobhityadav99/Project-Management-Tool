/** @format */

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard/dashboard";
import Login from "./pages/Login/Login";
import MyAccount from "./pages/MyAccount/MyAccount";
import { Project } from "./pages/Project/Project";
import Register from "./pages/Register/Register";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/account' element={<MyAccount />} />
        <Route exact path='/' element={<Dashboard />} />
        <Route exact path='/project' element={<Project />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
