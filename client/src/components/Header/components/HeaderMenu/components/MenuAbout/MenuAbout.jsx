import React from "react";
import { Button, Menu, MenuItem } from "@mui/material";
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

	const [about, setAbout] = React.useState(null);
	const openAbout = Boolean(about);

	const handleClickAbout = (event) => {
		setAbout(event.currentTarget);
	};
	const handleCloseAbout = () => {
		setAbout(null);
	};

	return (
		<>
			<Button
				id="button-about"
				aria-controls={openAbout ? "menu-about" : undefined}
				aria-haspopup="true"
				aria-expanded={openAbout ? "true" : undefined}
				onClick={handleClickAbout}
				sx={{ padding: { sm: "20px 25px", md: "20px 35px" } }}
			>
				Про нас
			</Button>
			<Menu
				id="menu-about"
				anchorEl={about}
				open={openAbout}
				onClose={handleCloseAbout}
				MenuListProps={{
					"aria-labelledby": "button-about",
				}}
			>
				<MenuItem divider onClick={handleCloseAbout}>
					<CustomLink to="/about">Про нас</CustomLink>
				</MenuItem>
			</Menu>
		</>
	);
};

export default MenuAbout;
