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
import useLocationParams from "./hooks";
import FiltersBlock from "./component/FiltersBlock/FiltersBlock";
import Spinner from "../../components/Spinner";
import useFetchData from "../Home/hooks";

const ProductsCatalogue = () => {
	const dispatch = useDispatch();
	const initialProducts = useFetchData();
	const productsLoading = useSelector((state) => state.products.loader);
	const [products, setProducts] = useState([...initialProducts]);
	const [notification, setNotification] = useState(false);
	const [startPage, setStartPage] = useState(1);
	const [filteredData, setFilteredData] = useState([]);
	const perPage = 5;

	const productsQuantity = useSelector(selectProductsQuantity);
	const { params } = useLocationParams({ startPage, perPage });
	useEffect(() => {
		dispatch(fetchProducts(params)).then((res) => {
			setProducts(res.payload.products);
		});
	}, [startPage, params, filteredData]);
	return (
		<Container>
			{notification && <ToastNotification text="An item has been successfully added to the cart" />}
			<FiltersPhones>
				<FiltersBlock products={initialProducts} setFilteredData={setFilteredData} />
				{productsLoading && <Spinner />}
				<CatalogueWrapper>
					{filteredData.length
						? filteredData?.map((card, index) => (
								<ProductCard
									priceColor="#57646E"
									key={index}
									card={card}
									setNotification={setNotification}
								/>
								// eslint-disable-next-line no-mixed-spaces-and-tabs
						  ))
						: products?.map((card, index) => (
								<ProductCard
									priceColor="#57646E"
									key={index}
									card={card}
									setNotification={setNotification}
								/>
								// eslint-disable-next-line no-mixed-spaces-and-tabs
						  ))}
				</CatalogueWrapper>
			</FiltersPhones>
			<AppPagination
				pages={Math.ceil(productsQuantity / perPage)}
				page={startPage}
				onPageChange={(e, page) => setStartPage((prev) => page)}
			/>
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
// const productsQuantity = useSelector(productsQuantitySelector); this is a correct one;
