import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import RootRouters from "../Router/Router";
import theme from "../theming";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Header />
				<RootRouters />
				<Footer />
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default App;
