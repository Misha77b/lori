import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/reducers/productsSlice";
import { selectProductsData } from "../../store/selectors";
import Slider from "../../components/Slider/Slider";
import PopularProducts from "../../components/PopularProducts";
import PopularBrands from "../../components/PopularBrands";
import Spinner from "../../components/Spinner";
import ToastNotification from "../../components/ToastNotification";

const Home = () => {
	// request finish, we can render
	// undefined - not send request
	// false - sended
	// true - request geting
	const [canRender, setCanRender] = useState(undefined);
	const stateLoad = useSelector((state) => {
		return state.products.loader;
	});
	const dispatch = useDispatch();
	const products = useSelector(selectProductsData);
	useEffect(() => {
		setCanRender(() => false);
		dispatch(fetchProducts());
	}, []);

	useEffect(() => {
		if (!stateLoad && canRender === false) {
			setCanRender(() => true);
		}
	}, [stateLoad]);

	return (
		<>
			{!canRender && <Spinner />}
			{canRender && (
				<div>
					<Slider />
					<PopularProducts products={products} />
					<PopularBrands products={products} />
				</div>
			)}
		</>
	);
};

export default Home;
