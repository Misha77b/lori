import React from "react";
import { useFormik } from "formik";
import { Container, Grid, Box, Typography, TextField, InputLabel } from "@mui/material";

import * as yup from "yup";

import PropTypes from "prop-types";

import { inputLabel } from "./sxStyles/inputLabel";
import CategoryTitle from "../../components/CategoryTitle";
import FillTheFromText from "./FillTheFromText/FillTheFromText";
import OrderItem from "./OrderItem/OrderItem";

import "./PlacingAnOrder.scss";

const validationSchema = yup.object({
	email: yup.string("Enter your email").email("Enter a valid email").required("Email is required"),
});

const PlacingAnOrder = () => {
	const formik = useFormik({
		initialValues: {
			recipientsName: "",
			phoneNumber: "",
			email: "",
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
						<FillTheFromText />

						<Typography className="36px" variant="h6">
							Контактні дані
						</Typography>

						<Box className="inputs-wrapper">
							<Box>
								<InputLabel className="textField-label" sx={inputLabel}>
									Ім’я одержувача
								</InputLabel>
								<TextField
									fullWidth
									id="recipientsName"
									name="recipientsName"
									placeholder="Ім’я одержувача"
									variant="outlined"
									value={formik.values.recipientsName}
									onChange={formik.handleChange}
								/>
							</Box>

							<Box>
								<InputLabel className="textField-label" sx={inputLabel}>
									Телефон
								</InputLabel>
								<TextField
									fullWidth
									id="phoneNumber"
									name="phoneNumber"
									placeholder="+380"
									variant="outlined"
									value={formik.values.phoneNumber}
									onChange={formik.handleChange}
								/>
							</Box>

							<Box>
								<InputLabel className="textField-label" sx={inputLabel}>
									E-mail
								</InputLabel>
								<TextField
									fullWidth
									id="email"
									name="email"
									placeholder="E-mail"
									variant="outlined"
									value={formik.values.email}
									onChange={formik.handleChange}
									error={formik.touched.email && Boolean(formik.errors.email)}
									helperText={formik.touched.email && formik.errors.email}
								/>
							</Box>
						</Box>

						<Typography variant="h6">Доставка та оплата</Typography>
					</Grid>

					<Grid item xs={12} sm={12} md={6}>
						<div className="cart-products">
							<Typography
								className="cart-products--title"
								variant="h3"
								fontWeight="fontWeightBold"
								sx={{ fontSize: "18px" }}
							>
								Товари у кошику
							</Typography>

							<OrderItem />

							<OrderItem />

							<OrderItem />
						</div>
					</Grid>
				</Grid>
			</form>
		</Container>
	);
};

export default PlacingAnOrder;
