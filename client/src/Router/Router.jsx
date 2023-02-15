import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import OneProduct from "../pages/OneProduct";

function RootRouters() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/products/:id" element={<OneProduct />} />
		</Routes>
	);
}
export default RootRouters;
