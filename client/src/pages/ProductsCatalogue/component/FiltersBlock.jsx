import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { DOMAIN } from "../../../config/API";
import Selection from "./Select";
import "./FiltersBlock.scss";

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
				console.log("data", data);
			})
			.catch((error) => {
				if (error.code !== 20) console.error(error);
			});
	}
	// кожен раз додається нове поле для пошуку
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
	useEffect(() => {
		console.log(filters);
	}, [filters]);
	//
	const arrayBrand = new Set(products?.map((card) => card.brand));
	const arrayProc = new Set(products?.map((card) => card.processor));
	const arrayStorage = new Set(products?.map((card) => card.iternalStorage));
	const arrayRAM = new Set(products?.map((card) => card.RAM));
	const arrayWaterResistant = new Set(products?.map((card) => card.waterResistant));
	const arrayDiagonal = new Set(products?.map((card) => card.diagonal));

	return (
		<Box>
			<Stack spacing={2}>
				<Typography component="legend">Пошук...</Typography>
				<Selection
					setCurrentValue={(value) => setCurrentValue("brand", value)}
					nameLabel="Бренд"
					arrayProps={Array.from(arrayBrand)}
				/>
				<Selection
					nameLabel="Процесор"
					arrayProps={Array.from(arrayProc)}
					setCurrentValue={(value) => setCurrentValue("processor", value)}
				/>
				<Selection
					nameLabel="Діагональ"
					arrayProps={Array.from(arrayDiagonal)}
					setCurrentValue={(value) => setCurrentValue("diagonal", value)}
				/>
				<Selection
					nameLabel="Внутрішня память"
					arrayProps={Array.from(arrayStorage)}
					setCurrentValue={(value) => setCurrentValue("iternalStorage", value)}
				/>
				<Selection
					nameLabel="RAM"
					arrayProps={Array.from(arrayRAM)}
					setCurrentValue={(value) => setCurrentValue("RAM", value)}
				/>
				<Selection
					nameLabel="Захист від вологи"
					arrayProps={Array.from(arrayWaterResistant)}
					setCurrentValue={(value) => setCurrentValue("waterResistant", value)}
				/>
			</Stack>
		</Box>
	);
};
export default FiltersBlock;
