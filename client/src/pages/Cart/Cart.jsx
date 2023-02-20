import React from "react";
import { Link } from "react-router-dom";
import { Container, Box, Typography, Button } from "@mui/material";
import CartItem from "../../components/CartItem/CartItem";
import styles from "./cart.module.scss";

const Cart = () => {
	return (
		<Container>
			<Typography variant="h4" className={styles.cart__title}>
				Корзина
			</Typography>
			<Box container className={styles.cart}>
				<Box className={styles.cart__items}>
					<CartItem />
					<CartItem />
					<CartItem />
					<CartItem />
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
