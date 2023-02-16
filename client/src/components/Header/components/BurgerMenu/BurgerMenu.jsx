import React from "react";
import { Box, IconButton, makeStyles, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const useStyles = makeStyles((theme) => ({
	root: {
		MuiMenuRoot: {
			minWidth: "100%",
		},
	},
}));

const BurgerMenu = () => {
	const classes = useStyles();

	const [burgerMenu, setBurgerMenu] = React.useState(null);
	const openBurgerMenu = Boolean(burgerMenu);

	const handleClickBurgerMenu = (event) => {
		setBurgerMenu(event.currentTarget);
	};
	const handleCloseBurgerMenu = () => {
		setBurgerMenu(null);
	};

	return (
		<Box>
			<IconButton
				sx={{ p: "15px 0", display: { xs: "block", sm: "none" } }}
				id="button-burgerMenu"
				aria-controls={openBurgerMenu ? "menu-burgerMenu" : undefined}
				aria-haspopup="true"
				aria-expanded={openBurgerMenu ? "true" : undefined}
				onClick={handleClickBurgerMenu}
			>
				<MenuIcon fontSize="large" color="grey" />
			</IconButton>
			<Menu
				className=""
				sx={{ minWidth: "100%" }}
				id="menu-burgerMenu"
				anchorEl={burgerMenu}
				open={openBurgerMenu}
				onClose={handleCloseBurgerMenu}
				MenuListProps={{
					"aria-labelledby": "button-burgerMenu",
				}}
			>
				<MenuItem divider onClick={handleCloseBurgerMenu}>
					Головна
				</MenuItem>
				<MenuItem divider onClick={handleCloseBurgerMenu}>
					Гарантія
				</MenuItem>
				<MenuItem divider onClick={handleCloseBurgerMenu}>
					Оплата та доставка
				</MenuItem>
				<MenuItem divider onClick={handleCloseBurgerMenu}>
					Обмін та повернення
				</MenuItem>
				<MenuItem divider onClick={handleCloseBurgerMenu}>
					Контакти
				</MenuItem>
			</Menu>
		</Box>
	);
};

export default BurgerMenu;
