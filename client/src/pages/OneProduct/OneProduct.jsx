import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Product from "../../components/Product";
import { actionFetchProduct } from "../../store/reducers/oneProductSlice";
import { selectorPageObj } from "../../store/selectors";
import "./OneProduct.scss";
import useFetchData from "../Home/hooks";
import PopularProducts from "../../components/PopularProducts";

function OneProduct() {
	const { id } = useParams();
	const [sended, setSended] = useState(false);
	const data = useSelector(selectorPageObj);
	const products = useFetchData();
	const stateLoad = useSelector((state) => {
		return state.oneProduct.loading;
	});
	// console.log({ id, sended, stateLoad });

	const dispatch = useDispatch();
	useEffect(() => {
		setSended(false);
		dispatch(actionFetchProduct(id));
	}, [id]);

	useEffect(() => {
		if (stateLoad && !sended) {
			setSended(() => true);
		}
	}, [stateLoad, sended]);

	if (stateLoad && !sended) return <p>Завантження....</p>;
	if (!stateLoad && sended) {
		return (
			<div>
				<Product props={data} />
				<PopularProducts products={products} advertisement={true} />
			</div>
		);
	}
}
export default OneProduct;
