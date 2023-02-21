import React from "react";
import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const CustomizedMenu = styled(Menu)`
	& .MuiMenu-paper {
		width: 100%;
	}
`;

const CustomLink = styled(NavLink)(({ theme }) => ({
	color: "inherit",
	textDecoration: "none",
	"&: hover": {
		textDecoration: "underline",
	},
}));

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
				{!burgerMenu ? (
					<MenuIcon fontSize="large" color="grey" />
				) : (
					<CloseIcon fontSize="large" color="grey" />
				)}
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
					<CustomLink to="/">Головна</CustomLink>
				</MenuItem>
				<MenuItem divider onClick={handleCloseBurgerMenu}>
					<CustomLink to="/products">Каталог</CustomLink>
				</MenuItem>
				<MenuItem divider onClick={handleCloseBurgerMenu}>
					<CustomLink to="/guarantee">Гарантія</CustomLink>
				</MenuItem>
				<MenuItem divider onClick={handleCloseBurgerMenu}>
					<CustomLink to="/paymentAndDelivery">Оплата та доставка</CustomLink>
				</MenuItem>
				<MenuItem divider onClick={handleCloseBurgerMenu}>
					<CustomLink to="/exchangeAndReturn">Обмін та повернення</CustomLink>
				</MenuItem>
				<MenuItem divider onClick={handleCloseBurgerMenu}>
					<CustomLink to="/contacts">Контакти</CustomLink>
				</MenuItem>
			</CustomizedMenu>
		</Box>
	);
};

export default BurgerMenu;
