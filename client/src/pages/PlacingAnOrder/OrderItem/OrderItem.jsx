import React from "react";

import { Paper, Grid, Box, Divider, Typography } from "@mui/material";

import "./OrderItem.scss";

const OrderItem = ({ item }) => {
	console.log(item);
	return (
		<>
			{/* <Paper
			sx={{
				p: 2,
				margin: "auto",
				minxWidth: 320,
				flexGrow: 1,
				backgroundColor: "#f5f5f5",
			}}
		> */}
			<Grid container className="item-product">
				<Grid item xs={3}>
					<img
						className="item-product--img"
						src={item.imageUrls[0]}
						// src="https://res.cloudinary.com/dsx708og4/image/upload/v1676276397/Lori_project/photo1-Apple-iPhone-13-Midnight_usy6dr.jpg"
						alt="product img"
					/>
				</Grid>

				<Grid item xs={6}>
					<Box>
						<Typography fontWeight="fontWeightBold" sx={{ fontSize: "14px" }}>
							{/* Apple iPhone 13 128GB Midnight (mlpf3hu/a) */}
							{item.model}
						</Typography>

						<Typography fontWeight="fontWeightRegular" sx={{ fontSize: "12px", color: "#677283" }}>
							{item.article}
						</Typography>

						<Typography fontWeight="fontWeightRegular" sx={{ margin: "5px 0", fontSize: "12px" }}>
							Колір: {item.color}
						</Typography>

						<Typography fontWeight="fontWeightRegular" sx={{ fontSize: "12px" }}>
							Пам&#8217;ть: {item.iternalStorage}
						</Typography>
					</Box>
				</Grid>

				<Grid item xs={3}>
					<Box>
						<Typography fontWeight="fontWeightBold" sx={{ fontSize: "16px" }} className="price">
							{item.currentPrice} грн
						</Typography>
						<Typography fontWeight="fontWeightRegular" sx={{ fontSize: "12px", color: "#BFBFBF" }}>
							2 х {item.currentPrice}
						</Typography>
					</Box>
				</Grid>
			</Grid>
			<Divider />
			{/* </Paper> */}
		</>
	);
};

export default OrderItem;
