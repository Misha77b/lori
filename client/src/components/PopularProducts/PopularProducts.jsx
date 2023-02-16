import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button, Container, Box } from "@mui/material";
import CategoryTitle from "../CategoryTitle";
import ProductCard from "../ProductCard";
import { fetchProducts } from "../../store/reducers/productsSlice";
import { selectProductsData } from "../../store/selectors";

const PopularProducts = () => {
	const dispatch = useDispatch();
	const products = useSelector(selectProductsData);
	useEffect(
		() => () => {
			dispatch(fetchProducts());
		},
		[],
	);
	return (
		<Container>
			<Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
				<CategoryTitle text="Популярні товари" />
				<Link style={{ textDecoration: "none" }} to="/products">
					<Button color="secondary" variant="contained">
						Усі товари
					</Button>
				</Link>
			</Box>
			<CardsContainer>
				{products?.map(
					(card, index) => card.popular && <ProductCard key={index} card={card} withCart={false} />,
				)}
			</CardsContainer>
		</Container>
	);
};
export const CardsContainer = styled.div`
	display: grid;
	gap: 30px;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;
export default PopularProducts;
