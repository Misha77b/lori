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
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import React from "react";

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
						<img
							src="https://res.cloudinary.com/dsx708og4/image/upload/v1676297440/Lori_project/logo_b1xcve.png"
							alt="logo"
							style={{
								maxWidth: "150px",
								maxHeight: "150px",
								margin: "5px 0",
							}}
						/>
						<Typography
							fontWeight="fontWeightBold"
							fontFamily="Open Sans"
							sx={{ color: " #2E3438", display: { xs: "none", lg: "block" } }}
						>
							(096)166-64-16
						</Typography>
						<Typography
							fontWeight="fontWeightBold"
							fontFamily="Open Sans"
							sx={{ m: " 0 10px", color: " #2E3438", display: { xs: "none", lg: "block" } }}
						>
							(098)259-25-99
						</Typography>
						<Box
							component="form"
							sx={{
								"& > :not(style)": { m: 1, width: "442px" },
								position: "relative",
								display: { xs: "none", sm: "block" },
							}}
							noValidate
							autoComplete="off"
						>
							<TextField
								sx={{ position: "relative" }}
								inputProps={{ "aria-label": "search" }}
								id="outlined-basic"
								label="Пошук..."
								variant="outlined"
								color="success"
							/>
							<Box sx={{ position: "absolute", top: "0", right: "0" }}>
								<IconButton
									sx={{
										backgroundColor: "#A0A9AF",
										borderRadius: "0",
										p: "13px",
										position: "absolute",
										right: "0",
										top: "0",
									}}
									size="large"
									aria-label="show 4 new mails"
									color="inherit"
								>
									<SearchIcon sx={menuLinkItem} />
								</IconButton>
							</Box>
						</Box>

						<Box>
							<IconButton size="large" color="inherit">
								<AccountCircleOutlinedIcon sx={menuLinkItem} />
								<Typography sx={{ color: "#57646E", display: { xs: "none", md: "block" } }}>
									Увійти
								</Typography>
							</IconButton>
						</Box>
						<IconButton size="large" aria-label="Basket" color="inherit">
							<ShoppingCartOutlinedIcon sx={menuLinkItem} />
						</IconButton>
						<IconButton size="large" aria-label="Favorites" color="inherit">
							{/* <StarOutlinedIcon sx={menuLinkItem} /> */}
							<StarBorderOutlinedIcon sx={menuLinkItem} />
						</IconButton>
					</Toolbar>
				</Container>
			</AppBar>

			<Box sx={{ backgroundColor: "#57646E", display: { sm: "none", xs: "block" } }}>
				<Container>
					<Box
						component="form"
						sx={{
							"& > :not(style)": { m: 1, width: "442px" },
							position: "relative",
						}}
						noValidate
						autoComplete="off"
					>
						<TextField
							sx={{ position: "relative" }}
							inputProps={{ "aria-label": "search" }}
							id="outlined-basic"
							label="Пошук..."
							variant="outlined"
							color="success"
						/>
						<Box sx={{ position: "absolute", top: "0", right: "0" }}>
							<IconButton
								sx={{
									backgroundColor: "#A0A9AF",
									borderRadius: "0",
									p: "13px",
									position: "absolute",
									right: "0",
									top: "0",
								}}
								size="large"
								aria-label="show 4 new mails"
								color="inherit"
							>
								<SearchIcon sx={menuLinkItem} />
							</IconButton>
						</Box>
					</Box>
				</Container>
			</Box>
			<Box sx={{ backgroundColor: "#57646E", display: { xs: "none", sm: "block" } }}>
				<Container>
					<Box component="nav">
						<List sx={{ display: "flex" }}>
							<ListItem>
								{/* <Link href="" sx={menuLink}> */}
								Головна
								{/* </Link> */}
							</ListItem>
							<ListItem>
								{/* <Link href="" sx={menuLink}> */}
								Каталог
								{/* </Link> */}
							</ListItem>
							<ListItem>
								{/* <Link href="" sx={menuLink}> */}
								Про нас
								{/* </Link> */}
							</ListItem>
							<ListItem>
								{/* <Link href="" sx={menuLink}> */}
								Покупцям
								{/* </Link> */}
							</ListItem>
							<ListItem>
								{/* <Link href="" sx={menuLink}> */}
								Контакти
								{/* </Link> */}
							</ListItem>
						</List>
					</Box>
				</Container>
			</Box>
		</Box>
	);
};

export default Header;
