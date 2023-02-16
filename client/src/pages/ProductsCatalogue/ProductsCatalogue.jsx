import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button, Container, Box } from "@mui/material";
import CategoryTitle from "../../components/CategoryTitle";
import ProductCard from "../../components/ProductCard";
import { fetchProducts } from "../../store/reducers/productsSlice";
import { selectProductsData } from "../../store/selectors";
// import { CardsContainer } from "../../components/PopularProducts/PopularProducts";

const ProductsCatalogue = () => {
	const dispatch = useDispatch();
	const products = useSelector(selectProductsData);
	useEffect(
		() => () => {
			dispatch(fetchProducts());
		},
		[],
	);
	return (
		<Container> delete</Container>
		// <Container>
		// 	<CardsContainer>
		// 		{products?.map((card, index) => (
		// 			<ProductCard priceColor="#57646E" key={index} card={card} />
		// 		))}
		// 	</CardsContainer>
		// </Container>
	);
};

export default ProductsCatalogue;
