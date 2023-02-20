import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Container } from "@mui/material";
import ProductCard from "../../components/ProductCard";
import { fetchProducts } from "../../store/reducers/productsSlice";
import { selectProductsData } from "../../store/selectors";
import AppPagination from "../../components/AppPagination";
import ToastNotification from "../../components/ToastNotification";

const ProductsCatalogue = () => {
	const location = useLocation();
	const dispatch = useDispatch();
	const params = new URLSearchParams();
	const [sended, setSended] = useState(false);
	const [products2, setProducts2] = useState([]);
	const [notification, setNotification] = useState(false);
	const stateLoad = useSelector((state) => {
		return state.products.loader;
	});
	const products = useSelector(selectProductsData);
	const searchParams = new URLSearchParams(location.search);
	const brand = searchParams.get("brand");
	if (brand) {
		params.append("brand", brand);
	}
	useEffect(() => {
		if (stateLoad === false && sended === false) {
			setSended(true);
			dispatch(fetchProducts(params.toString()));
		}
	}, [dispatch, params, sended, stateLoad]);
	return (
		<Container>
			{stateLoad && <p>Завантження....</p>}
			{sended && (
				<>
					{notification && (
						<ToastNotification text="An item has been successfully added to the cart" />
					)}
					<CatalogueWrapper>
						{products2?.map((card, index) => (
							<ProductCard
								priceColor="#57646E"
								key={index}
								card={card}
								setNotification={setNotification}
							/>
						))}
					</CatalogueWrapper>
					<AppPagination
						products={products}
						setProducts={(p) => {
							setProducts2(p);
						}}
					/>
				</>
			)}
		</Container>
	);
};
const CatalogueWrapper = styled.div`
	display: grid;
	gap: 60px;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;
export default ProductsCatalogue;
