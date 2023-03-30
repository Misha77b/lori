import { Typography } from "@mui/material";
import React from "react";

export const InactiveTextCataloge = () => {
	return (
		<Typography
			fontWeight="fontWeightRegular"
			sx={{
				fontSize: "18px",
				padding: "12px",
				textAlign: "center",
			}}
		>
			Немає в наявності
		</Typography>
	);
};
