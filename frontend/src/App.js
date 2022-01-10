/** @format */

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard/dashboard";
import Login from "./pages/Login/Login";
import { MyAccount } from "./pages/MyAccount/MyAccount";
import { Project } from "./pages/Project/Project";
import Register from "./pages/Register/Register";
import { Profile } from './pages/profile/profile';
import { NewProject } from "./components/NewProject";

function App() {
  
  return (
      <>
      <Router>
      <Routes>
        <Route path='/profile/:userId' element={<Profile />} />
        <Route path='/user/account/:userId' element={<MyAccount />} />
        <Route path='/user/account/updateProfile/:userId' element={<Profile />} />
        <Route path='/user/dashboard/:userId' element={<Dashboard />} />
        <Route path='/project/:id' element={<Project />} />
        <Route exact path='/' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/new-project' element={<NewProject />} />
      </Routes>
      </Router>
      </>
  );
}

export default App;