import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container, Box, Typography, Button } from "@mui/material";
import CartItem from "../../components/CartItem/CartItem";
import { fetchProducts } from "../../store/reducers/productsSlice";
// eslint-disable-next-line import/named
import { getCartAuth, setTotalCartSum, getTotatlAuthCartSum } from "../../store/reducers/cartSlice";
import Spinner from "../../components/Spinner";
import "./cart.scss";
import useItemsToRender from "./hooks";

const Cart = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [products, setProducts] = useState([]);
	const cartItems = useSelector((state) => state.cart.shoppingCart);
	const [totalSum, setTotalSum] = useState({});
	const isAuth = useSelector((state) => state.auth.isAuth);
	const authCart = useSelector((state) => state.cart.shoppingCartAuth);
	const productsLoading = useSelector((state) => state.products.loader);
	const { loaded } = useSelector((state) => state.cart.meta);
	useEffect(() => {
		if (!isAuth) return;
		dispatch(getCartAuth());
	}, [isAuth]);
	useEffect(() => {
		// eslint-disable-next-line react-hooks/rules-of-hooks
		const params = useItemsToRender(cartItems, setProducts);
		if (params === "_id=") return;
		dispatch(fetchProducts(params)).then((res) => {
			setProducts(res.payload.products);
		});
	}, [cartItems]);
	useEffect(() => {
		if (!products.length) {
			setTotalSum({});
			return;
		}
		const totalSumCart = products.reduce((acc, { currentPrice, _id }) => {
			acc[_id] = currentPrice * cartItems[_id];
			return acc;
		}, {});
		setTotalSum(() => totalSumCart);
	}, [products]);
	const itemsToRender = isAuth
		? authCart?.map((item) => {
				return (
					<CartItem
						dbId={item.product._id}
						key={item.product.itemNo}
						itemNo={item.product.itemNo}
						imageUrls={item.product.imageUrls}
						name={item.product.name}
						currentPrice={item.product.currentPrice}
						quantity={item.cartQuantity}
						setTotalSum={setTotalSum}
					/>
				);
				// eslint-disable-next-line no-mixed-spaces-and-tabs
		  })
		: products?.map(({ _id: id, imageUrls, name, itemNo, currentPrice }) => {
				return (
					<CartItem
						dbId={id}
						key={itemNo}
						itemNo={itemNo}
						imageUrls={imageUrls}
						name={name}
						currentPrice={currentPrice}
						setTotalSum={setTotalSum}
					/>
				);
				// eslint-disable-next-line no-mixed-spaces-and-tabs
		  });
	const countOverallPrice = (itemsSum) => {
		const cartItemIds = Object.keys(cartItems);
		const total = cartItemIds.reduce((acc, id) => acc + (itemsSum[id] || 0), 0);
		dispatch(setTotalCartSum(total));
		return total;
	};
	const countTotalPriceAuth = () => {
		const total = authCart.reduce((acc, item) => {
			const quantity = item.cartQuantity;
			const prodPrice = item.product.currentPrice;
			const itemTotal = quantity * prodPrice;
			return acc + itemTotal;
		}, 0);
		dispatch(getTotatlAuthCartSum(total));
		return total;
	};
	if (isAuth && !loaded) return <Spinner />;
	if (!isAuth && productsLoading) return <Spinner />;
	return (
		<Container>
			<Typography variant="h4" className="cart__title">
				Корзина
			</Typography>
			{!productsLoading && (
				<>
					<Box className="cart">
						{!products.length && !authCart.length && (
							<Typography
								variant="h3"
								fontWeight="fontWeightBold"
								sx={{
									fontSize: "30px",
									color: "black",
									textAlign: "center",
									marginTop: "150px",
								}}
							>
								Товарів поки немає
							</Typography>
						)}
						<Box className="cart__items">{itemsToRender}</Box>
						<Box className="cart__info">
							<Box className="cart__description">
								<Typography className="cart__info_item">Ваше замовлення</Typography>
								<Typography className="cart__info_item">
									Загальна сума: {!isAuth ? countOverallPrice(totalSum) : countTotalPriceAuth()}
									грн.
								</Typography>
							</Box>

							<Box className="cart__controllers">
								<Button
									color="secondary"
									variant="outlined"
									className="btn"
									onClick={(e) => {
										e.preventDefault();
										navigate("/products");
									}}
								>
									Продовжити покупки
								</Button>
								{isAuth && authCart.length !== 0 && (
									<Button
										color="secondary"
										variant="contained"
										onClick={(e) => {
											e.preventDefault();
											dispatch(setTotalCartSum(countTotalPriceAuth()));
											navigate("/orders");
										}}
										className="btn"
									>
										Оформити замовлення
									</Button>
								)}
								{products.length !== 0 && !isAuth && (
									<Button
										color="secondary"
										variant="contained"
										onClick={(e) => {
											e.preventDefault();
											dispatch(setTotalCartSum(countOverallPrice(totalSum)));

											navigate("/orders");
										}}
										className="btn"
									>
										Оформити замовлення
									</Button>
								)}
							</Box>
						</Box>
					</Box>
				</>
			)}
		</Container>
	);
};

export default Cart;
