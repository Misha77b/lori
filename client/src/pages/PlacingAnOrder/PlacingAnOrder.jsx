import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { Container, Grid, Box, Typography, TextField, InputLabel, Button } from "@mui/material";

import * as yup from "yup";
import styled from "styled-components";
import PropTypes from "prop-types";

import { inputLabel } from "./sxStyles/inputLabel";
import CategoryTitle from "../../components/CategoryTitle";
import FillTheFromText from "./FillTheFromText/FillTheFromText";
import OrderItem from "./OrderItem/OrderItem";

import "./PlacingAnOrder.scss";
import OrderPrice from "./OrderPrice/OrderPrice";
import PaymentAndShipping from "./PaymentAndShipping/PaymentAndShipping";

import { fetchProducts } from "../../store/reducers/productsSlice";
import { selectProductsData } from "../../store/selectors/products.selectors";
import { getItems } from "../../helpers/utils";

const validationSchema = yup.object({
	email: yup.string("Enter your email").email("Enter a valid email").required("Email is required"),
});

const PlacingAnOrder = () => {
	const dispatch = useDispatch();
	const initialProducts = useSelector(selectProductsData);
	const [products, setProducts] = useState([...initialProducts]);
	useEffect(() => {
		const data = dispatch(fetchProducts());
		data.then((res) => {
			setProducts(res.payload);
		});
	}, []);

	const cartItems = getItems("cart", products);
	// console.log(cartItems);

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

				<Grid container spacing={{ xs: 2, md: 5, lg: 20 }}>
					<Grid item xs={12} sm={12} md={6}>
						<FillTheFromText />

						<Typography variant="h6">Контактні дані</Typography>

						<Box className="inputs-wrapper">
							<Box>
								<InputLabel className="textField-label" sx={inputLabel}>
									Ім’я одержувача
								</InputLabel>
								<TextField
									fullWidth
									color="black"
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
									color="black"
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
									color="black"
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

						<Typography sx={{ margin: "40px 0 20px" }} variant="h6">
							Доставка та оплата
						</Typography>
						<PaymentAndShipping />
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

							<Box component="div" className="scroll">
								{cartItems?.map((item) => {
									return <OrderItem key={item.itemNo} item={item} />;
								})}
							</Box>

							{/* <OrderItem />

							<OrderItem />

							<OrderItem /> */}

							<OrderPrice />
						</div>

						<Button
							sx={{
								marginTop: "20px",
								width: "320px",
								height: "56px",
								background: "#007042",
								color: "#FFF",
								"&:hover": {
									backgroundColor: "#007042",
								},
								"@media (max-width: 400px)": {
									width: "280px",
								},
							}}
							color="primary"
						>
							ПІДТВЕРДИТИ ЗАМОВЛЕННЯ
						</Button>
					</Grid>
				</Grid>
			</form>
		</Container>
	);
};

export default PlacingAnOrder;
