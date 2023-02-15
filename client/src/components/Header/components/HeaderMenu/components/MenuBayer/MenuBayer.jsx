import React from "react";
import { Button, Menu, MenuItem } from "@mui/material";

const MenuBayer = () => {
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
					Гарантія
				</MenuItem>
				<MenuItem divider onClick={handleCloseBayer}>
					Оплата та доставка
				</MenuItem>
				<MenuItem divider onClick={handleCloseBayer}>
					Обмін та повернення
				</MenuItem>
			</Menu>
		</>
	);
};

export default MenuBayer;
