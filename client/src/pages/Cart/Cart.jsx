import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Box, Typography, Button } from "@mui/material";
import CartItem from "../../components/CartItem/CartItem";
import styles from "./cart.module.scss";

const Cart = () => {
	const dispatch = useDispatch();
	const cartItems = useSelector((store) => store.cart.data);
	console.log("CartItems: ", cartItems);

	return (
		<Container>
			<Typography variant="h4" className={styles.cart__title}>
				Корзина
			</Typography>
			<Box container className={styles.cart}>
				<Box className={styles.cart__items}>
					{cartItems.length > 0 ? (
						cartItems.map((el) => {
							return <CartItem />;
						})
					) : (
						<Typography variant="h5">Кошик пустий...</Typography>
					)}
				</Box>
				<Box className={styles.cart__info}>
					<Box className={styles.cart__description}>
						<Typography className={styles.cart__info_item}>Ваше замовлення</Typography>
						<Typography className={styles.cart__info_item}>
							Кількість продуктів: <span>...</span>
						</Typography>
						<Typography className={styles.cart__info_item}>
							Загальна сума: <span>...</span>
						</Typography>
					</Box>

					<Box className={styles.cart__controllers}>
						<Button color="secondary" variant="outlined" className={styles.btn}>
							<Link to="/">Продовжити покупки</Link>
						</Button>
						<Button color="secondary" variant="contained" className={styles.btn}>
							<Link to="/">Оформити замовлення</Link>
						</Button>
					</Box>
				</Box>
			</Box>
		</Container>
	);
};

export default Cart;
