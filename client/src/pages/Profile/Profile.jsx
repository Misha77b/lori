import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Container, Grid, Box, Tabs, Tab } from "@mui/material";
import { Link, useParams } from "react-router-dom";

import { setIsAuth } from "../../store/reducers/authSlice";

import CategoryTitle from "../../components/CategoryTitle";
import EditProfile from "../../components/ProfileMenuBlocks/EditProfile/EditProfile";
import Password from "../../components/ProfileMenuBlocks/Password/Password";
import OrdersHistory from "../../components/ProfileMenuBlocks/OrdersHistory/OrdersHistory";

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
	const dispatch = useDispatch();
	const [value, setValue] = useState(0);

	const { profileMenu } = useParams();

	useEffect(() => {
		if (profileMenu === "edit-profile") {
			setValue(0);
		} else if (profileMenu === "change-password") {
			setValue(1);
		} else if (profileMenu === "orders-history") {
			setValue(2);
		} else {
			setValue(0);
		}
	}, [profileMenu]);

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
							component={Link}
							to="/profile/edit-profile"
							{...a11yProps(0)}
						/>
						<Tab
							// sx={{ paddingLeft: "35px" }}
							label="Змінити пароль"
							component={Link}
							to="/profile/change-password"
							{...a11yProps(1)}
						/>
						<Tab
							// sx={{ paddingLeft: "35px" }}
							label="Мої замовлення"
							component={Link}
							to="/profile/orders-history"
							{...a11yProps(2)}
						/>
						<Tab
							onClick={() => {
								localStorage.removeItem("token");
								dispatch(setIsAuth(false));
							}}
							component={Link}
							label="Вийти з кабінету"
							to="/"
						/>
					</Tabs>
				</Grid>

				<Grid item xs={8}>
					<TabPanel value={value} index={0}>
						<EditProfile />
					</TabPanel>
					<TabPanel value={value} index={1}>
						<Password />
					</TabPanel>
					<TabPanel value={value} index={2}>
						<OrdersHistory />
					</TabPanel>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Profile;
