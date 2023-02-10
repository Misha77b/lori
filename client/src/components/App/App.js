import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { Button, Typography } from "@mui/material";
import theme from "../../theming";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Pages from "../Pages/Pages";

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Header />
				<Button color="secondary" variant="contained">
					Детальніше
				</Button>
				<Pages />
				<Footer />
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default App;
