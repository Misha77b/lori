import {
	TextField,
	AppBar,
	Toolbar,
	Typography,
	Box,
	IconButton,
	List,
	ListItem,
	Link,
	Container,
	Grid,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import React from "react";
import HeaderMenu from "./components/HeaderMenu";
import BurgerMenu from "./components/BurgerMenu";
import Search from "./components/Search";

const Header = () => {
	const menuLink = {
		color: "#ffffff",
		textTransform: "uppercase",
		fontSize: "16px",
		fontWeight: "700",
		textDecoration: "none",
		"&: hover": {
			textDecoration: "underline",
		},
	};

	const menuLinkItem = {
		color: "#57646E",
		fontSize: "30px",
	};

	return (
		<Box component="header">
			<AppBar position="static">
				<Container>
					<Toolbar>
						<BurgerMenu />
						<Box
							component="img"
							src="https://res.cloudinary.com/dsx708og4/image/upload/v1676297440/Lori_project/logo_b1xcve.png"
							alt="logo"
							sx={{
								width: { xs: "80px", sm: "150px" },
								m: "5px 0",
							}}
						/>
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
						<Search />
						<Box>
							<IconButton size="large" color="inherit">
								<AccountCircleOutlinedIcon sx={menuLinkItem} />
								<Typography color="grey" sx={{ display: { xs: "none", md: "block" } }}>
									Увійти
								</Typography>
							</IconButton>
						</Box>
						<IconButton size="large" aria-label="Basket" color="inherit">
							<ShoppingCartOutlinedIcon sx={menuLinkItem} />
						</IconButton>
						<IconButton size="large" aria-label="Favorites" color="inherit">
							<StarBorderOutlinedIcon sx={menuLinkItem} />
						</IconButton>
					</Toolbar>
				</Container>
			</AppBar>

			<Box backgroundColor="grey.main" sx={{ display: { xs: "none", sm: "flex" } }}>
				<Container>
					<HeaderMenu />
				</Container>
			</Box>
		</Box>
	);
};

export default Header;
