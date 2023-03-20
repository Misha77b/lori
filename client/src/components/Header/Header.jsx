import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { AppBar, Toolbar, Typography, Box, IconButton, Container, Badge } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { styled } from "@mui/material/styles";
import { Link, NavLink } from "react-router-dom";
import HeaderMenu from "./components/HeaderMenu";
import BurgerMenu from "./components/BurgerMenu";
import Search from "./components/Search";
import Breadcrumb from "./components/Breadcrumbs";
import LogoIcon from "../LogoIcon";
import { selectFavorite, selectShoppingCart, selectUser } from "../../store/selectors";
import { setIsAuth } from "../../store/reducers/authSlice";
import { getLocalItem } from "../../helpers/getLocalItem";
import BurgerProfile from "./components/BurgerProfile";

const Header = React.memo(({ modal }) => {
	const [countF, setCountF] = useState(0);
	const [countC, setCountC] = useState(0);
	const favorite = useSelector(selectFavorite);
	const shoppingCart = useSelector(selectShoppingCart);
	const isLoggedIn = useSelector((state) => state.auth.isAuth);
	const totalCartQuantity = useSelector((state) => state.cart.totalCartQuantity);
	const token = getLocalItem("token");

	useEffect(() => {
		setCountF(favorite.length);
		setCountC(totalCartQuantity);
	}, [favorite, shoppingCart, token, isLoggedIn]);

	const CustomLink = styled(NavLink)(({ theme }) => ({
		color: "#ffffff",
		"&: hover": {
			textDecoration: "underline",
		},
	}));

	const menuLinkItem = {
		color: isLoggedIn ? "#007042" : "#57646E",
		fontSize: "30px",
	};
	return (
		<Box component="header">
			<AppBar position="static">
				<Container maxWidth="xl">
					<Toolbar disableGutters={true} sx={{ justifyContent: "space-evenly", marginTop: "15px" }}>
						<BurgerMenu />
						<LogoIcon />
						<Box>
							<Typography
								fontWeight="fontWeightBold"
								fontFamily="Open Sans"
								color="graphite.main"
								sx={{ display: { xs: "none", lg: "inline" } }}
							>
								(096)166-64-16
							</Typography>
							<Typography
								fontWeight="fontWeightBold"
								fontFamily="Open Sans"
								color="graphite.main"
								sx={{
									m: "0 10px",
									display: { xs: "none", lg: "inline" },
								}}
							>
								(098)259-25-99
							</Typography>
						</Box>

						<Box sx={{ display: { xs: "none", sm: "flex" } }}>
							<Search />
						</Box>
						<Box>
							{isLoggedIn ? (
								<Box display="inline">
									<BurgerProfile isLoggedIn={isLoggedIn} />
									<IconButton
										sx={{
											display: {
												xs: "none",
												md: "inline-flex",
											},
										}}
										color="grey.main"
										component={Link}
										to="/profile/edit-profile"
									>
										<AccountCircleOutlinedIcon sx={menuLinkItem} />
										<Typography
											color="grey.main"
											sx={{
												display: {
													xs: "none",
													lg: "block",
												},
												p: "0 0 0 5px",
											}}
										>
											Особистий кабінет
										</Typography>
									</IconButton>
								</Box>
							) : (
								<IconButton
									color="grey.main"
									onClick={() => {
										modal("LOGIN");
									}}
								>
									<AccountCircleOutlinedIcon sx={menuLinkItem} />
									<Typography
										color="grey.main"
										sx={{
											display: {
												xs: "none",
												md: "block",
											},
											p: "0 0 0 5px",
										}}
									>
										Увійти
									</Typography>
								</IconButton>
							)}
							<IconButton
								size="large"
								aria-label="Basket"
								color="grey.main"
								sx={{ p: { xs: "5px", md: "10px" } }}
							>
								<CustomLink to="/cart">
									<Badge badgeContent={countC} color="secondary">
										<ShoppingCartOutlinedIcon sx={menuLinkItem} />
									</Badge>
								</CustomLink>
							</IconButton>
							<IconButton
								size="large"
								aria-label="Favorites"
								color="grey.main"
								sx={{ p: { xs: "5px", lg: "10px" } }}
							>
								<CustomLink to="/favorites">
									<Badge badgeContent={countF} color="secondary">
										<FavoriteIcon sx={menuLinkItem} />
									</Badge>
								</CustomLink>
							</IconButton>
						</Box>
					</Toolbar>
				</Container>
			</AppBar>

			<Box backgroundColor="grey.main" sx={{ display: { xs: "none", sm: "flex" }, mb: "22px" }}>
				<Container maxWidth="xl">
					<HeaderMenu />
				</Container>
			</Box>

			<Box backgroundColor="grey.main" sx={{ display: { xs: "flex", sm: "none" }, mb: "22px" }}>
				<Container maxWidth="xl">
					<Box sx={{ display: "flex", justifyContent: "center" }}>
						<Search />
					</Box>
				</Container>
			</Box>
			<Container maxWidth="xl">
				<Breadcrumb />
			</Container>
		</Box>
	);
});

Header.propTypes = {
	modal: PropTypes.func.isRequired,
};

export default Header;
