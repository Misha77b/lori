import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Container, Pagination } from "@mui/material";
import ProductCard from "../../components/ProductCard";
import { fetchProducts } from "../../store/reducers/productsSlice";
import { selectProductsData } from "../../store/selectors";
import AppPagination from "../../components/AppPagination";

const ProductsCatalogue = () => {
	const dispatch = useDispatch();
	const products = useSelector(selectProductsData);
	const [products2, setProducts2] = useState([]);
	useEffect(
		() => () => {
			dispatch(fetchProducts());
		},
		[],
	);
	return (
		<Container>
			<CatalogueWrapper>
				{products2?.map((card, index) => (
					<ProductCard priceColor="#57646E" key={index} card={card} />
				))}
			</CatalogueWrapper>
			<AppPagination
				products={products}
				setProducts={(p) => {
					setProducts2(p);
				}}
			/>
		</Container>
	);
};
const CatalogueWrapper = styled.div`
	display: grid;
	gap: 60px;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;
export default ProductsCatalogue;
