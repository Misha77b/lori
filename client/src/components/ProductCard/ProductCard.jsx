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
	const { popular, name, currentPrice, newItem, sale, article, color, image, brand, imageUrls } =
		card;
	return (
		<ProductCardWrapper>
			<ProductImageBox image={imageUrls[0]} brand={brand} saleStatus={sale} newItem={newItem} />
			<ProductDescription name={name} />
			<ProductPrice currentPrice={currentPrice} />
		</ProductCardWrapper>
	);
};
export default ProductCard;
