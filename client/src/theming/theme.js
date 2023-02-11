import { createTheme, colors } from "@mui/material";
import React from "react";

const theme = createTheme({
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					padding: "20px 35px",
					fontWeight: 700,
					fontFamily: "Open Sans",
					fontSize: "15px",
					borderRadius: "3px",
				},
			},
		},
	},
	palette: {
		primary: {
			main: "#FFFFFF",
		},
		grey: { 
								main: "#57646E" 
		},
		lightgrey: { 
			main: "#D3D7DA" 
		},
		mediumgrey: { 
			main: "#A0A9AF" 
		},
		darkgrey: { 
																main: "rgba(33, 39, 40, 0.6)" 
		},
		secondary: {
			main: colors.green[800],
		},
		graphite: { 
			main: "#2E3438" 
		},
		black: { 
			main: "#000000" 
		},
		warning: {
			main: colors.orange[400],
		},
	},
	error: { main: colors.red[700] },
	typography: {
		fontFamily: "Open Sans, Montserrat",
		fontWeightBold: 800,
		fontWeightRegular: 400,
		fontWeightMedium: 500,
		fontWeightLight: 300,
	},
});

export default theme;
