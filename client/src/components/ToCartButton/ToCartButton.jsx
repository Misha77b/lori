import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { setLocalItem } from "../../helpers/setLocalItem";
import { addShoppingCart } from "../../store/reducers/cartSlice";

const ToCartButton = ({ id, setNotification }) => {
	const dispach = useDispatch();

	return (
		<Button
			color="secondary"
			variant="contained"
			sx={{
				width: "70%",
				height: "46px",
			}}
			onClick={() => {
				setLocalItem("cart", id);
				dispach(addShoppingCart(id));
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

export default ToCartButton;
