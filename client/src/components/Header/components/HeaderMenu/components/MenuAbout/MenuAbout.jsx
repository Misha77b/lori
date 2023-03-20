import React from "react";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { styled } from "@mui/material/styles";

const MenuAbout = () => {
	const CustomLink = styled(NavLink)(({ theme }) => ({
		color: "inherit",
		textDecoration: "none",
		"&: hover": {
			textDecoration: "underline",
		},
	}));

	return (
		<>
			<CustomLink to="/about">
				<Button sx={{ padding: { sm: "20px 18px", md: "20px 35px" } }} id="button-home">
					Про нас
				</Button>
			</CustomLink>
		</>
	);
};

export default MenuAbout;
