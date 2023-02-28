import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectSearch } from "../../../../store/selectors";
import ProductCard from "../../../../components/ProductCard";

const SearchRender = () => {
	const SearchWrapper = styled.div`
		display: grid;
		gap: 60px;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	`;
	const search = useSelector(selectSearch);
	return (
		<SearchWrapper>
			{search.length &&
				search.map((card, index) => <ProductCard priceColor="#57646E" key={index} card={card} />)}
		</SearchWrapper>
	);
};

export default SearchRender;
