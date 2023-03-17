import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { setLocalItem } from "../../helpers/setLocalItem";
import { addShoppingCart, createCartAuth } from "../../store/reducers/cartSlice";

const ToCartButton = ({ id, setNotification, favorites = false }) => {
	const dispatch = useDispatch();
	const token = useSelector((state) => state.auth.tokenUser);

	const cartDispatch = (fid) => {
		if (!token) {
			setLocalItem("cart", fid);
		} else {
			dispatch(createCartAuth(fid));
		}
		dispatch(addShoppingCart(fid));
	};
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
				cartDispatch(id);
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
