import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Container, Button, Typography } from "@mui/material";
import { getItems } from "../../helpers/getItems";
import { setFavorite } from "../../store/reducers/productsSlice";
import OrderItem from "../PlacingAnOrder/OrderItem";

const FavoritePage = () => {
	const dispatch = useDispatch();
	const data = useSelector((state) => state.products.data);
	const storage = getItems("favorites", data);
	useEffect(() => {
		dispatch(setFavorite(storage));
	}, []);
	const favorites = useSelector((state) => state.products.favorite);
	return (
		<Container>
			<div className="cart-products">
				<Typography
					className="cart-products--title"
					variant="h3"
					fontWeight="fontWeightBold"
					sx={{ fontSize: "18px" }}
				>
					Улюблене
				</Typography>
				{!favorites.length && (
					<Typography
						variant="h3"
						fontWeight="fontWeightBold"
						sx={{ fontSize: "30px", color: "black", textAlign: "center", marginTop: "150px" }}
					>
						Товарів поки немає
					</Typography>
				)}
				<Box component="div" className="scroll">
					{favorites?.map((item) => {
						return <OrderItem key={item.itemNo} item={item} deleteCross={true} />;
					})}
				</Box>
			</div>
		</Container>
	);
};

export default FavoritePage;
