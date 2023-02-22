import { Typography } from "@mui/material";
import React from "react";

const OrderPrice = () => {
	return (
		<div
			style={{
				marginTop: "30px",
				display: "flex",
				justifyContent: "space-between",
				alignItems: "flex-end",
			}}
		>
			<Typography
				sx={{ fontSize: "24px" }}
				fontWeight="fontWeightBold"
				color="primary.contrastText"
			>
				Сума замовлення
			</Typography>

			<Typography
				sx={{ fontSize: "32px" }}
				fontWeight="fontWeightBold"
				color="primary.contrastText"
			>
				150000 грн
			</Typography>
		</div>
	);
};

export default OrderPrice;
