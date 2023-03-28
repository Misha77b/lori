import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Container, Typography } from "@mui/material";
import { fetchProducts } from "../../store/reducers/productsSlice";
import OrderItem from "../../components/OrderItem";
import { getLocalItem } from "../../helpers/getLocalItem";
import useItemsToRender from "../Cart/hooks";
import ToastNotification from "../../components/ToastNotification";
import Spinner from "../../components/Spinner";
import NoItemsFoundMessage from "../ProductsCatalogue/component/NoItemsFoundMessage";

const FavoritePage = () => {
	const dispatch = useDispatch();
	const [notification, setNotification] = useState(false);
	const isAuth = useSelector((state) => state.auth.isAuth);
	const [products, setProducts] = useState([]);
	const parsed = JSON.parse(getLocalItem("favorites") || "[]");
	const favorites = useSelector((state) => state.favorite.favorite);
	const authFav = useSelector((state) => state.favorite.favoritesAuth);
	const { loaded } = useSelector((state) => state.favorite.meta);
	const unauthLoaded = useSelector((state) => state.products.loader);
	useEffect(() => {
		// eslint-disable-next-line react-hooks/rules-of-hooks
		const params = useItemsToRender(parsed, setProducts);
		if (params === "_id=") return;
		dispatch(fetchProducts(params)).then((res) => {
			setProducts(res.payload.products);
		});
	}, [favorites]);
	const prodsToRender = isAuth
		? authFav?.map((item) => {
				return (
					<OrderItem
						setNotification={setNotification}
						key={item.itemNo}
						item={item}
						deleteCross={true}
					/>
				);
				// eslint-disable-next-line no-mixed-spaces-and-tabs
		  })
		: products?.map((item) => {
				return (
					<OrderItem
						setNotification={setNotification}
						key={item.itemNo}
						item={item}
						deleteCross={true}
					/>
				);
				// eslint-disable-next-line no-mixed-spaces-and-tabs
		  });
	if (isAuth && loaded) return <Spinner />;
	if (!isAuth && unauthLoaded) return <Spinner />;
	return (
		<Container>
			{notification && <ToastNotification text="An item has been successfully added to the cart" />}
			<div className="cart-products">
				<Typography
					className="cart-products--title"
					variant="h3"
					fontWeight="fontWeightBold"
					sx={{ fontSize: "18px" }}
				>
					Улюблене
				</Typography>
				<>
					{!favorites.length && !authFav.length && <NoItemsFoundMessage />}
					<Box component="div" className="scroll">
						{prodsToRender}
					</Box>
				</>
			</div>
		</Container>
	);
};
export default FavoritePage;
