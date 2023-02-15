import React from "react";
import styled from "styled-components";
import ProductImageBox from "./components/ProductImageBox";
import ProductDescription from "./components/ProductDescription";
import ProductPrice from "../ProductPrice";

const ProductCardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 25px;
	padding: 0.5%;
	position: relative;
`;
const ProductCard = ({ card }) => {
	const { name, currentPrice, newItem, sale, article, brand, imageUrls } = card;
	return (
		<ProductCardWrapper id={article}>
			<ProductImageBox image={imageUrls[0]} brand={brand} sale={sale} newItem={newItem} />
			<ProductDescription name={name} />
			<ProductPrice currentPrice={currentPrice} />
		</ProductCardWrapper>
	);
};
export default ProductCard;
