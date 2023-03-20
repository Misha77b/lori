import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Typography } from "@mui/material";
import UserInfoForm from "../../components/UserInfoForm";
import { EditProfileWrapper } from "./styled";
import { fetchCustomer } from "../../../../store/reducers/getCustomerInfoSlice";

const EditProfile = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchCustomer()).then(({ payload }) => payload);
	}, []);
	return (
		<EditProfileWrapper>
			<Typography
				fontWeight="fontWeightBold"
				sx={{
					fontSize: "20px",
					color: "#000000",
					fontFamily: "Open Sans, sans-serif",
				}}
			>
				Профіль користувача
			</Typography>
			<UserInfoForm />
		</EditProfileWrapper>
	);
};

export default EditProfile;
