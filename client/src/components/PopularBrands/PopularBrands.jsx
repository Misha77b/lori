import React from "react";
import { Container, Paper, Box, Typography, Button, Stack } from "@mui/material";
import { red } from "@mui/material/colors";
import Grid from "@mui/material/Unstable_Grid2";
import CategoryTitle from "../CategoryTitle";
import "./PopularBrands.scss";

const paragraph = {
	margin: "0",
	"font-size": "16px",
	position: "relative",
	"z-index": 1,
};
const heading = {
	margin: "0",
	"font-size": "30px",
	position: "relative",
	"z-index": 1,
	color: "#fff",
};
const button = {
	width: "134px",
	height: "38px",
	"&:hover": {
		color: "#FFFF",
		"background-color": "#007042",
	},
};
const PopularBrands = () => {
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
					<Grid item xs={12} sm={12} md={6}>
						<div className="popular popular--samsung">
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
												Samsung
											</Typography>
											<Typography
												variant="h5"
												fontWeight="fontWeightMedium"
												sx={paragraph}
												className="typography--p"
											>
												Samsung Galaxy S22 Ultra; Samsung Galaxy M52
											</Typography>
										</Stack>

										<Button color="primary" variant="contained" sx={button}>
											Детальніше
										</Button>
									</Stack>
								</div>
							</div>
						</div>
					</Grid>
					<Grid item xs={12} sm={12} md={6}>
						<div className="popular popular--mi">
							<div className="popular--overlay">
								<div className="popular--text">
									<Stack spacing={4}>
										<Stack spacing={1}>
											<Typography
												variant="h4"
												sx={heading}
												fontWeight="fontWeightBold"
												className="typography"
												gutterBottom
											>
												Xiomi
											</Typography>
											<Typography
												variant="h5"
												fontWeight="fontWeightMedium"
												sx={paragraph}
												className="typography--p"
											>
												Смартфон Xiaomi Mi 11i 8/256GB Cosmic Black...
											</Typography>
										</Stack>
										<Button color="primary" variant="contained" sx={button}>
											Детальніше
										</Button>
									</Stack>
								</div>
							</div>
						</div>
					</Grid>
					<Grid item xs={12} sm={12} md={6}>
						<div className="popular popular--apple">
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
												Apple
											</Typography>
											<Typography
												variant="h5"
												fontWeight="fontWeightMedium"
												sx={paragraph}
												className="typography--p"
											>
												iPhone 13; iPhone 14; iPhone 14 Plus, iPhone 14 Pro, iPhone 14 Max...
											</Typography>
										</Stack>
										<Button color="primary" variant="contained" sx={button}>
											Детальніше
										</Button>
									</Stack>
								</div>
							</div>
						</div>
					</Grid>
					<Grid item xs={12} sm={12} md={6}>
						<div className="popular popular--huawei">
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
												Huawei
											</Typography>
											<Typography
												variant="h5"
												fontWeight="fontWeightMedium"
												sx={paragraph}
												className="typography--p"
											>
												Huawei Honor 80 SE; Huawei Honor 80 Pro; Huawei Honor 80...
											</Typography>
										</Stack>
										<Button color="primary" variant="contained" sx={button}>
											Детальніше
										</Button>
									</Stack>
								</div>
							</div>
						</div>
					</Grid>
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
