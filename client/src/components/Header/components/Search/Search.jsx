import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectSearch, selectSearchQuery } from "../../../../store/selectors";
import { actionSetSearchQuery, fetchSearchProducts } from "../../../../store/reducers/searchSlice";

const Search = () => {
	const dispatch = useDispatch();
	const searchQuery = useSelector(selectSearchQuery);
	// const search = useSelector(selectSearch);
	// console.log(search);

	const searchPhrases = {
		query: searchQuery,
	};
	// console.log(searchPhrases);

	const handlerChange = (e) => {
		dispatch(actionSetSearchQuery(e.target.value));
	};

	const handlerSubmit = (e) => {
		dispatch(fetchSearchProducts(searchPhrases));
	};

	return (
		<Box
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
				onChange={handlerChange}
				type="search"
				color="secondary"
				id="outlined-search"
				label="Пошук..."
				variant="outlined"
			/>
			<Button
				onClick={handlerSubmit}
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
