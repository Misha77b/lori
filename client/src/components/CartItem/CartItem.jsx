import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import styles from "./cartItem.module.scss";
import Amount from "../Product/Amount";
import { removeItem } from "../../store/reducers/cartSlice";
import Image from "./Group 178.png";

const CartItem = ({ id, imageUrls, name, currentPrice }) => {
	const dispatch = useDispatch();
	return (
		<Box className={styles.item}>
			{imageUrls && (
				<Link to={`/products/${id}`}>
					<img src={imageUrls[0]} alt="product-item" className={styles.item__image} />
				</Link>
			)}
			<Typography className={styles.item__text}>{name}</Typography>
			<Amount />
			<Typography className={styles.item__text}>{currentPrice}</Typography>
			<button type="button" className={styles.item__btn} onClick={() => dispatch(removeItem(id))}>
				<img
					src="https://res.cloudinary.com/dyvsyavmb/image/upload/v1676543739/images/llvbuvkf2jaupb5sfimm.svg"
					alt="arrow"
				/>
			</button>
		</Box>
	);
};

export default CartItem;
