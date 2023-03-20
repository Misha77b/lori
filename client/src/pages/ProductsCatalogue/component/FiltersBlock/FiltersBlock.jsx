import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { Box, Button, Stack, Typography } from "@mui/material";
import useLocationParams from "../../hooks";
import Selection from "../Select";
import RangePrice from "../RangePrice";
import { selectorArrFilters } from "../../../../store/selectors";
import { actionFetchFilters } from "../../../../store/reducers/filtersSlice";
import PointPrices from "./PointPrices/PointPrices";
import SortBox from "../SortBox";

const FiltersBlock = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [searchParams, setSearchParams] = useSearchParams();
	const { params } = useLocationParams();
	const filters = useSelector(selectorArrFilters);
	const [minPrice, setMinPrice] = useState(0);
	const [maxPrice, setMaxPrice] = useState(0);

	const priceHandler = (min, max, changeSearchParamsPrice = false) => {
		searchParams.get("minPrice");
		setMinPrice(min);
		setMaxPrice(max);
		if (changeSearchParamsPrice) {
			setSearchParams((prev) => {
				prev.set("minPrice", min);
				return prev;
			});
			searchParams.get("maxPrice");
			setSearchParams((prev) => {
				prev.set("maxPrice", max);
				return prev;
			});
		}
	};
	useEffect(() => {
		if (!minPrice) {
			setMinPrice(() => filters.minPrice);
		}
		if (!maxPrice) {
			setMaxPrice(() => filters.maxPrice);
		}
	}, [filters]);

	useEffect(() => {
		console.log("searchParams update", searchParams.toString());
		const abort = new AbortController();
		dispatch(actionFetchFilters(abort.signal, searchParams));
		return () => {
			abort.abort();
		};
	}, [searchParams]);

	const clearFiltersHandler = () => {
		setMinPrice(0);
		setMaxPrice(0);
		searchParams.delete("brand");
		searchParams.delete("processor");
		searchParams.delete("diagonal");
		searchParams.delete("iternalStorage");
		searchParams.delete("RAM");
		searchParams.delete("waterResistant");
		searchParams.delete("minPrice");
		searchParams.delete("maxPrice");
	};
	const clearFiltersField = (field) => {
		if (searchParams.toString().includes(field)) {
			setMinPrice(() => 0);
			setMaxPrice(() => 0);
			setSearchParams((prev) => {
				prev.delete(field);
				return prev;
			});
		}

		console.log("searchParams", searchParams.toString());
	};
	const arrayField = ["brand", "processor", "diagonal", "iternalStorage", "RAM", "waterResistant"];
	const arrayNameLabel = [
		"Бренд",
		"Процесор",
		"Діагональ",
		"Внутрішня память",
		"RAM",
		"Захист від вологи",
	];
	const arrSelect = arrayField.map((el, ind) => (
		<Selection
			value={searchParams.get(el)}
			setCurrentValue={(value) => {
				setMinPrice(() => 0);
				setMaxPrice(() => 0);
				setSearchParams((prev) => {
					prev.set(el, value);
					prev.delete("minPrice");
					prev.delete("maxPrice");
					return prev;
				});
			}}
			nameLabel={arrayNameLabel[ind]}
			arrayProps={filters[el] ? filters[el] : []}
			clearFiltersField={() => clearFiltersField(el)}
		/>
	));
	return (
		<FilterWrapper>
			<Stack spacing={2} sx={{ position: "sticky", top: "30px" }}>
				<Typography component="legend" sx={{ textAlign: "left", color: "grey", padding: 0 }}>
					Діапазон ціни, грн
				</Typography>
				<Box sx={{ display: "flex", justifyContent: "space-between" }}>
					<PointPrices minPrice={minPrice} maxPrice={maxPrice} />
				</Box>
				<RangePrice
					setPriceParams={priceHandler}
					minVal={minPrice}
					maxVal={maxPrice}
					min={filters.minPrice}
					max={filters.maxPrice}
					sx={{ "text-align": "center" }}
				/>
				<Typography component="legend" sx={{ textAlign: "left", color: "grey" }}>
					Фільтри
				</Typography>
				<SortBox
					value={searchParams.get("sort")}
					setCurrentValue={(value) => {
						setSearchParams((prev) => {
							prev.set("sort", value);
							return prev;
						});
					}}
				/>
				{arrSelect}
				{/* <Button
					variant="contained"
					color="secondary"
					sx={{
						width: "245px",
						height: "46px",
					}}
					onClick={() => {
						if (searchParams.has("query")) {
							searchParams.delete("query");
							setSearchParams(searchParams);
						}
						dispatch(fetchProducts(params));
					}}
				>
					Пошук
				</Button> */}
				<Button
					onClick={() => {
						clearFiltersHandler();
						navigate("/products");
					}}
					variant="contained"
					color="secondary"
					sx={{
						width: "245px",
						height: "46px",
					}}
				>
					Очистити всі фільтри
				</Button>
			</Stack>
		</FilterWrapper>
	);
};
const FilterWrapper = styled.div`
	margin-inline: auto;
	max-width: 300px;
`;
export default FiltersBlock;
