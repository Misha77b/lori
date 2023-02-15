import React from "react";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Button } from "@mui/material";

const ToCartButton = () => {
	return (
		<Button
			color="secondary"
			variant="contained"
			sx={{
				width: "max-content",
				height: "46px",
			}}
		>
			У кошик
			<ShoppingCartCheckoutIcon sx={{ marginLeft: "10px" }} />
		</Button>
	);
};

export default ToCartButton;
