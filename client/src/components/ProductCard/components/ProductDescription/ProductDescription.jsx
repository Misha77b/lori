import React from "react";
import "./ProductDescription.scss";
import styled from "styled-components";

const Description = styled.p`
	font-family: Open Sans, sans-serif;
	font-size: 14px;
	font-weight: 400;
	line-height: 14px;
`;

const ProductDescription = ({ name }) => {
	return <Description>{name}</Description>;
};

export default ProductDescription;
