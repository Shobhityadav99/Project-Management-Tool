/** @format */

import React, { useCallback, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard/dashboard";
import Login from "./pages/Login/Login";
import { MyAccount } from "./pages/MyAccount/MyAccount";
import { Project } from "./pages/Project/Project";
import Register from "./pages/Register/Register";
import { Profile } from './pages/profile/profile';
import { AuthContext } from './shared/context/auth-context';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(false);

  const login = useCallback(uid => {
    setIsLoggedIn(true);
    setUserId(uid);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUserId(null);
  }, []);

  let routes = (
      <Routes>
        <Route path='/profile' element={<Profile />} />
        <Route path='/account' element={<MyAccount />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/project' element={<Project />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
      </Routes>
    );

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        userId: userId,
        login: login,
        logout: logout
      }}
    >
      <Router>{routes}</Router>
    </AuthContext.Provider>
  );
}

export default App;