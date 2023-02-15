import React from "react";
import styled from "styled-components";
import ProductImageBox from "./components/ProductImageBox";
import ProductDescription from "./components/ProductDescription";
import ProductPrice from "../ProductPrice";
import ToCartButton from "../ToCartButton";

const ProductCardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 25px;
	padding: 0.5%;
	position: relative;
`;
const ProductCard = ({ card, withCart = true }) => {
	const { name, currentPrice, previousPrice, newItem, sale, article, brand, imageUrls } = card;
	return (
		<ProductCardWrapper id={article}>
			<ProductImageBox image={imageUrls[0]} brand={brand} sale={sale} newItem={newItem} />
			<ProductDescription name={name} />
			<ProductPrice currentPrice={currentPrice} previousPrice={previousPrice} />
			{withCart && <ToCartButton />}
		</ProductCardWrapper>
	);
};
export default ProductCard;
