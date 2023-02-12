import React from "react";
import styled from "styled-components";
import CategoryTitle from "../CategoryTitle";
import ProductCard from "../ProductCard";

const CardsContainer = styled.div`
	display: grid;
	gap: 24px;
	padding: 2% 1% 6% 1%;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;
const PopularProducts = () => {
	return (
		<div>
			<CategoryTitle text="Популярні товари" />
			<CardsContainer>
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
			</CardsContainer>
		</div>
	);
};

export default PopularProducts;
