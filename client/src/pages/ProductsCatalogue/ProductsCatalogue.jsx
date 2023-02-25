import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import ProductCard from "../../components/ProductCard";
import { fetchProducts } from "../../store/reducers/productsSlice";
import { selectProductsData } from "../../store/selectors";
import AppPagination from "../../components/AppPagination";
import ToastNotification from "../../components/ToastNotification";
import { selectProductsQuantity } from "../../store/selectors/products.selectors";
import useSearchParams from "./hooks";
import FiltersBlock from "./component/FiltersBlock";
import Spinner from "../../components/Spinner";

const ProductsCatalogue = () => {
	const dispatch = useDispatch();
	const [notification, setNotification] = useState(false);
	const [startPage, setStartPage] = useState(1);
	const perPage = 5;
	const productsLoading = useSelector((state) => state.products.loader);
	const initialProducts = useSelector(selectProductsData);
	const productsQuantity = useSelector(selectProductsQuantity);

	// const productsQuantity = useSelector(productsQuantitySelector); this is a correct one;

	const [products, setProducts] = useState([...initialProducts]);
	const params = useSearchParams({ startPage, perPage });
	useEffect(() => {
		const data = dispatch(fetchProducts(params));
		data.then((res) => {
			setProducts(res.payload.products);
		});
	}, [startPage, params]);

	// if (productsLoading) return <Spinner />;

	return (
		<Container>
			{notification && <ToastNotification text="An item has been successfully added to the cart" />}
			<FiltersPhones>
				<FiltersBlock />
				{productsLoading && <Spinner />}
				{!productsLoading && (
					<CatalogueWrapper>
						{products?.map((card, index) => (
							<ProductCard
								priceColor="#57646E"
								key={index}
								card={card}
								setNotification={setNotification}
							/>
						))}
					</CatalogueWrapper>
				)}
			</FiltersPhones>
			{!productsLoading && (
				<AppPagination
					products={products}
					pages={Math.ceil(productsQuantity / perPage)}
					page={startPage}
					onPageChange={(e, page) => setStartPage((prev) => page)}
				/>
			)}
		</Container>
	);
};
const CatalogueWrapper = styled.div`
	display: grid;
	gap: 60px;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;
const FiltersPhones = styled.div`
	display: grid;
	gap: 10px;
	grid-template-columns: 300px auto;
`;
export default ProductsCatalogue;
