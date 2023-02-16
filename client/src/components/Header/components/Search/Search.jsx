import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, TextField } from "@mui/material";

const Search = () => {
	return (
		<Box
			component="form"
			sx={{
				"& .MuiTextField-root": {
					width: { sm: "280px", md: "442px" },
					display: { xs: "none", sm: "inline-flex" },
				},
				"& .MuiInput-root": {
					borderRadius: " 3px 0 0 3px ",
				},
			}}
			noValidate
			autoComplete="off"
		>
			<TextField
				sx={{
					"& .MuiInputBase-root": {
						backgroundColor: { sm: "#ffffff", md: "transparent" },
						borderRadius: " 3px 0 0 3px ",
					},
				}}
				type="search"
				color="secondary"
				id="outlined-search"
				label="Пошук..."
				variant="outlined"
			/>
			<Button
				sx={{
					display: { xs: "none", sm: "inline-flex" },
					backgroundColor: "#A0A9AF",
					borderRadius: "0 3px 3px 0",
				}}
			>
				<SearchIcon color="grey" sx={{ fontSize: "44px" }} />
			</Button>
		</Box>
	);
};

export default Search;
