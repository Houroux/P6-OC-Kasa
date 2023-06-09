import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Location from "./pages/Location";
import About from "./pages/About";
import Error from "./pages/Error";
import "./style/index.scss";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/location"
					element={<Location></Location>}
				></Route>
				<Route
					path="/about"
					element={<About></About>}
				></Route>
				<Route
					path="*"
					element={<Error></Error>}
				></Route>
			</Routes>
		</Router>
	</React.StrictMode>
);
