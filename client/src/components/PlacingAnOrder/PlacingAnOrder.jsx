import React from "react";
import { useFormik } from "formik";
import { Container, Grid, Box, Typography, TextField, OutlinedInput } from "@mui/material";

import * as yup from "yup";

import PropTypes from "prop-types";
import CategoryTitle from "../CategoryTitle";

import "./PlacingAnOrder.scss";

const validationSchema = yup.object({
	email: yup.string("Enter your email").email("Enter a valid email").required("Email is required"),
});

const PlacingAnOrder = () => {
	const formik = useFormik({
		initialValues: {
			recipientsName: "",
			phoneNumber: "+380",
			email: "foobar@example.com",
		},
		// validationSchema: validationSchema,
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});

	return (
		<Container>
			<form className="form-wrapper" onSubmit={formik.handleSubmit}>
				<CategoryTitle text="Оформлення замовлення" />

				<Grid container spacing={{ xs: 2, md: 20 }}>
					<Grid item xs={12} sm={12} md={6}>
						<Box>
							<Typography>Будь ласка, заповніть форму.</Typography>
							<Typography>Оберіть спосіб оплати та спосіб доставки</Typography>
						</Box>

						<Typography variant="h6">Контактні дані</Typography>

						<Box className="inputs-wrapper">
							<TextField
								fullWidth
								id="recipientsName"
								name="recipientsName"
								label="Ім’я одержувача"
								value={formik.values.recipientsName}
								onChange={formik.handleChange}
							/>

							<TextField
								fullWidth
								id="phoneNumber"
								name="phoneNumber"
								label="Телефон"
								value={formik.values.phoneNumber}
								onChange={formik.handleChange}
							/>

							<TextField
								fullWidth
								id="email"
								name="email"
								label="E-mail"
								value={formik.values.email}
								onChange={formik.handleChange}
								error={formik.touched.email && Boolean(formik.errors.email)}
								helperText={formik.touched.email && formik.errors.email}
							/>
						</Box>

						<Typography variant="h6">Доставка та оплата</Typography>
					</Grid>

					<Grid item xs={12} sm={12} md={6}>
						Товари у кошику
					</Grid>
				</Grid>
			</form>
		</Container>
	);
};

export default PlacingAnOrder;
