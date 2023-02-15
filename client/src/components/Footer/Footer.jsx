import React from "react";
import { NavLink } from "react-router-dom";
import { Box, List, ListItem, Grid, Typography, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
	const сontact = {
		fontSize: "14px",
	};

	const menuTitle = {
		fontSize: "16px",
		fontWeight: "700",
		p: " 0 0 17px 0",
		textTransform: "uppercase",
	};

	const CustomLink = styled(NavLink)(({ theme }) => ({
		color: "#ffffff",
		fontSize: "14px",
		textDecoration: "none",
		padding: "0",
		"&: hover": {
			textDecoration: "underline",
		},
	}));

	const menuLinkItem = {
		color: "#ffffff",
		fontSize: "40px",
	};

	return (
		<Box mt={14} component="footer" backgroundColor="grey">
			<Container sx={{ color: "#ffffff" }}>
				<Grid
					item
					align="center"
					xs={11}
					sm={12}
					md={14}
					container
					sx={{
						display: { xs: "flex" },
						justifyContent: { xs: "center", sm: "space-between" },
						paddingTop: { xs: "20px", sm: "55px" },
					}}
				>
					<Grid item sx={{ display: { xs: "none", lg: "block" } }}>
						<CustomLink
							to="/"
							sx={{
								"&: hover": {
									textDecoration: "none",
								},
							}}
						>
							<Box
								component="img"
								src="https://res.cloudinary.com/dsx708og4/image/upload/v1676297440/Lori_project/logo_b1xcve.png"
								alt="logo"
								align="center"
								sx={{
									maxWidth: "150px",
								}}
							/>
							<Box sx={{ maxWidth: "150px" }}>
								<Typography
									fontWeight="fontWeightRegular"
									fontFamily="Open Sans, sans-serif"
									sx={{ fontSize: "14px", pb: "45px" }}
								>
									MOBILE GALAXY - український магазин європейська якість!
								</Typography>
							</Box>
						</CustomLink>
					</Grid>
					<Grid
						item
						sx={{ display: { xs: "none", sm: "block" } }}
						fontWeight="fontWeightRegular"
						fontFamily="Open Sans, sans-serif"
					>
						<List>
							<ListItem sx={menuTitle}>Інформація</ListItem>
							<ListItem>
								<CustomLink to="/about">Про нас</CustomLink>
							</ListItem>
						</List>
					</Grid>
					<Grid
						item
						sx={{ display: { xs: "none", sm: "block" } }}
						fontWeight="fontWeightRegular"
						fontFamily="Open Sans, sans-serif"
					>
						<List>
							<ListItem fontWeight="fontWeightBold" sx={menuTitle}>
								Покупцям
							</ListItem>
							<ListItem>
								<CustomLink to="/guarantee">Гарантія</CustomLink>
							</ListItem>
							<ListItem>
								<CustomLink to="/paymentAndDelivery">Оплата та доставка</CustomLink>
							</ListItem>
							<ListItem>
								<CustomLink to="/exchangeAndReturn">Обмін та повернення</CustomLink>
							</ListItem>
						</List>
					</Grid>
					<Grid
						item
						sx={{ display: { xs: "none", sm: "block" } }}
						fontWeight="fontWeightRegular"
						fontFamily="Open Sans, sans-serif"
					>
						<List sx={сontact}>
							<ListItem fontWeight="fontWeightBold" sx={menuTitle}>
								Контакти
							</ListItem>
							<ListItem>Україна,</ListItem>
							<ListItem>м.Київ,</ListItem>
							<ListItem>вул.Козаків 20,</ListItem>
							<ListItem>info@mobilegalaxy.com.ua</ListItem>
						</List>
					</Grid>
					<Grid item>
						<List>
							<ListItem fontWeight="fontWeightBold" sx={menuTitle}>
								Стежте за нами
							</ListItem>
							<ListItem sx={{ display: "flex", justifyContent: "space-around" }}>
								<CustomLink to="https://uk-ua.facebook.com/" target="_blank">
									<FacebookIcon sx={menuLinkItem} />
								</CustomLink>
								<CustomLink to="https://www.instagram.com/" target="_blank">
									<InstagramIcon sx={menuLinkItem} />
								</CustomLink>
							</ListItem>
						</List>
					</Grid>
				</Grid>
				<Typography
					sx={{
						borderTop: "1px solid #ffffff",
						pb: "81px",
						pt: "23px",
						fontSize: "12px",
					}}
				>
					&copy; 2023 Магазин мобільних телефонів «MOBILE GALAXY». Усі права захищенні.
				</Typography>
			</Container>
		</Box>
	);
};

export default Footer;