import React from "react";
import { Button, Menu, MenuItem } from "@mui/material";

const HeaderMenu = () => {
	const [сatalog, setCatalog] = React.useState(null);
	const [bayer, setBayer] = React.useState(null);
	const [about, setAbout] = React.useState(null);
	const [contacts, setContacts] = React.useState(null);

	const openCatalog = Boolean(сatalog);
	const openBayer = Boolean(bayer);
	const openAbout = Boolean(about);
	const openContacts = Boolean(contacts);

	const handleClickCatalog = (event) => {
		setCatalog(event.currentTarget);
	};
	const handleCloseCatalog = () => {
		setCatalog(null);
	};

	const handleClickBayer = (event) => {
		setBayer(event.currentTarget);
	};
	const handleCloseBayer = () => {
		setBayer(null);
	};

	const handleClickAbout = (event) => {
		setAbout(event.currentTarget);
	};
	const handleCloseAbout = () => {
		setAbout(null);
	};

	const handleClickContacts = (event) => {
		setContacts(event.currentTarget);
	};
	const handleCloseContacts = () => {
		setContacts(null);
	};
	return (
		<div>
			<Button id="button-home">Головна</Button>
			<Button
				id="button-сatalog"
				aria-controls={openCatalog ? "menu-сatalog" : undefined}
				aria-haspopup="true"
				aria-expanded={openCatalog ? "true" : undefined}
				onClick={handleClickCatalog}
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

			<Button
				id="button-about"
				aria-controls={openAbout ? "menu-about" : undefined}
				aria-haspopup="true"
				aria-expanded={openAbout ? "true" : undefined}
				onClick={handleClickAbout}
			>
				Про нас
			</Button>
			<Menu
				id="menu-about"
				anchorEl={about}
				open={openAbout}
				onClose={handleCloseAbout}
				MenuListProps={{
					"aria-labelledby": "button-about",
				}}
			>
				<MenuItem divider onClick={handleCloseAbout}>
					Про нас
				</MenuItem>
			</Menu>

			<Button
				id="button-contact"
				aria-controls={openContacts ? "menu-contact" : undefined}
				aria-haspopup="true"
				aria-expanded={openContacts ? "true" : undefined}
				onClick={handleClickContacts}
			>
				Контакти
			</Button>
			<Menu
				id="menu-contact"
				anchorEl={contacts}
				open={openContacts}
				onClose={handleCloseContacts}
				MenuListProps={{
					"aria-labelledby": "button-contact",
				}}
			>
				<MenuItem divider onClick={handleCloseContacts}>
					Контакти
				</MenuItem>
			</Menu>
		</div>
	);
};

export default HeaderMenu;
