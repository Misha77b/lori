import styled from "styled-components";
import "../../boilerplates/styles/_mixins.scss";

export const PriceWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
export const CurrentPrice = styled.span`
	font-family: Montserrat, sans-serif;
	font-weight: 900;
	font-size: 20px;
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
export const PreviousPrice = styled.span`
	font-family: Montserrat, sans-serif;
	font-weight: 900;
	font-size: 18px;
	line-height: 21px;
	color: #a0a9af;
	text-decoration: line-through;
	margin: 2% 15% 0 0;
	&:after {
		content: " грн";
	}
`;
