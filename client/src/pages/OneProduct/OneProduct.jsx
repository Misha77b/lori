import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Product from "../../components/Product";
import { actionFetchProduct } from "../../store/reducers/oneProductSlice";
import { selectorPageObj } from "../../store/selectors";
import Spinner from "../../components/Spinner";
import "./OneProduct.scss";
import useFetchData from "../Home/hooks";
import PopularProducts from "../../components/PopularProducts";

function OneProduct() {
	// request finish, we can render
	// undefined - not send request
	// false - sended
	// true - request geting
	const [canRender, setCanRender] = useState(undefined);
	const { id } = useParams();
	const data = useSelector(selectorPageObj);
	const stateLoad = useSelector((state) => {
		return state.oneProduct.loading;
	});

	const dispatch = useDispatch();
	useEffect(() => {
		setCanRender(() => false);
		dispatch(actionFetchProduct(id));
	}, [id]);

	useEffect(() => {
		if (!stateLoad && canRender === false) {
			setCanRender(() => true);
		}
	}, [stateLoad]);
	return (
		<>
			{!canRender && <Spinner />}
			{canRender && <Product props={data} />}
		</>
	);
}

export default OneProduct;
