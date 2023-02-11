import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";

import theme from "../theming";
import Router from "../Router";

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default App;
