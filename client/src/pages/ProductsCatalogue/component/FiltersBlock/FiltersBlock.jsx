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
import SortBox from "../SortBox";

const FiltersBlock = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [searchParams, setSearchParams] = useSearchParams();
	const { params } = useLocationParams();
	const filters = useSelector(selectorArrFilters);
	const [minPrice, setminPrice] = useState(2000);
	const [maxPrice, setMaxPrice] = useState(100000);
	const [brands, setBrands] = useState([]);
	const [processor, setProcessor] = useState([]);
	const [diagonal, setDiagonal] = useState([]);
	const [iternalStorage, setIternalStorage] = useState([]);
	const [RAM, setRAM] = useState([]);
	const [waterResistant, setWaterResistant] = useState([]);
	useEffect(() => {
		setBrands([]);
		setProcessor([]);
		setIternalStorage([]);
		setDiagonal([]);
		setRAM([]);
		setWaterResistant([]);
		filters.forEach((obj) => {
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
		});
	}, [filters]);

	useEffect(() => {
		const abort = new AbortController();
		dispatch(actionFetchFilters(abort.signal));
		return () => {
			abort.abort();
		};
	}, []);

	const clearFiltersHandler = () => {
		searchParams.delete("brand");
		searchParams.delete("processor");
		searchParams.delete("diagonal");
		searchParams.delete("iternalStorage");
		searchParams.delete("RAM");
		searchParams.delete("waterResistant");
		searchParams.delete("minPrice");
		searchParams.delete("maxPrice");
		setminPrice(2000);
		setMaxPrice(100000);
	};
	const priceHandler = (min, max) => {
		searchParams.get("minPrice");
		setminPrice(min);
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
	return (
		<FilterWrapper>
			<Stack spacing={3} sx={{ position: "sticky", top: "30px" }}>
				<Typography component="legend" sx={{ textAlign: "left", color: "grey", paddingBottom: 2 }}>
					Діапазон ціни, грн
				</Typography>
				<RangePrice
					setPriceParams={priceHandler}
					min={minPrice}
					max={maxPrice}
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
