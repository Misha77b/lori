import React from "react";

import { Container, Box, Typography, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

import "./NotFoundPage.scss";

const NotFoundPage = () => {
	return (
		<Container>
			<Grid
				container
				direction="row"
				justifyContent="center"
				alignItems="center"
				spacing={{ xs: 2, lg: 5 }}
			>
				<Grid item xs={12} sm={6} md={6} order={{ xs: 2, sm: 1 }}>
					<Box className="NFP-box text-container">
						<Typography
							className="NFP-text"
							variant="string"
							sx={{
								fontSize: "100px",
								"@media (max-width: 768px)": {
									fontSize: "70px",
								},
							}}
						>
							404
						</Typography>

						<Typography
							className="not-found"
							variant="string"
							sx={{
								display: "block",
								fontSize: "37px",
								"@media (max-width: 768px)": {
									fontSize: "28px",
								},
							}}
						>
							Ooops, page not found
						</Typography>

						<Typography
							className="page-do-not-exist"
							variant="string"
							sx={{
								display: "block",
							}}
						>
							Sorry, but the requested page does not exist
						</Typography>

						<Button
							variant="contained"
							className="route-btn"
							color="secondary"
							component={Link}
							to="/"
							sx={{ margin: "20px 0" }}
						>
							Повернутися на головну
						</Button>
					</Box>
				</Grid>

				<Grid item xs={12} sm={6} md={6} order={{ xs: 1, sm: 2 }}>
					<Box className="NFP-box img-container">
						<img
							className="NFP-logo-img"
							src="https://res.cloudinary.com/dsx708og4/image/upload/v1676297440/Lori_project/logo_b1xcve.png"
						/>
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
};

export default NotFoundPage;
