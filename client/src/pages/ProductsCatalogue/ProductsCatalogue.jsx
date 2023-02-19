import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Container } from "@mui/material";
import ProductCard from "../../components/ProductCard";
import { fetchProducts } from "../../store/reducers/productsSlice";
import { selectProductsData } from "../../store/selectors";

const ProductsCatalogue = (props) => {
	const [sended, setSended] = useState(false);
	const stateLoad = useSelector((state) => {
		return state.products.loader;
	});
	const dispatch = useDispatch();
	const products = useSelector(selectProductsData);
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const brand = searchParams.get("brand");
	const params = new URLSearchParams();
	if (brand) {
		params.append("brand", brand);
	}
	useEffect(() => {
		if (stateLoad === false && sended === false) {
			setSended(true);
			dispatch(fetchProducts(params.toString()));
		}
	}, [dispatch]);

	let result = <p>Завантження....</p>;
	if (stateLoad === false && sended === true) {
		result = (
			<Container>
				<CatalogueWrapper>
					{products &&
						products.map &&
						products.map((card, index) => (
							<ProductCard priceColor="#57646E" key={index} card={card} />
						))}
				</CatalogueWrapper>
			</Container>
		);
	}
	return <>{result}</>;
};
const CatalogueWrapper = styled.div`
	display: grid;
	gap: 60px;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;
export default ProductsCatalogue;
