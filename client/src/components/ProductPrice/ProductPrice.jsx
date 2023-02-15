import React, { useMemo } from "react";
import styled from "styled-components";

const ProductPrice = ({ currentPrice, previousPrice = "", priceColor }) => {
	return (
		<PriceWrapper>
			<CurrentPrice priceColor={priceColor} previousPrice={previousPrice}>
				{currentPrice}
			</CurrentPrice>
			{previousPrice && <PreviousPrice>{previousPrice}</PreviousPrice>}
		</PriceWrapper>
	);
};

export default ProductPrice;

const PriceWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const CurrentPrice = styled.span`
	font-family: Montserrat, sans-serif;
	font-size: 35px;
	font-weight: 900;
	line-height: 29px;
	color: ${(props) => {
		if (props.previousPrice) return "#E03737";
		if (props.priceColor) return props.priceColor;
		return "#007042";
	}}
	};
	&:after {
		content: " грн";
	}
`;
const PreviousPrice = styled.span`
	font-family: Montserrat, sans-serif;
	font-size: 22px;
	font-weight: 900;
	line-height: 21px;
	color: #a0a9af;
	text-decoration: line-through;
	margin: 2% 15% 0 0;
	&:after {
		content: " грн";
	}
`;
