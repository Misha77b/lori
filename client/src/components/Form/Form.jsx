import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { schema as validationSchema, validationSchema2 } from "./Schema";
import Field from "./Field/Field";
import "./Form.scss";
import { selectUser } from "../../store/selectors";
import { fetchAuth, fetchRegister } from "../../store/reducers/authSlice";

const PageForm = ({ status, onClose, onLoginToggle, onRegisterToggle }) => {
	const dispatch = useDispatch();
	const user = useSelector(selectUser);
	const formik = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
			email: "",
			password: "",
		},
		onSubmit: (usersData, { resetForm }) => {
			if (status === "LOGIN") {
				const { email, password } = usersData;
				const loginUser = { email, password };
				dispatch(fetchAuth(loginUser));
				console.log(loginUser);
			} else {
				dispatch(fetchRegister(usersData));
				console.log(usersData);
			}
			// resetForm({ usersData: "" });
			onClose();
		},
		...(status === "REGISTER" ? { validationSchema } : { validationSchema2 }),
	});
	const { values, errors, touched } = formik;
	console.log("user", user);
	return (
		<form
			className="form"
			onSubmit={(e) => {
				e.preventDefault();
				formik.handleSubmit();
			}}
		>
			<div className="form__title">
				<span onClick={onLoginToggle} className={`login ${status === "LOGIN" ? "active" : ""}`}>
					Увійти
				</span>
				<span
					onClick={onRegisterToggle}
					className={`register ${status === "REGISTER" ? "active" : ""}`}
				>
					Реєстрація
				</span>
			</div>
			<div className="login__legend">
				Будь ласка, введіть дані свого облікового запису, щоб увійти
			</div>
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
			{status === "REGISTER" && (
				<Field
					description="Confirm password"
					type="password"
					name="changePassword"
					onChange={formik.handleChange}
					value={values.changePassword}
					errors={touched.password && errors.password}
				/>
			)}
			<div className="submit__btn__container">
				<button className="submit__btn" type="submit">
					{status === "LOGIN" ? "Увійти" : "Зареєструватися"}
				</button>
			</div>
		</form>
	);
};
export default PageForm;
