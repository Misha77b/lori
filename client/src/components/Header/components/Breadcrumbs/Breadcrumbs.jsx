import React from "react";
import { Breadcrumbs, Link, Box, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import useBreadcrumbs from "./hook";

const Breadcrumb = () => {
	const routes = useBreadcrumbs();
	console.log(routes);

	const links = routes.map((route, index) => (
		<Typography key={index} color="inherit">
			{route.name}
		</Typography>
	));
	return (
		<Breadcrumbs mb={2} aria-label="breadcrumb">
			<Link
				underline="hover"
				sx={{ display: "flex", alignItems: "center" }}
				color="inherit"
				href="/"
			>
				<HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
			</Link>
			{links}
		</Breadcrumbs>
	);
};

export default Breadcrumb;
