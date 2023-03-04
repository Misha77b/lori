import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import {
	Container,
	Grid,
	Box,
	Typography,
	TextField,
	InputLabel,
	Button,
	RadioGroup,
	FormControlLabel,
	Radio,
	Autocomplete,
} from "@mui/material";

import * as yup from "yup";
import styled from "styled-components";
import PropTypes from "prop-types";

import { inputLabel } from "./sxStyles/inputLabel";
import CategoryTitle from "../../components/CategoryTitle";
import FillTheFromText from "./FillTheFormText";
import PaymentAndShipping from "./PaymentAndShipping";
import OrderItem from "../../components/OrderItem";

import { AdressesDataBase } from "./AdressesDataBase/AdressesDataBase";

import "./PlacingAnOrder.scss";
import OrderPrice from "./OrderPrice";
import { getItems } from "../../helpers/getItems";
import useFetchData from "../Home/hooks";
// get and log products from LS
import { fetchProducts } from "../../store/reducers/productsSlice";
import { getLocalItem } from "../../helpers/getLocalItem";

// order data testing
import { selectOrderData } from "../../store/selectors/orders.selectors";
import { createOrder, setOrderData } from "../../store/reducers/ordersSlice";

import { selectShoppingCart } from "../../store/selectors";

const validationSchema = yup.object({
	email: yup.string("Enter your email").email("Enter a valid email").required("Email is required"),
});

const RGStyle = {
	height: "40px",
	"@media (max-width: 448px)": { height: "72px" },
};

const PlacingAnOrder = () => {
	const dispatch = useDispatch();
	const [products, setProducts] = useState([]);
	const cartItems = useSelector((state) => state.cart.shoppingCart);

	const [shippingMethod, setShippingMethod] = useState("Кур’єром додому");
	const [paymentMethod, setPaymentMethod] = useState("Банківською карткою онлайн");
	const [adressTitle, setAdressTitle] = useState("Адреса");

	const [inputValue, setInputValue] = useState();

	useEffect(() => {
		const params = new URLSearchParams();
		params.set("itemNo", Object.keys(cartItems).join(","));
		dispatch(fetchProducts(params.toString())).then((res) => {
			setProducts(res.payload.products);
		});
	}, [cartItems]);
	const newObj = products.map((obj) => {
		const result = {};
		result._id = obj._id;
		result.product = obj;
		result.cartQuantity = cartItems[obj.itemNo];
		return result;
	});

	const handleShippingMethodChange = (e) => {
		if (shippingMethod === "Кур’єром додому") {
			setAdressTitle("Пункт видачі");
		} else setAdressTitle("Адреса");
		setShippingMethod(e.target.value);
	};

	const handlePaymentMethodChange = (e) => {
		setPaymentMethod(e.target.value);
	};

	const orders = (values) => {
		const sendOrder = {};
		sendOrder.products = newObj;
		sendOrder.deliveryAddress = values.adress;
		sendOrder.shipping = "--";
		sendOrder.email = values.email;
		sendOrder.mobile = values.phoneNumber;
		sendOrder.letterSubject = "Thank you for order!";
		sendOrder.letterHtml =
			"<h1>Your order is placed. OrderNo is 023689452.</h1><p>{Other details about order in your HTML}</p>";
		return sendOrder;
	};

	const formik = useFormik({
		initialValues: {
			fullName: "",
			phoneNumber: "",
			email: "",
			adress: inputValue || "",
		},
		onSubmit: (values) => {
			const newOrder = orders(values);
			console.log("newOrder", newOrder);
			dispatch(createOrder(newOrder));
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
									color="secondary"
									id="fullName"
									name="fullName"
									placeholder="Ім’я одержувача"
									variant="outlined"
									value={formik.values.fullName}
									onChange={formik.handleChange}
								/>
							</Box>

							<Box>
								<InputLabel className="textField-label" sx={inputLabel}>
									Телефон
								</InputLabel>
								<TextField
									fullWidth
									color="secondary"
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
									color="secondary"
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
						<Grid container>
							<Grid item xs={6} md={5}>
								<Typography>Спосіб доставки</Typography>
								<RadioGroup
									aria-labelledby="demo-controlled-radio-buttons-group"
									name="controlled-radio-buttons-group"
									value={shippingMethod}
									onChange={handleShippingMethodChange}
								>
									<FormControlLabel
										sx={RGStyle}
										value="Кур’єром додому"
										control={<Radio sx={{ "&.Mui-checked": { color: "#007042" } }} />}
										label="Кур’єром додому"
									/>
									<FormControlLabel
										sx={RGStyle}
										value="Самовивіз"
										control={<Radio sx={{ "&.Mui-checked": { color: "#007042" } }} />}
										label="Самовивіз"
									/>
								</RadioGroup>
							</Grid>

							<Grid item xs={6} md={7}>
								<Typography>Спосіб розрахунку</Typography>
								<RadioGroup
									aria-labelledby="demo-controlled-radio-buttons-group"
									name="controlled-radio-buttons-group"
									value={paymentMethod}
									onChange={handlePaymentMethodChange}
								>
									<FormControlLabel
										sx={RGStyle}
										value="Банківською карткою онлайн"
										control={<Radio sx={{ "&.Mui-checked": { color: "#007042" } }} />}
										label="Банківською карткою онлайн"
									/>
									<FormControlLabel
										sx={RGStyle}
										value="Готівкою або карткою при отриманні"
										control={<Radio sx={{ "&.Mui-checked": { color: "#007042" } }} />}
										label="Готівкою або карткою при отриманні"
									/>
								</RadioGroup>
							</Grid>
						</Grid>

						<Typography sx={{ margin: "20px 0 10px" }}>{adressTitle}</Typography>
						{adressTitle === "Пункт видачі" ? (
							<Autocomplete
								disablePortal
								id="adress"
								name="adress"
								value={(formik.values.adress = inputValue)}
								onChange={(event, newValue) => {
									setValue(newValue);
								}}
								inputValue={inputValue}
								onInputChange={(event, newInputValue) => {
									setInputValue(newInputValue);
								}}
								options={AdressesDataBase}
								sx={{ width: "100%" }}
								renderInput={(params) => (
									<TextField
										fullWidth
										color="secondary"
										placeholder="Оберіть пункт видачі"
										{...params}
									/>
								)}
							/>
						) : (
							<TextField
								fullWidth
								id="adress"
								name="adress"
								color="secondary"
								value={formik.values.adress}
								onChange={formik.handleChange}
								placeholder="Місто, вулиця, будинок, квартира"
								multiline={true}
							/>
						)}
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
								{products?.map((item) => {
									return <OrderItem key={item.itemNo} item={item} />;
								})}
							</Box>

							<OrderPrice />
						</div>

						<Button
							type="submit"
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
