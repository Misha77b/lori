import React from "react";
import { Button, Menu, MenuItem } from "@mui/material";

const MenuCatalog = () => {
	const [сatalog, setCatalog] = React.useState(null);
	const openCatalog = Boolean(сatalog);

	const handleClickCatalog = (event) => {
		setCatalog(event.currentTarget);
	};
	const handleCloseCatalog = () => {
		setCatalog(null);
	};

	return (
		<>
			<Button
				id="button-сatalog"
				aria-controls={openCatalog ? "menu-сatalog" : undefined}
				aria-haspopup="true"
				aria-expanded={openCatalog ? "true" : undefined}
				onClick={handleClickCatalog}
				sx={{ padding: { sm: "20px 25px", md: "20px 35px" } }}
			>
				Каталог
			</Button>
			<Menu
				id="menu-сatalog"
				anchorEl={сatalog}
				open={openCatalog}
				onClose={handleCloseCatalog}
				MenuListProps={{
					"aria-labelledby": "button-сatalog",
				}}
			>
				<MenuItem divider onClick={handleCloseCatalog}>
					Телефони
				</MenuItem>
			</Menu>
		</>
	);
};

export default MenuCatalog;
