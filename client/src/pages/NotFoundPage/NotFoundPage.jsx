import React from "react";
import { Container, Box, Typography, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

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
				<Grid item>
					<Typography>
						<Typography
							variant="string"
							sx={{
								display: "block",
								fontSize: "100px",
								"@media (max-width: 768px)": {
									fontSize: "70px",
								},
							}}
						>
							404
						</Typography>

						<Typography
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
							variant="string"
							sx={{
								display: "block",
							}}
						>
							Sorry, but the requested page does not exist
						</Typography>
					</Typography>

					<Box
						color="secondary"
						sx={{
							gap: "20px",
							"@media (max-width: 768px)": {
								"& :nth-of-type(n)": {
									fontSize: "12px",
								},
							},
						}}
					>
						<Button color="secondary" component={Link} to="/">
							main
						</Button>
						<Button color="secondary" component={Link} to="/products">
							products
						</Button>
					</Box>
				</Grid>
				<Grid item>
					<Box>
						<img
							style={{ maxHeight: "inherit" }}
							src="https://res.cloudinary.com/dsx708og4/image/upload/v1676297440/Lori_project/logo_b1xcve.png"
						/>
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
};

export default NotFoundPage;
