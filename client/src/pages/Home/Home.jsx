import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "../../components/Slider/Slider";
import PopularProducts from "../../components/PopularProducts";
import PopularBrands from "../../components/PopularBrands";
import Spinner from "../../components/Spinner";
import ToastNotification from "../../components/ToastNotification";

const Home = () => {
	const productsLoading = useSelector((state) => state.products.loader);
	const products = useFetchData();
	if (productsLoading) return <p>Завантження....</p>;
	return (
		<div>
			<Slider />
			<PopularProducts products={products} />
			<PopularBrands products={products} />
		</div>
	);
};

export default Home;
