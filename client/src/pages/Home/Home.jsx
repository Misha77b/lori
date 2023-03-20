import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "../../components/Slider/Slider";
import PopularProducts from "../../components/PopularProducts";
import PopularBrands from "../../components/PopularBrands";
import useFetchData from "./hooks";
import Spinner from "../../components/Spinner";
import { getFavorites } from "../../store/reducers/favoriteSlice";

const Home = () => {
	const productsLoading = useSelector((state) => state.products.loader);
	const products = useFetchData();
	if (productsLoading) return <Spinner />;
	return (
		<div>
			<Slider />
			<PopularProducts products={products} />
			<PopularBrands />
		</div>
	);
};

export default Home;
