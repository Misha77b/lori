import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Box, Button, Stack, Typography } from "@mui/material";
import axios from "axios";
import { DOMAIN } from "../../../../config/API";
import useSearchParams from "../../hooks";
import Selection from "../Select";
import RangePrice from "../RangePrice";
import "./FiltersBlock.scss";
import { fetchProducts } from "../../../../store/reducers/productsSlice";

const FiltersBlock = ({ products, setFilteredData }) => {
	const dispatch = useDispatch();
	const [filters, setFilters] = useState({});
	// кожен раз додається в obj нове поле для пошуку
	const setCurrentValue = (field, CurrentValue) => {
		setFilters((curFilters) => {
			console.log({ ...curFilters, [field]: CurrentValue });
			return { ...curFilters, [field]: CurrentValue };
		});
	};
	const clearFiltersHandler = () => {
		setFilters({});
	};
	const params = useSearchParams(filters);
	return (
		<Box sx={{ margin: "0 auto" }}>
			<Stack spacing={3} sx={{ position: "sticky", top: "30px", textAlign: "center" }}>
				<Typography
					component="legend"
					sx={{ textAlign: "left", margin: "0 0 7px 25px", color: "grey" }}
				>
					Ціна
				</Typography>
				<RangePrice /> {/* price range */}
				<Selection
					value={filters.brand}
					setCurrentValue={(value) => setCurrentValue("brand", value)}
					nameLabel="Бренд"
					arrayProps={Array.from(new Set(products?.map((card) => card.brand)))}
				/>
				<Selection
					value={filters.processor}
					nameLabel="Процесор"
					arrayProps={Array.from(new Set(products?.map((card) => card.processor)))}
					setCurrentValue={(value) => setCurrentValue("processor", value)}
				/>
				<Selection
					value={filters.diagonal}
					nameLabel="Діагональ"
					arrayProps={Array.from(new Set(products?.map((card) => card.diagonal)))}
					setCurrentValue={(value) => setCurrentValue("diagonal", value)}
				/>
				<Selection
					value={filters.iternalStorage}
					nameLabel="Внутрішня память"
					arrayProps={Array.from(new Set(products?.map((card) => card.iternalStorage)))}
					setCurrentValue={(value) => setCurrentValue("iternalStorage", value)}
				/>
				<Selection
					value={filters.RAM}
					nameLabel="RAM"
					arrayProps={Array.from(new Set(products?.map((card) => card.RAM)))}
					setCurrentValue={(value) => setCurrentValue("RAM", value)}
				/>
				<Selection
					value={filters.waterResistant}
					nameLabel="Захист від вологи"
					arrayProps={Array.from(new Set(products?.map((card) => card.waterResistant)))}
					setCurrentValue={(value) => setCurrentValue("waterResistant", value)}
				/>
				<input
					type="text"
					onInput={(event) => {
						setCurrentValue("sort", event.target.value);
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
						axios
							.get(`${DOMAIN}/products/filter?${params}`)
							.then((resp) => setFilteredData(resp.data.products));
					}}
				>
					Пошук
				</Button>
				<Link to="/products" className="link">
					<Button
						onClick={clearFiltersHandler}
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

// <Link to={`/products/filter?${params.toString()}`} className="link">
// 	<Button
// 		variant="contained"
// 		color="secondary"
// 		sx={{
// 			width: "245px",
// 			height: "46px",
// 		}}
// 	>
// 		Пошук
// 	</Button>
// </Link>;
