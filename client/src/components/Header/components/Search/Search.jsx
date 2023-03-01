import React, { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { fetchSearchProducts } from "../../../../store/reducers/searchSlice";
import useLocationParams from "../../../../pages/ProductsCatalogue/hooks/useLocationParams";

const Search = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [input, setInput] = useState("");
	const [searchParams, setSearchParams] = useSearchParams();
	const { params } = useLocationParams({ query: input });

	return (
		<Box
			onSubmit={(e) => e.preventDefault()}
			component="form"
			sx={{
				"& .MuiTextField-root": {
					width: { xs: "280px", sm: "300px", md: "440px" },
				},
				position: "relative",
			}}
			noValidate
			autoComplete="off"
		>
			<TextField
				sx={{
					"& .MuiInputBase-root": {
						backgroundColor: { xs: "#ffffff", md: "transparent" },
						outline: "none",
						"&:hover": { border: "#007042" },
					},
					"& .MuiInputBase-input": {
						p: "16px 75px 16px 14px",
						border: "5px",
					},
				}}
				onChange={(e) => {
					setInput(e.target.value);
				}}
				type="search"
				color="secondary"
				id="outlined-search"
				label="Пошук..."
				variant="outlined"
			/>
			<Button
				onClick={() => {
					if (input.length <= 2) return;
					setSearchParams((prev) => {
						prev.set("query", input);
						return prev;
					});
					dispatch(
						fetchSearchProducts({
							query: searchParams.get("query"),
						}),
					);

					navigate(`/products?${params}`);
				}}
				sx={{
					position: "absolute",
					top: "2px",
					right: "2px",
					height: "51px",
					backgroundColor: "#A0A9AF",
					borderRadius: "0 2px 2px 0",
					"&:hover": { backgroundColor: "#007042" },
				}}
			>
				<SearchIcon
					color="grey"
					sx={{
						fontSize: "44px",
						color: "#ffffff",
					}}
				/>
			</Button>
		</Box>
	);
};

export default Search;
