import React from "react";
import { useDispatch } from "react-redux";
import { Grid, Box, Button, Divider, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import "./OrderItem.scss";
import { removeItemFavorite } from "../../store/reducers/favoriteSlice";
import { deleteCardIdFromStore } from "../../helpers/deleteCardIdFromStore";
import { favPriceSX } from "./FavoriteSx/priceSx";
import { favCrossSx } from "./FavoriteSx/crossSx";

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

				<Grid item xs={deleteCross ? 2 : 3} sx={deleteCross ? favPriceSX : null}>
					<Box>
						<Typography
							fontWeight="fontWeightBold"
							sx={{ fontSize: "16px", "@media (max-width: 400px)": { fontSize: "14px" } }}
							className="price"
						>
							{item.currentPrice} грн
						</Typography>
						<Typography fontWeight="fontWeightRegular" sx={{ fontSize: "12px", color: "#BFBFBF" }}>
							2 х {item.currentPrice}
						</Typography>
					</Box>
				</Grid>
				{deleteCross && (
					<Grid item xs={1} sx={deleteCross ? favCrossSx : null}>
						<Button
							className="cross"
							color="black"
							sx={{ padding: 0, minWidth: 0 }}
							onClick={() => {
								dispatch(removeItemFavorite(item.itemNo));
								deleteCardIdFromStore(item.itemNo, "favorites");
							}}
						>
							<CloseIcon />
						</Button>
					</Grid>
				)}
			</Grid>
			<Divider />
		</>
	);
};

export default OrderItem;
