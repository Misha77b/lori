import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Container, Typography, Box, Button } from "@mui/material";
import ProductCard from "../../components/ProductCard";
import { fetchProducts } from "../../store/reducers/productsSlice";
import { selectSearch } from "../../store/selectors";
import AppPagination from "../../components/AppPagination";
import ToastNotification from "../../components/ToastNotification";
import { selectProductsQuantity } from "../../store/selectors/products.selectors";
import FiltersBlock from "./component/FiltersBlock/FiltersBlock";
import Spinner from "../../components/Spinner";
import NoItemsFoundMessage from "./component/NoItemsFoundMessage";
import useFetchData from "../Home/hooks";
import useLocationParams from "./hooks";
import { CatalogueWrapper, FiltersPhonesStyledWrapper } from "./styled";

const ProductsCatalogue = () => {
	const dispatch = useDispatch();
	const [searchParams, setSearchParams] = useSearchParams();
	const initialProducts = useFetchData();
	const productsLoading = useSelector((state) => state.products.loader);
	const [products, setProducts] = useState([...initialProducts]);
	const [notification, setNotification] = useState(false);
	const [startPage, setStartPage] = useState(1);
	const [filteredData, setFilteredData] = useState([]);
	const [filterBar, openFilterBar] = useState(false);
	const isMobileSize = useMediaQuery("(max-width:700px)");
	const [prevParams, setPrevParams] = useState({});
	const perPage = 5;

	const productsQuantity = useSelector(selectProductsQuantity);
	const dataFromSearch = useSelector(selectSearch);
	const [emptyArray, setEmptyArray] = useState(false);
	const { params } = useLocationParams({ startPage, perPage });
	useEffect(() => {
		setPrevParams(params);
		dispatch(fetchProducts(params)).then((res) => {
			setProducts(res.payload.products);
			if (res.payload.products.length === 0) {
				setEmptyArray(true);
			} else {
				setEmptyArray(false);
			}
		});
	}, [startPage, params, filteredData, dataFromSearch]);
	useEffect(() => {
		const urlParams = new URLSearchParams(params);
		const minPrice = urlParams.get("minPrice");
		const maxPrice = urlParams.get("maxPrice");
		if (minPrice !== null && maxPrice !== null) {
			openFilterBar(true);
		} else {
			openFilterBar(false);
		}
		setPrevParams(params);
	}, [params, openFilterBar]);
	return (
		<Container>
			{notification && <ToastNotification text="An item has been successfully added to the cart" />}
			{isMobileSize && (
				<Button
					color="secondary"
					variant="contained"
					sx={{
						width: "140px",
						height: "46px",
						margin: "20px",
					}}
					onClick={() => {
						openFilterBar((prev) => !prev);
					}}
				>
					Фільтри
				</Button>
			)}
			{dataFromSearch.length > 0 && (
				<Box
					pb={6}
					display="flex"
					alignItems="center"
					sx={{ justifyContent: { xs: "center", sm: "space-between" } }}
				>
					<Typography
						sx={{ display: { xs: "none", sm: "flex" } }}
						variant="h5"
						fontWeight="fontWeightRegular"
						fontFamily="Open Sans, sans-serif"
						color="grey.main"
					>
						Результати пошуку
					</Typography>
				</Box>
			)}
			<FiltersPhonesStyledWrapper isMobileSize={isMobileSize}>
				{isMobileSize && filterBar && <FiltersBlock />}
				{!isMobileSize && <FiltersBlock />}
				{productsLoading && <Spinner />}
				{!productsLoading && (
					<CatalogueWrapper>
						{/* eslint-disable-next-line no-nested-ternary */}
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
							: dataFromSearch.length
							? dataFromSearch?.map((card, index) => (
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
						{emptyArray && <NoItemsFoundMessage />}
					</CatalogueWrapper>
				)}
			</FiltersPhonesStyledWrapper>
			<AppPagination
				pages={Math.ceil(productsQuantity / perPage)}
				page={startPage}
				onPageChange={(e, page) => {
					setStartPage((prev) => page);
					setSearchParams(params);
				}}
			/>
		</Container>
	);
};
export default ProductsCatalogue;
