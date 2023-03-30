import { Typography } from "@mui/material";
import React from "react";

export const InactiveTextPopProd = () => {
	return (
		<Typography
			fontWeight="fontWeightRegular"
			sx={{
				position: "absolute",
				left: "50%",
				transform: "translate(-50%)",
				fontSize: "16px",
				padding: "8px",
				textAlign: "center",
			}}
		>
			Немає в наявності
		</Typography>
	);
};
