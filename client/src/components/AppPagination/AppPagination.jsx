import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Pagination } from "@mui/material";

const pageSize = 5;
const AppPagination = ({ products, setProducts }) => {
	const [pagination, setPagination] = useState({ count: 0, from: 0, to: pageSize });

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const getData = ({ from, to }) => {
		const count = products.length;
		const data = products.slice(from, to);
		return { data, count };
	};

	useEffect(() => {
		if (!products.length) return;
		const response = getData({ from: pagination.from, to: pagination.to });
		setPagination((prevState) => ({ ...prevState, count: response.count }));
		setProducts(response.data);
	}, [pagination.from, pagination.to, products]);
	// [getData, pagination.from, pagination.to, products, setProducts]
	const handlePageChange = (event, page) => {
		const from = (page - 1) * pageSize;
		const to = (page - 1) * pageSize + pageSize;
		setPagination((prevState) => ({ ...prevState, from, to }));
	};
	return (
		<PaginationWrapper>
			<Pagination
				count={Math.ceil(pagination.count / pageSize)}
				variant="outlined"
				shape="rounded"
				color="secondary"
				onChange={handlePageChange}
			/>
		</PaginationWrapper>
	);
};
const PaginationWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 50px 0 50px 0;
`;

export default AppPagination;
