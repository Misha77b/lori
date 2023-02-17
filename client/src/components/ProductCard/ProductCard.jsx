import React from "react";
import styled from "styled-components";
import ProductImageBox from "./components/ProductImageBox";
import ProductDescription from "./components/ProductDescription";
import ProductPrice from "../ProductPrice";
import ToCartButton from "../ToCartButton";
import FavoriteHeartIcon from "../FavoriteHeartIcon";

const ProductCard = ({ card, withCart = true, priceColor }) => {
	const { name, currentPrice, previousPrice, newItem, itemNo, sale, brand, imageUrls } = card;
	return (
		<ProductCardWrapper id={itemNo}>
			<ProductImageBox
				image={imageUrls[0]}
				brand={brand}
				sale={sale}
				newItem={newItem}
				id={itemNo}
			/>
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
	justify-content: flex-start;
	gap: 25px;
	padding: 0.5%;
	position: relative;
	width: 100%;
	height: 100%;
`;

export default ProductCard;
