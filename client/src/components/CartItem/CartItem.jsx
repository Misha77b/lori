import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import styles from "./cartItem.module.scss";
import Amount from "../Product/Amount";
import { removeItemShoppingCart } from "../../store/reducers/cartSlice";
import { deleteCardIdFromStore } from "../../helpers/deleteCardIdFromStore";

const CartItem = ({
	dbId,
	imageUrls,
	itemNo,
	name,
	currentPrice,
	setTotalSum,
	amount,
	setAmount,
}) => {
	const dispatch = useDispatch();
	useEffect(() => {
		if (!itemNo) return;
		if (!amount[itemNo]) return;
		const sum = amount[itemNo] * currentPrice;
		setTotalSum((prev) => ({ ...prev, [itemNo]: sum }));
	}, [amount, itemNo]);
	return (
		<Box className={styles.item}>
			{imageUrls && (
				<Link to={`/product/${itemNo}`}>
					<img src={imageUrls[0]} alt="product-item" className={styles.item__image} />
				</Link>
			)}
			<Typography className={styles.item__text}>{name}</Typography>
			<Amount amount={amount[itemNo]} setAmount={setAmount} itemNo={itemNo} />
			<Typography className={styles.item__text}>{currentPrice}</Typography>
			<Typography className={styles.item__text}> x {amount?.[itemNo] ?? 0} </Typography>
			<Typography className={styles.item__text}>
				{/* eslint-disable-next-line no-unsafe-optional-chaining */}
				{Math.floor(currentPrice * amount?.[itemNo] ?? 0)}
			</Typography>
			<button
				type="button"
				className={styles.item__btn}
				onClick={() => {
					dispatch(removeItemShoppingCart(itemNo));
					deleteCardIdFromStore(itemNo, "cart");
				}}
			>
				<img
					src="https://res.cloudinary.com/dyvsyavmb/image/upload/v1676543739/images/llvbuvkf2jaupb5sfimm.svg"
					alt="arrow"
				/>
			</button>
		</Box>
	);
};

export default CartItem;
