import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import OneProduct from "../pages/OneProduct";
import About from "../pages/About";
import Guarantee from "../pages/Guarantee";
import PaymentAndDelivery from "../pages/ExchangeAndReturn";
import ExchangeAndReturn from "../pages/ExchangeAndReturn";

function RootRouters() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/product" element={<OneProduct />} />

			<Route path="/about" element={<About />} />
			<Route path="/guarantee" element={<Guarantee />} />
			<Route path="/paymentAndDelivery" element={<PaymentAndDelivery />} />
			<Route path="/exchangeAndReturn" element={<ExchangeAndReturn />} />
		</Routes>
	);
}
export default RootRouters;
