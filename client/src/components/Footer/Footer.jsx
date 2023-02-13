import React from "react";
import { Box, Link, List, ListItem, Grid, Typography, Container } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { styled } from "@mui/material/styles";

const Footer = () => {
	const сontact = {
		fontSize: "14px",
		p: "8px 16px",
	};

	const menuTitle = {
		fontSize: "16px",
		fontWeight: "700",
		pb: "17px",
		textTransform: "uppercase",
	};

	const menuLink = {
		color: "#ffffff",
		fontSize: "14px",
		textDecoration: "none",
		"&: hover": {
			textDecoration: "underline",
		},
	};

	const menuLinkItem = {
		color: "#ffffff",
		fontSize: "40px",
	};

	return (
		<Box component="footer" sx={{ backgroundColor: "#57646E" }}>
			<Container sx={{ color: "#ffffff" }}>
				<Grid
					container
					spacing={1}
					sx={{ flexGrow: 1, justifyContent: "space-between", pt: "55px" }}
				>
					<Box sx={{ display: { xs: "none", md: "block" } }}>
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
					</Box>
					<Box fontWeight="fontWeightRegular" fontFamily="Open Sans, sans-serif">
						<Typography sx={menuTitle}>Інформація</Typography>
						<List>
							<ListItem>
								{/* <Link href="#" sx={menuLink}> */}
								Про нас
								{/* </Link> */}
							</ListItem>
						</List>
					</Box>
					<Box>
						<Typography fontWeight="fontWeightBold" sx={menuTitle}>
							Покупцям
						</Typography>
						<List>
							<ListItem>
								{/* <Link href="#" sx={menuLink}> */}
								Гарантія
								{/* </Link> */}
							</ListItem>
							<ListItem>
								{/* <Link href="#" sx={menuLink}> */}
								Оплата та доставка
								{/* </Link> */}
							</ListItem>
							<ListItem>
								{/* <Link href="#" sx={menuLink}> */}
								Обмін та повернення
								{/* </Link> */}
							</ListItem>
						</List>
					</Box>
					<Box>
						<Typography fontWeight="fontWeightBold" sx={menuTitle}>
							Контакти
						</Typography>
						<Typography sx={сontact}>Україна,</Typography>
						<Typography sx={сontact}>м.Київ,</Typography>
						<Typography sx={сontact}>вул.Козаків 20,</Typography>
						<Typography sx={сontact}>info@mobilegalaxy.com.ua</Typography>
					</Box>
					<Box>
						<Typography fontWeight="fontWeightBold" sx={menuTitle}>
							Стежте за нами
						</Typography>
						<List>
							<ListItem sx={{ display: "flex", justifyContent: "space-around" }}>
								<Link href="https://uk-ua.facebook.com/" target="_blank">
									<FacebookIcon sx={menuLinkItem} />
								</Link>
								<Link href="https://www.instagram.com/" target="_blank">
									<InstagramIcon sx={menuLinkItem} />
								</Link>
							</ListItem>
						</List>
					</Box>
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
