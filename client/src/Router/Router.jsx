import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import OneProduct from "../pages/OneProduct";

function RootRouters() {
	console.log("rout");
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/home/product" element={<OneProduct />} />
		</Routes>
	);
}
export default RootRouters;
