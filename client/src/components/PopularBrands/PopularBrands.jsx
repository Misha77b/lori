import React, { useEffect } from "react";
import { Container, Paper, Box, Typography, Button, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { red } from "@mui/material/colors";
import Grid from "@mui/material/Unstable_Grid2";
import CategoryTitle from "../CategoryTitle";
import "./PopularBrands.scss";

const paragraph = {
	margin: "0",
	fontSize: "16px",
	position: "relative",
	"z-index": 1,
};
const heading = {
	margin: "0",
	fontSize: "30px",
	position: "relative",
	"z-index": 1,
	color: "#fff",
};
const button = {
	width: "134px",
	height: "38px",
	"&:hover": {
		color: "#FFFF",
		backgroundColor: "#007042",
	},
};

const PopularBrands = ({ products }) => {
	const brands = new Map();
	products?.forEach(({ brand, name }) => {
		if (!brands.has(brand)) {
			brands.set(brand, []);
		}
		brands.get(brand).push(name);
	});

	const brandsBlock = [];

	brands.forEach((phones, name) => {
		const params = new URLSearchParams();
		params.append("brand", name);
		brandsBlock.push(
			<>
				<Grid item xs={12} sm={12} md={6}>
					<div className={`popular popular--${name}`}>
						<div className="popular--overlay">
							<div className="popular--text">
								<Stack spacing={4}>
									<Stack spacing={1}>
										<Typography
											variant="h4"
											fontWeight="fontWeightBold"
											sx={heading}
											className="typography"
											gutterBottom
										>
											{name}
										</Typography>
										<Typography
											variant="h5"
											fontWeight="fontWeightMedium"
											sx={paragraph}
											className="typography--p"
										>
											{phones.slice(0, 2).join(", ")}
										</Typography>
									</Stack>

									<Link to={`/products/filter?${params.toString()}`} className="link">
										<Button color="primary" variant="contained" sx={button}>
											Детальніше
										</Button>
									</Link>
								</Stack>
							</div>
						</div>
					</div>
				</Grid>
			</>,
		);
	});
	return (
		<Container>
			<Box sx={{ flexGrow: 1 }}>
				<CategoryTitle text="Популярні бренди" />
				<Grid
					className="popular-block"
					container
					rowSpacing={{ xs: 1, sm: 1, md: 3 }}
					columnSpacing={{ xs: 3, sm: 3, md: 1, lg: 4 }}
				>
					{brandsBlock}
				</Grid>
			</Box>
		</Container>
	);
};

export default PopularBrands;

// {/*<Typography*/}
// {/*	variant="h4"*/}
// {/*	fontWeight="fontWeightBold"*/}
// {/*	fontFamily="Montserrat, sans-serif"*/}
// {/*	sx={{*/}
// {/*		"font-size": "30px",*/}
// {/*		color: "#2E3438",*/}
// {/*		margin: "77px 0 32px 0",*/}
// {/*	}}*/}
// {/*>*/}
// {/*	Популярні бренди*/}
// {/*</Typography>*/}
