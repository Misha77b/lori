import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Container } from "@mui/material";
import CategoryTitle from "../CategoryTitle";
import ProductCard from "../ProductCard";
import { fetchProducts } from "../../store/reducers/productsSlice";
import { selectProductsData, selectFavorite, selectShoppingCart } from "../../store/selectors";

const CardsContainer = styled.div`
	display: grid;
	gap: 24px;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;
const PopularProducts = () => {
	const dispatch = useDispatch();
	const products = useSelector(selectProductsData);
	useEffect(
		() => () => {
			dispatch(fetchProducts());
		},
		[],
	);
	// const cards = products.map(({ name, currentPrice, sale, popular, color }) => {
	// 	if (popular) name, currentPrice, sale, color;
	// });
	return (
		<div>
			<Container>
				<CategoryTitle text="Популярні товари" />
				<CardsContainer>
					{products.map((card, index) => (
						<ProductCard key={index} card={card} />
					))}
				</CardsContainer>
			</Container>
		</div>
	);
};

export default PopularProducts;
