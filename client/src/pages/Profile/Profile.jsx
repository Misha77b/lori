import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Container, Grid, Box, Tabs, Tab } from "@mui/material";
import { Link, useParams, useNavigate } from "react-router-dom";

import { setIsAuth } from "../../store/reducers/authSlice";
import "./Profile.scss";

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
		tabIndex: -1,
	};
};
const Profile = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
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
					}}
				>
					<Tabs
						className="profile-tabs-box"
						orientation="vertical"
						value={value}
						onChange={(event, newValue) => {
							setValue(newValue);
						}}
						aria-label="Vertical tabs example"
						variant="scrollable"
						scrollButtons="auto"
						sx={{
							backgroundColor: "#F5F5F5",
							width: "300px",
						}}
					>
						<Tab
							className="profile-tabs"
							color="secondary"
							label="Редагувати профіль"
							component={Link}
							to="/profile/edit-profile"
							{...a11yProps(0)}
						/>
						<Tab
							className="profile-tabs"
							color="secondary"
							label="Змінити пароль"
							component={Link}
							to="/profile/change-password"
							{...a11yProps(1)}
						/>
						<Tab
							className="profile-tabs"
							color="secondary"
							label="Мої замовлення"
							component={Link}
							to="/profile/orders-history"
							{...a11yProps(2)}
						/>
						<Tab
							className="profile-tabs"
							color="secondary"
							onClick={() => {
								localStorage.removeItem("token");
								dispatch(setIsAuth(false));
								navigate("/");
							}}
							label="Вийти з кабінету"
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
