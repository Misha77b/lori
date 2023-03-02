import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function useBreadcrumbs() {
	const [routes, setRoutes] = useState([]);
	const location = useLocation();

	useEffect(() => {
		const { pathname } = location;
		const paths = pathname.split("/").filter((path) => path !== "");

		const breadcrumbs = paths.map((path, index) => {
			const isLast = index === paths.length - 1;
			const name = isLast ? path : `${path} /`;

			return {
				name,
				path: `/${paths.slice(0, index + 1).join("/")}`,
			};
		});

		setRoutes(breadcrumbs);
	}, [location]);

	return routes;
}

export default useBreadcrumbs;
