import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button, Container, Box } from "@mui/material";
import CategoryTitle from "../CategoryTitle";
import ProductCard from "../ProductCard";

const PopularProducts = ({ products }) => {
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
	display: flex;
	gap: 50px;
	max-height: 700px;
	padding: 35px;
	overflow: scroll;
`;
export default PopularProducts;
