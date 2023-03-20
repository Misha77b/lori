import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "../../components/Slider/Slider";
import PopularProducts from "../../components/PopularProducts";
import PopularBrands from "../../components/PopularBrands";
import useFetchData from "./hooks";
import Spinner from "../../components/Spinner";
import { getFavorites } from "../../store/reducers/favoriteSlice";

const Home = () => {
	const dispatch = useDispatch();
	const productsLoading = useSelector((state) => state.products.loader);
	const isAuth = useSelector((state) => state.auth.isAuth);
	const products = useFetchData();
	useEffect(() => {
		if (isAuth) dispatch(getFavorites());
	}, [isAuth]);
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
