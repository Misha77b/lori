import React from "react";
import PopularBrands from "../../components/PopularBrands";
import { Link } from "react-router-dom";
const Home = () => {
	return (
		<>
			<Link to="/home/product">One product</Link>
			<PopularBrands></PopularBrands>
		</>
	);
};
export default Home;
