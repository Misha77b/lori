import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import styles from "./cartItem.module.scss";
import Amount from "../Product/Amount";
import Image from "./Group 178.png";

const CartItem = ({ id = 474771, image = Image }) => {
	return (
		<Box className={styles.item}>
			<Link to={`/product/${id}`}>
				<img src={image} alt="product-item" className={styles.item__image} />
			</Link>
			<Typography className={styles.item__text}>Name</Typography>
			<Amount />
			<Typography className={styles.item__text}>Price</Typography>
			<Button>
				<img
					src="https://res.cloudinary.com/dyvsyavmb/image/upload/v1676543739/images/llvbuvkf2jaupb5sfimm.svg"
					alt="arrow"
				/>
			</Button>
		</Box>
	);
};

export default CartItem;
