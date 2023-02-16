import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ProductImageBox from "./components/ProductImageBox";
import ProductDescription from "./components/ProductDescription";
import ProductPrice from "../ProductPrice";
import ToCartButton from "../ToCartButton";
import FavoriteHeartIcon from "../FavoriteHeartIcon";

const ProductCard = ({ card, withCart = true, priceColor }) => {
	const { name, currentPrice, previousPrice, newItem, itemNo, sale, brand, imageUrls } = card;
	return (
		<ProductCardWrapper id={itemNo}>
			<Link style={{ textDecoration: "none" }} to={`/products/${itemNo}`}>
				<ProductImageBox image={imageUrls[0]} brand={brand} sale={sale} newItem={newItem} />
			</Link>
			<ProductDescription name={name} />
			<ProductPrice
				id={itemNo}
				priceColor={priceColor}
				currentPrice={currentPrice}
				previousPrice={previousPrice}
			/>
			{withCart && <ToCartButton id={itemNo} />}
			<FavoriteHeartIcon id={itemNo} />
		</ProductCardWrapper>
	);
};
const ProductCardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	gap: 25px;
	padding: 0.5%;
	position: relative;
`;
export default ProductCard;
