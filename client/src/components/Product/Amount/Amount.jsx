import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { addQuantityToShoppingCart } from "../../../store/reducers/cartSlice";
import "./Amount.scss";

export default function Amount({ amount, setAmount, itemNo }) {
	const dispatch = useDispatch();
	const increment = () => {
		dispatch(addQuantityToShoppingCart({ itemNo, addToQty: 1 }));
	};

	const decrement = () => {
		if (amount === 1) return;
		dispatch(addQuantityToShoppingCart({ itemNo, addToQty: -1 }));
	};

	return (
		<div className="inpt">
			<button type="button" className="inpt__button" onClick={decrement}>
				-
			</button>
			<p className="inpt__text">{amount}</p>
			<button type="button" className="inpt__button" onClick={increment}>
				+
			</button>
		</div>
	);
}
Amount.propTypes = {
	amount: PropTypes.number.isRequired,
	setAmount: PropTypes.func.isRequired,
	itemNo: PropTypes.string.isRequired,
};
