import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { Box, Button, Stack, Typography } from "@mui/material";
import useLocationParams from "../../hooks";
import Selection from "../Select";
import RangePrice from "../RangePrice";
import { fetchProducts } from "../../../../store/reducers/productsSlice";
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
	const [brands, setBrands] = useState([]);
	const [processor, setProcessor] = useState([]);
	const [diagonal, setDiagonal] = useState([]);
	const [iternalStorage, setIternalStorage] = useState([]);
	const [RAM, setRAM] = useState([]);
	const [waterResistant, setWaterResistant] = useState([]);
	const priceHandler = (min, max) => {
		searchParams.get("minPrice");
		setMinPrice(min);
		setSearchParams((prev) => {
			prev.set("minPrice", min);
			return prev;
		});
		searchParams.get("maxPrice");
		setMaxPrice(max);
		setSearchParams((prev) => {
			prev.set("maxPrice", max);
			return prev;
		});
	};
	//console.log("searchParams", searchParams.toString());
	useEffect(() => {
		console.log("filters update", filters);
		if (filters.brand && brands.length < filters.brand.length) {
			setBrands(() => (filters.brand ? filters.brand : []));
		}
		setProcessor(() => (filters.processor ? filters.processor : []));
		setIternalStorage(() => (filters.iternalStorage ? filters.iternalStorage : []));
		setDiagonal(() => (filters.diagonal ? filters.diagonal : []));
		setRAM(() => (filters.RAM ? filters.RAM : []));
		setWaterResistant(() => (filters.waterResistant ? filters.waterResistant : []));
		/* let changeMinPrice = false;
		let changeMaxPrice = false; */
		// if (!minPrice || minPrice < filters.minPrice || minPrice > filters.maxPrice) {
		// 	setMinPrice(() => filters.minPrice);
		// 	changeMinPrice = true;
		// }
		// if (!maxPrice || maxPrice > filters.maxPrice || maxPrice < filters.minPrice) {
		// 	setMaxPrice(() => filters.maxPrice);
		// 	changeMaxPrice = true;
		// }

		// if (changeMinPrice && changeMaxPrice) {
		// 	priceHandler(filters.minPrice, filters.maxPrice);
		// } else if (changeMinPrice) {
		// 	priceHandler(filters.minPrice, maxPrice);
		// } else if (changeMaxPrice) {
		// 	priceHandler(minPrice, filters.maxPrice);
		// }
		/* filters.forEach((obj) => {
			switch (obj.type) {
				case "brand":
					setBrands((prev) => [...prev, obj.name]);
					break;
				case "processor":
					setProcessor((prev) => [...prev, obj.name]);
					break;
				case "diagonal":
					setDiagonal((prev) => [...prev, obj.name]);
					break;
				case "iternalStorage":
					setIternalStorage((prev) => [...prev, obj.name]);
					break;
				case "RAM":
					setRAM((prev) => [...prev, obj.name]);
					break;
				case "waterResistant":
					setWaterResistant((prev) => [...prev, obj.name]);
					break;
				default:
					break;
			}
		}); */
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
				<Selection
					value={searchParams.get("brand")}
					setCurrentValue={(value) => {
						setSearchParams((prev) => {
							prev.set("brand", value);
							return prev;
						});
					}}
					nameLabel="Бренд"
					arrayProps={brands}
				/>
				<Selection
					value={searchParams.get("processor")}
					nameLabel="Процесор"
					arrayProps={processor}
					setCurrentValue={(value) => {
						setSearchParams((prev) => {
							prev.set("processor", value);
							return prev;
						});
					}}
				/>
				<Selection
					value={searchParams.get("diagonal")}
					nameLabel="Діагональ"
					arrayProps={diagonal}
					setCurrentValue={(value) => {
						setSearchParams((prev) => {
							prev.set("diagonal", value);
							return prev;
						});
					}}
				/>
				<Selection
					value={searchParams.get("iternalStorage")}
					nameLabel="Внутрішня память"
					arrayProps={iternalStorage}
					setCurrentValue={(value) => {
						setSearchParams((prev) => {
							prev.set("iternalStorage", value);
							return prev;
						});
					}}
				/>
				<Selection
					value={searchParams.get("RAM")}
					nameLabel="RAM"
					arrayProps={RAM}
					setCurrentValue={(value) => {
						setSearchParams((prev) => {
							prev.set("RAM", value);
							return prev;
						});
					}}
				/>
				<Selection
					value={searchParams.get("waterResistant")}
					nameLabel="Захист від вологи"
					arrayProps={waterResistant}
					setCurrentValue={(value) => {
						setSearchParams((prev) => {
							prev.set("waterResistant", value);
							return prev;
						});
					}}
				/>
				<Button
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
				</Button>
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
					Очистити
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
