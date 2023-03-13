import styled from "styled-components";

export const CatalogueWrapper = styled.div`
	display: grid;
	gap: 60px;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;
export const FiltersPhonesStyledWrapper = styled.div`
	display: grid;
	gap: 10px;
	grid-template-columns: ${(props) => (props.isMobileSize ? "auto" : "300px auto")};
`;
