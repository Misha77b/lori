import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { Typography } from "@mui/material";
import { selectUser } from "../../../../store/selectors";
import { validationSchemaForPasswordChange as validationSchema } from "../../components/UserInfoForm/Schema";
import { InputWrapper } from "../EditProfile/styled";
import Field from "../../../../components/Form/Field/Field";

const PasswordChange = () => {
	const dispatch = useDispatch();
	const user = useSelector(selectUser);
	const formik = useFormik({
		initialValues: {
			password: "2222222",
			newPassword: "",
			confirmPassword: "",
		},
		onSubmit: (usersData) => {
			console.log(usersData);
		},
		validationSchema,
	});
	const { values, errors, touched } = formik;
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				formik.handleSubmit();
			}}
			style={{
				display: "flex",
				justifyContent: "flex-start",
				flexDirection: "column",
				gap: "40px",
			}}
		>
			<Typography
				fontWeight="fontWeightBold"
				sx={{ fontSize: "20px", color: "#000000", fontFamily: "Open Sans, sans-serif" }}
			>
				Пароль
			</Typography>
			<InputWrapper>
				<Field
					name="password"
					type="password"
					description="Password"
					value={values.password}
					onChange={formik.handleChange}
					errors={touched.password && errors.password}
				/>
				<Field
					name="newPassword"
					type="password"
					description="New password"
					value={values.newPassword}
					onChange={formik.handleChange}
					errors={touched.newPassword && errors.newPassword}
				/>
				<Field
					description="Confirm password"
					type="password"
					name="confirmPassword"
					onChange={formik.handleChange}
					value={values.confirmPassword}
					errors={touched.confirmPassword && errors.confirmPassword}
				/>
			</InputWrapper>
			<div className="submit__btn__container">
				<button className="submit__btn" type="submit">
					Змінити пароль
				</button>
			</div>
		</form>
	);
};

export default PasswordChange;
