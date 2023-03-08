import React from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { NavLink } from "react-router-dom";
import { styled } from "@mui/material/styles";

const MenuCatalog = () => {
	const CustomLink = styled(NavLink)(({ theme }) => ({
		color: "inherit",
		textDecoration: "none",
		"&: hover": {
			textDecoration: "underline",
		},
	}));

	return (
		<>
			<Button sx={{ padding: { sm: "20px 18px", md: "20px 35px" } }} id="button-home">
				<CustomLink to="/products">Каталог</CustomLink>
			</Button>
		</>
	);
};

export default MenuCatalog;
