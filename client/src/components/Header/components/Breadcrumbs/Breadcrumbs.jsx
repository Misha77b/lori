import React from "react";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { Breadcrumbs, Link } from "@mui/material";
import { data } from "./helper/helperBreadcrump";

const Breadcrumb = () => {
	const breadcrumbs = useBreadcrumbs(data);
	console.log(breadcrumbs);

	const links = breadcrumbs.map(({ breadcrumb, match }, index) => (
		<span key={match.pathname}>
			<Link underline="hover" color="grey.main" key={match.pathname} to={match.pathname}>
				{breadcrumb}
			</Link>
			{index < breadcrumbs.length - 1}
		</span>
	));
	return (
		<Breadcrumbs mb={2} aria-label="breadcrumb">
			{links}
		</Breadcrumbs>
	);
};

export default Breadcrumb;
