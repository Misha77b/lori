import React from "react";
import styled from "styled-components";
import ProductImageBox from "./components/ProductImageBox";
import ProductDescription from "./components/ProductDescription";
import ProductPrice from "../ProductPrice";
import ProductFlag from "./components/ProductFlag";

const ProductCardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 25px;
	padding: 0.5%;
	position: relative;
`;
const ProductCard = ({ flagStatus }) => {
	return (
		<ProductCardWrapper>
			<ProductFlag flagStatus={flagStatus} />
			<ProductImageBox />
			<ProductDescription />
			<ProductPrice />
		</ProductCardWrapper>
	);
};
export default ProductCard;
