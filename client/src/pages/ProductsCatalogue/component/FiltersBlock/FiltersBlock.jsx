import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DOMAIN } from "../../../../config/API";
import Selection from "../Select";
import RangePrice from "../RangePrice";
import "./FiltersBlock.scss";
import useSearchParams from "../../hooks";

const FiltersBlock = () => {
	const [products, setProducts] = useState([]);
	const [filters, setFilters] = useState({});

	async function fetchAllProducts(abort) {
		fetch(`${DOMAIN}/products`, { signal: abort.signal })
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setProducts(data);
			})
			.catch((error) => {
				if (error.code !== 20) console.error(error);
			});
	}
	// кожен раз додається в obj нове поле для пошуку
	const setCurrentValue = (field, CurrentValue) => {
		setFilters((curFilters) => {
			return { ...curFilters, [field]: CurrentValue };
		});
	};
	// {brand: 'Huawei'} {brand: 'Huawei', processor: 'HiSilicon Kirin 710'}...
	// {brand: 'Huawei', processor: 'HiSilicon Kirin 710', diagonal: 6.5, iternalStorage: 256}
	useEffect(() => {
		const abort = new AbortController();
		fetchAllProducts(abort);
		return () => {
			abort.abort();
		};
	}, []);
	//
	const useE = () => {
		setFilters({});
	};
	const params = useSearchParams(filters);
	// const arrayBrand = new Set(products?.map((card) => card.brand));
	// const arrayProc = new Set(products?.map((card) => card.processor));
	// const arrayStorage = new Set(products?.map((card) => card.iternalStorage));
	// const arrayRAM = new Set(products?.map((card) => card.RAM));
	// const arrayWaterResistant = new Set(products?.map((card) => card.waterResistant));
	// const arrayDiagonal = new Set(products?.map((card) => card.diagonal));
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
				<Link to={`/products/filter?${params.toString()}`} className="link">
					<Button
						variant="contained"
						color="secondary"
						sx={{
							width: "245px",
							height: "46px",
						}}
					>
						Пошук
					</Button>
				</Link>
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
