import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import { Box, Grid, IconButton, TextField } from "@mui/material";

const Search = () => {
	const CustomizedMenu = styled(TextField)`
		& .MuiTextField-root {
			max-width: 442px;
		}
	`;

	return (
		<Grid>
			<Box component="form" noValidate autoComplete="off">
				<CustomizedMenu color="secondary" id="outlined-basic" label="Пошук..." variant="outlined" />
				<IconButton>
					<SearchIcon color="grey" fontSize="large" />
				</IconButton>
			</Box>
		</Grid>
	);
};

export default Search;
