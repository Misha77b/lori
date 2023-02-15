import React from "react";
import { Link } from "react-router-dom";
import PopularProducts from "../../components/PopularProducts";
import PopularBrands from "../../components/PopularBrands";

const Home = () => {
	return (
		<div>
			<PopularProducts />
			<PopularBrands />
		</div>
	);
};

export default Home;
