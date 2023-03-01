import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Box, Typography, Button } from "@mui/material";
import CartItem from "../../components/CartItem/CartItem";
import styles from "./cart.module.scss";
import { getItems } from "../../helpers/getItems";
import { setShoppingCart } from "../../store/reducers/cartSlice";
import { getLocalItem } from "../../helpers/getLocalItem";
import { fetchProducts } from "../../store/reducers/productsSlice";

const Cart = () => {
	const dispatch = useDispatch();
	const [products, setProducts] = useState([]);
	/* 	const data = useSelector((state) => state.products.data); */
	const cartItems = useSelector((state) => state.cart.shoppingCart);
	/* 	const storage = getItems("cart", data); */
	const parsed = JSON.parse(getLocalItem("cart"));
	const [totalSum, setTotalSum] = useState({});
	const [amount, setAmount] = useState(0);
	useEffect(() => {
		const params = new URLSearchParams();
		params.set("itemNo", parsed.join(","));
		dispatch(fetchProducts(params.toString())).then((res) => {
			setProducts(res.payload.products);
		});
	}, [cartItems]);
	useEffect(() => {
		if (!products.length) {
			setTotalSum(0);
			return;
		}
		const amouns = products.reduce((acc, { itemNo }) => {
			acc[itemNo] = 1;
			return acc;
		}, {});
		const totalSumCart = products.reduce((acc, { itemNo }) => {
			acc[itemNo] = 0;
			return acc;
		}, {});

		setTotalSum(() => totalSumCart);
		setAmount(() => amouns);
	}, [products]);

	/* useEffect(() => {
		dispatch(setShoppingCart(storage));
	}, []); */

	return (
		<Container>
			<Typography variant="h4" className={styles.cart__title}>
				Корзина
			</Typography>
			<Box className={styles.cart}>
				<Box className={styles.cart__items}>
					{products.length ? (
						products?.map(({ _id: id, imageUrls, name, itemNo, currentPrice }) => {
							return (
								<CartItem
									dbId={id}
									key={itemNo}
									itemNo={itemNo}
									imageUrls={imageUrls}
									name={name}
									currentPrice={currentPrice}
									setTotalSum={setTotalSum}
									amount={amount}
									setAmount={setAmount}
								/>
							);
						})
					) : (
						<Typography variant="h5">Кошик пустий...</Typography>
					)}
				</Box>
				<Box className={styles.cart__info}>
					<Box className={styles.cart__description}>
						<Typography className={styles.cart__info_item}>Ваше замовлення</Typography>
						<Typography className={styles.cart__info_item}>
							Кількість продуктів: {cartItems.length}
						</Typography>
						<Typography className={styles.cart__info_item}>
							Загальна сума: {Object.values(totalSum).reduce((acc, item) => acc + item, 0) ?? 0}
							грн.
						</Typography>
					</Box>

					<Box className={styles.cart__controllers}>
						<Button
							color="secondary"
							variant="outlined"
							className={styles.btn}
							component={Link}
							to="/products"
						>
							Продовжити покупки
						</Button>
						<Button
							color="secondary"
							variant="contained"
							className={styles.btn}
							component={Link}
							to="/orders"
						>
							Оформити замовлення
						</Button>
					</Box>
				</Box>
			</Box>
		</Container>
	);
};

export default Cart;
