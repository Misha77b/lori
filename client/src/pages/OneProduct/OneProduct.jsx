import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Product from "../../components/Product";
import { actionFetchProduct } from "../../store/reducers/oneProductSlice";
import { selectorPageObj } from "../../store/selectors";
import "./OneProduct.scss";

function OneProduct() {
	const { id } = useParams();
	const [sended, setSended] = useState(false);
	const data = useSelector(selectorPageObj);
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

	// eslint-disable-next-line
	let blockProduct = <p>Завантження....</p>;
	if (stateLoad === false && sended === true) {
		blockProduct = <Product props={data} />;
	}
	return <div>{blockProduct}</div>;
}
export default OneProduct;
