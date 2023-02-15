import React from "react";
import { Button, Menu, MenuItem } from "@mui/material";

const MenuContact = () => {
	const [contacts, setContacts] = React.useState(null);
	const openContacts = Boolean(contacts);

	const handleClickContacts = (event) => {
		setContacts(event.currentTarget);
	};
	const handleCloseContacts = () => {
		setContacts(null);
	};

	return (
		<>
			<Button
				id="button-contact"
				aria-controls={openContacts ? "menu-contact" : undefined}
				aria-haspopup="true"
				aria-expanded={openContacts ? "true" : undefined}
				onClick={handleClickContacts}
				sx={{ padding: { sm: "20px 25px", md: "20px 35px" } }}
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
		</>
	);
};

export default MenuContact;
