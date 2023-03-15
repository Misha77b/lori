import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import "./cartItem.scss";
import Amount from "../Product/Amount";
import { removeItemShoppingCart } from "../../store/reducers/cartSlice";
import { selectShoppingCart } from "../../store/selectors";

const CartItem = ({ imageUrls, itemNo, dbId, name, currentPrice, setTotalSum }) => {
	const dispatch = useDispatch();
	const shoppingCart = useSelector(selectShoppingCart);
	useEffect(() => {
		if (!dbId) return;
		const sum = shoppingCart[dbId] * currentPrice;
		setTotalSum((prev) => ({ ...prev, [dbId]: sum }));
	}, [shoppingCart, dbId]);
	return (
		<Box className="item">
			<Box className="itemBlock">
				{" "}
				{imageUrls && (
					<Link to={`/products/${itemNo}`}>
						<img src={imageUrls[0]} alt="product-item" className="item__image" />
					</Link>
				)}
				<Typography className="item__text">{name}</Typography>
			</Box>

			<Box className="itemBlock">
				<Amount amount={shoppingCart[dbId]} setAmount={() => {}} itemNo={dbId} />
				<Typography className="item__text">{currentPrice}</Typography>
				<Typography className="item__text">{shoppingCart[dbId] ?? 0}шт.</Typography>
				<Typography className="item__text">
					{/* eslint-disable-next-line no-unsafe-optional-chaining */}
					{Math.floor(currentPrice * shoppingCart[dbId] ?? 0)}
				</Typography>
				<button
					type="button"
					className="item__btn"
					onClick={() => {
						dispatch(removeItemShoppingCart(dbId));
					}}
				>
					<img
						src="https://res.cloudinary.com/dyvsyavmb/image/upload/v1676543739/images/llvbuvkf2jaupb5sfimm.svg"
						alt="arrow"
					/>
				</button>
			</Box>
		</Box>
	);
};
CartItem.propTypes = {
	itemNo: PropTypes.string.isRequired,
	// eslint-disable-next-line react/forbid-prop-types
	imageUrls: PropTypes.array.isRequired,
	name: PropTypes.string.isRequired,
	currentPrice: PropTypes.number.isRequired,
	setTotalSum: PropTypes.func.isRequired,
};
export default CartItem;
