import React from "react";
import styled from "styled-components";

const PriceWrapper = styled.div`
	font-family: Montserrat, sans-serif;
	font-size: 30px;
	font-weight: 900;
	line-height: 29px;
	color: $base-color;
`;

const ProductPrice = ({ price, color }) => {
	return <PriceWrapper>53 199 грн</PriceWrapper>;
};

export default ProductPrice;
