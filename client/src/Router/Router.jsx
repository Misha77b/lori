import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import OneProduct from "../pages/OneProduct";
import About from "../pages/About";
import Guarantee from "../pages/Guarantee";
import PaymentAndDelivery from "../pages/PaymentAndDelivery";
import ExchangeAndReturn from "../pages/ExchangeAndReturn";
import ProductsCatalogue from "../pages/ProductsCatalogue";
import PlacingAnOrder from "../pages/PlacingAnOrder";
import Cart from "../pages/Cart/Cart";
import Contacts from "../pages/Contacts";
import NotFoundPage from "../pages/NotFoundPage";
import FavoritePage from "../pages/FavoritePage";
import Profile from "../pages/Profile";
import Password from "../components/ProfileMenuBlocks/Password/Password";
import EditProfile from "../components/ProfileMenuBlocks/EditProfile/EditProfile";
import OrdersHistory from "../components/ProfileMenuBlocks/OrdersHistory/OrdersHistory";

function RootRouters() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/product/:id" element={<OneProduct />} />
			<Route path="/products" element={<ProductsCatalogue />} />
			<Route path="/orders" element={<PlacingAnOrder />} />
			<Route path="/about" element={<About />} />
			<Route path="/cart" element={<Cart />} />
			<Route path="/favorites" element={<FavoritePage />} />
			<Route path="/guarantee" element={<Guarantee />} />
			<Route path="/paymentAndDelivery" element={<PaymentAndDelivery />} />
			<Route path="/exchangeAndReturn" element={<ExchangeAndReturn />} />
			<Route path="/contacts" element={<Contacts />} />
			<Route path="/profile" element={<Profile />}>
				<Route path=":profileMenu" element={<EditProfile />} />
				<Route path=":profileMenu" element={<Password />} />
				<Route path=":profileMenu" element={<OrdersHistory />} />
			</Route>

			<Route path="*" element={<NotFoundPage />} />
		</Routes>
	);
}
export default RootRouters;
