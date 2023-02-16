import React from "react";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { styled } from "@mui/material/styles";

import MenuCatalog from "./components/MenuCatalog";
import MenuBayer from "./components/MenuBayer";
import MenuAbout from "./components/MenuAbout";
import MenuContact from "./components/MenuContact/MenuContact";

const HeaderMenu = () => {
	const CustomLink = styled(NavLink)(({ theme }) => ({
		color: "inherit",
		textDecoration: "none",
		"&: hover": {
			textDecoration: "underline",
		},
	}));

	return (
		<div>
			<Button id="button-home">
				<CustomLink to="/">Головна</CustomLink>
			</Button>
			<MenuCatalog />
			<MenuBayer />
			<MenuAbout />
			<MenuContact />
		</div>
	);
};

export default HeaderMenu;
