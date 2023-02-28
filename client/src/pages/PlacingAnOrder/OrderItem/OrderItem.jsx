import React from "react";
import { useDispatch } from "react-redux";
import { Grid, Box, Divider, Typography } from "@mui/material";

import "./OrderItem.scss";
import { removeItemFavorite } from "../../../store/reducers/productsSlice";
import { deleteCardIdFromStore } from "../../../helpers/deleteCardIdFromStore";

const OrderItem = ({ item, deleteCross = false }) => {
	const dispatch = useDispatch();
	return (
		<>
			<Grid container className="item-product">
				<Grid item xs={3} sx={{ display: "flex", alignItems: "center" }}>
					<img className="item-product--img" src={item.imageUrls[0]} alt="product img" />
				</Grid>

				<Grid item xs={6}>
					<Box>
						<Typography fontWeight="fontWeightBold" sx={{ fontSize: "14px" }}>
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

				<Grid item xs={2}>
					<Box>
						<Typography
							fontWeight="fontWeightBold"
							sx={{ fontSize: "16px", "@media (max-width: 400px)": { fontSize: "14px" } }}
							className="price"
						>
							{item.currentPrice} грн
						</Typography>
					</Box>
				</Grid>
				{deleteCross && (
					<Grid item xs={1}>
						<Box>
							<Typography
								fontWeight="fontWeightBold"
								sx={{
									fontSize: "16px",
									"@media (max-width: 400px)": { fontSize: "14px" },
									cursor: "pointer",
								}}
								className="cross"
								onClick={() => {
									dispatch(removeItemFavorite(item.itemNo));
									deleteCardIdFromStore(item.itemNo, "favorites");
								}}
							>
								X
							</Typography>
						</Box>
					</Grid>
				)}
			</Grid>
			<Divider />
		</>
	);
};

export default OrderItem;
