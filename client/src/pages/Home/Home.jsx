import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/reducers/productsSlice";
import { selectProductsData } from "../../store/selectors";
import Slider from "../../components/Slider/Slider";
import PopularProducts from "../../components/PopularProducts";
import PopularBrands from "../../components/PopularBrands";
import ToastNotification from "../../components/ToastNotification";

const Home = () => {
	const [sended, setSended] = useState(false);
	const stateLoad = useSelector((state) => {
		return state.products.loader;
	});
	const dispatch = useDispatch();
	const products = useSelector(selectProductsData);
	useEffect(() => {
		if (stateLoad === false && sended === false) {
			setSended(() => true);
			dispatch(fetchProducts());
		}
	}, [dispatch]);

	let brandsProducts = <p>Завантження....</p>;
	if (stateLoad === false && sended === true) {
		brandsProducts = (
			<div>
				<Slider />
				<PopularProducts products={products} />
				<PopularBrands products={products} />
			</div>
		);
	}
	return <>{brandsProducts}</>;
};

export default Home;
