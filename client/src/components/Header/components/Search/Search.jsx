import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, TextField } from "@mui/material";

const Search = () => {
	return (
		<Box
			component="form"
			sx={{
				"& .MuiTextField-root": {
					width: { xs: "205px", sm: "285px", md: "440px" },
				},
			}}
			noValidate
			autoComplete="off"
		>
			<TextField
				sx={{
					"& .MuiInputBase-root": {
						backgroundColor: { xs: "#ffffff", md: "transparent" },
						borderRadius: " 4px 0 0 4px ",
						"&:hover": { border: "#007042" },
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
					height: "56px",
					backgroundColor: "#A0A9AF",
					borderRadius: "0 4px 4px 0",
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
