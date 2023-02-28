import React from "react";
import { useDispatch } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { Box, Button, Stack, Typography } from "@mui/material";
import useLocationParams from "../../hooks";
import Selection from "../Select";
import RangePrice from "../RangePrice";
import "./FiltersBlock.scss";
import { fetchProducts } from "../../../../store/reducers/productsSlice";

const FiltersBlock = ({ products, setFilteredData }) => {
	const dispatch = useDispatch();
	const [searchParams, setSearchParams] = useSearchParams();

	const { params } = useLocationParams();

	const clearFiltersHandler = () => {
		searchParams.delete("brand");
		searchParams.delete("processor");
		searchParams.delete("diagonal");
		searchParams.delete("iternalStorage");
		searchParams.delete("RAM");
		searchParams.delete("waterResistant");
		searchParams.delete("minPrice");
		searchParams.delete("maxPrice");
	};
	const priceHandler = (minPrice, maxPrice) => {
		searchParams.get("minPrice");
		setSearchParams((prev) => {
			prev.set("minPrice", minPrice);
			return prev;
		});
		searchParams.get("maxPrice");
		setSearchParams((prev) => {
			prev.set("maxPrice", maxPrice);
			return prev;
		});
	};
	return (
		<Box sx={{ margin: "0 auto" }}>
			<Stack spacing={3} sx={{ position: "sticky", top: "30px", textAlign: "center" }}>
				<Typography
					component="legend"
					sx={{ textAlign: "left", margin: "0 0 7px 25px", color: "grey" }}
				>
					Ціна
				</Typography>
				<RangePrice setPriceParams={priceHandler} />
				<Selection
					// value={filters.brand}
					value={searchParams.get("brand")}
					setCurrentValue={(value) => {
						setSearchParams((prev) => {
							prev.set("brand", value);
							return prev;
						});
					}}
					// setCurrentValue={(value) => setCurrentValue("brand", value)}
					nameLabel="Бренд"
					arrayProps={Array.from(new Set(products?.map((card) => card.brand)))}
				/>
				<Selection
					value={searchParams.get("processor")}
					nameLabel="Процесор"
					arrayProps={Array.from(new Set(products?.map((card) => card.processor)))}
					// setCurrentValue={(value) => setCurrentValue("processor", value)}
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
					arrayProps={Array.from(new Set(products?.map((card) => card.diagonal)))}
					// setCurrentValue={(value) => setCurrentValue("diagonal", value)}
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
					arrayProps={Array.from(new Set(products?.map((card) => card.iternalStorage)))}
					// setCurrentValue={(value) => setCurrentValue("iternalStorage", value)}
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
					arrayProps={Array.from(new Set(products?.map((card) => card.RAM)))}
					// setCurrentValue={(value) => setCurrentValue("RAM", value)}
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
					arrayProps={Array.from(new Set(products?.map((card) => card.waterResistant)))}
					// setCurrentValue={(value) => setCurrentValue("waterResistant", value)}
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
					onClick={() => dispatch(fetchProducts(params))}
				>
					Пошук
				</Button>
				<Link to="/products" className="link">
					<Button
						onClick={useE}
						variant="contained"
						color="secondary"
						sx={{
							width: "245px",
							height: "46px",
						}}
					>
						Очистити
					</Button>
				</Link>
			</Stack>
		</Box>
	);
};
export default FiltersBlock;
