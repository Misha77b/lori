import React from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const BurgerMenu = () => {
	const [burgerMenu, setBurgerMenu] = React.useState(null);
	const openBurgerMenu = Boolean(burgerMenu);

	const handleClickBurgerMenu = (event) => {
		setBurgerMenu(event.currentTarget);
	};
	const handleCloseBurgerMenu = () => {
		setBurgerMenu(null);
	};

	return (
		<>
			<Button
				id="button-burger"
				aria-controls={openBurgerMenu ? "menu-burger" : undefined}
				aria-haspopup="true"
				aria-expanded={openBurgerMenu ? "true" : undefined}
				onClick={handleClickBurgerMenu}
				color="inherit"
				aria-label="menu"
				sx={{ display: { xs: "block", sm: "none" }, p: "0" }}
			>
				<MenuIcon fontSize="large" color="grey" />
			</Button>
			<Menu
				id="menu-about"
				anchorEl={burgerMenu}
				open={openBurgerMenu}
				onClose={handleClickBurgerMenu}
				MenuListProps={{
					"aria-labelledby": "button-burger",
				}}
			>
				<MenuItem divider onClick={handleCloseBurgerMenu} fontSize="large" color="grey">
					Про нас
				</MenuItem>
			</Menu>
		</>
	);
};

export default BurgerMenu;
