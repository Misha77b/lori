import React, { useState } from "react";
import PropTypes from "prop-types";
import { Container, Grid, Box, Tabs, Tab } from "@mui/material";
import CategoryTitle from "../../components/CategoryTitle";

const TabPanel = (props) => {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && <Box>{children}</Box>}
		</div>
	);
};

TabPanel.propTypes = {
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

const a11yProps = (index) => {
	return {
		id: `vertical-tab-${index}`,
		"aria-controls": `vertical-tab-${index}`,
	};
};

const Profile = () => {
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Container>
			<CategoryTitle text="Особистий кабінет" />
			<Grid container>
				<Grid
					item
					xs={4}
					sx={{
						flexGrow: 1,
						bgcolor: "background.paper",
						display: "flex",
						justifyContent: "flex-start",
					}}
				>
					<Tabs
						orientation="vertical"
						value={value}
						onChange={handleChange}
						aria-label="Vertical tabs example"
						variant="scrollable"
						scrollButtons="auto"
						sx={{ display: "flex", alignContent: "flex-start", width: "306px" }}
					>
						<Tab
							// sx={{ paddingLeft: "35px" }}
							label="Редагувати профіль"
							to="/basic-info"
							{...a11yProps(0)}
						/>
						<Tab
							// sx={{ paddingLeft: "35px" }}
							label="Змінити пароль"
							to="/order-history"
							{...a11yProps(1)}
						/>
						<Tab
							// sx={{ paddingLeft: "35px" }}
							label="Мої замовлення"
							to="/wish-list"
							{...a11yProps(2)}
						/>
						<Tab
							// sx={{ paddingLeft: "35px" }}
							label="Вийти з кабінету"
							to="/viewed-products"
							{...a11yProps(3)}
						/>
					</Tabs>
				</Grid>
				<Grid item xs={8}>
					<TabPanel value={value} index={0}>
						Редагувати профіль
					</TabPanel>
					<TabPanel value={value} index={1}>
						Змінити пароль
					</TabPanel>
					<TabPanel value={value} index={2}>
						Мої замовлення
					</TabPanel>
					<TabPanel value={value} index={3}>
						Вийти з кабінету
					</TabPanel>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Profile;
