import React, { useState } from "react";
import { Grid, Typography, RadioGroup, FormControlLabel, Radio, TextField } from "@mui/material";

const PaymentAndShipping = () => {
	const [shippingMethod, setShippingMethod] = useState("Кур’єром додому");
	const [paymentMethod, setPaymentMethod] = useState("Банківською карткою онлайн");

	const handleShippingMethodChange = (e) => {
		setShippingMethod(e.target.value);
	};

	const handlePaymentMethodChange = (e) => {
		setPaymentMethod(e.target.value);
	};

	return (
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
						value="Кур’єром додому"
						control={<Radio sx={{ "&.Mui-checked": { color: "#007042" } }} />}
						label="Кур’єром додому"
					/>
					<FormControlLabel
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
						value="Банківською карткою онлайн"
						control={<Radio sx={{ "&.Mui-checked": { color: "#007042" } }} />}
						label="Банківською карткою онлайн"
					/>
					<FormControlLabel
						value="Готівкою або карткою при отриманні"
						control={<Radio sx={{ "&.Mui-checked": { color: "#007042" } }} />}
						label="Готівкою або карткою при отриманні"
					/>
				</RadioGroup>
			</Grid>

			<Typography sx={{ margin: "20px 0 10px" }}>Адреса</Typography>
			<TextField
				fullWidth
				color="black"
				// value={}
				placeholder="Місто, вулиця, будинок, квартира"
				multiline={true}
			/>
		</Grid>
	);
};

export default PaymentAndShipping;
