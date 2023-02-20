import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Button, ThemeProvider, Typography } from "@mui/material";
import RootRouters from "../Router/Router";
import theme from "../theming";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Modal from "../components/Modal/Modal";

const App = () => {
	const [open, setOpen] = useState(false);
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Header />
				<RootRouters />
				<Footer />
				<button type="button" onClick={() => setOpen(true)}>
					___modal___
				</button>
				<Modal open={open} customWidth={600} onClose={setOpen}>
					<div style={{ textAlign: "center", padding: "60px 85px" }}>
						<Typography
							variant="h5"
							style={{
								color: "#007042",
								fontWeight: "700",
								fontSize: "30px",
								lineHeight: "180%",
								marginBottom: "12px",
							}}
						>
							Дякуємо, що вибрали нас!
						</Typography>
						<Typography
							component="p"
							style={{ fontSize: "18px", lineHeight: " 180%", marginBottom: "50px" }}
						>
							Ваше замовлення №3265897 успішно оформлене. Чекайте на дзвінок від нашого фахівця.
						</Typography>
						<Button
							color="secondary"
							variant="contained"
							style={{
								letterSpacing: "0.03em",
								textTransform: "uppercase",
								height: "56px",
								padding: "0 20px",
							}}
						>
							продовжити покупки
						</Button>
					</div>
				</Modal>
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default App;
