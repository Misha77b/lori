import React from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { NavLink } from "react-router-dom";
import { styled } from "@mui/material/styles";

const MenuContact = () => {
	const CustomLink = styled(NavLink)(({ theme }) => ({
		color: "inherit",
		textDecoration: "none",
		"&: hover": {
			color: "#007042",
			fontWeight: 700,
		},
	}));

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
					<CustomLink to="/contacts">Контакти</CustomLink>
				</MenuItem>
			</Menu>
		</>
	);
};

export default MenuContact;
