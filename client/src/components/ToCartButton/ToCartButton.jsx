import React from "react";
import { Button } from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { setLocalItem } from "../../helpers/utils";

const ToCartButton = ({ id }) => {
	return (
		<Button
			color="secondary"
			variant="contained"
			sx={{
				width: "max-content",
				height: "46px",
			}}
			onClick={() => {
				setLocalItem("cart", id);
			}}
		>
			У кошик
			<ShoppingCartCheckoutIcon sx={{ marginLeft: "10px" }} />
		</Button>
	);
};

export default ToCartButton;
