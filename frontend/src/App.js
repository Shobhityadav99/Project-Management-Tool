import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import { Project } from "./pages/Project/Project";
import Register from "./pages/Register/Register";
function App() {
	return (
		<Router>
			<Routes>
				<Route exact path="/project" element={<Project />} />
				<Route exact path="/login" element={<Login />} />
				<Route exact path="/register" element={<Register />} />
			</Routes>
		</Router>
	);
}

export default App;