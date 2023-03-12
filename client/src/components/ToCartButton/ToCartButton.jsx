import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { setLocalItem } from "../../helpers/setLocalItem";
import { addShoppingCart } from "../../store/reducers/cartSlice";

const ToCartButton = ({ id, setNotification, favorites = false }) => {
	const dispatch = useDispatch();
	return (
		<Button
			color="secondary"
			variant="contained"
			sx={{
				...(favorites ? { width: "140px" } : { width: "70%" }),
				height: "46px",
				marginTop: "10px",
			}}
			onClick={() => {
				setLocalItem("cart", id);
				dispatch(addShoppingCart(id));
				setNotification(true);
				setTimeout(() => {
					setNotification(false);
				}, 3000);
			}}
		>
			У кошик
			<ShoppingCartCheckoutIcon sx={{ marginLeft: "10px" }} />
		</Button>
	);
};
ToCartButton.defaultProps = {
	favorites: false,
};
ToCartButton.propTypes = {
	id: PropTypes.string.isRequired,
	setNotification: PropTypes.func.isRequired,
	favorites: PropTypes.bool,
};
export default ToCartButton;
