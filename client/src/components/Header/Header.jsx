import { AppBar, Toolbar, Typography, Box, IconButton, Container, Badge } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeaderMenu from "./components/HeaderMenu";
import BurgerMenu from "./components/BurgerMenu";
import Search from "./components/Search";
import { getNumberOfItems } from "../../helpers/utils";
import { setIsAuth } from "../../store/reducers/authSlice";

const Header = ({ modal }) => {
	const menuLinkItem = {
		color: "#57646E",
		fontSize: "30px",
	};

	const CustomLink = styled(NavLink)(({ theme }) => ({
		color: "#ffffff",
		"&: hover": {
			textDecoration: "underline",
		},
	}));

	const isLoggedIn = useSelector((state) => state.auth.isAuth);
	const [logIn, setLogIn] = useState("Увійти");

	const token = localStorage.getItem("token");
	const dispatch = useDispatch();

	useEffect(() => {
		if (token) {
			dispatch(setIsAuth(true));
			setLogIn("Особистий кабінет");
		}
		if (isLoggedIn) {
			setLogIn("Особистий кабінет");
		}
	}, [isLoggedIn]);

	return (
		<Box component="header">
			<AppBar position="static">
				<Container>
					<Toolbar disableGutters={true} sx={{ justifyContent: "space-between" }}>
						<BurgerMenu />
						<CustomLink to="/">
							<Box
								component="img"
								src="https://res.cloudinary.com/dsx708og4/image/upload/v1676297440/Lori_project/logo_b1xcve.png"
								alt="logo"
								sx={{
									width: { xs: "100px", sm: "100px", md: "150px" },
									m: "5px 0",
								}}
							/>
						</CustomLink>

						<Typography
							fontWeight="fontWeightBold"
							fontFamily="Open Sans"
							color="graphite.main"
							sx={{ display: { xs: "none", lg: "block" } }}
						>
							(096)166-64-16
						</Typography>
						<Typography
							fontWeight="fontWeightBold"
							fontFamily="Open Sans"
							color="graphite.main"
							sx={{ m: " 0 10px", display: { xs: "none", lg: "block" } }}
						>
							(098)259-25-99
						</Typography>
						<Box sx={{ display: { xs: "none", sm: "flex" } }}>
							<Search />
						</Box>
						<Box>
							<IconButton
								color="grey.main"
								onClick={() => {
									modal("LOGIN");
								}}
							>
								<AccountCircleOutlinedIcon sx={menuLinkItem} />
								<Typography color="grey.main" sx={{ display: { xs: "none", md: "block" }, p: "0" }}>
									{logIn}
								</Typography>
							</IconButton>
							<IconButton size="large" aria-label="Basket" color="grey.main" sx={{ p: "10px" }}>
								<CustomLink to="/cart">
									<Badge badgeContent={getNumberOfItems("cart")} color="secondary">
										<ShoppingCartOutlinedIcon sx={menuLinkItem} />
									</Badge>
								</CustomLink>
							</IconButton>
							<IconButton size="large" aria-label="Favorites" color="grey.main" sx={{ p: "0" }}>
								<CustomLink to="/favorites">
									<Badge badgeContent={getNumberOfItems("favorites")} color="secondary">
										<FavoriteIcon sx={menuLinkItem} />
									</Badge>
								</CustomLink>
							</IconButton>
						</Box>
					</Toolbar>
				</Container>
			</AppBar>

			<Box backgroundColor="grey.main" sx={{ display: { xs: "none", sm: "flex" }, mb: "38px" }}>
				<Container>
					<HeaderMenu />
				</Container>
			</Box>

			<Box backgroundColor="grey.main" sx={{ display: { xs: "flex", sm: "none" }, mb: "38px" }}>
				<Container>
					<Box sx={{ display: "flex", justifyContent: "center" }}>
						<Search />
					</Box>
				</Container>
			</Box>
		</Box>
	);
};

export default Header;
