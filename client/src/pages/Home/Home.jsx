import React from "react";
import { Link } from "react-router-dom";
import Slider from "../../components/Slider/Slider";
import PopularProducts from "../../components/PopularProducts";
import PopularBrands from "../../components/PopularBrands";

const Home = () => {
	return (
		<div>
			<Slider />
			<PopularProducts />
			<Link to="/product">One product</Link>
			<PopularBrands />
		</div>
	);
};

export default Home;
