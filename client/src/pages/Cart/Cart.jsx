import React from "react";
import { Link } from "react-router-dom";
import { Grid, Container, Box, Typography, Button } from "@mui/material";
import styles from "./cart.module.scss";
import CartItem from "../../components/CartItem/CartItem";

const Cart = () => {
	return (
		<Container>
			<Grid container spacing={4} className={styles.cart}>
				<Grid item xs={8} className={styles.cart__items}>
					<CartItem />
					<CartItem />
					<CartItem />
					<CartItem />
				</Grid>
				<Grid item xs={4}>
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
						<Button color="secondary" variant="outlined" className={styles.btn}>
							<Link to="/">Продовжити покупки</Link>
						</Button>
						<Button color="secondary" variant="contained" className={styles.btn}>
							<Link to="/">Оформити замовлення</Link>
						</Button>
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Cart;
