import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Grid, Box, Button, Divider, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./OrderItem.scss";
import { removeItemFavorite } from "../../store/reducers/favoriteSlice";
import { deleteCardIdFromStore } from "../../helpers/deleteCardIdFromStore";
import { favPriceSX } from "./FavoriteSx/priceSx";
import { favCrossSx } from "./FavoriteSx/crossSx";
import ToCartButton from "../ToCartButton";

const OrderItem = ({ item, cartQuantity, deleteCross = false, setNotification }) => {
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
							Пам&apos;ять: {item.iternalStorage}
						</Typography>

						{deleteCross && (
							<ToCartButton favorites={true} setNotification={setNotification} id={item._id} />
						)}
					</Box>
				</Grid>
				<Grid item xs={deleteCross ? 2 : 3} sx={deleteCross ? favPriceSX : null}>
					<Box>
						<Typography
							fontWeight="fontWeightBold"
							sx={{ fontSize: "16px", "@media (max-width: 400px)": { fontSize: "14px" } }}
							className="price"
						>
							{deleteCross
								? item.currentPrice
								: Math.floor(item.currentPrice * cartQuantity ?? 0)
										.toString()
										.replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
							грн
						</Typography>
						{!deleteCross && cartQuantity > 1 && (
							<Typography
								fontWeight="fontWeightRegular"
								sx={{ fontSize: "12px", color: "#BFBFBF" }}
							>
								{cartQuantity}&times;{item.currentPrice} грн
							</Typography>
						)}
					</Box>
				</Grid>
				{deleteCross && (
					<Grid item xs={1} sx={deleteCross ? favCrossSx : null}>
						<Button
							className="cross"
							color="black"
							sx={{ padding: 0, minWidth: 0 }}
							onClick={() => {
								dispatch(removeItemFavorite(item._id));
								deleteCardIdFromStore(item._id, "favorites");
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
OrderItem.defaultProps = {
	cartQuantity: undefined,
	deleteCross: false,
	setNotification: null,
};
OrderItem.propTypes = {
	// eslint-disable-next-line react/forbid-prop-types
	item: PropTypes.object.isRequired,
	cartQuantity: PropTypes.number,
	deleteCross: PropTypes.bool,
	setNotification: PropTypes.func,
};
export default OrderItem;
