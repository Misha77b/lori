import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectSearchQuery } from "../../../../store/selectors";
import {
	actionSetSearchQuery,
	fetchSearchProducts,
	clearInput,
} from "../../../../store/reducers/searchSlice";
import useSearchParams from "../../../../pages/ProductsCatalogue/hooks/useLocationParams";

const Search = () => {
	const dispatch = useDispatch();
	const searchQuery = useSelector(selectSearchQuery);
	const params = useSearchParams({ query: searchQuery });

	const searchPhrases = {
		query: searchQuery,
	};

	const handlerChange = (e) => {
		dispatch(actionSetSearchQuery(e.target.value));
	};

	const handlerSubmit = () => {
		dispatch(fetchSearchProducts(searchPhrases));
		dispatch(clearInput());
	};

	// const handleClearInput = () => {
	// 	dispatch(clearInput());
	// };

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
				onChange={handlerChange}
				type="search"
				color="secondary"
				id="outlined-search"
				label="Пошук..."
				variant="outlined"
			/>
			<Link to={`products?${params}`}>
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
			</Link>
		</Box>
	);
};

export default Search;
