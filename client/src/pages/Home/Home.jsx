import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/reducers/productsSlice";
import { selectProductsData } from "../../store/selectors";
import Slider from "../../components/Slider/Slider";
import PopularProducts from "../../components/PopularProducts";
import PopularBrands from "../../components/PopularBrands";

const Home = () => {
	const dispatch = useDispatch();
	const products = useSelector(selectProductsData);
	useEffect(
		() => () => {
			dispatch(fetchProducts());
		},
		[dispatch],
	);
	return (
		<div>
			<Slider />
			<PopularProducts products={products} />
			<PopularBrands />
		</div>
	);
};

export default Home;
