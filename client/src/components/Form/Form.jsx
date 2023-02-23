import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import { schema as validationSchema, validationSchema2 } from "./Schema";
import Field from "./Field/Field";
import "./Form.scss";
// import { selectUser } from "../../selectors";
// import { fetchAuth, fetchRegister } from "../../reducers/auth.reducer";
const PageForm = ({ status, onClose }) => {
	const dispatch = useDispatch();
	// const user = useSelector(selectUser);
	const formik = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
			phone: "",
			email: "",
			password: "",
		},
		onSubmit: (usersData, { resetForm }) => {
			if (status === "LOGIN") {
				const { email, password } = usersData;
				const loginUser = { email, password };
				// dispatch(fetchAuth(loginUser));
				console.log(loginUser);
			} else {
				// dispatch(fetchRegister(usersData));
				console.log(usersData);
			}
			resetForm({ usersData: "" });
			onClose();
		},
		...(status === "REGISTER" ? { validationSchema } : { validationSchema2 }),
	});
	const { values, errors, touched } = formik;
	return (
		<form
			className="form"
			onSubmit={(e) => {
				e.preventDefault();
				formik.handleSubmit();
			}}
		>
			{status === "REGISTER" && (
				<Field
					name="firstName"
					type="text"
					description="First Name"
					value={values.firstName}
					onChange={formik.handleChange}
					errors={touched.firstName && errors.firstName}
				/>
			)}
			{status === "REGISTER" && (
				<Field
					name="lastName"
					type="text"
					description="Last Name"
					value={values.lastName}
					onChange={formik.handleChange}
					errors={touched.lastName && errors.lastName}
				/>
			)}
			{status === "REGISTER" && (
				<Field
					name="phone"
					type="tel"
					description="Your contact phone"
					value={values.phone}
					onChange={formik.handleChange}
					errors={touched.phone && errors.phone}
				/>
			)}
			<Field
				name="email"
				type="email"
				description="Email"
				value={values.email}
				onChange={formik.handleChange}
				errors={touched.email && errors.email}
			/>
			<Field
				name="password"
				type="password"
				description="Password"
				value={values.password}
				onChange={formik.handleChange}
				errors={touched.password && errors.password}
			/>
			<div className="input__container">
				<button type="submit" className="submit__btn">
					Checkout
				</button>
			</div>
		</form>
	);
};
export default PageForm;
