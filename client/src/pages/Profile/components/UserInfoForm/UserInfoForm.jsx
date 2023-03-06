import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { selectUser } from "../../../../store/selectors";
import { schema as validationSchema } from "./Schema";
import Field from "../../../../components/Form/Field/Field";
// eslint-disable-next-line import/named
import { InputWrapper } from "../../ProfileMenuBlocks/EditProfile/styled";

const UserInfoForm = () => {
	const dispatch = useDispatch();
	const user = useSelector(selectUser);
	const formik = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
			email: "vita@gmail.com",
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
