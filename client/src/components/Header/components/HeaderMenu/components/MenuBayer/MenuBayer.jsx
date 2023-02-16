import React from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { NavLink } from "react-router-dom";
import { styled } from "@mui/material/styles";

const MenuBayer = () => {
	const CustomLink = styled(NavLink)(({ theme }) => ({
		color: "inherit",
		textDecoration: "none",
		"&: hover": {
			textDecoration: "underline",
		},
	}));

	const [bayer, setBayer] = React.useState(null);
	const openBayer = Boolean(bayer);
	const handleClickBayer = (event) => {
		setBayer(event.currentTarget);
	};
	const handleCloseBayer = () => {
		setBayer(null);
	};

	return (
		<>
			<Button
				id="button-bayer"
				aria-controls={openBayer ? "menu-bayer" : undefined}
				aria-haspopup="true"
				aria-expanded={openBayer ? "true" : undefined}
				onClick={handleClickBayer}
				sx={{ padding: { sm: "20px 25px", md: "20px 35px" } }}
			>
				Покупцям
			</Button>
			<Menu
				id="menu-bayer"
				anchorEl={bayer}
				open={openBayer}
				onClose={handleCloseBayer}
				MenuListProps={{
					"aria-labelledby": "button-bayer",
				}}
			>
				<MenuItem divider onClick={handleCloseBayer}>
					<CustomLink to="/guarantee">Гарантія</CustomLink>
				</MenuItem>
				<MenuItem divider onClick={handleCloseBayer}>
					<CustomLink to="/paymentAndDelivery">Оплата та доставка</CustomLink>
				</MenuItem>
				<MenuItem divider onClick={handleCloseBayer}>
					<CustomLink to="/exchangeAndReturn">Обмін та повернення</CustomLink>
				</MenuItem>
			</Menu>
		</>
	);
};

export default MenuBayer;
