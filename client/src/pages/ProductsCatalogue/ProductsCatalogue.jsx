import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Container } from "@mui/material";
import ProductCard from "../../components/ProductCard";
import { fetchProducts } from "../../store/reducers/productsSlice";
import { selectProductsData } from "../../store/selectors";

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
		<Container>
			<CatalogueWrapper>
				{products?.map((card, index) => (
					<ProductCard priceColor="#57646E" key={index} card={card} />
				))}
			</CatalogueWrapper>
		</Container>
	);
};
const CatalogueWrapper = styled.div`
	display: grid;
	gap: 60px;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;
export default ProductsCatalogue;
