import React from "react";
import { Button } from "@mui/material";

import MenuCatalog from "./components/MenuCatalog";
import MenuBayer from "./components/MenuBayer";
import MenuAbout from "./components/MenuAbout";
import MenuContact from "./components/MenuContact/MenuContact";

const HeaderMenu = () => {
	return (
		<div>
			<Button id="button-home">Головна</Button>
			<MenuCatalog />
			<MenuBayer />
			<MenuAbout />
			<MenuContact />
		</div>
	);
};

export default HeaderMenu;
