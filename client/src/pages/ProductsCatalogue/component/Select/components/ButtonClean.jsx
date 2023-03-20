import { Button, MenuItem } from "@mui/material";

export default function ButtonClean({ field }) {
	return (
		<Button
			onClick={field}
			variant="contained"
			color="secondary"
			sx={{
				position: "absolute",
				width: "20px",
				height: "20px",
				top: "16px",
				left: "77%",
				"box-shadow": "none",
				padding: "12px",
				"border-radius": "50%",
				"min-width": "20px",
				"background-color": "#ffffff",
				color: "grey",
				"z-index": "900000",
				"&:hover": {
					"background-color": "#ffffff",
					"box-shadow": "none",
				},
				fontSize: "20px",
			}}
		>
			&#215;
		</Button>
	);
}
