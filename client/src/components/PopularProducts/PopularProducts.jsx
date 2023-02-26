import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button, Container, Box } from "@mui/material";
import CategoryTitle from "../CategoryTitle";
import ProductCard from "../ProductCard";
// eslint-disable-next-line import/named
import { setPopularProducts } from "../../store/reducers/productsSlice";

const PopularProducts = ({ products, advertisement = false }) => {
	return (
		<Container>
			<Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
				{!advertisement && <CategoryTitle text="Популярні товари" />}
				{advertisement && <CategoryTitle text="Ви також можете розглянути товари на знижкі" />}
				{!advertisement && (
					<Link style={{ textDecoration: "none" }} to="/products">
						<Button color="secondary" variant="contained">
							Усі товари
						</Button>
					</Link>
				)}
			</Box>
			<CardsContainer>
				{products?.map((card, index) => {
					if (!advertisement) {
						return card.popular && <ProductCard key={index} card={card} withCart={false} />;
					}
					return card.sale && <ProductCard key={index} card={card} withCart={false} />;
				})}
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
