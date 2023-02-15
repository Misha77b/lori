import React from "react";
import styled from "styled-components";

const PriceWrapper = styled.div`
	font-family: Montserrat, sans-serif;
	font-size: 35px;
	font-weight: 900;
	line-height: 29px;
	color: #007042;
	&:after {
		content: " грн";
	}
`;
const PreviousPrice = styled.div`
	font-family: Montserrat, sans-serif;
	font-size: 22px;
	font-weight: 800;
	line-height: 21px;
	text-decoration: line-through;
	color: #57646e;
	&:after {
		content: " грн";
	}
`;
const ProductPrice = ({ currentPrice, previousPrice }) => {
	return <PriceWrapper>{currentPrice}</PriceWrapper>;
};

export default ProductPrice;
// previousPrice === undefined <PriceWrapper>{currentPrice}</PriceWrapper>)
// 	? previousPrice && <PriceWrapper sx={{ color: "#E03737" }}>{previousPrice}</PriceWrapper>
// 	: null;
