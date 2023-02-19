import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import OneProduct from "../pages/OneProduct";
import About from "../pages/About";
import Guarantee from "../pages/Guarantee";
import PaymentAndDelivery from "../pages/PaymentAndDelivery";
import ExchangeAndReturn from "../pages/ExchangeAndReturn";
import ProductsCatalogue from "../pages/ProductsCatalogue";
import PlacingAnOrder from "../pages/PlacingAnOrder/PlacingAnOrder";
import Cart from "../pages/Cart/Cart";
import Contacts from "../pages/Contacts";

function RootRouters() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/products/:id" element={<OneProduct />} />
			<Route path="/products" element={<ProductsCatalogue />} />
			<Route path="/palce-an-order" element={<PlacingAnOrder />} />

			<Route path="/products/filter" element={<ProductsCatalogue />} />
			<Route path="/about" element={<About />} />
			<Route path="/cart" element={<Cart />} />
			<Route path="/guarantee" element={<Guarantee />} />
			<Route path="/paymentAndDelivery" element={<PaymentAndDelivery />} />
			<Route path="/exchangeAndReturn" element={<ExchangeAndReturn />} />
			<Route path="/contacts" element={<Contacts />} />
		</Routes>
	);
}
export default RootRouters;
