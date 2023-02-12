import React from "react";
import { Link } from "react-router-dom";
import PopularBrands from "../../components/PopularBrands";

const Home = () => {
	return (
		<>
			<Link to="/product">One product</Link>
			<PopularBrands></PopularBrands>
		</>
	);
};
export default Home;
