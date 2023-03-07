import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { schema as validationSchema } from "./Schema";
import Field from "../../../../components/Form/Field/Field";
// eslint-disable-next-line import/named
import { InputWrapper } from "../../ProfileMenuBlocks/EditProfile/styled";
import { fetchCustomer } from "../../../../store/reducers/getCustomerInfoSlice";
import { fetchUpdateCustomerInfo } from "../../../../store/reducers/updateUserInfoSlice";

const UserInfoForm = ({ email, firstName, lastName, telephone }) => {
	const dispatch = useDispatch();

	const formik = useFormik({
		initialValues: {
			firstName,
			lastName,
			email,
			mobile: telephone,
		},
		onSubmit: (usersData) => {
			return dispatch(fetchUpdateCustomerInfo(usersData));
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
			<InputWrapper>
				<Field
					name="firstName"
					type="text"
					description="First Name"
					value={values.firstName}
					onChange={formik.handleChange}
					errors={touched.firstName && errors.firstName}
				/>
				<Field
					name="lastName"
					type="text"
					description="Last Name"
					value={values.lastName}
					onChange={formik.handleChange}
					errors={touched.lastName && errors.lastName}
				/>
				<Field
					name="email"
					type="email"
					description="Email"
					value={values.email}
					onChange={formik.handleChange}
					errors={touched.email && errors.email}
				/>
				<Field
					name="mobile"
					type="tel"
					description="Mobile"
					value={values.mobile}
					onChange={formik.handleChange}
					errors={touched.mobile && errors.mobile}
				/>
			</InputWrapper>
			<div className="submit__btn__container">
				<button className="submit__btn" type="submit">
					Зберегти зміни
				</button>
			</div>
		</form>
	);
};

export default UserInfoForm;
