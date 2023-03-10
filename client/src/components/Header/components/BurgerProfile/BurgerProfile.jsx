import React from "react";
import { useDispatch } from "react-redux";
import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import { styled } from "@mui/material/styles";
import { NavLink, useNavigate } from "react-router-dom";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { setIsAuth } from "../../../../store/reducers/authSlice";

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

const BurgerProfile = ({ isLoggedIn }) => {
	const [burgerMenu, setBurgerMenu] = React.useState(null);
	const openBurgerMenu = Boolean(burgerMenu);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleClickBurgerMenu = (event) => {
		setBurgerMenu(event.currentTarget);
	};
	const handleCloseBurgerMenu = () => {
		setBurgerMenu(null);
	};

	return (
		<Box
			sx={{
				display: { xs: "inline", sm: "none" },
			}}
		>
			<IconButton
				id="button-burgerMenu"
				aria-controls={openBurgerMenu ? "menu-burgerMenu" : undefined}
				aria-haspopup="true"
				aria-expanded={openBurgerMenu ? "true" : undefined}
				onClick={handleClickBurgerMenu}
			>
				<AccountCircleOutlinedIcon
					fontSize="large"
					color="grey"
					sx={{
						display: { xs: "flex", md: "none" },
						color: isLoggedIn ? "#007042" : "#57646E",
						fontSize: "30px",
					}}
				/>
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
				<CustomLink to="/profile/edit-profile">
					<MenuItem divider onClick={handleCloseBurgerMenu}>
						Редагувати профіль
					</MenuItem>
				</CustomLink>
				<CustomLink to="/profile/change-password">
					<MenuItem divider onClick={handleCloseBurgerMenu}>
						Змінити пароль
					</MenuItem>
				</CustomLink>
				<CustomLink to="/profile/orders-history">
					<MenuItem divider onClick={handleCloseBurgerMenu}>
						Історія замовлень
					</MenuItem>
				</CustomLink>
				<CustomLink
					onClick={() => {
						localStorage.removeItem("token");
						dispatch(setIsAuth(false));
						navigate("/");
					}}
				>
					<MenuItem divider onClick={handleCloseBurgerMenu}>
						Вийти
					</MenuItem>
				</CustomLink>
			</CustomizedMenu>
		</Box>
	);
};

export default BurgerProfile;
