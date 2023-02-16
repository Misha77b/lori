import React from "react";
import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";

const CustomizedMenu = styled(Menu)`
	& .MuiMenu-paper {
		width: 100%;
	}
`;

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
			<CustomizedMenu
				sx={{ display: { xs: "block", sm: "none" } }}
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
			</CustomizedMenu>
		</Box>
	);
};

export default BurgerMenu;
