import React from "react";
import { Container, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import CategoryTitle from "../CategoryTitle";
import GridItem from "./components/GridItem";
import "./PopularBrands.scss";

const PopularBrands = ({ products }) => {
	return (
		<Container>
			<Box sx={{ flexGrow: 1 }}>
				<CategoryTitle text="Популярні бренди" />
				<Grid
					key="7687kiku8i"
					className="popular-block"
					container
					rowSpacing={{ xs: 1, sm: 1, md: 3 }}
					columnSpacing={{ xs: 3, sm: 3, md: 1, lg: 4 }}
				>
					<GridItem products={products} />
				</Grid>
			</Box>
		</Container>
	);
};

export default PopularBrands;
